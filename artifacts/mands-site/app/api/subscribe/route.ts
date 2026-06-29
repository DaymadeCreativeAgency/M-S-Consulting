import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, firstName, fields, tagIds } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const KIT_API_KEY = process.env.KIT_API_KEY;
  const KIT_FORM_ID = process.env.KIT_FORM_ID;

  if (!KIT_API_KEY || !KIT_FORM_ID) {
    return NextResponse.json({ error: "Newsletter not configured" }, { status: 503 });
  }

  // 1. Add subscriber to the main form
  const res = await fetch(`https://api.kit.com/v4/forms/${KIT_FORM_ID}/subscribers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Kit-Api-Key": KIT_API_KEY,
    },
    body: JSON.stringify({
      email_address: email,
      first_name: firstName ?? "",
      ...(fields && typeof fields === "object" ? { fields } : {}),
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
  }

  // 2. Apply page-specific tags if provided
  if (Array.isArray(tagIds) && tagIds.length > 0) {
    await Promise.all(
      tagIds.map((tagId: number) =>
        fetch(`https://api.kit.com/v4/tags/${tagId}/subscribers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Kit-Api-Key": KIT_API_KEY,
          },
          body: JSON.stringify({ email_address: email }),
        }).catch(() => {}) // non-fatal — subscriber is already created
      )
    );
  }

  return NextResponse.json({ success: true });
}

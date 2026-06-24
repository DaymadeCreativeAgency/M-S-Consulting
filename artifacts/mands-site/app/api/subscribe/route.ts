import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, firstName, fields } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const KIT_API_KEY = process.env.KIT_API_KEY;
  const KIT_FORM_ID = process.env.KIT_FORM_ID;

  if (!KIT_API_KEY || !KIT_FORM_ID) {
    return NextResponse.json({ error: "Newsletter not configured" }, { status: 503 });
  }

  const res = await fetch(`https://api.kit.com/v4/forms/${KIT_FORM_ID}/subscribers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Kit-Api-Key": KIT_API_KEY,
    },
    body: JSON.stringify({
      email_address: email,
      first_name: firstName ?? "",
      // Optional custom fields (e.g. AI readiness score/tier). Ignored by Kit
      // if the matching custom fields don't exist on the account.
      ...(fields && typeof fields === "object" ? { fields } : {}),
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Subscription failed" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

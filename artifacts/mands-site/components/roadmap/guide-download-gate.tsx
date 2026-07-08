"use client";

import { useRef, useState } from "react";
import { CheckCircle2, Download, Loader2, Lock } from "lucide-react";
import { PDF_PATH } from "@/lib/ai-roadmap";

type Status = "idle" | "submitting" | "unlocked" | "error";

/**
 * Inline email gate for the full AI Roadmap guide (PDF). The high-level
 * overview is free; the complete guide is the value, so it sits behind a
 * low-friction email capture. On submit we subscribe to Kit and notify the
 * sales inbox (Formspree), then reveal the download, mirroring how the
 * assessment results are gated.
 */
export function GuideDownloadGate() {
  const [status, setStatus] = useState<Status>("idle");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const downloadRef = useRef<HTMLAnchorElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");

    try {
      const subscribePromise = fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName,
          fields: { lead_source: "AI Roadmap, full guide download" },
        }),
      }).catch(() => {});

      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_URL;
      const notify = endpoint
        ? fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              name: firstName,
              email,
              _subject: "AI Roadmap, full guide download",
              message: `Requested the full AI Roadmap guide (PDF).\nEmail: ${email}`,
            }),
          }).catch(() => {})
        : Promise.resolve();

      await Promise.all([subscribePromise, notify]);
      setStatus("unlocked");
      // Kick off the download once revealed.
      requestAnimationFrame(() => downloadRef.current?.click());
    } catch {
      setStatus("error");
    }
  }

  const unlocked = status === "unlocked";

  return (
    <div
      className="relative overflow-hidden rounded-3xl p-8 sm:p-12"
      style={{
        background: "linear-gradient(155deg, #0F1424 0%, #1A1230 60%, #2C1A4A 100%)",
        border: "1px solid rgba(184,164,232,0.22)",
        boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #F4A8C0, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 left-1/4 h-56 w-56 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #8FB8F0, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-xl text-center">
        {!unlocked ? (
          <>
            <span
              className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{ background: "rgba(184,164,232,0.14)", border: "1px solid rgba(184,164,232,0.3)" }}
            >
              <Lock size={20} color="#C9BAF0" strokeWidth={1.9} />
            </span>
            <h3 className="font-serif font-medium text-white" style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)", lineHeight: 1.15 }}>
              Get the complete guide
            </h3>
            <p className="mx-auto mt-4 max-w-md font-sans" style={{ fontSize: "1rem", lineHeight: 1.65, color: "rgba(233,226,245,0.74)" }}>
              The full AI Roadmap, all eight steps with the focus areas, real examples, and the pitfalls
              we&rsquo;ve learned in the field. Enter your email and we&rsquo;ll send you the PDF.
            </p>

            <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name (optional)"
                autoComplete="given-name"
                className="w-full rounded-xl px-4 py-3 font-sans text-white placeholder:text-white/40 focus:outline-none focus:ring-2"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(184,164,232,0.22)", fontSize: "0.95rem" }}
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                autoComplete="email"
                className="w-full rounded-xl px-4 py-3 font-sans text-white placeholder:text-white/40 focus:outline-none focus:ring-2"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(184,164,232,0.22)", fontSize: "0.95rem" }}
              />
              <button
                type="submit"
                disabled={status === "submitting"}
                className="font-sans inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-transform duration-200 hover:scale-[1.02] disabled:opacity-70"
                style={{ background: "linear-gradient(90deg, #8FB8F0, #B8A4E8 55%, #F4A8C0)", color: "#0A0E1A", fontSize: "0.92rem" }}
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending the guide…
                  </>
                ) : (
                  <>
                    <Download size={16} /> Email me the guide
                  </>
                )}
              </button>
              {status === "error" && (
                <p className="font-sans" style={{ fontSize: "0.82rem", color: "#F4A8C0" }}>
                  Something went wrong. Please try again.
                </p>
              )}
              <p className="font-sans" style={{ fontSize: "0.78rem", color: "rgba(233,226,245,0.5)" }}>
                No spam. Just the guide and the occasional useful insight.
              </p>
            </form>
          </>
        ) : (
          <>
            <span
              className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{ background: "rgba(143,184,240,0.16)", border: "1px solid rgba(143,184,240,0.32)" }}
            >
              <CheckCircle2 size={22} color="#8FB8F0" strokeWidth={1.9} />
            </span>
            <h3 className="font-serif font-medium text-white" style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)", lineHeight: 1.15 }}>
              Your guide is ready
            </h3>
            <p className="mx-auto mt-4 max-w-md font-sans" style={{ fontSize: "1rem", lineHeight: 1.65, color: "rgba(233,226,245,0.74)" }}>
              The download should start automatically. We&rsquo;ve also sent a copy to your inbox.
            </p>
            <a
              ref={downloadRef}
              href={PDF_PATH}
              download
              className="font-sans mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-transform duration-200 hover:scale-[1.02]"
              style={{ background: "linear-gradient(90deg, #8FB8F0, #B8A4E8 55%, #F4A8C0)", color: "#0A0E1A", fontSize: "0.92rem" }}
            >
              <Download size={16} /> Download the guide (PDF)
            </a>
          </>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, MessageSquare } from "lucide-react";
import { GlassIcon } from "./glass";

type Status = "idle" | "submitting" | "sent" | "error";

const fieldStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(184,164,232,0.25)",
  fontSize: "0.92rem",
} as const;

/**
 * Roadmap-specific contact section. Mirrors the global contact form's behavior
 * (Formspree lead + optional Kit subscribe) but wears the dark, iridescent
 * AI-Roadmap design so the page closes in the same premium register it opens in.
 */
export function RoadmapContact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "", subscribe: false });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_URL;
      if (!endpoint) throw new Error("Form endpoint not configured");

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });

      if (!res.ok) throw new Error("Submission failed");

      if (form.subscribe) {
        await fetch("/api/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: form.email, firstName: form.name.split(" ")[0] }),
        }).catch(() => {});
      }

      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "font-sans w-full rounded-xl px-4 py-3 text-white outline-none transition-colors duration-200 placeholder:text-[rgba(233,226,245,0.4)]";

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#070A14" }} aria-label="Contact M&S Consulting">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          background:
            "radial-gradient(55% 45% at 15% 100%, rgba(143,184,240,0.16), transparent 60%), radial-gradient(55% 45% at 85% 0%, rgba(244,168,192,0.14), transparent 60%)",
        }}
      />

      <div className="ms-container relative py-20 lg:py-28">
        <div
          className="relative overflow-hidden rounded-[2rem]"
          style={{
            background: "linear-gradient(155deg, #0F1424 0%, #1A1230 60%, #2C1A4A 100%)",
            border: "1px solid rgba(184,164,232,0.2)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
          }}
        >
          {/* iridescent blooms */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, #F4A8C0, transparent 70%)" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, #8FD3E8, transparent 70%)" }}
          />

          <div className="relative grid grid-cols-1 gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            {/* ── Left: invitation ── */}
            <div className="px-8 py-12 sm:px-12 lg:py-16">
              <GlassIcon icon={MessageSquare} size={56} className="mb-6" />
              <h2 className="font-serif font-medium text-white" style={{ fontSize: "clamp(1.75rem, 2.9vw, 2.5rem)", lineHeight: 1.16 }}>
                Collaboration starts with conversation.{" "}
                <em style={{ fontStyle: "italic", color: "#C9BAF0" }}>Let&rsquo;s talk.</em>
              </h2>
              <p className="mt-5 font-sans" style={{ fontSize: "1.02rem", lineHeight: 1.7, color: "rgba(233,226,245,0.78)" }}>
                Wherever you landed on the roadmap, the next step is a conversation. Tell us where you want AI
                to take your business and we&rsquo;ll help you chart the path.
              </p>
              <p className="mt-4 font-sans" style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "rgba(233,226,245,0.62)" }}>
                Since 2002, M&amp;S Consulting has been a trusted technology implementation and management partner
                for commercial and public sector clients — specializing in digital strategy and transformation
                for critical business functions.
              </p>
            </div>

            {/* ── Right: form ── */}
            <div className="px-8 py-12 sm:px-12 lg:py-16" style={{ borderTop: "1px solid rgba(184,164,232,0.14)" }}>
              {status === "sent" ? (
                <div className="flex h-full flex-col items-start justify-center gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full"
                    style={{ background: "rgba(143,184,240,0.15)" }}
                  >
                    <CheckCircle2 size={20} style={{ color: "#8FB8F0" }} />
                  </div>
                  <p className="font-serif text-white" style={{ fontSize: "1.45rem", lineHeight: 1.3 }}>
                    Message received.
                  </p>
                  <p className="font-sans" style={{ fontSize: "1rem", color: "rgba(233,226,245,0.78)" }}>
                    We&rsquo;ll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="rm-name" className="font-sans uppercase" style={{ fontSize: "0.66rem", letterSpacing: "0.16em", color: "rgba(233,226,245,0.5)" }}>
                        Name <span style={{ color: "#F4A8C0" }}>*</span>
                      </label>
                      <input
                        id="rm-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputBase}
                        style={fieldStyle}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(244,168,192,0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(184,164,232,0.25)")}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="rm-email" className="font-sans uppercase" style={{ fontSize: "0.66rem", letterSpacing: "0.16em", color: "rgba(233,226,245,0.5)" }}>
                        Email <span style={{ color: "#F4A8C0" }}>*</span>
                      </label>
                      <input
                        id="rm-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputBase}
                        style={fieldStyle}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(244,168,192,0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(184,164,232,0.25)")}
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="rm-message" className="font-sans uppercase" style={{ fontSize: "0.66rem", letterSpacing: "0.16em", color: "rgba(233,226,245,0.5)" }}>
                      Message <span style={{ color: "#F4A8C0" }}>*</span>
                    </label>
                    <textarea
                      id="rm-message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputBase} resize-none`}
                      style={{ ...fieldStyle, lineHeight: 1.6 }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(244,168,192,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(184,164,232,0.25)")}
                      placeholder="Tell us about your project or question..."
                    />
                  </div>

                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={form.subscribe}
                      onChange={(e) => setForm({ ...form, subscribe: e.target.checked })}
                      className="h-4 w-4 rounded accent-[#F4A8C0]"
                    />
                    <span className="font-sans" style={{ fontSize: "0.88rem", color: "rgba(233,226,245,0.85)" }}>
                      Subscribe to our newsletter
                    </span>
                  </label>

                  {status === "error" && (
                    <p className="font-sans" style={{ fontSize: "0.82rem", color: "#F4A8C0" }}>
                      Something went wrong — please try again or email us at{" "}
                      <a href="mailto:info@mandsc.com" className="underline">info@mandsc.com</a>.
                    </p>
                  )}

                  <div className="mt-1 flex justify-end">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="font-sans inline-flex items-center gap-2 rounded-full px-7 py-3 font-semibold transition-all duration-200 hover:scale-[1.02] disabled:opacity-60"
                      style={{ background: "linear-gradient(90deg, #8FB8F0, #B8A4E8 55%, #F4A8C0)", color: "#0A0E1A", fontSize: "0.88rem" }}
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 size={15} className="animate-spin" /> Sending…
                        </>
                      ) : (
                        <>
                          Submit <ArrowRight size={15} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

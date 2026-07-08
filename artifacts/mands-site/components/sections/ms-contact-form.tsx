"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "sent" | "error";

export function MsContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "", subscribe: true });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_URL;
      if (!endpoint) throw new Error("Form endpoint not configured");

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
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

  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#001F65" }}>
      <div className="ms-container">
        <div
          className="overflow-hidden rounded-2xl"
          style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
            <div className="px-10 py-14 lg:px-14 lg:py-16">
              <h2
                className="font-serif mb-6 font-medium text-white"
                style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", lineHeight: 1.2 }}
              >
                Collaboration starts with conversation.{" "}
                <em style={{ fontStyle: "italic", color: "#5CA7F3" }}>Let&rsquo;s talk.</em>
              </h2>
              <p
                className="marketing-copy mb-4"
                style={{ color: "rgba(255,255,255,0.82)" }}
              >
                Let&rsquo;s explore how collaboration and innovation can transform your business for lasting success.
              </p>
              <p
                className="marketing-copy"
                style={{ color: "rgba(255,255,255,0.78)" }}
              >
                Since 2002, M&amp;S Consulting has been a trusted technology implementation and management partner for both
                commercial and public sector clients. We specialize in digital strategy and transformation for critical
                business functions.
              </p>
            </div>

            <div className="px-10 py-14 lg:px-14 lg:py-16" style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }}>
              {status === "sent" ? (
                <div className="flex h-full flex-col items-start justify-center gap-4">
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(92,167,243,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CheckCircle2 size={20} style={{ color: "#5CA7F3" }} />
                  </div>
                  <p className="font-serif text-white" style={{ fontSize: "1.35rem", lineHeight: 1.4 }}>
                    Message received.
                  </p>
                  <p className="marketing-note" style={{ color: "rgba(255,255,255,0.82)" }}>
                    We&rsquo;ll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="ms-name"
                        className="font-sans text-xs uppercase tracking-widest"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                      >
                        Name <span style={{ color: "#5CA7F3" }}>*</span>
                      </label>
                      <input
                        id="ms-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="font-sans bg-transparent text-white outline-none"
                        style={{
                          borderBottom: "1px solid rgba(255,255,255,0.2)",
                          paddingBottom: "8px",
                          fontSize: "0.9375rem",
                          transition: "border-color 0.2s ease",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(92,167,243,0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
                        placeholder="Your name"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="ms-email"
                        className="font-sans text-xs uppercase tracking-widest"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                      >
                        Email <span style={{ color: "#5CA7F3" }}>*</span>
                      </label>
                      <input
                        id="ms-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="font-sans bg-transparent text-white outline-none"
                        style={{
                          borderBottom: "1px solid rgba(255,255,255,0.2)",
                          paddingBottom: "8px",
                          fontSize: "0.9375rem",
                          transition: "border-color 0.2s ease",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(92,167,243,0.6)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="ms-message"
                      className="font-sans text-xs uppercase tracking-widest"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      Message <span style={{ color: "#5CA7F3" }}>*</span>
                    </label>
                    <textarea
                      id="ms-message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="font-sans resize-none bg-transparent text-white outline-none"
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.2)",
                        paddingBottom: "8px",
                        fontSize: "0.9375rem",
                        lineHeight: 1.6,
                        transition: "border-color 0.2s ease",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(92,167,243,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
                      placeholder="Tell us about your project or question..."
                    />
                  </div>

                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={form.subscribe}
                      onChange={(e) => setForm({ ...form, subscribe: e.target.checked })}
                      className="h-4 w-4 rounded accent-[#5CA7F3]"
                    />
                    <span className="font-sans text-sm" style={{ color: "rgba(255,255,255,0.9)" }}>
                      Keep me subscribed to the M&amp;S newsletter
                    </span>
                  </label>

                  {status === "error" && (
                    <p className="font-sans text-sm text-red-300">
                      Something went wrong, please try again or email us at{" "}
                      <a href="mailto:info@mandsc.com" className="underline">info@mandsc.com</a>.
                    </p>
                  )}

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="font-sans flex items-center gap-2 rounded-full px-6 py-2.5 font-semibold transition-all duration-200 disabled:opacity-60"
                      style={{
                        border: "1.5px solid rgba(255,255,255,0.5)",
                        color: "white",
                        background: "transparent",
                        fontSize: "0.875rem",
                        letterSpacing: "0.02em",
                      }}
                      onMouseEnter={(e) => {
                        if (status !== "submitting") {
                          e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                      }}
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Submit
                          <ArrowRight size={14} />
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

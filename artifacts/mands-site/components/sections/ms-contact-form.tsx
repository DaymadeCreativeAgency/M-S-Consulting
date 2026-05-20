"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function MsContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "", subscribe: false });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#001F65" }}
    >
      <div className="ms-container">
        <div
          className="rounded-2xl overflow-hidden"
          style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* Left — text */}
            <div className="px-10 py-14 lg:px-14 lg:py-16">
              <h2
                className="font-serif text-white font-medium mb-6"
                style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", lineHeight: 1.2 }}
              >
                Collaboration starts with
                conversation.{" "}
                <em style={{ fontStyle: "italic", color: "#5CA7F3" }}>
                  Let&rsquo;s talk.
                </em>
              </h2>
              <p
                className="font-sans mb-4"
                style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "rgba(255,255,255,0.65)" }}
              >
                Let&rsquo;s explore how collaboration and innovation can transform
                your business for lasting success.
              </p>
              <p
                className="font-sans"
                style={{ fontSize: "0.9375rem", lineHeight: 1.7, color: "rgba(255,255,255,0.55)" }}
              >
                Since 2002, M&amp;S Consulting has been a trusted technology
                implementation and management partner for both commercial and public
                sector clients. We specialize in digital strategy and transformation
                for critical business functions.
              </p>
            </div>

            {/* Divider */}
            <div
              className="hidden lg:block absolute"
              style={{
                left: "50%",
                top: "2rem",
                bottom: "2rem",
                width: "1px",
                backgroundColor: "rgba(255,255,255,0.08)",
              }}
            />

            {/* Right — form */}
            <div
              className="px-10 py-14 lg:px-14 lg:py-16"
              style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }}
            >
              {sent ? (
                <div className="flex flex-col items-start justify-center h-full gap-4">
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
                    <ArrowRight size={20} style={{ color: "#5CA7F3" }} />
                  </div>
                  <p className="font-serif text-white" style={{ fontSize: "1.35rem", lineHeight: 1.4 }}>
                    Message received.
                  </p>
                  <p className="font-sans" style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)" }}>
                    We&rsquo;ll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

                  {/* Message */}
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
                      className="font-sans bg-transparent text-white outline-none resize-none"
                      style={{
                        borderBottom: "1px solid rgba(255,255,255,0.2)",
                        paddingBottom: "8px",
                        fontSize: "0.9375rem",
                        lineHeight: 1.6,
                        transition: "border-color 0.2s ease",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(92,167,243,0.6)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.2)")}
                      placeholder="Tell us about your project or question…"
                    />
                  </div>

                  {/* Subscribe checkbox */}
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.subscribe}
                      onChange={(e) => setForm({ ...form, subscribe: e.target.checked })}
                      className="w-4 h-4 rounded accent-[#5CA7F3]"
                    />
                    <span
                      className="font-sans text-sm"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      Subscribe to our newsletter
                    </span>
                  </label>

                  {/* Submit */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="font-sans font-semibold flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-200"
                      style={{
                        border: "1.5px solid rgba(255,255,255,0.5)",
                        color: "white",
                        background: "transparent",
                        fontSize: "0.875rem",
                        letterSpacing: "0.02em",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.08)";
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.8)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.5)";
                      }}
                    >
                      Submit
                      <ArrowRight size={14} />
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

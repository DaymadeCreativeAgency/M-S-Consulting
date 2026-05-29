"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Facebook, Instagram, Linkedin, Mail, MapPin, Youtube } from "lucide-react";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/mandsconsulting", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/mandsconsulting/", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/MandSConsulting", icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com/@mandsconsulting", icon: Youtube },
];

export function MsContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    subscribe: false,
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: "#001F65" }}>
      <div className="ms-container">
        <div
          className="overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(0,0,0,0.28)]"
          style={{ backgroundColor: "#F7F9FC", border: "1px solid rgba(255,255,255,0.10)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* Left — text */}
            <div className="relative overflow-hidden px-8 py-12 lg:px-12 lg:py-14" style={{ backgroundColor: "#0A0E1A" }}>
              <div
                className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full blur-3xl"
                style={{ backgroundColor: "rgba(92,167,243,0.20)" }}
                aria-hidden="true"
              />
              <div className="relative">
                <p className="eyebrow mb-4 text-[#5CA7F3]">START A CONVERSATION</p>
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

                <div className="mt-10 grid gap-4">
                  {[
                    { icon: Mail, label: "Email", value: "info@mandsc.com" },
                    { icon: MapPin, label: "Headquarters", value: "Morgantown, West Virginia" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#5CA7F3]/15 text-[#5CA7F3]">
                        <Icon size={19} strokeWidth={1.8} />
                      </div>
                      <div>
                        <p className="font-sans text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/35">
                          {label}
                        </p>
                        <p className="mt-1 font-sans text-sm font-semibold text-white">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <p className="font-sans text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/35">
                    Find us online
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-white/70 transition-colors duration-200 hover:border-[#5CA7F3]/60 hover:bg-[#5CA7F3]/15 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5CA7F3]"
                      >
                        <Icon size={19} strokeWidth={1.9} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="px-6 py-8 sm:px-8 lg:px-12 lg:py-12">
              {sent ? (
                <div className="flex h-full min-h-[420px] flex-col items-start justify-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#001F65]/8 text-[#001F65]">
                    <CheckCircle2 size={26} strokeWidth={1.8} />
                  </div>
                  <p className="font-serif text-[#001F65]" style={{ fontSize: "1.6rem", lineHeight: 1.25 }}>
                    Message received.
                  </p>
                  <p className="font-sans" style={{ fontSize: "0.95rem", color: "#4A5568", lineHeight: 1.7 }}>
                    We&rsquo;ll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <p className="font-serif text-2xl font-medium text-[#001F65]">Tell us how we can help.</p>
                    <p className="mt-2 font-sans text-sm leading-6 text-[#607086]">
                      A few details help us connect you with the right person faster.
                    </p>
                  </div>

                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="ms-name"
                        className="font-sans text-sm font-semibold text-[#001F65]"
                      >
                        Name <span style={{ color: "#5CA7F3" }}>*</span>
                      </label>
                      <input
                        id="ms-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="font-sans rounded-xl border border-[#D7DEE9] bg-white px-4 py-3 text-[#1A1B17] outline-none transition-colors placeholder:text-[#94A3B8] focus:border-[#5CA7F3] focus:ring-4 focus:ring-[#5CA7F3]/15"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="ms-email"
                        className="font-sans text-sm font-semibold text-[#001F65]"
                      >
                        Email <span style={{ color: "#5CA7F3" }}>*</span>
                      </label>
                      <input
                        id="ms-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="font-sans rounded-xl border border-[#D7DEE9] bg-white px-4 py-3 text-[#1A1B17] outline-none transition-colors placeholder:text-[#94A3B8] focus:border-[#5CA7F3] focus:ring-4 focus:ring-[#5CA7F3]/15"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="ms-company" className="font-sans text-sm font-semibold text-[#001F65]">
                        Company
                      </label>
                      <input
                        id="ms-company"
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="font-sans rounded-xl border border-[#D7DEE9] bg-white px-4 py-3 text-[#1A1B17] outline-none transition-colors placeholder:text-[#94A3B8] focus:border-[#5CA7F3] focus:ring-4 focus:ring-[#5CA7F3]/15"
                        placeholder="Organization name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="ms-phone" className="font-sans text-sm font-semibold text-[#001F65]">
                        Phone
                      </label>
                      <input
                        id="ms-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="font-sans rounded-xl border border-[#D7DEE9] bg-white px-4 py-3 text-[#1A1B17] outline-none transition-colors placeholder:text-[#94A3B8] focus:border-[#5CA7F3] focus:ring-4 focus:ring-[#5CA7F3]/15"
                        placeholder="Optional"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="ms-message"
                      className="font-sans text-sm font-semibold text-[#001F65]"
                    >
                      Message <span style={{ color: "#5CA7F3" }}>*</span>
                    </label>
                    <textarea
                      id="ms-message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="font-sans resize-none rounded-xl border border-[#D7DEE9] bg-white px-4 py-3 text-[#1A1B17] outline-none transition-colors placeholder:text-[#94A3B8] focus:border-[#5CA7F3] focus:ring-4 focus:ring-[#5CA7F3]/15"
                      style={{ lineHeight: 1.6 }}
                      placeholder="Tell us about your project or question…"
                    />
                  </div>

                  {/* Subscribe checkbox */}
                  <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#D7DEE9] bg-white px-4 py-3">
                    <input
                      type="checkbox"
                      checked={form.subscribe}
                      onChange={(e) => setForm({ ...form, subscribe: e.target.checked })}
                      className="mt-0.5 h-4 w-4 rounded accent-[#001F65]"
                    />
                    <span
                      className="font-sans text-sm leading-6"
                      style={{ color: "#4A5568" }}
                    >
                      Subscribe to our newsletter
                    </span>
                  </label>

                  {/* Submit */}
                  <div className="flex justify-start">
                    <button
                      type="submit"
                      className="font-sans flex items-center gap-2 rounded-full bg-[#001F65] px-7 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#002C77] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#5CA7F3]/30"
                    >
                      Submit Message
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

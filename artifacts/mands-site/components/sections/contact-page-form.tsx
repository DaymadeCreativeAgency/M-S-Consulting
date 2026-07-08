"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Facebook, Instagram, Linkedin, Loader2, Mail, MapPin, Youtube } from "lucide-react";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/m%26s-consulting/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/mandsconsulting/", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/mandsconsulting", icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com/@mandsconsulting", icon: Youtube },
];

type Status = "idle" | "submitting" | "sent" | "error";

export function ContactPageForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    subscribe: true,
  });

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
          company: form.company,
          phone: form.phone,
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
    <section className="py-16 lg:py-24" style={{ backgroundColor: "#001F65" }}>
      <div className="ms-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-4 text-[#5CA7F3]">START A CONVERSATION</p>
            <h2
              className="font-serif mb-5 font-medium text-white"
              style={{ fontSize: "clamp(1.9rem, 3.3vw, 2.8rem)", lineHeight: 1.12 }}
            >
              Tell us what you&rsquo;re building, solving, or trying to improve.
            </h2>
            <p className="font-sans" style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(255,255,255,0.65)" }}>
              A few details help us route your note to the right practice lead. We&rsquo;ll follow up with a practical next
              step, not a generic sales script.
            </p>

            <div className="mt-9 grid gap-4">
              {[
                { icon: Mail, label: "Email", value: "info@mandsc.com" },
                { icon: MapPin, label: "Headquarters", value: "Morgantown, West Virginia" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 border-t border-white/10 pt-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#5CA7F3]/15 text-[#5CA7F3]">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="font-sans text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/45">{label}</p>
                    <p className="mt-1 font-sans text-sm font-semibold text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9">
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

          <div>
            {status === "sent" ? (
              <div className="flex min-h-[420px] flex-col items-start justify-center border-y border-white/10 py-12">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#5CA7F3]/15 text-[#5CA7F3]">
                  <CheckCircle2 size={26} strokeWidth={1.8} />
                </div>
                <p className="font-serif text-2xl font-medium text-white">Message received.</p>
                <p className="marketing-copy mt-2 text-white/82">We&rsquo;ll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <ContactInput
                    id="contact-name"
                    label="Name"
                    required
                    value={form.name}
                    onChange={(value) => setForm({ ...form, name: value })}
                    placeholder="Your name"
                  />
                  <ContactInput
                    id="contact-email"
                    label="Email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(value) => setForm({ ...form, email: value })}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <ContactInput
                    id="contact-company"
                    label="Company"
                    value={form.company}
                    onChange={(value) => setForm({ ...form, company: value })}
                    placeholder="Organization name"
                  />
                  <ContactInput
                    id="contact-phone"
                    label="Phone"
                    type="tel"
                    value={form.phone}
                    onChange={(value) => setForm({ ...form, phone: value })}
                    placeholder="Optional"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className="font-sans text-sm font-semibold text-white">
                    Message <span className="text-[#5CA7F3]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="font-sans resize-none rounded-xl border border-white/14 bg-white px-4 py-3 text-[#1A1B17] outline-none transition-colors placeholder:text-[#94A3B8] focus:border-[#5CA7F3] focus:ring-4 focus:ring-[#5CA7F3]/20"
                    placeholder="Tell us about your project or question..."
                  />
                </div>

                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/16 bg-white/[0.09] px-4 py-3">
                  <input
                    type="checkbox"
                    checked={form.subscribe}
                    onChange={(e) => setForm({ ...form, subscribe: e.target.checked })}
                    className="mt-0.5 h-4 w-4 rounded accent-[#5CA7F3]"
                  />
                  <span className="marketing-note text-white/90">Keep me subscribed to the M&amp;S newsletter</span>
                </label>

                {status === "error" && (
                  <p className="font-sans text-sm text-red-300">
                    Something went wrong, please try again or email us at{" "}
                    <a href="mailto:info@mandsc.com" className="underline">info@mandsc.com</a>.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="font-sans flex w-fit items-center gap-2 rounded-full bg-[#5CA7F3] px-7 py-3 text-sm font-bold text-[#0A0E1A] transition-colors duration-200 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#5CA7F3]/30 disabled:opacity-60"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Submit Message
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInput({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-sans text-sm font-semibold text-white">
        {label} {required && <span className="text-[#5CA7F3]">*</span>}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="font-sans rounded-xl border border-white/14 bg-white px-4 py-3 text-[#1A1B17] outline-none transition-colors placeholder:text-[#94A3B8] focus:border-[#5CA7F3] focus:ring-4 focus:ring-[#5CA7F3]/20"
        placeholder={placeholder}
      />
    </div>
  );
}

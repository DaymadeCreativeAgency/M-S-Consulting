"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

type Props = {
  topic?: string;
  category?: string;
};

const TRUST_SIGNALS = [
  "Response within 1 business day",
  "20+ years delivering complex programs",
  "250 consultants across the country",
];

export function ArticleContactCTA({ topic, category }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");
  const [focused, setFocused] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    // Simulate async submit — wire to real API when ready
    setTimeout(() => setStatus("sent"), 900);
  }

  const headlineTopic = topic ?? category ?? "your next program";

  return (
    <section
      aria-label="Contact M&S Consulting"
      style={{ backgroundColor: "#001F65" }}
    >
      <div className="ms-container py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-0">

          {/* ── Left: copy + trust ───────────────────────────────────────── */}
          <div className="pb-12 lg:pb-0 lg:pr-16">
            <p
              className="font-sans text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "rgba(92,167,243,0.85)" }}
            >
              Work with us
            </p>
            <h2
              className="font-serif text-white leading-[1.08] tracking-[-0.01em] mb-5"
              style={{ fontSize: "clamp(1.85rem, 3.2vw, 3rem)" }}
            >
              Let&rsquo;s talk about{" "}
              <em className="not-italic" style={{ color: "#5CA7F3" }}>
                {headlineTopic}.
              </em>
            </h2>
            <p
              className="font-sans leading-relaxed mb-10"
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.60)",
                maxWidth: "32rem",
              }}
            >
              Whether you&rsquo;re assessing where to start, stuck in a
              stalled program, or ready to move — we&apos;ve been here
              before. A conversation costs nothing.
            </p>

            {/* Trust signals */}
            <ul className="flex flex-col gap-3">
              {TRUST_SIGNALS.map((signal) => (
                <li key={signal} className="flex items-center gap-3">
                  <span
                    className="flex items-center justify-center w-5 h-5 rounded-full shrink-0"
                    style={{ backgroundColor: "rgba(92,167,243,0.15)" }}
                  >
                    <Check
                      className="h-2.5 w-2.5"
                      style={{ color: "#5CA7F3" }}
                      aria-hidden="true"
                    />
                  </span>
                  <span
                    className="font-sans text-sm"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    {signal}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Vertical divider ─────────────────────────────────────────── */}
          <div
            className="hidden lg:block w-px self-stretch"
            style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            aria-hidden="true"
          />

          {/* ── Right: form ──────────────────────────────────────────────── */}
          <div className="lg:pl-16 pt-12 lg:pt-0">
            {status === "sent" ? (
              <div className="flex flex-col justify-center h-full gap-6 py-8">
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-full"
                  style={{ backgroundColor: "rgba(92,167,243,0.12)" }}
                >
                  <Check className="h-6 w-6" style={{ color: "#5CA7F3" }} />
                </div>
                <div>
                  <p
                    className="font-serif text-white mb-2"
                    style={{ fontSize: "1.5rem", lineHeight: 1.25 }}
                  >
                    Message received.
                  </p>
                  <p
                    className="font-sans"
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.50)",
                      lineHeight: 1.6,
                    }}
                  >
                    We&rsquo;ll be in touch within one business day. In the
                    meantime, take a look at our{" "}
                    <a
                      href="/case-studies"
                      className="underline underline-offset-2 transition-opacity hover:opacity-75"
                      style={{ color: "rgba(255,255,255,0.70)" }}
                    >
                      recent engagements
                    </a>
                    .
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-7" noValidate>
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field
                    id="ac-name"
                    label="Your name"
                    type="text"
                    required
                    value={form.name}
                    focused={focused === "name"}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    onChange={(v) => setForm({ ...form, name: v })}
                    placeholder="Jane Smith"
                  />
                  <Field
                    id="ac-email"
                    label="Work email"
                    type="email"
                    required
                    value={form.email}
                    focused={focused === "email"}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    onChange={(v) => setForm({ ...form, email: v })}
                    placeholder="jane@company.com"
                  />
                </div>

                {/* Company */}
                <Field
                  id="ac-company"
                  label="Organization"
                  type="text"
                  value={form.company}
                  focused={focused === "company"}
                  onFocus={() => setFocused("company")}
                  onBlur={() => setFocused(null)}
                  onChange={(v) => setForm({ ...form, company: v })}
                  placeholder="Company or agency name"
                />

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="ac-message"
                    className="font-sans text-[11px] font-semibold uppercase tracking-[0.09em]"
                    style={{ color: "rgba(255,255,255,0.38)" }}
                  >
                    What are you working on?
                  </label>
                  <textarea
                    id="ac-message"
                    rows={4}
                    value={form.message}
                    required
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Brief description of your project, timeline, or the problem you need to solve…"
                    className="font-sans bg-transparent text-white outline-none resize-none transition-colors"
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      color: "rgba(255,255,255,0.88)",
                      borderBottom: `1px solid ${focused === "message" ? "rgba(92,167,243,0.55)" : "rgba(255,255,255,0.15)"}`,
                      paddingBottom: "10px",
                      transition: "border-color 0.2s",
                    }}
                  />
                </div>

                {/* Submit row */}
                <div className="flex items-center justify-between gap-4 pt-2">
                  <p
                    className="font-sans text-xs"
                    style={{ color: "rgba(255,255,255,0.28)" }}
                  >
                    No spam. No sales calls. Just a conversation.
                  </p>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans text-sm font-bold tracking-[0.02em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 disabled:opacity-60"
                    style={{
                      backgroundColor: "#fff",
                      color: "#001F65",
                    }}
                    onMouseEnter={(e) => {
                      if (status !== "submitting")
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                          "#EFEADB";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                        "#fff";
                    }}
                  >
                    {status === "submitting" ? "Sending…" : "Send message"}
                    {status !== "submitting" && (
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Field helper ──────────────────────────────────────────────────────────── */
function Field({
  id,
  label,
  type,
  required,
  value,
  placeholder,
  focused,
  onFocus,
  onBlur,
  onChange,
}: {
  id: string;
  label: string;
  type: string;
  required?: boolean;
  value: string;
  placeholder: string;
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-sans text-[11px] font-semibold uppercase tracking-[0.09em]"
        style={{ color: "rgba(255,255,255,0.38)" }}
      >
        {label}
        {required && (
          <span
            className="ml-1"
            aria-hidden="true"
            style={{ color: "#5CA7F3" }}
          >
            *
          </span>
        )}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="font-sans bg-transparent text-white outline-none placeholder:text-[rgba(255,255,255,0.22)] transition-colors"
        style={{
          fontSize: "0.9375rem",
          lineHeight: 1.5,
          borderBottom: `1px solid ${focused ? "rgba(92,167,243,0.55)" : "rgba(255,255,255,0.15)"}`,
          paddingBottom: "10px",
          transition: "border-color 0.2s",
        }}
      />
    </div>
  );
}

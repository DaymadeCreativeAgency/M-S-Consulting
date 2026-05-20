import type { Metadata } from "next";
import { MsContactForm } from "@/components/sections/ms-contact-form";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Contact M&S Consulting | Schedule a Call",
  description:
    "Ready to start your digital transformation? Get in touch with M&S Consulting. Headquartered in Morgantown, WV with nearshore and offshore delivery capabilities.",
};

const OFFICES = [
  {
    label: "Headquarters",
    city: "Morgantown, WV",
    detail: "United States",
    note: "Primary office and delivery hub",
  },
  {
    label: "Nearshore",
    city: "Brasil",
    detail: "South America",
    note: "Nearshore delivery center",
  },
  {
    label: "Offshore",
    city: "India",
    detail: "Asia-Pacific",
    note: "Offshore delivery center",
  },
];

const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/mands-consulting" },
  { label: "Instagram", href: "https://www.instagram.com/mandsconsulting" },
  { label: "Facebook", href: "https://www.facebook.com/mandsconsulting" },
  { label: "YouTube", href: "https://www.youtube.com/@mandsconsulting" },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0A0E1A" }}>
        <div className="ms-container">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="eyebrow mb-5" style={{ color: "#5CA7F3" }}>
                CONTACT
              </p>
              <h1
                className="font-serif text-white font-medium"
                style={{
                  fontSize: "clamp(2.2rem, 4.5vw, 3.75rem)",
                  lineHeight: 1.12,
                  letterSpacing: "-0.01em",
                  marginBottom: "1.5rem",
                }}
              >
                Collaboration starts with conversation.
              </h1>
              <p
                className="font-sans"
                style={{
                  fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                Whether you&rsquo;re ready to kick off a project or just exploring what&rsquo;s possible, our team is happy to talk through your goals. Fill out the form below and we&rsquo;ll be in touch shortly.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Office locations ─────────────────────────────────────────── */}
      <section className="py-14" style={{ backgroundColor: "#EFEADB" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
            {OFFICES.map((o, i) => (
              <FadeIn key={o.label} delay={i * 0.08}>
                <div
                  style={{
                    padding: "1.5rem",
                    backgroundColor: "white",
                    borderRadius: "12px",
                    borderTop: `3px solid ${i === 0 ? "#FCC541" : "rgba(0,31,101,0.12)"}`,
                  }}
                >
                  <p
                    className="eyebrow mb-2"
                    style={{ color: "#001F65" }}
                  >
                    {o.label}
                  </p>
                  <p
                    className="font-sans font-semibold"
                    style={{ fontSize: "1.05rem", color: "#001F65", marginBottom: "2px" }}
                  >
                    {o.city}
                  </p>
                  <p
                    className="font-sans"
                    style={{ fontSize: "0.85rem", color: "#6B7280" }}
                  >
                    {o.detail}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Social links */}
          <FadeIn delay={0.24} className="mt-10 flex flex-wrap gap-4 items-center">
            <span
              className="font-sans"
              style={{ fontSize: "0.8rem", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.06em" }}
            >
              Find us online
            </span>
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans font-semibold transition-colors duration-150"
                style={{ fontSize: "0.875rem", color: "#001F65" }}
              >
                {l.label}
              </a>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ── Form ─────────────────────────────────────────────────────── */}
      <MsContactForm />
    </>
  );
}

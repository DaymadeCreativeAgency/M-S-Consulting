import type { Metadata } from "next";
import Link from "next/link";
import { MsContactForm } from "@/components/sections/ms-contact-form";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "M&S Consulting practice areas: Enterprise Applications, Cloud & Infrastructure, Data Analytics, Agile Project Management, Cybersecurity, and AI & Emerging Technology.",
  alternates: { canonical: "/practice-areas" },
};

const PRACTICE_AREAS = [
  {
    slug: "enterprise-apps",
    name: "Enterprise Applications",
    eyebrow: "ERP · CRM · HCM",
    description:
      "Selection, implementation, and ongoing support for mission-critical enterprise systems — ERP, CRM, and HCM — that run your core business functions.",
    tags: ["ERP", "CRM", "HCM", "Integration", "Custom Dev"],
    available: true,
  },
  {
    slug: "cloud",
    name: "Cloud & Infrastructure",
    eyebrow: "AWS · Azure · GCP",
    description:
      "Cloud strategy, migration, and managed infrastructure across AWS, Azure, and Google Cloud. Secure, scalable, cost-optimized architecture for complex workloads.",
    tags: ["Cloud Migration", "Architecture", "DevOps", "Infrastructure"],
    available: true,
  },
  {
    slug: "data-analytics",
    name: "Data Analytics & Integration",
    eyebrow: "BI · ETL · DATA ENGINEERING",
    description:
      "Turn raw data into decisions. End-to-end data engineering, integration, and business intelligence delivery — from warehouse design to executive dashboards.",
    tags: ["BI", "ETL", "Data Warehouse", "Reporting", "Snowflake"],
    available: true,
  },
  {
    slug: "agile-pm",
    name: "Agile Project Management",
    eyebrow: "DELIVERY · TRANSFORMATION · CHANGE",
    description:
      "Agile frameworks, organizational transformation, and program delivery. We help teams build the habits and structures that produce consistent results.",
    tags: ["Agile", "Scrum", "SAFe", "Change Management", "PMO"],
    available: true,
  },
  {
    slug: "cyber",
    name: "Cyber & Identity Security",
    eyebrow: "ZERO TRUST · IAM · COMPLIANCE",
    description:
      "Zero Trust architecture, identity and access management, and full compliance framework delivery — FedRAMP, NIST, CMMC, and beyond.",
    tags: ["Zero Trust", "IAM", "FedRAMP", "CMMC", "SOC 2", "NIST"],
    available: true,
  },
  {
    slug: "ai",
    name: "AI & Emerging Technology",
    eyebrow: "LLMs · AUTOMATION · AGENTIC AI",
    description:
      "From AI readiness assessments to production deployment of agentic systems and intelligent automation. Strategy and implementation for organizations ready to move beyond the hype.",
    tags: ["Agentic AI", "LLMs", "Automation", "AI Strategy", "ML Ops"],
    available: true,
  },
  {
    slug: "staff-augmentation",
    name: "Staff Augmentation",
    eyebrow: "TALENT · NEARSHORE · OFFSHORE",
    description:
      "On-demand access to vetted, senior-level consultants who embed directly with your team. Domestic, nearshore (Brasil), and offshore (India) delivery.",
    tags: ["Staff Aug", "Nearshore", "Offshore", "Contract"],
    available: false,
  },
];

export default function PracticeAreasPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0A0E1A" }}>
        <div className="ms-container">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="eyebrow mb-5" style={{ color: "#5CA7F3" }}>
                PRACTICE AREAS
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
                Deep expertise across the disciplines that drive transformation.
              </h1>
              <p
                className="font-sans"
                style={{
                  fontSize: "clamp(1.05rem, 1.6vw, 1.15rem)",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Every M&amp;S engagement draws on specialist practice leads with years of domain experience. Our practice areas represent our core competencies — each backed by a dedicated team and a proven delivery methodology.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#EFEADB", borderBottom: "1px solid rgba(0,31,101,0.08)" }}>
        <div className="ms-container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[rgba(0,31,101,0.1)]">
            {[
              { value: "7", label: "Practice areas" },
              { value: "250+", label: "Specialists on staff" },
              { value: "20+", label: "Years of delivery" },
              { value: "85%", label: "Repeat client rate" },
            ].map((s, i) => (
              <FadeIn key={s.value} delay={i * 0.07} className="text-center md:px-8">
                <div
                  className="font-sans font-bold tabular-nums"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#001F65", lineHeight: 1, letterSpacing: "-0.02em" }}
                >
                  {s.value}
                </div>
                <div
                  className="font-sans"
                  style={{ fontSize: "0.75rem", color: "#6B7280", marginTop: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}
                >
                  {s.label}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practice area cards ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICE_AREAS.map((pa, i) => (
              <FadeIn key={pa.slug} delay={i * 0.06}>
                <div
                  style={{
                    borderRadius: "14px",
                    border: "1px solid rgba(0,31,101,0.1)",
                    backgroundColor: "white",
                    padding: "1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    boxShadow: "0 2px 12px rgba(0,31,101,0.04)",
                  }}
                >
                  <p
                    className="eyebrow mb-2"
                    style={{ color: "rgba(0,31,101,0.45)", fontSize: "0.65rem" }}
                  >
                    {pa.eyebrow}
                  </p>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3
                      className="font-sans font-bold"
                      style={{ fontSize: "1.1rem", color: "#001F65", lineHeight: 1.25 }}
                    >
                      {pa.name}
                    </h3>
                    {!pa.available && (
                      <span
                        className="font-sans"
                        style={{
                          fontSize: "0.7rem",
                          color: "#9CA3AF",
                          backgroundColor: "#F3F4F6",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "999px",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                        }}
                      >
                        Coming soon
                      </span>
                    )}
                  </div>
                  <p
                    className="font-sans"
                    style={{ fontSize: "0.9rem", color: "#4A5568", lineHeight: 1.65, marginBottom: "1.25rem", flexGrow: 1 }}
                  >
                    {pa.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {pa.tags.map((t) => (
                      <span
                        key={t}
                        className="font-sans"
                        style={{
                          fontSize: "0.7rem",
                          color: "#001F65",
                          backgroundColor: "rgba(0,31,101,0.07)",
                          padding: "0.2rem 0.55rem",
                          borderRadius: "4px",
                          fontWeight: 500,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {pa.available ? (
                    <Link
                      href={`/practice-areas/${pa.slug}`}
                      className="font-sans font-semibold inline-flex items-center gap-1.5 transition-colors duration-150"
                      style={{ fontSize: "0.85rem", color: "#001F65" }}
                    >
                      Explore practice area <ArrowRight size={13} />
                    </Link>
                  ) : (
                    <Link
                      href="/contact"
                      className="font-sans font-semibold inline-flex items-center gap-1.5"
                      style={{ fontSize: "0.85rem", color: "#9CA3AF" }}
                    >
                      Contact us to discuss <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cross-practice callout ───────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#EFEADB" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <FadeIn>
              <p className="eyebrow mb-3" style={{ color: "#001F65" }}>ONE TEAM, MANY DISCIPLINES</p>
              <h2
                className="font-serif font-medium"
                style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)", color: "#001F65", lineHeight: 1.3, marginBottom: "1.25rem" }}
              >
                Most transformations cross multiple practice areas. We&rsquo;re built for that.
              </h2>
              <p className="font-sans" style={{ fontSize: "0.95rem", color: "#4A5568", lineHeight: 1.75 }}>
                A cloud migration needs security. An ERP implementation needs data integration and change management. We assemble cross-practice teams for every engagement, drawing on the right specialists at every stage.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-wrap gap-3">
                {[
                  "Cloud + Security",
                  "ERP + Data",
                  "Agile + Transformation",
                  "AI + Enterprise Apps",
                  "Cloud + AI",
                  "Security + Compliance",
                  "Data + AI",
                  "ERP + Change Management",
                ].map((combo, i) => (
                  <div
                    key={combo}
                    style={{
                      padding: "0.5rem 1rem",
                      borderRadius: "8px",
                      backgroundColor: "white",
                      border: "1px solid rgba(0,31,101,0.1)",
                      boxShadow: i === 0 ? "0 0 0 2px rgba(252,197,65,0.6)" : "none",
                    }}
                  >
                    <span
                      className="font-sans font-medium"
                      style={{ fontSize: "0.8rem", color: "#001F65" }}
                    >
                      {combo}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <MsContactForm />
    </>
  );
}

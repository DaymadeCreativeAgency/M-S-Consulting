import type { Metadata } from "next";
import Link from "next/link";
import { MsContactForm } from "@/components/sections/ms-contact-form";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Lines",
  description:
    "M&S Consulting delivers advisory, implementation, and managed services across leading enterprise platforms, Microsoft, Salesforce, SAP, Oracle, AWS, Atlassian, and Snowflake.",
  alternates: { canonical: "/service-lines" },
};

const HOW_WE_DO_IT = [
  {
    title: "Advisory",
    body: "We analyze your past performance and future goals to pinpoint processes that have the potential to be revolutionized by digital tools. Then, we build you a bespoke roadmap for sustaining long-term success.",
  },
  {
    title: "Implementation",
    body: "We lead your organization through a seamless transition, training your team as they undergo a powerful digital transformation.",
  },
  {
    title: "Management",
    body: "We provide ongoing 24/7 support, helping you maintain and improve your systems so that the momentum you've built up keeps on accelerating.",
  },
];

const SERVICE_LINES = [
  {
    name: "Microsoft",
    slug: "microsoft",
    description:
      "M365, Azure, Power Platform, Dynamics 365. More than 15 years guiding organizations through Microsoft's full ecosystem, from strategy to adoption.",
    available: true,
    tags: ["M365", "Azure", "Power Platform", "Dynamics 365", "Teams", "SharePoint"],
  },
  {
    name: "Salesforce",
    slug: "salesforce",
    description:
      "Sales Cloud, Service Cloud, Marketing Cloud, and custom Salesforce development. Strategy, implementation, and ongoing managed services.",
    available: true,
    tags: ["Sales Cloud", "Service Cloud", "Marketing Cloud", "CPQ"],
  },
  {
    name: "SAP",
    slug: "sap",
    description:
      "SAP S/4HANA, SAP SuccessFactors, and SAP BTP implementations for enterprise-scale organizations in public sector and commercial markets.",
    available: true,
    tags: ["S/4HANA", "SuccessFactors", "BTP", "Analytics"],
  },
  {
    name: "Oracle",
    slug: "oracle",
    description:
      "Oracle Cloud ERP, HCM, and EPM. Full lifecycle delivery from system design through cutover and post-go-live support.",
    available: true,
    tags: ["Oracle ERP", "Oracle HCM", "Oracle EPM", "Cloud"],
  },
  {
    name: "AWS",
    slug: "aws",
    description:
      "Cloud infrastructure design, migration, and managed services on Amazon Web Services. Architecture, security, and cost optimization.",
    available: true,
    tags: ["EC2", "S3", "Lambda", "RDS", "CloudFormation"],
  },
  {
    name: "Atlassian",
    slug: "atlassian",
    description:
      "Jira, Confluence, and the full Atlassian suite for team and project management. Configuration, integrations, and enterprise licensing.",
    available: true,
    tags: ["Jira", "Confluence", "Jira Service Management", "Bitbucket"],
  },
  {
    name: "Snowflake",
    slug: "snowflake",
    description:
      "Data warehouse design, migration, and optimization on Snowflake. End-to-end data engineering and analytics enablement.",
    available: true,
    tags: ["Data Warehouse", "Data Engineering", "Analytics", "dbt"],
  },
];

const INDUSTRIES = [
  "Consumer",
  "Government & Public Services",
  "Energy & Industrial",
  "Health & Life Sciences",
  "Finance & Professional Services",
  "Tech, Media & Telecommunications",
];

export default function ServiceLinesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0A0E1A" }}>
        <div className="ms-container">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="eyebrow mb-5" style={{ color: "#5CA7F3" }}>
                SERVICE LINES
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
                The platforms we deliver on.
              </h1>
              <p
                className="font-sans"
                style={{
                  fontSize: "clamp(1.05rem, 1.6vw, 1.15rem)",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                We help you identify, integrate, and optimize the digital and technical solutions you need to reach the next level. Our consulting team specializes in the world&rsquo;s leading enterprise platforms, and we&rsquo;ve been doing this for over 20 years.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── How We Do It ─────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#EFEADB" }}>
        <div className="ms-container">
          <FadeIn className="mb-10">
            <p className="eyebrow mb-3" style={{ color: "#001F65" }}>HOW WE DO IT</p>
            <h2
              className="font-serif font-medium"
              style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)", color: "#001F65", lineHeight: 1.2 }}
            >
              Our consulting team serves clients in three primary ways.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOW_WE_DO_IT.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div
                  style={{
                    padding: "1.75rem",
                    backgroundColor: "white",
                    borderRadius: "12px",
                    borderTop: `3px solid ${i === 0 ? "#FCC541" : "rgba(0,31,101,0.12)"}`,
                    height: "100%",
                  }}
                >
                  <div
                    className="font-sans font-bold tabular-nums mb-3"
                    style={{ fontSize: "0.75rem", color: "#001F65", letterSpacing: "0.08em", textTransform: "uppercase" }}
                  >
                    0{i + 1}
                  </div>
                  <h3 className="font-sans font-semibold mb-2" style={{ fontSize: "1.05rem", color: "#001F65" }}>
                    {item.title}
                  </h3>
                  <p className="marketing-copy" style={{ color: "#4A5568" }}>
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service line cards ───────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container">
          <FadeIn className="mb-12">
            <p className="eyebrow mb-3" style={{ color: "#001F65" }}>PLATFORMS</p>
            <h2
              className="font-serif font-medium"
              style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", color: "#001F65", lineHeight: 1.2 }}
            >
              Comprehensive consulting services from industry-leading professionals with decades of experience in their domains.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_LINES.map((sl, i) => (
              <FadeIn key={sl.name} delay={i * 0.06}>
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
                    transition: "box-shadow 0.2s ease",
                  }}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3
                      className="font-sans font-bold"
                      style={{ fontSize: "1.15rem", color: "#001F65" }}
                    >
                      {sl.name}
                    </h3>
                    {!sl.available && (
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
                    className="marketing-copy"
                    style={{ color: "#4A5568", marginBottom: "1.25rem", flexGrow: 1 }}
                  >
                    {sl.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {sl.tags.map((t) => (
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
                  {sl.available ? (
                    <Link
                      href={`/service-lines/${sl.slug}`}
                      className="font-sans font-semibold inline-flex items-center gap-1.5 transition-colors duration-150"
                      style={{ fontSize: "0.85rem", color: "#001F65" }}
                    >
                      View service line <ArrowRight size={13} />
                    </Link>
                  ) : (
                    <Link
                      href="/contact"
                      className="font-sans font-semibold inline-flex items-center gap-1.5 transition-colors duration-150"
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

      {/* ── Why we're different ──────────────────────────────────────── */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#001F65" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <p className="eyebrow mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>WHY WE&rsquo;RE DIFFERENT</p>
              <h2
                className="font-serif text-white font-medium"
                style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", lineHeight: 1.2, marginBottom: "1.25rem" }}
              >
                A one-stop shop that is versatile yet precise.
              </h2>
              <p
                className="font-sans"
                style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: "1rem" }}
              >
                We pride ourselves on cultivating a well-rounded balance between diverse experience and specialized expertise. As a team of 250, our flexible workforce has the know-how needed to solve a wide array of problems.
              </p>
              <p
                className="font-sans"
                style={{ fontSize: "1rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: "2rem" }}
              >
                We provide 100% personalized service every single time, and that&rsquo;s why 85% of our projects are with repeat clients.
              </p>
              <div className="flex gap-8">
                {[
                  { n: "250+", l: "Consultants" },
                  { n: "85%", l: "Repeat clients" },
                  { n: "20+", l: "Years delivered" },
                ].map(({ n, l }) => (
                  <div key={n}>
                    <div
                      className="font-sans font-bold tabular-nums"
                      style={{ fontSize: "2rem", color: "#5CA7F3", lineHeight: 1 }}
                    >
                      {n}
                    </div>
                    <div className="marketing-note" style={{ color: "rgba(255,255,255,0.76)", marginTop: "4px" }}>
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <p className="eyebrow mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>WHO WE HELP</p>
                <p
                  className="marketing-copy mb-5"
                  style={{ color: "rgba(255,255,255,0.84)" }}
                >
                  Decades of experience serving clients across countless industries:
                </p>
                <div className="flex flex-col gap-2">
                  {INDUSTRIES.map((ind) => (
                    <div
                      key={ind}
                      className="marketing-note"
                      style={{
                        color: "rgba(255,255,255,0.75)",
                        padding: "0.65rem 1rem",
                        borderRadius: "8px",
                        backgroundColor: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {ind}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <MsContactForm />
    </>
  );
}

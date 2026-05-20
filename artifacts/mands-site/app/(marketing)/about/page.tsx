import type { Metadata } from "next";
import Link from "next/link";
import { MsContactForm } from "@/components/sections/ms-contact-form";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "About M&S Consulting | Management & Solutions Since 2002",
  description:
    "M&S stands for Management and Solutions. Since 2002 we've been making the complex simple, helping organizations from a diverse array of industries use advanced tech tools to achieve game-changing digital transformations.",
};

/* ─── Team data ─────────────────────────────────────────────────────────── */

const MANAGING_PARTNERS = [
  {
    name: "Ashok Aggarwal",
    title: "Managing Partner",
    photo: "/media/team/ashok-aggarwal.jpg",
    square: true,
  },
];

const ASSOCIATE_PARTNERS = [
  { name: "Daidre Fanis", title: "Associate Partner", photo: "/media/team/daidre-fanis.png" },
  { name: "Jay Mason", title: "Associate Partner", photo: "/media/team/jay-mason.png" },
];

const DIRECTORS = [
  { name: "Ben Berry", title: "Video", photo: "/media/team/headshot-1.png", square: true },
  { name: "Cody Childers", title: "Microsoft & Custom Dev", photo: "/media/team/headshot-3.png" },
  { name: "Richard Glass", title: "Public Sector", photo: "/media/team/headshot-7.png" },
  { name: "Hazem Hower", title: "Cloud & Infrastructure", photo: "/media/team/headshot-2.png" },
  { name: "Brandon Jones", title: "Branding & Design", photo: "/media/team/headshot-4.png", square: true },
  { name: "Shruti Karat", title: "ERP & Data", photo: "/media/team/headshot-8.png" },
  { name: "Jimmy Lutz", title: "Client Success", photo: "/media/team/jimmy-lutz.png" },
  { name: "Mark Wittkopp", title: "Commercial Business", photo: "/media/team/headshot-5.png", square: true },
  { name: "Casey Zaitz", title: "Project Management & Organizational Transformation", photo: "/media/team/headshot-6.png", square: true },
];

const VALUES = [
  {
    label: "Commitment to Customer Success",
    body: "We take our partners' outcomes personally.",
  },
  {
    label: "Close Partnerships",
    body: "We're approachable, friendly, and committed to making your life easier.",
  },
  {
    label: "Depth of Expertise",
    body: "We always strive to curate elite teams of industry-leading experts.",
  },
  {
    label: "Living Up to Our Legacy",
    body: "We take great pride in customer satisfaction and success.",
  },
  {
    label: "Innovative Solutions",
    body: "We think outside the box to set you a cut above.",
  },
];

const CONTRACT_VEHICLES = [
  { label: "FBI ITSSS-2", detail: "Prime" },
  { label: "Navy SeaPort NxG", detail: "Prime" },
  { label: "NASA SEWP V", detail: "" },
  { label: "GSA Multi-Award Schedule (MAS) Contract", detail: "GS-35F-0231S SIN: 54151S" },
];

const NAICS = ["541430", "541511*", "541512", "541513", "51519", "541990", "541611", "51614", "51618", "518210"];

const CERTIFICATIONS = [
  "SBA HUBZone Certified",
  "Woman-Owned Small Business (WOSB)",
  "Small Disadvantaged Business (SDB)",
  "Numerous contracts with Federal, State and Local, and Education clients",
  "Hiring our Heroes",
  "Talent Alliance",
  "Pledge 1%",
];

const PARTNER_NAMES = [
  "Salesforce", "SAP", "Oracle", "Microsoft", "AWS", "Google Cloud",
  "ServiceNow", "Atlassian", "Snowflake", "Power Platform",
];

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function TeamCard({
  name,
  title,
  photo,
  square = false,
}: {
  name: string;
  title: string;
  photo: string;
  square?: boolean;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div
        style={{
          width: "120px",
          height: "120px",
          borderRadius: square ? "16px" : "50%",
          overflow: "hidden",
          boxShadow: "0 4px 16px rgba(0,31,101,0.12)",
          flexShrink: 0,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
        />
      </div>
      <div>
        <p className="font-sans font-semibold" style={{ fontSize: "0.875rem", color: "#001F65", lineHeight: 1.3 }}>{name}</p>
        <p className="font-sans" style={{ fontSize: "0.75rem", color: "#6B7280", marginTop: "2px", lineHeight: 1.4 }}>{title}</p>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0A0E1A" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <p className="eyebrow mb-5" style={{ color: "#5CA7F3" }}>MANAGEMENT & SOLUTIONS · EST. 2002</p>
              <h1
                className="font-serif text-white font-medium"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.75rem)", lineHeight: 1.12, letterSpacing: "-0.01em", marginBottom: "1.5rem" }}
              >
                About Us
              </h1>
              <p
                className="font-sans"
                style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)", lineHeight: 1.7, color: "rgba(255,255,255,0.75)", marginBottom: "2rem" }}
              >
                Who is M&amp;S?{" "}
                <span style={{ fontStyle: "italic", color: "rgba(255,255,255,0.5)" }}>We&rsquo;re so glad you asked.</span>
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="font-sans font-semibold inline-flex items-center gap-2 px-7 py-3 rounded-full transition-all duration-200"
                  style={{ backgroundColor: "#5CA7F3", color: "#0A0E1A", fontSize: "0.9rem" }}
                >
                  Schedule a Call
                </Link>
                <Link
                  href="/case-studies"
                  className="font-sans font-semibold inline-flex items-center gap-2 px-7 py-3 rounded-full transition-all duration-200"
                  style={{ border: "1.5px solid rgba(255,255,255,0.35)", color: "white", fontSize: "0.9rem" }}
                >
                  See Our Work
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ height: "420px", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/media/team/about-office.png"
                  alt="M&S Consulting team at work"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Stats strip ──────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#EFEADB", borderBottom: "1px solid rgba(0,31,101,0.08)" }}>
        <div className="ms-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-[rgba(0,31,101,0.12)]">
            {[
              { value: "2002", label: "Year founded", note: "Morgantown, West Virginia" },
              { value: "250+", label: "Consultants on staff", note: "Commercial & public sector specialists" },
              { value: "20+", label: "Years of delivery", note: "Across government, enterprise & nonprofit" },
            ].map((s, i) => (
              <FadeIn key={s.value} delay={i * 0.08} className="text-center md:px-10">
                <div
                  className="font-sans font-bold tabular-nums"
                  style={{ fontSize: "clamp(2.4rem, 4vw, 3.5rem)", color: "#001F65", lineHeight: 1, letterSpacing: "-0.02em" }}
                >
                  {s.value}
                </div>
                <div
                  className="font-sans font-semibold mt-2 mb-1"
                  style={{ fontSize: "0.82rem", color: "#001F65", textTransform: "uppercase", letterSpacing: "0.08em" }}
                >
                  {s.label}
                </div>
                <div className="font-sans" style={{ fontSize: "0.75rem", color: "#6B7280" }}>{s.note}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who is M&S ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#EFF6FF" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn>
              <p className="eyebrow mb-4" style={{ color: "#001F65" }}>WHO IS M&amp;S?</p>
              <h2
                className="font-serif font-medium"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#001F65", lineHeight: 1.2, marginBottom: "1.5rem" }}
              >
                Making the complex simple since 2002.
              </h2>
              <p
                className="font-sans"
                style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.15rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.25rem" }}
              >
                M&amp;S stands for Management and Solutions. Since 2002, we&rsquo;ve been making the complex simple, helping organizations from a diverse array of industries use advanced tech tools to achieve game-changing digital transformations.
              </p>
              <p
                className="font-sans"
                style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.15rem)", lineHeight: 1.75, color: "#2D3748" }}
              >
                Since 2002, M&amp;S Consulting has been a trusted technology implementation and management partner for both commercial and public sector clients. We specialize in digital strategy and transformation for critical business functions.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-5 mt-2">
                {[
                  {
                    headline: "Who we are",
                    body: "A digital consulting collective made up of elite, industry-leading specialists.",
                  },
                  {
                    headline: "What we do",
                    body: "Fluent in complex digital solutions and skilled at using them to translate your goals into impactful outcomes.",
                  },
                  {
                    headline: "How we work",
                    body: "Problem solvers who bring a positive attitude to every project.",
                  },
                ].map((card, i) => (
                  <div
                    key={card.headline}
                    style={{
                      padding: "1.25rem 1.5rem",
                      borderRadius: "12px",
                      backgroundColor: "white",
                      borderLeft: `3px solid ${i === 0 ? "#FCC541" : "rgba(0,31,101,0.15)"}`,
                      boxShadow: "0 2px 12px rgba(0,31,101,0.06)",
                    }}
                  >
                    <p className="font-sans font-semibold mb-1" style={{ fontSize: "0.82rem", color: "#001F65", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      {card.headline}
                    </p>
                    <p className="font-sans" style={{ fontSize: "0.95rem", color: "#2D3748", lineHeight: 1.65 }}>
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Our Values ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#EFEADB" }}>
        <div className="ms-container">
          <FadeIn className="mb-12">
            <p className="eyebrow mb-3" style={{ color: "#001F65" }}>OUR VALUES</p>
            <h2
              className="font-serif font-medium"
              style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", color: "#001F65", lineHeight: 1.2 }}
            >
              How we show up.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map(({ label, body }, i) => (
              <FadeIn key={label} delay={i * 0.08}>
                <div
                  style={{
                    padding: "1.5rem",
                    backgroundColor: "white",
                    borderRadius: "12px",
                    borderTop: `3px solid ${i === 0 ? "#FCC541" : "rgba(0,31,101,0.12)"}`,
                    height: "100%",
                  }}
                >
                  <p className="font-sans font-semibold mb-2" style={{ fontSize: "0.875rem", color: "#001F65" }}>{label}</p>
                  <p className="font-sans" style={{ fontSize: "0.875rem", color: "#4A5568", lineHeight: 1.7 }}>{body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Government & Diversity Designations ─────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container">
          <FadeIn className="mb-10">
            <p className="eyebrow mb-3" style={{ color: "#001F65" }}>GOVERNMENT & DIVERSITY DESIGNATIONS</p>
            <h2
              className="font-serif font-medium"
              style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", color: "#001F65", lineHeight: 1.2, marginBottom: "0.75rem" }}
            >
              Built for government and commercial clients alike.
            </h2>
            <p className="font-sans" style={{ fontSize: "1rem", color: "#4A5568", lineHeight: 1.7, maxWidth: "700px" }}>
              M&amp;S Consulting holds multiple small business designations and contract vehicles, making it straightforward for federal, state, and local agencies to engage us directly.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Certifications */}
            <FadeIn>
              <div
                style={{
                  padding: "1.5rem",
                  backgroundColor: "#EFEADB",
                  borderRadius: "12px",
                  border: "1px solid rgba(0,31,101,0.08)",
                  height: "100%",
                }}
              >
                <p className="eyebrow mb-4" style={{ color: "#001F65" }}>Certifications</p>
                <ul className="space-y-2">
                  {CERTIFICATIONS.map((cert) => (
                    <li key={cert} className="flex gap-2 items-start">
                      <span style={{ color: "#001F65", marginTop: "2px", flexShrink: 0 }}>–</span>
                      <span className="font-sans" style={{ fontSize: "0.875rem", color: "#2D3748", lineHeight: 1.5 }}>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Contract Vehicles */}
            <FadeIn delay={0.08}>
              <div
                style={{
                  padding: "1.5rem",
                  backgroundColor: "#EFEADB",
                  borderRadius: "12px",
                  border: "1px solid rgba(0,31,101,0.08)",
                  height: "100%",
                }}
              >
                <p className="eyebrow mb-4" style={{ color: "#001F65" }}>Contract Vehicles</p>
                <ul className="space-y-4">
                  {CONTRACT_VEHICLES.map((c) => (
                    <li key={c.label}>
                      <p className="font-sans font-semibold" style={{ fontSize: "0.875rem", color: "#001F65", lineHeight: 1.3 }}>{c.label}</p>
                      {c.detail && (
                        <p className="font-sans" style={{ fontSize: "0.8rem", color: "#6B7280", marginTop: "2px" }}>{c.detail}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* NAICS */}
            <FadeIn delay={0.16}>
              <div
                style={{
                  padding: "1.5rem",
                  backgroundColor: "#EFEADB",
                  borderRadius: "12px",
                  border: "1px solid rgba(0,31,101,0.08)",
                  height: "100%",
                }}
              >
                <p className="eyebrow mb-4" style={{ color: "#001F65" }}>NAICS Codes</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {NAICS.map((code) => (
                    <span
                      key={code}
                      className="font-sans font-semibold"
                      style={{
                        fontSize: "0.75rem",
                        color: "#001F65",
                        backgroundColor: "rgba(0,31,101,0.08)",
                        padding: "0.25rem 0.6rem",
                        borderRadius: "4px",
                      }}
                    >
                      {code}
                    </span>
                  ))}
                </div>
                <p className="font-sans" style={{ fontSize: "0.75rem", color: "#6B7280" }}>* Primary NAICS Code</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Our Leaders ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#EFEADB" }}>
        <div className="ms-container">
          <FadeIn className="mb-12">
            <p className="eyebrow mb-3" style={{ color: "#001F65" }}>OUR LEADERS</p>
            <h2
              className="font-serif font-medium"
              style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", color: "#001F65", lineHeight: 1.2, marginBottom: "1rem" }}
            >
              Problem-solving is our superpower.
            </h2>
            <p className="font-sans" style={{ fontSize: "1rem", color: "#4A5568", lineHeight: 1.7, maxWidth: "680px" }}>
              At M&amp;S, our people are our biggest pride point, and problem-solving is our superpower — so meet some of the superheroes who make our work possible.
            </p>
          </FadeIn>

          {/* Managing Partner */}
          <div className="mb-14">
            <p className="eyebrow mb-8" style={{ color: "#001F65" }}>Managing Partner</p>
            <div className="flex gap-10 flex-wrap">
              {MANAGING_PARTNERS.map((p) => (
                <FadeIn key={p.name}>
                  <TeamCard {...p} />
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Associate Partners */}
          <div className="mb-14" style={{ paddingTop: "2rem", borderTop: "1px solid rgba(0,31,101,0.1)" }}>
            <p className="eyebrow mb-8" style={{ color: "#001F65" }}>Associate Partners</p>
            <div className="flex gap-10 flex-wrap">
              {ASSOCIATE_PARTNERS.map((p, i) => (
                <FadeIn key={p.name} delay={i * 0.08}>
                  <TeamCard {...p} />
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Directors & Practice Leads */}
          <div style={{ paddingTop: "2rem", borderTop: "1px solid rgba(0,31,101,0.1)" }}>
            <p className="eyebrow mb-8" style={{ color: "#001F65" }}>Directors &amp; Practice Leads</p>
            <div
              className="grid gap-8"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))" }}
            >
              {DIRECTORS.map((p, i) => (
                <FadeIn key={p.name} delay={i * 0.06}>
                  <TeamCard {...p} />
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Partnerships ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#001F65" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <p className="eyebrow mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>OUR PARTNERSHIPS</p>
              <h2
                className="font-serif text-white font-medium"
                style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)", lineHeight: 1.3, marginBottom: "1.25rem" }}
              >
                Trusted alliances with the world&rsquo;s leading software providers.
              </h2>
              <p className="font-sans" style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                M&amp;S forges strong partnerships with selected software vendors, systems integrators, trainers, and other organizations that deliver in our ecosystem.
              </p>
              <p className="font-sans" style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75 }}>
                Each one of our official certifications and alliances means that a renowned software provider trusts M&amp;S to execute an optimized implementation of their solutions — so work with us to gain 100% confidence that you&rsquo;re getting the most out of your investments.
              </p>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="flex flex-wrap gap-4">
                {PARTNER_NAMES.map((name, i) => (
                  <div
                    key={name}
                    style={{
                      padding: "0.6rem 1.1rem",
                      borderRadius: "8px",
                      border: "1px solid rgba(255,255,255,0.15)",
                      backgroundColor: "rgba(255,255,255,0.06)",
                    }}
                  >
                    <span
                      className="font-sans font-semibold"
                      style={{
                        fontSize: "0.85rem",
                        color: i % 4 === 0 ? "#5CA7F3" : "rgba(255,255,255,0.65)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────────── */}
      <MsContactForm />
    </>
  );
}

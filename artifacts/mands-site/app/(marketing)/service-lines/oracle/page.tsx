import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, ArrowUpFromLine, Settings } from "lucide-react";
import { MsContactForm } from "@/components/sections/ms-contact-form";
import { HeroHighlight, ServicePracticeHero } from "@/components/sections/service-practice-hero";
import { NewsletterSignup } from "@/components/sections/newsletter-signup";

export const metadata: Metadata = {
  title: "Oracle Consulting Services",
  description:
    "Three decades of Oracle expertise. M&S Consulting helps you streamline operations and scale seamlessly with Oracle Cloud Fusion, ERP, HCM, and more.",
  alternates: { canonical: "/service-lines/oracle" },
};

const SERVICES = [
  {
    Icon: ClipboardList,
    title: "Strategy and Planning",
    body: [
      { text: "Our Oracle experts are dedicated to helping clients understand their options,", bold: false },
      { text: " develop a roadmap for success,", bold: true },
      { text: " and meticulously execute a high-performing Oracle vision. We start by mapping your current systems, defining a future-state architecture, and building a sequenced plan that de-risks the path forward.", bold: false },
    ],
  },
  {
    Icon: ArrowUpFromLine,
    title: "Implementation",
    body: [
      { text: "We ensure a speedy, smooth, and seamless migration to Oracle,", bold: false },
      { text: " delivering a custom implementation of your selected solutions", bold: true },
      { text: " while ensuring minimal disruption to your productivity. Our team handles data migration, system integration, user training, and cutover planning — end to end.", bold: false },
    ],
  },
  {
    Icon: Settings,
    title: "Managed Services & Optimization",
    body: [
      { text: "Whether you&rsquo;re starting from scratch or fixing up an Oracle implementation that isn&rsquo;t optimized,", bold: false },
      { text: " our M&S team is here to help you set up and sustain your Oracle systems for long-term success.", bold: true },
      { text: " We provide ongoing support, continuous improvement, and strategic guidance as your needs evolve.", bold: false },
    ],
  },
];

const CORE_COMPETENCIES = [
  "Oracle Cloud Fusion", "Oracle ERP Cloud", "Oracle HCM Cloud",
  "Oracle EPM Cloud", "SOA", "WebCenter", "BPM", "Identity Management",
  "Oracle BI", "eBusiness Suite", "PeopleSoft", "Hyperion", "Taleo",
];

const DELIVERY_MODELS = [
  { label: "Platform as a Service", abbr: "PaaS" },
  { label: "Software as a Service", abbr: "SaaS" },
  { label: "Infrastructure as a Service", abbr: "IaaS" },
  { label: "Enterprise Resource Planning", abbr: "ERP" },
];

export default function OraclePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <ServicePracticeHero
        eyebrow="ORACLE CONSULTING SERVICES"
        imageSrc="/media/OracleServiceLine.png"
        imageFit="contain"
        imageBackground="#FFFFFF"
      >
        Modernize core systems with <HeroHighlight>Oracle expertise</HeroHighlight> that keeps work moving.
      </ServicePracticeHero>

      {/* ── Intro ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#EFF6FF" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                With its strong stack of enterprise solutions and robust database management capabilities, Oracle software has the potential to optimize your efficiency, organization, and overall performance. Our M&amp;S consultants have been{" "}
                <strong>implementing Oracle software ever since its inception — amassing over three decades of expertise.</strong>
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "2rem" }}>
                Let our end-to-end experts guide your organization through Oracle&rsquo;s complex and ever-changing landscape.
              </p>
              {/* Delivery models */}
              <div className="grid grid-cols-2 gap-3">
                {DELIVERY_MODELS.map((d) => (
                  <div key={d.abbr} style={{ padding: "0.85rem 1rem", borderRadius: "10px", backgroundColor: "white", border: "1px solid rgba(0,31,101,0.1)", boxShadow: "0 2px 8px rgba(0,31,101,0.04)" }}>
                    <p className="font-sans font-bold" style={{ fontSize: "1rem", color: "#001F65" }}>{d.abbr}</p>
                    <p className="font-sans" style={{ fontSize: "0.75rem", color: "#6B7280", marginTop: "2px" }}>{d.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="eyebrow mb-4" style={{ color: "#001F65" }}>CORE COMPETENCIES</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {CORE_COMPETENCIES.map((c) => (
                  <span key={c} className="font-sans font-medium" style={{ fontSize: "0.8rem", color: "#001F65", backgroundColor: "rgba(0,31,101,0.07)", padding: "0.3rem 0.75rem", borderRadius: "5px" }}>
                    {c}
                  </span>
                ))}
              </div>
              <div className="relative overflow-hidden rounded-2xl" style={{ height: "260px", backgroundColor: "#FFFFFF", boxShadow: "0 20px 60px rgba(0,31,101,0.12)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/media/OracleServiceLine.png" alt="Oracle consulting services" style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", padding: "2.25rem" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ───────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#001F65" }}>
        <div className="ms-container">
          <div className="flex flex-col items-center text-center" style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p className="font-serif text-white font-medium" style={{ fontSize: "clamp(1.35rem, 2.6vw, 2rem)", lineHeight: 1.55, marginBottom: "2.5rem" }}>
              M&amp;S Oracle solutions span the full Oracle stack —{" "}
              <strong>Cloud Fusion, SOA, WebCenter, BPM, Identity Management, BI, and eBusiness Suite</strong>. Whatever you&rsquo;re running, we know it.
            </p>
            <Link href="/contact" className="font-sans font-semibold inline-flex items-center gap-2 px-8 py-3 rounded-full"
              style={{ border: "1.5px solid rgba(255,255,255,0.7)", color: "white", fontSize: "0.9rem", letterSpacing: "0.02em" }}>
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container">
          <div className="mb-14">
            <h2 className="font-serif text-ms-navy font-medium" style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", lineHeight: 1.2, marginBottom: "0.5rem" }}>
              M&amp;S Consulting Oracle Software Services
            </h2>
            <p className="font-sans" style={{ fontSize: "1rem", color: "#4A5568", fontStyle: "italic" }}>
              Whether you&rsquo;re starting from scratch or fixing up an implementation that isn&rsquo;t optimized, our M&amp;S team is here to help.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.map(({ Icon, title, body }) => (
              <div key={title} className="flex flex-col gap-4">
                <div className="flex flex-col items-start gap-3 mb-1">
                  <div style={{ width: "52px", height: "52px", borderRadius: "50%", backgroundColor: "#001F65", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={22} color="white" strokeWidth={1.5} />
                  </div>
                  <div style={{ width: "52px", height: "3px", borderRadius: "2px", background: "linear-gradient(90deg, #5CA7F3, #001F65)" }} />
                </div>
                <h3 className="font-sans font-semibold" style={{ fontSize: "1.05rem", color: "#001F65" }}>{title}</h3>
                <div className="marketing-copy" style={{ color: "#4A5568" }}>
                  {body.map((seg, i) => seg.bold
                    ? <strong key={i} style={{ color: "#2D3748" }}>{seg.text}</strong>
                    : <span key={i}>{seg.text}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup tagIds={[7355483]} tone="cream" />
      <MsContactForm />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { LayoutGrid, Code2, HeartHandshake } from "lucide-react";
import { PracticeAreaAccordion } from "@/components/sections/practice-area-accordion";
import { MsContactForm } from "@/components/sections/ms-contact-form";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Enterprise Applications Consulting | M&S Consulting",
  description:
    "Over 20 years helping businesses select, implement, and customize enterprise applications. M&S Consulting specializes in ERP, CRM, custom development, and enterprise software integration.",
};

const SERVICES = [
  {
    Icon: LayoutGrid,
    title: "ERP & Business Applications",
    body: [
      { text: "Which enterprise systems are right for your organization? How do you ensure they align with your processes rather than forcing your team to work around them?", bold: false },
      { text: "Our consultants have deep implementation experience across the leading ERP and business platforms. We help you select, configure, and deploy", bold: false },
      { text: "solutions that fit your workflows — not the other way around.", bold: true },
    ],
  },
  {
    Icon: Code2,
    title: "Custom Development",
    body: [
      { text: "Off-the-shelf software doesn't always solve the right problem.", bold: true },
      { text: "When you need something built specifically for your business — a customer-facing application, an internal tool, or a proprietary workflow engine — our development team builds it with long-term maintainability in mind.", bold: false },
      { text: "We deliver working software on schedule, backed by M&S's 20-year track record of delivery.", bold: false },
    ],
  },
  {
    Icon: HeartHandshake,
    title: "Application Support & Integration",
    body: [
      { text: "Enterprise software is only as valuable as how well your team uses it. After implementation,", bold: false },
      { text: "we stay engaged to ensure your systems stay connected, performant, and aligned with how your business evolves.", bold: true },
      { text: "From API integrations to user training and ongoing support, we keep your enterprise stack running at full effectiveness.", bold: false },
    ],
  },
];

const LEFT_TOOLS = [
  { name: "Salesforce", description: "CRM configuration, custom object development, Sales Cloud, Service Cloud, and Marketing Cloud implementations tailored to your sales and service operations." },
  { name: "SAP", description: "SAP ERP and S/4HANA implementations, migrations, and optimizations. We bring deep functional and technical expertise across finance, supply chain, and HR modules." },
  { name: "Oracle", description: "Oracle Cloud Applications and E-Business Suite implementations. Our team guides you through complex Oracle deployments with precision and minimal disruption." },
  { name: "Microsoft Dynamics", description: "Dynamics 365 configuration and integration across Business Central, Finance & Operations, and Customer Engagement — connected to your broader Microsoft ecosystem." },
];

const RIGHT_TOOLS = [
  { name: "ServiceNow", description: "ITSM, HRSD, and custom workflow automation on the ServiceNow platform. We design and deploy solutions that reduce manual work and surface the right information at the right time." },
  { name: "Power Platform", description: "Low-code applications, automated workflows, and data visualizations using Power Apps, Power Automate, and Power BI — extending your Microsoft investment without heavy development." },
  { name: "Custom Application Development", description: "Web, mobile, and desktop applications built to your specifications. We use modern frameworks and follow engineering best practices to deliver software that scales with your business." },
  { name: "API & Systems Integration", description: "Connect your enterprise systems so data flows where it's needed. We design and implement integration architectures that eliminate silos and reduce manual data entry." },
];

const PLATFORMS = ["Salesforce", "SAP", "Oracle", "Microsoft Dynamics", "ServiceNow", "Power Platform", "Workday", "NetSuite"];

export default function EnterpriseAppsPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 overflow-hidden relative" style={{ backgroundColor: "#0A0E1A" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/media/graphics/geometric-2.png" alt="" aria-hidden="true"
          style={{ position: "absolute", bottom: 0, right: 0, width: "52%", height: "auto", opacity: 0.3, pointerEvents: "none", zIndex: 0 }} />
        <div className="ms-container relative" style={{ zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <p className="eyebrow mb-5" style={{ color: "#5CA7F3" }}>ENTERPRISE APPLICATIONS</p>
              <h1 className="font-serif text-white font-medium" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.75rem)", lineHeight: 1.12, letterSpacing: "-0.01em", marginBottom: "2rem" }}>
                Move faster, work smarter, and{" "}
                <span style={{ fontStyle: "italic", fontWeight: 700, textDecoration: "underline", textDecorationStyle: "wavy", textDecorationColor: "#5CA7F3", textDecorationThickness: "2px", textUnderlineOffset: "4px" }}>achieve more</span>{" "}
                with tailored enterprise software.
              </h1>
              <Link href="/contact" className="font-sans font-semibold inline-flex items-center gap-2 px-7 py-3 rounded-full transition-all duration-200"
                style={{ backgroundColor: "#5CA7F3", color: "#0A0E1A", fontSize: "0.9rem", letterSpacing: "0.01em" }}>
                Schedule a Call
              </Link>
            </FadeIn>
            <FadeIn delay={0.15} className="relative hidden lg:block" style={{ height: "480px" }}>
              <div style={{ position: "absolute", top: 0, left: "8%", right: 0, height: "65%", borderRadius: "20px", overflow: "hidden", transform: "rotate(-1deg)", boxShadow: "0 24px 64px rgba(0,0,0,0.6)", zIndex: 1 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/media/getty-images-jlY4MGjGT68-unsplash-1-scaled.jpg" alt="" aria-hidden="true"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", display: "block" }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ─────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#EFEADB", borderBottom: "1px solid rgba(0,31,101,0.08)" }}>
        <div className="ms-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-[rgba(0,31,101,0.12)]">
            {[
              { value: "20+", label: "Years of enterprise software delivery", note: "Since 2002" },
              { value: "50+", label: "Enterprise platforms implemented", note: "ERP · CRM · ITSM · Custom" },
              { value: "3", label: "Core disciplines", note: "Implementation · Development · Support" },
            ].map((stat, i) => (
              <FadeIn key={stat.value} delay={i * 0.08} className="text-center md:px-10">
                <div className="font-sans font-bold tabular-nums" style={{ fontSize: "clamp(2.4rem, 4vw, 3.5rem)", color: "#001F65", lineHeight: 1, letterSpacing: "-0.02em" }}>{stat.value}</div>
                <div className="font-sans font-semibold mt-2 mb-1" style={{ fontSize: "0.82rem", color: "#001F65", textTransform: "uppercase", letterSpacing: "0.08em" }}>{stat.label}</div>
                <div className="font-sans" style={{ fontSize: "0.75rem", color: "#6B7280" }}>{stat.note}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Intro — image RIGHT ──────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#EFF6FF" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                Enterprise applications are advanced digital tools that can transform the way your business operates. The key to unlocking their full potential lies in{" "}
                <strong>choosing the right ones and customizing them to meet your unique needs.</strong>
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                At M&amp;S Consulting, we&rsquo;ve spent over 20 years helping businesses optimize their marketing, finance, HR, customer relationships, and development cycles with the right enterprise stack — properly implemented and integrated.
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748" }}>
                Let our experienced consultants{" "}
                <strong>resolve your most critical business challenges, streamline your systems, and elevate your efficiency.</strong>
              </p>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="relative overflow-hidden rounded-2xl" style={{ height: "420px", boxShadow: "0 20px 60px rgba(0,31,101,0.12)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/media/curated-lifestyle-kGYWfeL8_64-unsplash-scaled.jpg" alt="M&S Consulting enterprise applications team"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── UNIQUE: Partner Ecosystem strip ─────────────────────────── */}
      <section style={{ backgroundColor: "#001F65" }}>
        <div className="ms-container py-10">
          <FadeIn>
            <p className="eyebrow mb-6 text-center" style={{ color: "rgba(255,255,255,0.5)" }}>PLATFORMS & PARTNERS WE WORK WITH</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {PLATFORMS.map((name, i) => (
                <span key={name} className="font-sans font-semibold" style={{ color: i % 3 === 1 ? "#5CA7F3" : "rgba(255,255,255,0.7)", fontSize: "0.95rem", letterSpacing: "0.02em" }}>
                  {name}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 3: Mission CTA ───────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-20 items-center">
            <FadeIn>
              <p className="eyebrow mb-4" style={{ color: "#001F65" }}>OUR MISSION</p>
              <p className="font-serif font-medium" style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", lineHeight: 1.4, color: "#001F65", marginBottom: "2rem" }}>
                Whether you need to{" "}
                <strong>optimize an existing enterprise system, migrate to a modern platform,</strong>{" "}
                or build a custom application from the ground up — our team is here to be your expert guide.
              </p>
              <Link href="/contact" className="font-sans font-semibold inline-flex items-center gap-2 px-7 py-3 rounded-full transition-all duration-200"
                style={{ backgroundColor: "#001F65", color: "white", fontSize: "0.9rem" }}>
                Schedule a Call
              </Link>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div style={{ borderLeft: "3px solid #FCC541", paddingLeft: "1.5rem" }}>
                <p className="font-sans" style={{ fontSize: "0.9rem", color: "#4A5568", lineHeight: 1.7, marginBottom: "1rem" }}>
                  &ldquo;M&amp;S voted one of the best full service software development agencies&rdquo;
                </p>
                <p className="eyebrow" style={{ color: "#001F65" }}>— Rocketplace, 2020</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Services (3-col cards) ───────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#EFEADB" }}>
        <div className="ms-container">
          <FadeIn className="mb-14">
            <h2 className="font-serif text-ms-navy font-medium" style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", lineHeight: 1.2, marginBottom: "0.5rem" }}>
              M&amp;S Consulting Enterprise Applications Services
            </h2>
            <p className="font-sans" style={{ fontSize: "1rem", color: "#4A5568", fontStyle: "italic" }}>Our expert consultants can help you with&hellip;</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.map(({ Icon, title, body }, i) => (
              <FadeIn key={title} delay={i * 0.1} className="flex flex-col gap-4">
                <div className="flex flex-col items-start gap-3 mb-1">
                  <div style={{ width: "52px", height: "52px", borderRadius: "50%", backgroundColor: "#001F65", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={22} color="white" strokeWidth={1.5} />
                  </div>
                  <div style={{ width: "52px", height: "3px", borderRadius: "2px", background: "linear-gradient(90deg, #5CA7F3, #001F65)" }} />
                </div>
                <h3 className="font-sans font-semibold" style={{ fontSize: "1.05rem", color: "#001F65" }}>{title}</h3>
                <div className="font-sans" style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#4A5568" }}>
                  {body.map((seg, j) => seg.bold ? <strong key={j} style={{ color: "#2D3748" }}>{seg.text}</strong> : <span key={j}>{seg.text} </span>)}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Accordion ────────────────────────────────────── */}
      <PracticeAreaAccordion heading="Enterprise Technologies We Work With" leftTools={LEFT_TOOLS} rightTools={RIGHT_TOOLS} bgImage="/media/ai-rods.jpg" />

      {/* ── SECTION 6: Contact Form ──────────────────────────────────── */}
      <MsContactForm />
    </>
  );
}

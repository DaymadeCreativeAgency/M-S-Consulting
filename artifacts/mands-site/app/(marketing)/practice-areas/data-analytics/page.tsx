import type { Metadata } from "next";
import Link from "next/link";
import { BarChart2, Layers, RefreshCw } from "lucide-react";
import { PracticeAreaAccordion } from "@/components/sections/practice-area-accordion";
import { MsContactForm } from "@/components/sections/ms-contact-form";

export const metadata: Metadata = {
  title: "Data Analytics & Integration Consulting | M&S Consulting",
  description:
    "M&S Consulting helps organizations become truly data-driven — with data strategy, analytics & BI, and systems integration that turns raw data into clear business decisions.",
};

const SERVICES = [
  {
    Icon: BarChart2,
    title: "Analytics & Business Intelligence",
    body: [
      {
        text: "What does your data actually tell you? Are the right people seeing the right metrics at the right time?",
        bold: false,
      },
      {
        text: "We design and deploy analytics platforms and BI dashboards that surface actionable insights for every level of your organization —",
        bold: false,
      },
      {
        text: "from the executive team to the front line.",
        bold: true,
      },
    ],
  },
  {
    Icon: Layers,
    title: "Data Strategy & Architecture",
    body: [
      {
        text: "A data strategy is only as strong as the architecture behind it.",
        bold: true,
      },
      {
        text: "We assess your current data landscape, identify gaps and redundancies, and design a target architecture that makes your data trustworthy, accessible, and governable — regardless of where it lives today.",
        bold: false,
      },
    ],
  },
  {
    Icon: RefreshCw,
    title: "Systems Integration & ETL",
    body: [
      {
        text: "Data trapped in silos is data that can't drive decisions. Our integration specialists connect your source systems —",
        bold: false,
      },
      {
        text: "CRM, ERP, cloud data platforms, and proprietary databases —",
        bold: true,
      },
      {
        text: "with pipelines that deliver clean, timely data to the systems and people who need it.",
        bold: false,
      },
    ],
  },
];

const LEFT_TOOLS = [
  {
    name: "Power BI",
    description:
      "Enterprise BI dashboards, semantic model design, and report development in Power BI. We build solutions that non-technical users can actually navigate — and that analysts can extend.",
  },
  {
    name: "Tableau",
    description:
      "Tableau implementation and dashboard development for organizations that need fast, visual answers to complex data questions. We handle data source connections, calculated fields, and governance.",
  },
  {
    name: "Snowflake",
    description:
      "Data warehouse design and implementation on Snowflake, including schema design, role-based access control, and integration with your existing data pipelines and BI tools.",
  },
  {
    name: "Databricks",
    description:
      "Lakehouse architecture, data engineering pipelines, and machine learning workloads on Databricks — connecting your raw data to production-grade analytics and AI use cases.",
  },
];

const RIGHT_TOOLS = [
  {
    name: "Azure Data Factory",
    description:
      "Cloud-native ETL and data integration pipelines in Azure Data Factory — orchestrating data movement and transformation across cloud and on-premises sources at scale.",
  },
  {
    name: "SQL Server & Azure SQL",
    description:
      "Relational data modeling, query optimization, and enterprise database design. We bring structured discipline to your data layer so your analytics stack has a solid foundation.",
  },
  {
    name: "dbt (Data Build Tool)",
    description:
      "Transformation layer implementation with dbt, bringing software engineering practices — version control, testing, documentation — to your SQL-based data pipelines.",
  },
  {
    name: "Data Governance & Quality",
    description:
      "Data catalogs, lineage tracking, quality rules, and master data management frameworks. We help you establish the policies and tooling needed for data your organization can trust.",
  },
];

export default function DataAnalyticsPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ─────────────────────────────────────────── */}
      <section
        className="py-20 lg:py-28 overflow-hidden relative"
        style={{ backgroundColor: "#0A0E1A" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/graphics/geometric-4.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "55%",
            height: "auto",
            opacity: 0.35,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div className="ms-container relative" style={{ zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — text */}
            <div>
              <p className="eyebrow mb-5" style={{ color: "#5CA7F3" }}>
                DATA ANALYTICS & INTEGRATION
              </p>
              <h1
                className="font-serif text-white font-medium"
                style={{
                  fontSize: "clamp(2.2rem, 4.5vw, 3.75rem)",
                  lineHeight: 1.12,
                  letterSpacing: "-0.01em",
                  marginBottom: "2rem",
                }}
              >
                Say goodbye to guesswork and hello to{" "}
                <span
                  style={{
                    fontStyle: "italic",
                    fontWeight: 700,
                    textDecoration: "underline",
                    textDecorationStyle: "wavy",
                    textDecorationColor: "#5CA7F3",
                    textDecorationThickness: "2px",
                    textUnderlineOffset: "4px",
                  }}
                >
                  data-driven
                </span>{" "}
                decision making.
              </h1>
              <Link
                href="/contact"
                className="font-sans font-semibold inline-flex items-center gap-2 px-7 py-3 rounded-full transition-all duration-200"
                style={{
                  backgroundColor: "#5CA7F3",
                  color: "#0A0E1A",
                  fontSize: "0.9rem",
                  letterSpacing: "0.01em",
                }}
              >
                Schedule a Call
              </Link>
            </div>

            {/* Right — photo card */}
            <div className="relative hidden lg:block" style={{ height: "480px" }}>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "8%",
                  right: 0,
                  height: "65%",
                  borderRadius: "20px",
                  overflow: "hidden",
                  transform: "rotate(-1deg)",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
                  zIndex: 1,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/media/computer-code.jpg"
                  alt=""
                  aria-hidden="true"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Intro body ────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#EFF6FF" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{ height: "420px", boxShadow: "0 20px 60px rgba(0,31,101,0.12)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/media/curated-lifestyle-tO8wazuxn_U-unsplash-scaled.jpg"
                alt="M&S Consulting data analytics team"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
              />
            </div>

            <div>
              <p
                className="font-sans"
                style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}
              >
                Modern businesses have more opportunities than ever to gather data, analyze it, and use it to make improvements. However, many struggle to unlock the full potential of their data. Embracing a data-driven approach is the key to{" "}
                <strong>making more informed decisions, optimizing your operation, and maintaining a competitive edge.</strong>
              </p>
              <p
                className="font-sans"
                style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}
              >
                At M&amp;S Consulting, we&rsquo;ve spent over 20 years helping organizations go beyond surface-level reporting — building the data infrastructure, pipelines, and analytics tools that let every part of the business make decisions with confidence.
              </p>
              <p
                className="font-sans"
                style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748" }}
              >
                Let our experienced consultants{" "}
                <strong>integrate applications that will resolve your most critical business challenges, streamline your systems, and elevate your efficiency.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Mission CTA ───────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#001F65" }}>
        <div className="ms-container">
          <div className="flex flex-col items-center text-center" style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p
              className="font-serif text-white font-medium"
              style={{ fontSize: "clamp(1.35rem, 2.6vw, 2rem)", lineHeight: 1.55, marginBottom: "2.5rem" }}
            >
              The difference between organizations that follow their gut and those that make{" "}
              <strong>evidence-based decisions is staggering.</strong>{" "}
              Our team helps you close that gap — with data architecture, analytics, and integration designed to last.
            </p>
            <Link
              href="/contact"
              className="font-sans font-semibold inline-flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-200"
              style={{ border: "1.5px solid rgba(255,255,255,0.7)", color: "white", fontSize: "0.9rem", letterSpacing: "0.02em" }}
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Services (3-col cards) ───────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container">
          <div className="mb-14">
            <h2
              className="font-serif text-ms-navy font-medium"
              style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", lineHeight: 1.2, marginBottom: "0.5rem" }}
            >
              M&amp;S Consulting Data Analytics &amp; Integration Services
            </h2>
            <p className="font-sans" style={{ fontSize: "1rem", color: "#4A5568", fontStyle: "italic" }}>
              Our expert data consultants can help you with&hellip;
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.map(({ Icon, title, body }) => (
              <div key={title} className="flex flex-col gap-4">
                <div className="flex flex-col items-start gap-3 mb-1">
                  <div style={{ width: "52px", height: "52px", borderRadius: "50%", backgroundColor: "#001F65", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={22} color="white" strokeWidth={1.5} />
                  </div>
                  <div style={{ width: "52px", height: "3px", borderRadius: "2px", background: "linear-gradient(90deg, #5CA7F3, #001F65)" }} />
                </div>
                <h3 className="font-sans font-semibold" style={{ fontSize: "1.05rem", color: "#001F65" }}>{title}</h3>
                <div className="font-sans" style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#4A5568" }}>
                  {body.map((segment, i) =>
                    segment.bold ? (
                      <strong key={i} style={{ color: "#2D3748" }}>{segment.text}</strong>
                    ) : (
                      <span key={i}>{segment.text} </span>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Tools Accordion ──────────────────────────────── */}
      <PracticeAreaAccordion
        heading="Data & Analytics Tools We Work With"
        leftTools={LEFT_TOOLS}
        rightTools={RIGHT_TOOLS}
        bgImage="/media/bigdata-bg.png"
      />

      {/* ── SECTION 6: Contact Form ──────────────────────────────────── */}
      <MsContactForm />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, ArrowUpFromLine, ShieldCheck } from "lucide-react";
import { MsContactForm } from "@/components/sections/ms-contact-form";

export const metadata: Metadata = {
  title: "Snowflake Consulting Services | M&S Consulting",
  description:
    "Optimize data storage and analytics with expert Snowflake solutions. M&S Consulting helps you adopt, implement, and manage Snowflake for cost-efficient, scalable data operations.",
};

const SERVICES = [
  {
    Icon: ClipboardList,
    title: "Strategy and Planning",
    body: [
      { text: "Our advisory services start with clarifying what a successful Snowflake implementation looks like for you based on your existing systems and future goals. Then,", bold: false },
      { text: " our seasoned Snowflake specialists make your organization a customized roadmap for secure, sustainable, and scalable Snowflake success.", bold: true },
      { text: " Snowflake's usage-based pricing model gives you the ability to purchase exactly the storage and compute your organization needs — we help you plan for it intelligently.", bold: false },
    ],
  },
  {
    Icon: ArrowUpFromLine,
    title: "Implementation",
    body: [
      { text: "Transitioning to Snowflake's cloud is big when it comes to modernizing your organization — but that doesn't mean getting from point A to point B has to be a big chore.", bold: false },
      { text: " No matter where you're starting from, our team knows just the right way to guide you to the finish line.", bold: true },
      { text: " We have nearly a decade of experience leading organizations through smooth and seamless Snowflake migrations with minimal disruption to ongoing operations.", bold: false },
    ],
  },
  {
    Icon: ShieldCheck,
    title: "Managed Services",
    body: [
      { text: "We set up a robust and scalable data warehouse for you in Snowflake,", bold: false },
      { text: " bringing together all of your diverse data sources into one simple, clear, convenient platform.", bold: true },
      { text: " We also integrate Snowflake with other popular digital systems so that you can use your preferred tools and applications in conjunction with this solution. Our friendly specialists teach your team to get the most out of this powerful platform.", bold: false },
    ],
  },
];

const CAPABILITIES = [
  { label: "Data Warehouse Design", desc: "Architecture optimized for your query patterns and workload mix" },
  { label: "ETL / ELT Pipelines", desc: "Modern data engineering with dbt, Fivetran, and native Snowflake capabilities" },
  { label: "Data Sharing & Marketplace", desc: "Secure cross-organization data sharing without data movement" },
  { label: "Cost Optimization", desc: "Warehouse sizing, clustering, and query optimization to control spend" },
];

export default function SnowflakePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 overflow-hidden relative" style={{ backgroundColor: "#0A0E1A" }}>
        <div className="ms-container relative" style={{ zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="eyebrow mb-5" style={{ color: "#5CA7F3" }}>SNOWFLAKE CONSULTING SERVICES</p>
              <h1
                className="font-serif text-white font-medium"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.75rem)", lineHeight: 1.12, letterSpacing: "-0.01em", marginBottom: "2rem" }}
              >
                Optimize data storage and analytics with{" "}
                <span style={{ fontStyle: "italic", fontWeight: 700, textDecoration: "underline", textDecorationStyle: "wavy", textDecorationColor: "#5CA7F3", textDecorationThickness: "2px", textUnderlineOffset: "4px" }}>
                  expert Snowflake solutions.
                </span>
              </h1>
              <Link href="/contact" className="font-sans font-semibold inline-flex items-center gap-2 px-7 py-3 rounded-full transition-all duration-200"
                style={{ backgroundColor: "#5CA7F3", color: "#0A0E1A", fontSize: "0.9rem", letterSpacing: "0.01em" }}>
                Schedule a Call
              </Link>
            </div>
            <div className="relative hidden lg:block" style={{ height: "480px" }}>
              <div style={{ position: "absolute", top: 0, left: "8%", right: 0, height: "62%", borderRadius: "20px", overflow: "hidden", transform: "rotate(-1deg)", boxShadow: "0 24px 64px rgba(0,0,0,0.6)", zIndex: 1 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/media/team/consultant-meeting.jpg" alt="" aria-hidden="true" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#EFF6FF" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative overflow-hidden rounded-2xl" style={{ height: "420px", boxShadow: "0 20px 60px rgba(0,31,101,0.12)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/media/team/about-office.png" alt="M&S Consulting team" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
            </div>
            <div>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                A strategic adoption of this leading cloud-based data warehouse will give you the freedom to purchase the exact amount of data storage space and computing power your organization needs, as well as a flexible array of analysis features at your fingertips.
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "2rem" }}>
                Our specialists have helped our clients{" "}
                <strong>adopt, implement, and manage Snowflake seamlessly</strong>. Allow our experienced team to optimize the cost-efficiency of your data storage and processing systems, use your data to generate actionable insights that drive growth, and maximize the value of your Snowflake investment.
              </p>
              {/* Capabilities */}
              <div className="grid grid-cols-1 gap-3">
                {CAPABILITIES.map((c) => (
                  <div key={c.label} style={{ padding: "0.75rem 1rem", borderRadius: "8px", backgroundColor: "white", border: "1px solid rgba(0,31,101,0.08)", display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#5CA7F3", marginTop: "7px", flexShrink: 0 }} />
                    <div>
                      <p className="font-sans font-semibold" style={{ fontSize: "0.875rem", color: "#001F65" }}>{c.label}</p>
                      <p className="font-sans" style={{ fontSize: "0.8rem", color: "#6B7280", marginTop: "1px" }}>{c.desc}</p>
                    </div>
                  </div>
                ))}
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
              From helping you adopt Snowflake and get acquainted with all its functionalities, to providing{" "}
              <strong>end-to-end support that ensures you get the most out of this solution</strong>, our consultants are here to transform the way you store and utilize your data.
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
              M&amp;S Consulting Snowflake Software Services
            </h2>
            <p className="font-sans" style={{ fontSize: "1rem", color: "#4A5568", fontStyle: "italic" }}>
              Our expert Snowflake consultants can help you with&hellip;
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
                <div className="font-sans" style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#4A5568" }}>
                  {body.map((seg, i) => seg.bold
                    ? <strong key={i} style={{ color: "#2D3748" }}>{seg.text}</strong>
                    : <span key={i}>{seg.text}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MsContactForm />
    </>
  );
}

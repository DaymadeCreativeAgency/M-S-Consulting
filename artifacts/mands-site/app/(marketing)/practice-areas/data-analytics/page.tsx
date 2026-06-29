import type { Metadata } from "next";
import Link from "next/link";
import { LineChart, Cpu, Database, Server, BarChart2 } from "lucide-react";
import { PracticeAreaAccordion } from "@/components/sections/practice-area-accordion";
import { MsContactForm } from "@/components/sections/ms-contact-form";
import { FadeIn } from "@/components/ui/fade-in";
import { HeroHighlight, ServicePracticeHero } from "@/components/sections/service-practice-hero";
import { NewsletterSignup } from "@/components/sections/newsletter-signup";

export const metadata: Metadata = {
  title: "Data Analytics & Integration Consulting",
  description:
    "M&S Consulting helps organizations become truly data-driven — with predictive analytics, machine learning, data warehouse, data lake, and business intelligence solutions.",
  alternates: { canonical: "/practice-areas/data-analytics" },
};

const SERVICES = [
  {
    num: "01",
    Icon: LineChart,
    title: "Predictive Analytics",
    body: "Our experts use advanced mathematical techniques and tools to analyze your data, delivering powerful predictions that clear away confusion and guide smarter decisions across your entire organization.",
  },
  {
    num: "02",
    Icon: Cpu,
    title: "Machine Learning",
    body: "Machine learning is powerful but isn't magic — in the hands of the inexperienced, it can lead to invalid and misleading results. Our experienced data scientists help you use ML algorithms effectively so you can make sense of your data and produce reliable predictions.",
  },
  {
    num: "03",
    Icon: Database,
    title: "Data Warehouse",
    body: "Our team specializes in managing all different sorts and sizes of data. We handle the heavy lifting of consolidating all your separate data sources into one organized, central spot — and can incorporate cost-saving open-source tools like Hadoop into your environment.",
  },
  {
    num: "04",
    Icon: Server,
    title: "Data Lake Design & Implementation",
    body: "Although powerful repository tools, data lakes can quickly become swamps if not correctly designed and managed. We lead you through a dependable data lake design using techniques like landing zones, cataloging, data lineage, and unstructured data pre-processing.",
  },
  {
    num: "05",
    Icon: BarChart2,
    title: "Business Intelligence",
    body: "We design and deploy BI dashboards and reporting platforms that surface actionable insights for every level of your organization — from the executive team to the front line. We turn raw data into the answers your business actually needs.",
  },
];

const LEFT_TOOLS = [
  { name: "Power BI", description: "Enterprise BI dashboards, semantic model design, and report development. We build solutions that non-technical users can actually navigate — and that analysts can extend." },
  { name: "Tableau", description: "Tableau implementation and dashboard development for organizations that need fast, visual answers to complex data questions." },
  { name: "Snowflake", description: "Data warehouse design and implementation on Snowflake, including schema design, role-based access control, and integration with your existing data pipelines and BI tools." },
  { name: "Databricks", description: "Lakehouse architecture, data engineering pipelines, and ML workloads on Databricks — connecting your raw data to production-grade analytics and AI use cases." },
];

const RIGHT_TOOLS = [
  { name: "Azure Data Factory", description: "Cloud-native ETL and data integration pipelines in Azure Data Factory — orchestrating data movement and transformation across cloud and on-premises sources at scale." },
  { name: "SQL Server & Azure SQL", description: "Relational data modeling, query optimization, and enterprise database design. We bring structured discipline to your data layer so your analytics stack has a solid foundation." },
  { name: "dbt (Data Build Tool)", description: "Transformation layer implementation with dbt, bringing software engineering practices — version control, testing, documentation — to your SQL-based data pipelines." },
  { name: "Data Governance & Quality", description: "Data catalogs, lineage tracking, quality rules, and master data management frameworks. We help you establish the policies and tooling needed for data your organization can trust." },
];

const HBR_ROWS = [
  { metric: "Operational Efficiency", driven: "81%", not: "58%" },
  { metric: "Revenue Growth", driven: "77%", not: "61%" },
  { metric: "Customer Loyalty & Retention", driven: "77%", not: "45%" },
  { metric: "Employee Satisfaction", driven: "68%", not: "39%" },
  { metric: "IT Cost Predictability", driven: "59%", not: "44%" },
];

export default function DataAnalyticsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <ServicePracticeHero
        eyebrow="DATA ANALYTICS & INTEGRATION"
        imageSrc="/media/Big-Data-1.jpg"
        imageFit="cover"
        imageObjectPosition="center"
        imageBackground="#0A0E1A"
      >
        Make smarter, <HeroHighlight>data-driven</HeroHighlight> decisions across your organization.
      </ServicePracticeHero>

      {/* ── HBR data table (replaces generic stats strip) ────────────── */}
      <section style={{ backgroundColor: "#EFEADB", borderBottom: "1px solid rgba(0,31,101,0.08)" }}>
        <div className="ms-container py-14">
          <FadeIn className="mb-8">
            <p className="eyebrow mb-2" style={{ color: "#001F65" }}>THE BUSINESS CASE FOR DATA</p>
            <p className="marketing-copy font-semibold" style={{ color: "#4A5568" }}>
              According to a survey by Harvard Business Review, data-driven businesses outperform their peers across every key metric:
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="overflow-x-auto">
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid rgba(0,31,101,0.15)" }}>
                    <th className="font-sans font-semibold text-left py-3 pr-6" style={{ fontSize: "0.78rem", color: "#001F65", textTransform: "uppercase", letterSpacing: "0.06em" }}>Performance Area</th>
                    <th className="font-sans font-semibold py-3 px-4 text-center" style={{ fontSize: "0.78rem", color: "#001F65", textTransform: "uppercase", letterSpacing: "0.06em", backgroundColor: "rgba(0,31,101,0.06)", borderRadius: "4px 4px 0 0" }}>Data-Driven</th>
                    <th className="font-sans font-semibold py-3 px-4 text-center" style={{ fontSize: "0.78rem", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.06em" }}>Not Data-Driven</th>
                  </tr>
                </thead>
                <tbody>
                  {HBR_ROWS.map((row, i) => (
                    <tr key={row.metric} style={{ borderBottom: "1px solid rgba(0,31,101,0.08)", backgroundColor: i % 2 === 0 ? "transparent" : "rgba(0,31,101,0.02)" }}>
                      <td className="marketing-note py-3 pr-6" style={{ color: "#2D3748" }}>{row.metric}</td>
                      <td className="font-sans font-bold py-3 px-4 text-center" style={{ fontSize: "1rem", color: "#001F65", backgroundColor: "rgba(0,31,101,0.06)" }}>{row.driven}</td>
                      <td className="marketing-note py-3 px-4 text-center" style={{ color: "#4B5563" }}>{row.not}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Intro — image right ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#EFF6FF" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                Modern businesses have more opportunities than ever to gather data, analyze it, and use it to make improvements. However, many struggle to unlock the full potential of their data.
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                Embracing a data-driven approach is the key to{" "}
                <strong>making more informed decisions, optimizing your operation, and maintaining a competitive edge in your industry.</strong>
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748" }}>
                At M&amp;S Consulting, we&rsquo;ve spent over 20 years equipping clients to utilize comprehensive, specific data to{" "}
                <strong>work smarter and accelerate their growth.</strong>
              </p>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="relative overflow-hidden rounded-2xl" style={{ height: "420px", boxShadow: "0 20px 60px rgba(0,31,101,0.12)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/media/curated-lifestyle-tO8wazuxn_U-unsplash-scaled.jpg" alt="M&S Consulting data analytics team"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Editorial pull-quote ─────────────────────────────────────── */}
      <section style={{ backgroundColor: "#EFEADB" }}>
        <div className="ms-container py-20 lg:py-24">
          <FadeIn style={{ maxWidth: "880px" }}>
            <p className="eyebrow mb-6" style={{ color: "#001F65" }}>THE DATA IMPERATIVE</p>
            <blockquote className="font-serif font-medium" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.25, color: "#001F65", marginBottom: "1.5rem" }}>
              &ldquo;Every business has data.{" "}
              <span style={{ fontStyle: "italic", color: "#5CA7F3" }}>Few businesses actually use it.</span>&rdquo;
            </blockquote>
            <p className="font-sans" style={{ fontSize: "1rem", color: "#4A5568", lineHeight: 1.7, maxWidth: "600px" }}>
              The difference between organizations that follow gut instinct and those that make evidence-based decisions is measurable — in revenue, customer retention, and speed to market. We close that gap.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Mission CTA ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#001F65" }}>
        <div className="ms-container">
          <FadeIn className="flex flex-col items-center text-center" style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p className="font-serif text-white font-medium" style={{ fontSize: "clamp(1.35rem, 2.6vw, 2rem)", lineHeight: 1.55, marginBottom: "2.5rem" }}>
              The difference between organizations that follow their gut and those that make{" "}
              <strong>evidence-based decisions is staggering.</strong>{" "}
              Our team helps you close that gap — with data architecture, analytics, and integration designed to last.
            </p>
            <Link href="/contact" className="font-sans font-semibold inline-flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-200"
              style={{ border: "1.5px solid rgba(255,255,255,0.7)", color: "white", fontSize: "0.9rem" }}>
              Schedule a Call
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Services — numbered, 2-col ───────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container">
          <FadeIn className="mb-14">
            <p className="eyebrow mb-3" style={{ color: "#001F65" }}>HOW WE USE DATA</p>
            <h2 className="font-serif text-ms-navy font-medium" style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", lineHeight: 1.2, marginBottom: "0.5rem" }}>
              Boost Your Business Intelligence
            </h2>
            <p className="font-sans" style={{ fontSize: "1rem", color: "#4A5568", fontStyle: "italic" }}>Our data experts specialize in&hellip;</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map(({ num, Icon, title, body }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div className="flex gap-5">
                  <div style={{ fontFamily: "sans-serif", fontWeight: 700, fontSize: "2rem", color: "rgba(0,31,101,0.12)", lineHeight: 1, flexShrink: 0, minWidth: "2.5rem" }}>{num}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={16} color="#001F65" strokeWidth={1.5} />
                      <h3 className="font-sans font-semibold" style={{ fontSize: "1rem", color: "#001F65" }}>{title}</h3>
                    </div>
                    <p className="marketing-copy" style={{ color: "#4A5568" }}>{body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accordion ───────────────────────────────────────────────── */}
      <PracticeAreaAccordion heading="Data & Analytics Tools We Work With" leftTools={LEFT_TOOLS} rightTools={RIGHT_TOOLS} />
      {/* ── Newsletter ──────────────────────────────────────────── */}
      <NewsletterSignup tagIds={[7355490]} tone="cream" />

      {/* ── Contact ─────────────────────────────────────────────────── */}
      <MsContactForm />
    </>
  );
}

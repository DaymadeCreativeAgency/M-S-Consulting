import type { Metadata } from "next";
import Link from "next/link";
import { Network, ArrowUpFromLine, Lightbulb, ShieldCheck, DollarSign, GitBranch } from "lucide-react";
import { PracticeAreaAccordion } from "@/components/sections/practice-area-accordion";
import { MsContactForm } from "@/components/sections/ms-contact-form";
import { FadeIn } from "@/components/ui/fade-in";
import { HeroHighlight, ServicePracticeHero } from "@/components/sections/service-practice-hero";

export const metadata: Metadata = {
  title: "Cloud & Infrastructure Consulting",
  description:
    "Over 20 years designing and delivering cloud and infrastructure solutions. On-prem, private cloud, public cloud, and hybrid environments. AWS Well-Architected Partner.",
  alternates: { canonical: "/practice-areas/cloud" },
};

const SERVICES = [
  {
    Icon: Network,
    title: "Hybrid & Multi-Cloud",
    body: "No two organizations are the same — and neither are their cloud requirements. Want to blend the best of on-prem and cloud? We can make it happen. Want to pick and choose products from separate cloud providers? We've got you there, too. We design tailored solutions that ensure optimal performance, cost-efficiency, and alignment with your unique needs.",
  },
  {
    Icon: ArrowUpFromLine,
    title: "Cloud Migration & Data Center",
    body: "Whether you need to build a brand-new cloud solution from scratch or upgrade an existing data center using your preferred cloud or virtualization vendor, our consultants are here to help. We make the process of storing, organizing, and managing your data within cloud infrastructure smooth, fast, and hassle-free — with minimal disruption to your operations.",
  },
  {
    Icon: Lightbulb,
    title: "Cloud Advisory & Managed Services",
    body: "Cloud solutions aren't a 'set it and forget it' kind of investment. Cloud technology continues to evolve at a rapid pace every day. With our expert advisory, you can ensure you're taking full advantage of the most cutting-edge cloud innovations and reaping the highest ROI on your chosen solutions.",
  },
  {
    Icon: ShieldCheck,
    title: "Cloud Security",
    body: "Moving your data from on-prem to the cloud requires robust protections. When we design cloud infrastructure, we build security into every layer from day one. This approach protects your peace of mind and reputation while also keeping you fully compliant with industry regulations.",
  },
  {
    Icon: DollarSign,
    title: "Cloud Cost Optimization (FinOps)",
    body: "Estimates suggest that about 30% of cloud spend is wasted. How can you make sure you're using the most effective cloud technology while minimizing cost? Our seasoned advisors guide your cloud infrastructure financial strategy — right-sizing resources, eliminating waste, and maximizing return on every dollar spent.",
  },
  {
    Icon: GitBranch,
    title: "DevOps & DevSecOps",
    body: "DevOps promotes collaboration between development and operations teams, enabling higher-speed, higher-quality deployments. Let our consultants harness the power of cloud computing to integrate DevOps and DevSecOps into your operations — with security built into every stage of the pipeline, not bolted on at the end.",
  },
];

const LEFT_TOOLS = [
  { name: "Amazon Web Services (AWS)", description: "M&S is an AWS Well-Architected Partner. We design workloads that adhere to the five pillars: Operational Excellence, Security, Reliability, Performance Efficiency, and Cost Optimization." },
  { name: "Microsoft Azure", description: "Azure infrastructure design, deployment, and optimization — including Entra ID, AKS, Azure AI services, and hybrid connectivity through Azure Arc and Azure Stack." },
  { name: "Google Cloud Platform", description: "GCP workload design and implementation across Compute Engine, GKE, BigQuery, and Cloud Run — with a focus on data-intensive and analytics-driven architectures." },
  { name: "DevSecOps & CI/CD", description: "Security integrated at every stage of the delivery pipeline. We implement automated testing, vulnerability scanning, and compliance gates so your deployments are safe by design." },
];

const RIGHT_TOOLS = [
  { name: "Kubernetes & Containerization", description: "Container strategy, Kubernetes cluster design, and workload migration — moving from monolithic deployments to resilient, scalable container-based architectures." },
  { name: "Infrastructure as Code", description: "Terraform, AWS CloudFormation, and Bicep-based infrastructure automation. We codify your cloud environments so they're repeatable, version-controlled, and auditable." },
  { name: "Hybrid & Multi-Cloud", description: "We design hybrid architectures that bridge your on-premises investments with public cloud capabilities, without sacrificing security or manageability." },
  { name: "Cloud Security & Compliance", description: "We establish clear security boundaries, implement cloud-native controls, and validate compliance postures for FedRAMP, HIPAA, SOC 2, and NIST frameworks." },
];

export default function CloudPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <ServicePracticeHero
        eyebrow="CLOUD & INFRASTRUCTURE"
        imageSrc="/media/Cloud.jpg"
        imageFit="cover"
        imageObjectPosition="center"
        imageBackground="#0A0E1A"
      >
        Optimize your efficiency and <HeroHighlight>scale effortlessly</HeroHighlight> through the dynamic capabilities of cloud technology.
      </ServicePracticeHero>

      {/* ── Stats strip ──────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#EFEADB", borderBottom: "1px solid rgba(0,31,101,0.08)" }}>
        <div className="ms-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-[rgba(0,31,101,0.12)]">
            {[
              { value: "AWS", label: "Well-Architected Partner", note: "5-pillar framework delivery" },
              { value: "Any", label: "Cloud environment", note: "On-prem · Private · Hybrid · Public" },
              { value: "~30%", label: "Of cloud spend is wasted", note: "We find and eliminate it" },
            ].map((s, i) => (
              <FadeIn key={s.value} delay={i * 0.08} className="text-center md:px-10">
                <div className="font-sans font-bold tabular-nums" style={{ fontSize: "clamp(2.4rem, 4vw, 3.5rem)", color: "#001F65", lineHeight: 1, letterSpacing: "-0.02em" }}>{s.value}</div>
                <div className="font-sans font-semibold mt-2 mb-1" style={{ fontSize: "0.82rem", color: "#001F65", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
                <div className="font-sans" style={{ fontSize: "0.75rem", color: "#6B7280" }}>{s.note}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro — image left ───────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#EFF6FF" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn delay={0.08}>
              <div className="relative overflow-hidden rounded-2xl" style={{ height: "420px", boxShadow: "0 20px 60px rgba(0,31,101,0.12)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/media/server-room.jpg" alt="Modern cloud infrastructure data center"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
              </div>
            </FadeIn>
            <FadeIn>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                With the power of cloud computing, businesses no longer need to manage outdated on-premises servers — costly and burdensome to scale. But if your business was built on traditional systems, evolving into a cloud-based organization may seem overwhelming.
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "2rem" }}>
                Our experts have over 20 years of experience designing and implementing personalized cloud strategies that modernize businesses from the ground up. We specialize in{" "}
                <strong>hybrid and multi-cloud environments</strong> — meeting you right where you&rsquo;re at and taking you exactly where you want to go.
              </p>
              <div style={{ borderLeft: "3px solid #FCC541", paddingLeft: "1.25rem", padding: "1rem 1.25rem", borderRadius: "0 8px 8px 0", backgroundColor: "rgba(0,31,101,0.04)" }}>
                <p className="eyebrow mb-1" style={{ color: "#001F65" }}>AWS WELL-ARCHITECTED PARTNER</p>
                <p className="font-sans" style={{ fontSize: "0.875rem", color: "#4A5568", lineHeight: 1.6 }}>
                  Demonstrated ability to design cloud workloads across all five pillars: Operational Excellence, Security, Reliability, Performance Efficiency, and Cost Optimization.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── "Why Cloud" cost comparison ──────────────────────────────── */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn>
              <p className="eyebrow mb-4" style={{ color: "#001F65" }}>MAXIMIZE AGILITY, MINIMIZE COSTS</p>
              <h2 className="font-serif font-medium" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#001F65", lineHeight: 1.3, marginBottom: "1.25rem" }}>
                On-prem servers may have sufficed in the past — but cloud infrastructure is the way of the future.
              </h2>
              <p className="font-sans" style={{ fontSize: "0.95rem", color: "#4A5568", lineHeight: 1.7 }}>
                Cloud technology frees you from expensive hardware cycles, unpredictable maintenance costs, and the inability to scale on demand. The economics are clear — and we help you capture the full upside.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Scalability", cloud: "Elastic — up or down in minutes", onprem: "Requires hardware procurement" },
                  { label: "Cost model", cloud: "Pay-as-you-go OpEx", onprem: "Large CapEx, slow ROI" },
                  { label: "Maintenance", cloud: "Managed by provider", onprem: "In-house team required" },
                  { label: "Disaster recovery", cloud: "Built-in, multi-region", onprem: "Costly to replicate" },
                ].map((row, i) => (
                  <div key={row.label} style={{ padding: "1rem", borderRadius: "10px", backgroundColor: i % 2 === 0 ? "#EFF6FF" : "#EFEADB" }}>
                    <p className="eyebrow mb-2" style={{ color: "#001F65" }}>{row.label}</p>
                    <p className="font-sans font-semibold mb-1" style={{ fontSize: "0.8rem", color: "#001F65" }}>☁ {row.cloud}</p>
                    <p className="font-sans" style={{ fontSize: "0.8rem", color: "#9CA3AF" }}>⬜ {row.onprem}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Mission CTA ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#001F65" }}>
        <div className="ms-container">
          <FadeIn className="flex flex-col items-center text-center" style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p className="font-serif text-white font-medium" style={{ fontSize: "clamp(1.35rem, 2.6vw, 2rem)", lineHeight: 1.55, marginBottom: "2.5rem" }}>
              Whether you&rsquo;re just starting your cloud journey or looking to{" "}
              <strong>perfect an existing multi-cloud environment,</strong>{" "}
              our team is ready to address your most critical infrastructure challenges — all while staying within your budget.
            </p>
            <Link href="/contact" className="font-sans font-semibold inline-flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-200"
              style={{ border: "1.5px solid rgba(255,255,255,0.7)", color: "white", fontSize: "0.9rem" }}>
              Schedule a Call
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Services — 3-col, 6 cards ────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#EFEADB" }}>
        <div className="ms-container">
          <FadeIn className="mb-14">
            <p className="eyebrow mb-3" style={{ color: "#001F65" }}>WHAT WE DO</p>
            <h2 className="font-serif text-ms-navy font-medium" style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", lineHeight: 1.2, marginBottom: "0.5rem" }}>
              M&amp;S Consulting Cloud &amp; Infrastructure Services
            </h2>
            <p className="font-sans" style={{ fontSize: "1rem", color: "#4A5568", fontStyle: "italic" }}>Our expert cloud consultants can help you with&hellip;</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map(({ Icon, title, body }, i) => (
              <FadeIn key={title} delay={i * 0.08} className="flex flex-col gap-4">
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "#001F65", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={20} color="white" strokeWidth={1.5} />
                </div>
                <div style={{ width: "40px", height: "3px", borderRadius: "2px", background: "linear-gradient(90deg,#5CA7F3,#001F65)" }} />
                <h3 className="font-sans font-semibold" style={{ fontSize: "1rem", color: "#001F65" }}>{title}</h3>
                <p className="font-sans" style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#4A5568" }}>{body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accordion ───────────────────────────────────────────────── */}
      <PracticeAreaAccordion heading="Cloud Technologies We Work With" leftTools={LEFT_TOOLS} rightTools={RIGHT_TOOLS} />

      {/* ── Contact ─────────────────────────────────────────────────── */}
      <MsContactForm />
    </>
  );
}

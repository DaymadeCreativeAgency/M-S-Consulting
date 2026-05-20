import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, ArrowUpFromLine, ShieldCheck } from "lucide-react";
import { PracticeAreaAccordion } from "@/components/sections/practice-area-accordion";
import { MsContactForm } from "@/components/sections/ms-contact-form";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Cloud & Infrastructure Consulting | M&S Consulting",
  description:
    "Over 20 years designing and delivering cloud and infrastructure solutions for government and enterprise. On-prem, private cloud, public cloud, and hybrid environments.",
};

const SERVICES = [
  {
    Icon: ClipboardList,
    title: "Cloud Strategy & Planning",
    body: [
      { text: "Where should your workloads live? What does a phased migration look like for your organization? How do you balance cost, performance, and security?", bold: false },
      { text: "Our team builds practical cloud roadmaps grounded in your current infrastructure, budget, and business objectives — so you can", bold: false },
      { text: "move to the cloud with confidence, not guesswork.", bold: true },
    ],
  },
  {
    Icon: ArrowUpFromLine,
    title: "Migration & Implementation",
    body: [
      { text: "Moving to the cloud is more than a lift-and-shift exercise.", bold: true },
      { text: "Our engineers assess your existing environment, design the target architecture, and execute migrations that minimize downtime and risk — whether you're moving from on-prem servers, modernizing a legacy data center, or consolidating across cloud providers.", bold: false },
    ],
  },
  {
    Icon: ShieldCheck,
    title: "Managed Cloud Services",
    body: [
      { text: "Cloud environments require continuous attention. Costs drift. Performance degrades. Security postures change.", bold: false },
      { text: "We monitor, optimize, and govern your cloud infrastructure on an ongoing basis,", bold: true },
      { text: "keeping your environment secure, right-sized, and aligned with where your business is heading — not where it was six months ago.", bold: false },
    ],
  },
];

const LEFT_TOOLS = [
  { name: "Amazon Web Services (AWS)", description: "M&S is an AWS Well-Architected Partner. We design workloads that adhere to the five pillars of the Well-Architected Framework: Operational Excellence, Security, Reliability, Performance Efficiency, and Cost Optimization." },
  { name: "Microsoft Azure", description: "Azure infrastructure design, deployment, and optimization — including Entra ID, AKS, Azure AI services, and hybrid connectivity through Azure Arc and Azure Stack." },
  { name: "Google Cloud Platform", description: "GCP workload design and implementation across Compute Engine, GKE, BigQuery, and Cloud Run — with a focus on data-intensive and analytics-driven architectures." },
  { name: "DevSecOps & CI/CD", description: "Security integrated at every stage of the delivery pipeline. We implement automated testing, vulnerability scanning, and compliance gates so your deployments are safe by design." },
];

const RIGHT_TOOLS = [
  { name: "Kubernetes & Containerization", description: "Container strategy, Kubernetes cluster design, and workload migration. We help you move from monolithic deployments to resilient, scalable container-based architectures managed at enterprise scale." },
  { name: "Infrastructure as Code", description: "Terraform, AWS CloudFormation, and Bicep-based infrastructure automation. We codify your cloud environments so they're repeatable, version-controlled, and auditable." },
  { name: "Hybrid & Multi-Cloud", description: "We design hybrid architectures that bridge your on-premises investments with public cloud capabilities, without sacrificing security or manageability." },
  { name: "Cloud Security & Compliance", description: "We establish clear security boundaries, implement cloud-native controls, and validate compliance postures for FedRAMP, HIPAA, SOC 2, and NIST frameworks." },
];

export default function CloudPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 overflow-hidden relative" style={{ backgroundColor: "#0A0E1A" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/media/graphics/geometric-8-1.png" alt="" aria-hidden="true"
          style={{ position: "absolute", bottom: 0, right: 0, width: "52%", height: "auto", opacity: 0.3, pointerEvents: "none", zIndex: 0 }} />
        <div className="ms-container relative" style={{ zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <p className="eyebrow mb-5" style={{ color: "#5CA7F3" }}>CLOUD & INFRASTRUCTURE</p>
              <h1 className="font-serif text-white font-medium" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.75rem)", lineHeight: 1.12, letterSpacing: "-0.01em", marginBottom: "2rem" }}>
                Optimize your efficiency and{" "}
                <span style={{ fontStyle: "italic", fontWeight: 700, textDecoration: "underline", textDecorationStyle: "wavy", textDecorationColor: "#5CA7F3", textDecorationThickness: "2px", textUnderlineOffset: "4px" }}>scale effortlessly</span>{" "}
                through the dynamic capabilities of cloud technology.
              </h1>
              <Link href="/contact" className="font-sans font-semibold inline-flex items-center gap-2 px-7 py-3 rounded-full transition-all duration-200"
                style={{ backgroundColor: "#5CA7F3", color: "#0A0E1A", fontSize: "0.9rem", letterSpacing: "0.01em" }}>
                Schedule a Call
              </Link>
            </FadeIn>
            <FadeIn delay={0.15} className="relative hidden lg:block" style={{ height: "480px" }}>
              <div style={{ position: "absolute", top: 0, left: "8%", right: 0, height: "65%", borderRadius: "20px", overflow: "hidden", transform: "rotate(-1deg)", boxShadow: "0 24px 64px rgba(0,0,0,0.6)", zIndex: 1 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/media/dc-metro-station-scaled-1.webp" alt="" aria-hidden="true"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
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
              { value: "AWS", label: "Well-Architected Partner", note: "5-pillar framework delivery" },
              { value: "Any", label: "Cloud environment", note: "On-prem · Private · Hybrid · Public" },
              { value: "20+", label: "Years of cloud delivery", note: "Government & commercial clients" },
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

      {/* ── SECTION 2: Intro + AWS callout ──────────────────────────── */}
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
                Our Cloud and Infrastructure practice specializes in cloud capabilities that optimize businesses — with the ability to deliver in any type of environment. Whether on-prem, private, government cloud, or a hybrid setup,{" "}
                <strong>we optimize cloud technology to best align to your business model and requirements.</strong>
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "2rem" }}>
                We specialize in hybrid and multi-cloud environments — meeting you where you are and taking you exactly where you want to go.
              </p>
              {/* AWS Well-Architected callout */}
              <div style={{ borderLeft: "3px solid #FCC541", paddingLeft: "1.25rem", backgroundColor: "rgba(0,31,101,0.04)", padding: "1rem 1.25rem", borderRadius: "0 8px 8px 0" }}>
                <p className="eyebrow mb-1" style={{ color: "#001F65" }}>AWS WELL-ARCHITECTED PARTNER</p>
                <p className="font-sans" style={{ fontSize: "0.875rem", color: "#4A5568", lineHeight: 1.6 }}>
                  We have the demonstrated ability to design cloud workloads across all five pillars: Operational Excellence, Security, Reliability, Performance Efficiency, and Cost Optimization.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Mission CTA ───────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#001F65" }}>
        <div className="ms-container">
          <FadeIn className="flex flex-col items-center text-center" style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p className="font-serif text-white font-medium" style={{ fontSize: "clamp(1.35rem, 2.6vw, 2rem)", lineHeight: 1.55, marginBottom: "2.5rem" }}>
              Whether you&rsquo;re just starting your cloud journey or looking to{" "}
              <strong>perfect an existing multi-cloud environment,</strong>{" "}
              our team is ready to address your most critical infrastructure challenges — all while staying within your budget.
            </p>
            <Link href="/contact" className="font-sans font-semibold inline-flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-200"
              style={{ border: "1.5px solid rgba(255,255,255,0.7)", color: "white", fontSize: "0.9rem", letterSpacing: "0.02em" }}>
              Schedule a Call
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 4: Services ─────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container">
          <FadeIn className="mb-14">
            <h2 className="font-serif text-ms-navy font-medium" style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", lineHeight: 1.2, marginBottom: "0.5rem" }}>
              M&amp;S Consulting Cloud &amp; Infrastructure Services
            </h2>
            <p className="font-sans" style={{ fontSize: "1rem", color: "#4A5568", fontStyle: "italic" }}>Our expert cloud consultants can help you with&hellip;</p>
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
      <PracticeAreaAccordion heading="Cloud Technologies We Work With" leftTools={LEFT_TOOLS} rightTools={RIGHT_TOOLS} bgImage="/media/server-room.jpg" />

      {/* ── SECTION 6: Contact Form ──────────────────────────────────── */}
      <MsContactForm />
    </>
  );
}

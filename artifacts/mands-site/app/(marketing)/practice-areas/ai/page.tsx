import type { Metadata } from "next";
import Link from "next/link";
import { Map, ShieldCheck, Cpu, BarChart2 } from "lucide-react";
import { AiServicesAccordion } from "@/components/sections/ai-services-accordion";
import { RoadmapCallout } from "@/components/roadmap/roadmap-callout";
import { MsContactForm } from "@/components/sections/ms-contact-form";
import { FadeIn } from "@/components/ui/fade-in";
import { HeroHighlight, ServicePracticeHero } from "@/components/sections/service-practice-hero";
import { NewsletterSignup } from "@/components/sections/newsletter-signup";

export const metadata: Metadata = {
  title: "Artificial Intelligence Consulting",
  description:
    "For 20 years, M&S Consulting has helped businesses integrate AI safely and effectively. AI strategy, Agentic AI, governance, security, data architecture, and enterprise AI implementation.",
  alternates: { canonical: "/practice-areas/ai" },
};

const SERVICES = [
  {
    Icon: Map,
    title: "AI Strategy & Roadmap",
    body: "How should your organization approach AI? Which use cases will deliver real ROI? What does a responsible, phased implementation look like given your current data and infrastructure? Our team helps you answer these questions with specificity, building a practical AI roadmap grounded in your capabilities, timelines, and risk tolerance.",
  },
  {
    Icon: ShieldCheck,
    title: "Security & Governance for AI",
    body: "AI governance isn't a checkbox, it's a core design requirement. We protect your data with secure AI solutions informed by policy, reinforced by end-user training, and backed by human oversight at every stage. Every autonomous process we design includes defined escalation paths and human review checkpoints appropriate to the risk level of the decision being made.",
  },
  {
    Icon: Cpu,
    title: "Agentic AI & Automation",
    body: "Agentic AI systems autonomously plan, execute, and adapt tasks to achieve business goals, dynamically adjusting to changing conditions in real time. We design human-machine workflows where AI triggers actions across your CRM, ERP, marketing platforms, and data systems, connecting your enterprise at a level of integration that wasn't previously possible.",
  },
  {
    Icon: BarChart2,
    title: "AI-Ready Data Architecture",
    body: "AI is only as reliable as the data it's built on. Before models, you need clean pipelines, governed data stores, and quality frameworks. Our data engineers design the underlying architecture that makes your AI systems trustworthy, auditable, and capable of improving over time, not just impressive in a demo.",
  },
];

export default function AIPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <ServicePracticeHero
        eyebrow="ARTIFICIAL INTELLIGENCE CONSULTING"
        imageSrc="/media/ai-page-card.jpg"
        imageFit="cover"
        imageObjectPosition="center"
        imageBackground="#0A0E1A"
      >
        <HeroHighlight>Secure</HeroHighlight> AI-driven transformation at your fingertips.
      </ServicePracticeHero>

      {/* ── Stats strip ──────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#EFEADB", borderBottom: "1px solid rgba(0,31,101,0.08)" }}>
        <div className="ms-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-[rgba(0,31,101,0.12)]">
            {[
              { value: "20+", label: "Years integrating AI & analytics", note: "From machine learning to agentic AI" },
              { value: "100%", label: "Human oversight in every workflow", note: "Governance-first by design" },
              { value: "250+", label: "Consultants on staff", note: "Commercial & public sector expertise" },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08} className="text-center md:px-10">
                <div className="font-sans font-bold tabular-nums" style={{ fontSize: "clamp(2.4rem, 4vw, 3.5rem)", color: "#001F65", lineHeight: 1, letterSpacing: "-0.02em" }}>{s.value}</div>
                <div className="font-sans font-semibold mt-2 mb-1" style={{ fontSize: "0.82rem", color: "#001F65", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
                <div className="marketing-note" style={{ color: "#4B5563" }}>{s.note}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro, image left ───────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#EFF6FF" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn delay={0.08}>
              <div className="relative overflow-hidden rounded-2xl" style={{ height: "420px", boxShadow: "0 20px 60px rgba(0,31,101,0.12)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/media/ai-consulting-services-tinified.jpg" alt="AI consulting and strategy visualization"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              </div>
            </FadeIn>
            <FadeIn>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                Artificial Intelligence is more than a buzzword. It&rsquo;s a transformative tool that&rsquo;s rippling across every industry, changing the way people work and do business at a fundamental level. For{" "}
                <strong>over 20 years, M&amp;S Consulting has been helping businesses integrate AI and machine learning strategically</strong>, with an emphasis on governance, data quality, and adoption.
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                Our seasoned team of AI professionals is here to safely and efficiently integrate AI capabilities into businesses looking to gain a genuine competitive edge, not just check a box.
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748" }}>
                We build AI systems that run, and{" "}
                <strong>help your teams run them well, with confidence and without fear.</strong>
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Governance-first triptych ────────────────────────────────── */}
      <section style={{ backgroundColor: "#EFEADB" }}>
        <div className="ms-container py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-center">
            <FadeIn>
              <p className="eyebrow mb-4" style={{ color: "#001F65" }}>OUR APPROACH</p>
              <div className="font-serif font-medium" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#001F65", lineHeight: 1.3 }}>
                Governance<br />first.<br />
                <span style={{ fontStyle: "italic", color: "#5CA7F3" }}>Always.</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: "Responsible AI", body: "Every system we design includes human review checkpoints and defined escalation paths calibrated to the risk of each decision." },
                  { label: "Data Integrity", body: "AI is only as trustworthy as the data it learns from. We build the pipelines and governance structures that make your AI reliable." },
                  { label: "End-user Adoption", body: "Tools your team won't use don't deliver ROI. We design for adoption from day one, with training, feedback loops, and change management built in." },
                ].map((item, i) => (
                  <div key={item.label} style={{ paddingTop: "1rem", borderTop: "2px solid #FCC541" }}>
                    <p className="font-sans font-semibold mb-2" style={{ fontSize: "0.875rem", color: "#001F65" }}>{item.label}</p>
                    <p className="marketing-copy" style={{ color: "#4A5568" }}>{item.body}</p>
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
              Whether you aim to{" "}
              <strong>adopt one AI capability, build a full roadmap,</strong> or anything in between, our team is here to be your expert guide and trusted partner. Our mission: to make the absolute most of AI&rsquo;s potential for your organization,{" "}
              <strong>safely and sustainably.</strong>
            </p>
            <Link href="/contact" className="font-sans font-semibold inline-flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-200"
              style={{ border: "1.5px solid rgba(255,255,255,0.7)", color: "white", fontSize: "0.9rem" }}>
              Schedule a Call
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Services, 2×2 grid ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container">
          <FadeIn className="mb-14">
            <p className="eyebrow mb-3" style={{ color: "#001F65" }}>WHAT WE DO</p>
            <h2 className="font-serif text-ms-navy font-medium" style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", lineHeight: 1.2, marginBottom: "0.5rem" }}>
              M&amp;S Consulting AI Services
            </h2>
            <p className="font-sans" style={{ fontSize: "1rem", color: "#4A5568", fontStyle: "italic" }}>Our expert AI consultants can help you with&hellip;</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map(({ Icon, title, body }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div style={{ borderLeft: "3px solid rgba(0,31,101,0.15)", paddingLeft: "1.5rem" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#001F65", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={18} color="white" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-sans font-semibold" style={{ fontSize: "1rem", color: "#001F65" }}>{title}</h3>
                  </div>
                  <p className="marketing-copy" style={{ color: "#4A5568" }}>{body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ──────────────────────────────────────────────── */}
      <NewsletterSignup tagIds={[7355493]} tone="cream" />

      {/* ── AI Roadmap interactive resource ──────────────────────────── */}
      <RoadmapCallout />

      {/* ── AI Services Accordion ────────────────────────────────────── */}
      <AiServicesAccordion />

      {/* ── Contact ─────────────────────────────────────────────────── */}
      <MsContactForm />
    </>
  );
}

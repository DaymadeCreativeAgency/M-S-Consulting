import type { Metadata } from "next";
import Link from "next/link";
import { Lock, UserCheck, KeyRound, GitMerge, Box, Bot, Link2 } from "lucide-react";
import { PracticeAreaAccordion } from "@/components/sections/practice-area-accordion";
import { MsContactForm } from "@/components/sections/ms-contact-form";
import { FadeIn } from "@/components/ui/fade-in";
import { HeroHighlight, ServicePracticeHero } from "@/components/sections/service-practice-hero";
import { NewsletterSignup } from "@/components/sections/newsletter-signup";

export const metadata: Metadata = {
  title: "Cybersecurity & Identity Management Consulting",
  description:
    "M&S Consulting has over 20 years of experience building proactive security programs for government and enterprise. Identity management, DevSecOps, compliance, and AI security.",
  alternates: { canonical: "/practice-areas/cyber" },
};

const SERVICES = [
  {
    Icon: Lock,
    title: "Software Security Control Implementation",
    body: "To comply with increasingly stringent regulations, organizations must apply complex security controls at every level of their software systems. From deploying comprehensive security systems to strengthening data loss prevention to securing and encrypting data, we improve your security posture against real threats.",
  },
  {
    Icon: UserCheck,
    title: "Identity Management",
    body: "Modern organizations need to manage user identities across a diverse range of applications and populations. We design and implement advanced identity solutions tailored to your unique needs — increasing the efficiency of your identity practices while reducing security risk across your enterprise.",
  },
  {
    Icon: KeyRound,
    title: "Access Management",
    body: "Who should have access to what, and for how long? Simple authentication methods are no longer sufficient. Drawing from extensive experience with role-based access control (RBAC) and zero-trust principles, our experts secure your enterprise boundaries, endpoints, and applications — whether on-prem or in the cloud.",
  },
  {
    Icon: GitMerge,
    title: "DevSecOps",
    body: "Development, Security, and Operations. We integrate security testing into every single step of the software development process — catching vulnerabilities early and fixing them before they become problems. The result: faster deployment cycles and a security posture that improves with every release.",
  },
  {
    Icon: Box,
    title: "Containerization",
    body: "Containerization isolates applications by bundling a workload's code with everything it needs to run on any infrastructure. This boosts security and makes coding and deployment more efficient — ensuring your other applications remain secure even if one container is compromised.",
  },
  {
    Icon: Bot,
    title: "Security for AI",
    body: "Is your business excited by the possibilities of AI but concerned about its risks? Our team helps you leverage AI responsibly — ensuring compliance, protecting private data, and preserving customer trust by addressing the unique security and governance risks posed by AI systems.",
  },
  {
    Icon: Link2,
    title: "Security for APIs",
    body: "Application Programming Interfaces act as middlemen helping two applications communicate — and because they're connected to sensitive data, they're a prime target for attacks. We assess your API surface area, implement authentication and rate-limiting controls, and monitor for API-specific attack patterns.",
  },
];

const LEFT_TOOLS = [
  { name: "Microsoft Defender & Sentinel", description: "Endpoint protection, threat detection, and SIEM implementation using Microsoft Defender for Endpoint and Microsoft Sentinel — with custom analytics rules, playbooks, and incident response workflows." },
  { name: "Okta & Microsoft Entra ID", description: "Identity platform implementation — single sign-on, multi-factor authentication, conditional access policies, and lifecycle management across your application portfolio." },
  { name: "SailPoint", description: "Identity governance and administration on SailPoint IdentityNow and IdentityIQ — certifications, role management, and provisioning workflows that keep your access model clean over time." },
  { name: "CrowdStrike", description: "Falcon platform deployment and configuration for endpoint detection and response, threat hunting, and identity protection across your enterprise environment." },
];

const RIGHT_TOOLS = [
  { name: "Zero Trust Architecture", description: "Design and implementation of Zero Trust network architectures — micro-segmentation, device trust, least-privilege access, and continuous validation across users, devices, and workloads." },
  { name: "SIEM & SOC Operations", description: "Security information and event management configuration, log source onboarding, use case development, and alert tuning — building or maturing a SOC capability that surfaces real threats." },
  { name: "Vulnerability Management", description: "Continuous vulnerability scanning, prioritization, and remediation tracking. We move you from point-in-time assessments to a sustainable program that keeps pace with your environment." },
  { name: "Compliance Frameworks", description: "FedRAMP, NIST 800-53, CMMC, HIPAA, and SOC 2 readiness and assessment support. We help you understand your control gaps, close them efficiently, and maintain evidence of compliance." },
];

const FRAMEWORKS = ["FedRAMP", "NIST 800-53", "HIPAA", "CMMC", "SOC 2", "ISO 27001", "FISMA", "PCI-DSS"];

export default function CyberPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <ServicePracticeHero
        eyebrow="CYBERSECURITY & IDENTITY MANAGEMENT"
        imageSrc="/media/getty-images-snqclgLZaoU-unsplash-scaled.jpg"
        imageFit="cover"
        imageObjectPosition="center"
        imageBackground="#0A0E1A"
      >
        Put an end to emergencies — protect your digital assets, reputation, and <HeroHighlight>peace of mind.</HeroHighlight>
      </ServicePracticeHero>

      {/* ── Stats strip ──────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#EFEADB", borderBottom: "1px solid rgba(0,31,101,0.08)" }}>
        <div className="ms-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-[rgba(0,31,101,0.12)]">
            {[
              { value: "$10.5T", label: "Cybercrime cost annually by 2025", note: "Cybersecurity Ventures" },
              { value: "$4.45M", label: "Average data breach cost", note: "IBM Cost of a Data Breach, 2023" },
              { value: "20+", label: "Years building security programs", note: "Government & commercial sectors" },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08} className="text-center md:px-10">
                <div className="font-sans font-bold tabular-nums" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#001F65", lineHeight: 1, letterSpacing: "-0.02em" }}>{s.value}</div>
                <div className="font-sans font-semibold mt-2 mb-1" style={{ fontSize: "0.82rem", color: "#001F65", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
                <div className="marketing-note" style={{ color: "#4B5563" }}>{s.note}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro — image right ──────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#EFF6FF" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                In today&rsquo;s world, safeguarding data is only possible with a proactive and comprehensive security strategy. To combat constantly evolving threats, a strong defense is essential.
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                At M&amp;S Consulting, we have over 20 years of experience{" "}
                <strong>helping organizations build security systems that are robust yet agile.</strong> Our smart solutions prevent costly disasters and ensure regulatory compliance — resulting in significant cost savings that far exceed the initial investment.
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748" }}>
                Let our seasoned team serve as your trusted security partner, fortifying your business with the protection you need to{" "}
                <strong>withstand any threat.</strong>
              </p>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="relative overflow-hidden rounded-2xl" style={{ height: "420px", boxShadow: "0 20px 60px rgba(0,31,101,0.12)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/media/getty-images-IoG8mpVg8yY-unsplash-scaled.jpg" alt="M&S Consulting cybersecurity team"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Unique: Agentic AI for Security ──────────────────────────── */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-20 items-center">
            <FadeIn>
              <p className="eyebrow mb-4" style={{ color: "#001F65" }}>NEW CAPABILITY</p>
              <h2 className="font-serif font-medium" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)", color: "#001F65", lineHeight: 1.25, marginBottom: "1.25rem" }}>
                Enhance Your Security Operations with{" "}
                <span style={{ fontStyle: "italic" }}>Agentic AI</span>
              </h2>
              <Link href="/contact" className="font-sans font-semibold inline-flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-200"
                style={{ border: "1.5px solid #001F65", color: "#001F65", fontSize: "0.875rem" }}>
                Learn more
              </Link>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="font-sans" style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#2D3748", marginBottom: "1rem" }}>
                Agentic AI is unlocking new possibilities by enabling systems to plan, reason, and act independently to drive smarter security outcomes. Threat detection that doesn&rsquo;t wait for a human to notice. Incident response that begins before your team is paged.
              </p>
              <p className="font-sans" style={{ fontSize: "1.05rem", lineHeight: 1.75, color: "#2D3748" }}>
                We implement Agentic AI into your security operations — helping streamline workflows, enhance threat detection, and unlock new efficiencies. Whether you need to optimize SOC processes, improve incident responsiveness, or scale your security posture,{" "}
                <strong>our AI expertise ensures seamless integration and tangible results.</strong>
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Compliance frameworks strip ──────────────────────────────── */}
      <section style={{ backgroundColor: "#131829", borderTop: "1px solid rgba(92,167,243,0.12)", borderBottom: "1px solid rgba(92,167,243,0.12)" }}>
        <div className="ms-container py-10">
          <FadeIn>
            <p className="eyebrow mb-6 text-center" style={{ color: "rgba(255,255,255,0.4)" }}>COMPLIANCE FRAMEWORKS WE KNOW</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
              {FRAMEWORKS.map((fw, i) => (
                <span key={fw} className="font-sans font-semibold"
                  style={{ color: i % 4 === 0 ? "#5CA7F3" : "rgba(255,255,255,0.55)", fontSize: "0.82rem", letterSpacing: "0.06em", textTransform: "uppercase",
                    padding: "0.35rem 0.9rem", border: "1px solid rgba(92,167,243,0.18)", borderRadius: "4px" }}>
                  {fw}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Mission CTA ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#001F65" }}>
        <div className="ms-container">
          <FadeIn className="flex flex-col items-center text-center" style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p className="font-serif text-white font-medium" style={{ fontSize: "clamp(1.35rem, 2.6vw, 2rem)", lineHeight: 1.55, marginBottom: "2.5rem" }}>
              Whether you need to{" "}
              <strong>assess your security posture, build an identity program,</strong>{" "}
              or achieve regulatory compliance — our team brings the depth and experience to protect what matters most to your organization.
            </p>
            <Link href="/contact" className="font-sans font-semibold inline-flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-200"
              style={{ border: "1.5px solid rgba(255,255,255,0.7)", color: "white", fontSize: "0.9rem" }}>
              Schedule a Call
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Services — 2-col, 7 cards ────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container">
          <FadeIn className="mb-14">
            <p className="eyebrow mb-3" style={{ color: "#001F65" }}>HOW TO PROTECT BUSINESS DATA</p>
            <h2 className="font-serif text-ms-navy font-medium" style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", lineHeight: 1.2, marginBottom: "0.5rem" }}>
              Our Elite Security Consultants Specialize In&hellip;
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map(({ Icon, title, body }, i) => (
              <FadeIn key={title} delay={i * 0.07}>
                <div className="flex gap-4">
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#001F65", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                    <Icon size={17} color="white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold mb-2" style={{ fontSize: "0.95rem", color: "#001F65" }}>{title}</h3>
                    <p className="marketing-copy" style={{ color: "#4A5568" }}>{body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accordion ───────────────────────────────────────────────── */}
      <PracticeAreaAccordion heading="Security Technologies We Work With" leftTools={LEFT_TOOLS} rightTools={RIGHT_TOOLS} />
      {/* ── Newsletter ──────────────────────────────────────────── */}
      <NewsletterSignup tagIds={[7355484]} tone="cream" />

      {/* ── Contact ─────────────────────────────────────────────────── */}
      <MsContactForm />
    </>
  );
}

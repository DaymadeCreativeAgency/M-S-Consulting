import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, KeyRound, FileCheck } from "lucide-react";
import { PracticeAreaAccordion } from "@/components/sections/practice-area-accordion";
import { MsContactForm } from "@/components/sections/ms-contact-form";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Cybersecurity & Identity Management Consulting | M&S Consulting",
  description:
    "M&S Consulting has over 20 years of experience building proactive, comprehensive security programs for government and enterprise. Identity management, compliance, threat detection, and more.",
};

const SERVICES = [
  {
    Icon: ShieldCheck,
    title: "Security Assessment & Strategy",
    body: [
      { text: "Where are you exposed? What's actually protecting your most critical assets? Most organizations don't know until something goes wrong.", bold: false },
      { text: "We conduct thorough security assessments and deliver", bold: false },
      { text: "a prioritized security roadmap grounded in real risk, not compliance checkboxes.", bold: true },
    ],
  },
  {
    Icon: KeyRound,
    title: "Identity & Access Management",
    body: [
      { text: "Identity is the new perimeter.", bold: true },
      { text: "We design and implement IAM programs that govern who can access what — and under what conditions — across your on-premises systems, cloud environments, and third-party applications. From Zero Trust to privileged access management.", bold: false },
    ],
  },
  {
    Icon: FileCheck,
    title: "Compliance & Governance",
    body: [
      { text: "Security compliance is necessary — but it's not sufficient. We help you satisfy regulatory requirements while building controls that actually protect your operations,", bold: false },
      { text: "not just satisfy an auditor.", bold: true },
      { text: "We have deep experience with FedRAMP, NIST 800-53, HIPAA, CMMC, and SOC 2 frameworks.", bold: false },
    ],
  },
];

const LEFT_TOOLS = [
  { name: "Microsoft Defender & Sentinel", description: "Endpoint protection, threat detection, and SIEM implementation using Microsoft Defender for Endpoint and Microsoft Sentinel — with custom analytics rules, playbooks, and incident response workflows." },
  { name: "Okta & Microsoft Entra ID", description: "Identity platform implementation and integration — single sign-on, multi-factor authentication, conditional access policies, and lifecycle management across your application portfolio." },
  { name: "SailPoint", description: "Identity governance and administration on SailPoint IdentityNow and IdentityIQ — certifications, role management, and provisioning workflows that keep your access model clean over time." },
  { name: "CrowdStrike", description: "Falcon platform deployment and configuration for endpoint detection and response (EDR), threat hunting, and identity protection across your enterprise environment." },
];

const RIGHT_TOOLS = [
  { name: "Zero Trust Architecture", description: "Design and implementation of Zero Trust network architectures — micro-segmentation, device trust, least-privilege access, and continuous validation across users, devices, and workloads." },
  { name: "SIEM & SOC Operations", description: "Security information and event management configuration, log source onboarding, use case development, and alert tuning — building or maturing a SOC capability that surfaces real threats." },
  { name: "Vulnerability Management", description: "Continuous vulnerability scanning, prioritization, and remediation tracking. We help you move from point-in-time assessments to a sustainable program that keeps pace with your environment." },
  { name: "Compliance Frameworks", description: "FedRAMP, NIST 800-53, CMMC, HIPAA, and SOC 2 readiness and assessment support. We help you understand your control gaps, close them efficiently, and maintain evidence of compliance over time." },
];

const FRAMEWORKS = ["FedRAMP", "NIST 800-53", "HIPAA", "CMMC", "SOC 2", "ISO 27001", "FISMA", "PCI-DSS"];

export default function CyberPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 overflow-hidden relative" style={{ backgroundColor: "#0A0E1A" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/media/graphics/geometric-6.png" alt="" aria-hidden="true"
          style={{ position: "absolute", bottom: 0, right: 0, width: "52%", height: "auto", opacity: 0.3, pointerEvents: "none", zIndex: 0 }} />
        <div className="ms-container relative" style={{ zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <p className="eyebrow mb-5" style={{ color: "#5CA7F3" }}>CYBERSECURITY & IDENTITY MANAGEMENT</p>
              <h1 className="font-serif text-white font-medium" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.75rem)", lineHeight: 1.12, letterSpacing: "-0.01em", marginBottom: "2rem" }}>
                Put an end to emergencies — protect your digital assets, reputation, and{" "}
                <span style={{ fontStyle: "italic", fontWeight: 700, textDecoration: "underline", textDecorationStyle: "wavy", textDecorationColor: "#5CA7F3", textDecorationThickness: "2px", textUnderlineOffset: "4px" }}>peace of mind.</span>
              </h1>
              <Link href="/contact" className="font-sans font-semibold inline-flex items-center gap-2 px-7 py-3 rounded-full transition-all duration-200"
                style={{ backgroundColor: "#5CA7F3", color: "#0A0E1A", fontSize: "0.9rem", letterSpacing: "0.01em" }}>
                Schedule a Call
              </Link>
            </FadeIn>
            <FadeIn delay={0.15} className="relative hidden lg:block" style={{ height: "480px" }}>
              <div style={{ position: "absolute", top: 0, left: "8%", right: 0, height: "65%", borderRadius: "20px", overflow: "hidden", transform: "rotate(-1deg)", boxShadow: "0 24px 64px rgba(0,0,0,0.6)", zIndex: 1 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/media/getty-images-snqclgLZaoU-unsplash-scaled.jpg" alt="" aria-hidden="true"
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
              { value: "$4.45M", label: "Average data breach cost", note: "IBM Cost of a Data Breach, 2023" },
              { value: "287", label: "Days avg. to identify a breach", note: "Across all industries" },
              { value: "20+", label: "Years building security programs", note: "Government & commercial sectors" },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.08} className="text-center md:px-10">
                <div className="font-sans font-bold tabular-nums" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#001F65", lineHeight: 1, letterSpacing: "-0.02em" }}>{stat.value}</div>
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
                In today&rsquo;s world, safeguarding data is only possible with a proactive and comprehensive security strategy. To combat constantly evolving threats, a strong defense is essential. At M&amp;S Consulting, we have{" "}
                <strong>over 20 years of experience helping organizations build security systems that are robust yet agile.</strong>
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                Our smart solutions prevent costly disasters and ensure regulatory compliance — resulting in significant cost savings that far exceed the investment in a proper security program.
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748" }}>
                We work across both commercial and public sector environments, including{" "}
                <strong>federal agencies, defense contractors, healthcare networks, and financial services organizations.</strong>
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

      {/* ── UNIQUE: Compliance frameworks dark strip ──────────────────── */}
      <section style={{ backgroundColor: "#131829", borderTop: "1px solid rgba(92,167,243,0.12)", borderBottom: "1px solid rgba(92,167,243,0.12)" }}>
        <div className="ms-container py-10">
          <FadeIn>
            <p className="eyebrow mb-6 text-center" style={{ color: "rgba(255,255,255,0.4)" }}>COMPLIANCE FRAMEWORKS WE KNOW</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {FRAMEWORKS.map((fw, i) => (
                <span key={fw} className="font-sans font-semibold"
                  style={{ color: i % 4 === 0 ? "#5CA7F3" : "rgba(255,255,255,0.6)", fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase",
                    padding: "0.35rem 0.85rem", border: "1px solid rgba(92,167,243,0.15)", borderRadius: "4px" }}>
                  {fw}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 3: Mission CTA ───────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#001F65" }}>
        <div className="ms-container">
          <FadeIn className="flex flex-col items-center text-center" style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p className="font-serif text-white font-medium" style={{ fontSize: "clamp(1.35rem, 2.6vw, 2rem)", lineHeight: 1.55, marginBottom: "2.5rem" }}>
              Whether you need to{" "}
              <strong>assess your current security posture, build an identity program,</strong>{" "}
              or achieve regulatory compliance — our team brings the depth and experience to protect what matters most to your organization.
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
              M&amp;S Consulting Cybersecurity &amp; Identity Services
            </h2>
            <p className="font-sans" style={{ fontSize: "1rem", color: "#4A5568", fontStyle: "italic" }}>Our expert security consultants can help you with&hellip;</p>
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
      <PracticeAreaAccordion heading="Security Technologies We Work With" leftTools={LEFT_TOOLS} rightTools={RIGHT_TOOLS} bgImage="/media/light-trails.jpg" />

      {/* ── SECTION 6: Contact Form ──────────────────────────────────── */}
      <MsContactForm />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, ArrowUpFromLine, Server, CheckCircle } from "lucide-react";
import { MsContactForm } from "@/components/sections/ms-contact-form";
import { HeroHighlight, ServicePracticeHero } from "@/components/sections/service-practice-hero";
import { NewsletterSignup } from "@/components/sections/newsletter-signup";
import { MissionCta } from "@/components/sections/mission-cta";

export const metadata: Metadata = {
  title: "AWS Consulting Services",
  description:
    "Expert AWS consulting for secure, scalable cloud success. M&S is an AWS Well-Architected Program Partner specializing in cloud strategy, migration, and implementation.",
  alternates: { canonical: "/service-lines/aws" },
};

const SERVICES = [
  {
    Icon: ClipboardList,
    title: "AWS Strategy",
    body: [
      { text: "AWS offers pay-as-you-go pricing, so a smart strategy is crucial for getting the most out of your budget.", bold: false },
      { text: " We work together to clarify your vision and goals for incorporating cloud technology into your business.", bold: true },
      { text: " Then, our experts create a personalized roadmap for you, complete with actionable steps and a realistic timeline. This is how we help you achieve the impact you're after while staying within budget.", bold: false },
    ],
  },
  {
    Icon: Server,
    title: "Migration",
    body: [
      { text: "When you're ready to make the big move to AWS,", bold: false },
      { text: " we'll be there to make your journey feel less like a rocky road and more like smooth sailing.", bold: true },
      { text: " Cloud computing is the way of the future. If your business wants to scale up, evolve, and retain a competitive edge, you'll need a flexible solution like AWS on your side. Transitioning to AWS doesn't have to be disruptive, we make it seamless.", bold: false },
    ],
  },
  {
    Icon: ArrowUpFromLine,
    title: "Implementation",
    body: [
      { text: "We hold the highest standard possible of implementing solutions that are", bold: false },
      { text: " cost-effective, secure, and scalable.", bold: true },
      { text: " Then, our consultants train your team on how to utilize AWS tools for building robust, resilient infrastructure and applications. We also integrate DevOps best practices from the start to accelerate your delivery cycles.", bold: false },
    ],
  },
];

const WELL_ARCHITECTED = [
  "Operational Excellence",
  "Security",
  "Reliability",
  "Performance Efficiency",
  "Cost Optimization",
];

const AWS_BADGES = [
  {
    src: "/media/aws-badge-advanced-tier.png",
    label: "Advanced Tier Services",
  },
  {
    src: "/media/aws-badge-well-architected.png",
    label: "Well-Architected Partner Program",
  },
  {
    src: "/media/aws-badge-education.png",
    label: "Education Software",
  },
  {
    src: "/media/aws-badge-public-sector.png",
    label: "Public Sector",
  },
];

export default function AwsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <ServicePracticeHero
        eyebrow="AWS CONSULTING SERVICES"
        imageSrc="/media/AWSServiceLine.png"
        imageFit="contain"
        imageBackground="#FFFFFF"
      >
        Expert AWS solutions for secure, <HeroHighlight>scalable cloud success.</HeroHighlight>
      </ServicePracticeHero>

      {/* ── Partner Badges ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#EFEADB", borderBottom: "1px solid rgba(0,31,101,0.08)" }}>
        <div className="ms-container py-10">
          <p className="eyebrow mb-8 text-center" style={{ color: "#001F65" }}>
            AWS PARTNER DESIGNATIONS
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {AWS_BADGES.map(({ src, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-4"
              >
                <div
                  className="flex items-center justify-center rounded-xl overflow-hidden"
                  style={{
                    width: "100%",
                    maxWidth: "200px",
                    aspectRatio: "1",
                    backgroundColor: "white",
                    boxShadow: "0 4px 20px rgba(0,31,101,0.10)",
                    padding: "0.75rem",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`AWS Partner, ${label}`}
                    style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                  />
                </div>
                <p
                  className="font-sans font-semibold text-center"
                  style={{ fontSize: "0.78rem", color: "#001F65", lineHeight: 1.4 }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#EFF6FF" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative overflow-hidden rounded-2xl" style={{ height: "420px", backgroundColor: "#FFFFFF", boxShadow: "0 20px 60px rgba(0,31,101,0.12)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/media/AWSServiceLine.png" alt="AWS consulting services" style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", padding: "3rem" }} />
            </div>
            <div>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                Amazon Web Services (AWS) is the most broadly adopted cloud in the world. Offering over 200 services, each with its own extensive set of features, this solution is powerful if you understand how to leverage all that it offers.
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                We help you harness the full potential of this cloud computing platform to{" "}
                <strong>reduce operational costs, modernize your systems, and accelerate your business toward a more agile future.</strong>
              </p>
              {/* Well-Architected badge */}
              <div style={{ padding: "1.25rem 1.5rem", borderRadius: "12px", backgroundColor: "white", border: "1px solid rgba(0,31,101,0.1)", boxShadow: "0 2px 12px rgba(0,31,101,0.06)" }}>
                <p className="font-sans font-semibold mb-3" style={{ fontSize: "0.85rem", color: "#001F65" }}>
                  AWS Well-Architected Program Partner
                </p>
                <div className="flex flex-col gap-1.5">
                  {WELL_ARCHITECTED.map((w) => (
                    <div key={w} className="flex items-center gap-2">
                      <CheckCircle size={14} style={{ color: "#5CA7F3", flexShrink: 0 }} />
                      <span className="marketing-note" style={{ color: "#4A5568" }}>{w}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ───────────────────────────────────────────────────── */}
      <MissionCta eyebrow="Well-Architected Partner">
        M&amp;S is proud to be an{" "}
        <strong>AWS Well-Architected Program Partner</strong>. This qualification means our staff has a demonstrated history of designing cloud workloads that align with AWS best practices, and enables us to extend exclusive AWS benefits to our clients.
      </MissionCta>

      {/* ── Newsletter ──────────────────────────────────────────────── */}
      <NewsletterSignup tagIds={[7019083]} tone="cream" />

      {/* ── Services ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container">
          <div className="mb-14">
            <h2 className="font-serif text-ms-navy font-medium" style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", lineHeight: 1.2, marginBottom: "0.5rem" }}>
              M&amp;S Consulting AWS Services
            </h2>
            <p className="font-sans" style={{ fontSize: "1rem", color: "#4A5568", fontStyle: "italic" }}>
              Our expert AWS consultants can help you with&hellip;
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
      <MsContactForm />
    </>
  );
}

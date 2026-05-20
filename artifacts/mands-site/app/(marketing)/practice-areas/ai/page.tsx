import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, ShieldCheck, Cpu } from "lucide-react";
import { AiServicesAccordion } from "@/components/sections/ai-services-accordion";
import { MsContactForm } from "@/components/sections/ms-contact-form";

export const metadata: Metadata = {
  title: "Artificial Intelligence Consulting | M&S Consulting",
  description:
    "For 20 years, M&S Consulting has helped businesses integrate AI and machine learning safely and effectively. Strategy, Agentic AI, governance, data architecture, and enterprise AI implementation.",
};

const SERVICES = [
  {
    Icon: ClipboardList,
    title: "AI Strategy & Roadmap",
    body: [
      {
        text: "How should your organization approach AI? Which use cases will deliver real ROI? What does a responsible, phased implementation look like given your current data and infrastructure?",
        bold: false,
      },
      {
        text: "Our team helps you answer these questions with specificity — building a practical AI roadmap grounded in your capabilities, timelines, and risk tolerance, so you can",
        bold: false,
      },
      {
        text: "start delivering measurable results quickly.",
        bold: true,
      },
    ],
  },
  {
    Icon: ShieldCheck,
    title: "Security & Governance for AI",
    body: [
      {
        text: "AI governance isn't a checkbox — it's a core design requirement.",
        bold: true,
      },
      {
        text: "We protect your data with secure AI solutions informed by policy, reinforced by end-user training, and backed by human oversight at every stage.",
        bold: false,
      },
      {
        text: "Every autonomous process we design includes defined escalation paths and human review checkpoints appropriate to the risk level of the decision being made.",
        bold: false,
      },
    ],
  },
  {
    Icon: Cpu,
    title: "Agentic AI & Automation",
    body: [
      {
        text: "AI is evolving beyond simple automation. Agentic AI systems autonomously plan, execute, and adapt tasks to achieve business goals — dynamically adjusting to changing conditions in real time.",
        bold: false,
      },
      {
        text: "We design human-machine workflows where AI triggers actions across your CRM, ERP, marketing platforms, and data systems,",
        bold: false,
      },
      {
        text: "connecting your enterprise at a level of integration that wasn't possible before.",
        bold: true,
      },
    ],
  },
];

export default function AIPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ─────────────────────────────────────────── */}
      <section
        className="py-20 lg:py-28 overflow-hidden relative"
        style={{ backgroundColor: "#0A0E1A" }}
      >
        <div className="ms-container relative" style={{ zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — text */}
            <div>
              <p className="eyebrow mb-5" style={{ color: "#5CA7F3" }}>
                ARTIFICIAL INTELLIGENCE CONSULTING
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
                  Secure
                </span>{" "}
                AI-driven transformation at your fingertips.
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

            {/* Right — photo card + geometric collage */}
            <div
              className="relative hidden lg:block"
              style={{ height: "480px" }}
            >
              {/* Geometric collage — z-index 0 */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/media/graphics/geometric-5.png"
                alt=""
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "28%",
                  left: "-10%",
                  width: "115%",
                  height: "auto",
                  mixBlendMode: "screen",
                  opacity: 0.92,
                  display: "block",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              {/* Photo card — consultants meeting, sits on top */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "8%",
                  right: 0,
                  height: "62%",
                  borderRadius: "20px",
                  overflow: "hidden",
                  transform: "rotate(-1deg)",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
                  zIndex: 1,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/media/team/consultant-meeting.jpg"
                  alt="M&S Consulting AI team meeting"
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

            {/* Left — photo */}
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                height: "420px",
                boxShadow: "0 20px 60px rgba(0,31,101,0.12)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/media/team/consultant-meeting.jpg"
                alt="M&S Consulting AI strategy session"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>

            {/* Right — body text */}
            <div>
              <p
                className="font-sans"
                style={{
                  fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
                  lineHeight: 1.75,
                  color: "#2D3748",
                  marginBottom: "1.5rem",
                }}
              >
                Artificial Intelligence is more than a buzzword. It&rsquo;s a
                transformative tool that&rsquo;s rippling across every industry —
                changing the way people work and do business at a fundamental
                level. For{" "}
                <strong>over 20 years, M&amp;S Consulting has been helping
                businesses integrate AI strategically</strong> — with an emphasis
                on governance, data quality, and adoption.
              </p>
              <p
                className="font-sans"
                style={{
                  fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
                  lineHeight: 1.75,
                  color: "#2D3748",
                  marginBottom: "1.5rem",
                }}
              >
                Our seasoned team of AI professionals is here to safely and
                efficiently integrate AI and machine learning capabilities into
                businesses looking to gain a genuine competitive edge — not just
                check a box.
              </p>
              <p
                className="font-sans"
                style={{
                  fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
                  lineHeight: 1.75,
                  color: "#2D3748",
                }}
              >
                We build AI systems that run — and{" "}
                <strong>
                  help your teams run them well, with confidence and without fear.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Mission Statement / CTA ──────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#001F65" }}>
        <div className="ms-container">
          <div
            className="flex flex-col items-center text-center"
            style={{ maxWidth: "820px", margin: "0 auto" }}
          >
            <p
              className="font-serif text-white font-medium"
              style={{
                fontSize: "clamp(1.35rem, 2.6vw, 2rem)",
                lineHeight: 1.55,
                marginBottom: "2.5rem",
              }}
            >
              Whether you aim to{" "}
              <strong>adopt one capability, build a full AI roadmap,</strong> or
              anything in between — our team is here to be your expert guide and
              trusted partner. Our mission: to make the absolute most of
              AI&rsquo;s potential for your organization,{" "}
              <strong>safely and sustainably.</strong>
            </p>
            <Link
              href="/contact"
              className="font-sans font-semibold inline-flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-200"
              style={{
                border: "1.5px solid rgba(255,255,255,0.7)",
                color: "white",
                fontSize: "0.9rem",
                letterSpacing: "0.02em",
              }}
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Services Overview (3-col cards) ──────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container">
          <div className="mb-14">
            <h2
              className="font-serif text-ms-navy font-medium"
              style={{
                fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)",
                lineHeight: 1.2,
                marginBottom: "0.5rem",
              }}
            >
              M&amp;S Consulting AI Services
            </h2>
            <p
              className="font-sans"
              style={{
                fontSize: "1rem",
                color: "#4A5568",
                fontStyle: "italic",
              }}
            >
              Our expert AI consultants can help you with&hellip;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.map(({ Icon, title, body }) => (
              <div key={title} className="flex flex-col gap-4">
                <div className="flex flex-col items-start gap-3 mb-1">
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      backgroundColor: "#001F65",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} color="white" strokeWidth={1.5} />
                  </div>
                  <div
                    style={{
                      width: "52px",
                      height: "3px",
                      borderRadius: "2px",
                      background: "linear-gradient(90deg, #5CA7F3, #001F65)",
                    }}
                  />
                </div>

                <h3
                  className="font-sans font-semibold"
                  style={{ fontSize: "1.05rem", color: "#001F65" }}
                >
                  {title}
                </h3>

                <div
                  className="font-sans"
                  style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#4A5568" }}
                >
                  {body.map((segment, i) =>
                    segment.bold ? (
                      <strong key={i} style={{ color: "#2D3748" }}>
                        {segment.text}
                      </strong>
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

      {/* ── SECTION 5: AI Services Accordion (dark) ─────────────────── */}
      <AiServicesAccordion />

      {/* ── SECTION 6: Contact Form (navy) ──────────────────────────── */}
      <MsContactForm />
    </>
  );
}

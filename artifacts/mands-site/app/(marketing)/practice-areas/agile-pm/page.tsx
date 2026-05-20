import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, Repeat2, Settings } from "lucide-react";
import { PracticeAreaAccordion } from "@/components/sections/practice-area-accordion";
import { MsContactForm } from "@/components/sections/ms-contact-form";

export const metadata: Metadata = {
  title: "Agile Project Management & ITSM Consulting | M&S Consulting",
  description:
    "M&S Consulting delivers Project Management as a Service, Agile transformation, and IT Service Management for government and enterprise organizations. 20+ years of delivery experience.",
};

const SERVICES = [
  {
    Icon: ClipboardList,
    title: "Project Management as a Service",
    body: [
      {
        text: "Many organizations face more projects than they have skilled project managers to run them.",
        bold: true,
      },
      {
        text: "M&S PMaaS gives you access to highly-skilled project management professionals on demand — ready to jump in and hit the ground running on any initiative, without the overhead of a full-time hire.",
        bold: false,
      },
    ],
  },
  {
    Icon: Repeat2,
    title: "Agile Transformation",
    body: [
      {
        text: "Adopting Agile isn't just about switching tools or holding daily standups. It's a fundamental shift in how work gets prioritized, delivered, and measured.",
        bold: false,
      },
      {
        text: "We guide organizations through Agile and SAFe transformations that stick —",
        bold: false,
      },
      {
        text: "building the habits, structures, and culture that make iterative delivery work at enterprise scale.",
        bold: true,
      },
    ],
  },
  {
    Icon: Settings,
    title: "IT Service Management (ITSM)",
    body: [
      {
        text: "Effective ITSM keeps your IT organization running as a business service — not just a cost center.",
        bold: false,
      },
      {
        text: "We implement ITIL-aligned service management practices and configure the platforms that support them,",
        bold: false,
      },
      {
        text: "reducing incidents, improving change success rates, and delivering a better experience for end users.",
        bold: true,
      },
    ],
  },
];

const LEFT_TOOLS = [
  {
    name: "Jira & Jira Service Management",
    description:
      "Jira configuration, workflow design, and administration for software and business teams. We also implement Jira Service Management for ITSM, including incident, change, and problem management workflows.",
  },
  {
    name: "Confluence",
    description:
      "Knowledge management and team collaboration on Confluence — including space design, template libraries, and integration with your Jira project workflows.",
  },
  {
    name: "ServiceNow",
    description:
      "ITSM, ITOM, and custom workflow implementation on ServiceNow. We configure the platform to match your service catalog, SLAs, and escalation paths — not the other way around.",
  },
  {
    name: "SAFe & Scrum",
    description:
      "Scaled Agile Framework (SAFe) implementation and Scrum coaching for enterprise programs. We train teams, configure tooling, and run Program Increment planning events that actually produce aligned commitments.",
  },
];

const RIGHT_TOOLS = [
  {
    name: "Azure DevOps & Boards",
    description:
      "Sprint planning, backlog management, and pipeline visibility using Azure Boards and Azure DevOps — tightly integrated with your development and deployment workflows.",
  },
  {
    name: "Microsoft Project & Planner",
    description:
      "Traditional and hybrid project planning using Microsoft Project and Planner, with integration into Teams, SharePoint, and the broader M365 ecosystem.",
  },
  {
    name: "ITIL Framework",
    description:
      "ITIL-aligned process design for incident, problem, change, and release management. We help you mature your IT organization's service delivery without over-engineering the process.",
  },
  {
    name: "Monday.com & Smartsheet",
    description:
      "Portfolio and work management on Monday.com and Smartsheet for teams that need flexible planning tools with strong reporting and visibility across programs.",
  },
];

export default function AgilePmPage() {
  return (
    <>
      {/* ── SECTION 1: Hero ─────────────────────────────────────────── */}
      <section
        className="py-20 lg:py-28 overflow-hidden relative"
        style={{ backgroundColor: "#0A0E1A" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/graphics/geometric-3.png"
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
                AGILE PROJECT MANAGEMENT & ITSM
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
                  Expected deliverables
                </span>{" "}
                — done right, done on time, and within budget.
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
                  src="/media/getty-images-9NApDwR118E-unsplash-scaled.jpg"
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
                src="/media/curated-lifestyle-yJAa_Q9MqPE-unsplash.jpg"
                alt="M&S Consulting project management team"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
              />
            </div>

            <div>
              <p
                className="font-sans"
                style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}
              >
                Strategic project management is critical to success — yet many organizations face more projects than they have the skilled resources to execute. One in six project failures traces directly to a{" "}
                <strong>lack of talent with the appropriate skills.</strong>
              </p>
              <p
                className="font-sans"
                style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}
              >
                For over 20 years, M&amp;S Consulting has served organizations with time-tested methods and best practices for project management — shifting the focus from activities to outcomes, and enabling greater effectiveness across every initiative we touch.
              </p>
              <p
                className="font-sans"
                style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748" }}
              >
                Ready to get work done faster and more effectively?{" "}
                <strong>Let M&amp;S Consulting take you there.</strong>
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
              Whether you&rsquo;re managing a complex enterprise initiative, standing up an Agile practice, or maturing your IT service management capability —{" "}
              <strong>our team is here to deliver results that stick.</strong>
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
              M&amp;S Consulting Agile PM &amp; ITSM Services
            </h2>
            <p className="font-sans" style={{ fontSize: "1rem", color: "#4A5568", fontStyle: "italic" }}>
              Our expert project management consultants can help you with&hellip;
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
        heading="PM & ITSM Tools We Work With"
        leftTools={LEFT_TOOLS}
        rightTools={RIGHT_TOOLS}
      />

      {/* ── SECTION 6: Contact Form ──────────────────────────────────── */}
      <MsContactForm />
    </>
  );
}

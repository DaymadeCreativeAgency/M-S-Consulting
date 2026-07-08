import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, Repeat2, Settings } from "lucide-react";
import { PracticeAreaAccordion } from "@/components/sections/practice-area-accordion";
import { MsContactForm } from "@/components/sections/ms-contact-form";
import { FadeIn } from "@/components/ui/fade-in";
import { HeroHighlight, ServicePracticeHero } from "@/components/sections/service-practice-hero";
import { NewsletterSignup } from "@/components/sections/newsletter-signup";

export const metadata: Metadata = {
  title: "Agile Project Management & ITSM Consulting",
  description:
    "M&S Consulting delivers Project Management as a Service, Agile transformation, and IT Service Management for government and enterprise. 20+ years of delivery experience.",
  alternates: { canonical: "/practice-areas/agile-pm" },
};

const SERVICES = [
  {
    Icon: ClipboardList,
    title: "Project Management as a Service (PMaaS)",
    body: "Many organizations face more projects than they have skilled project managers to run them. M&S PMaaS gives you access to highly skilled project management professionals on demand, ready to jump in and hit the ground running on any initiative, without the overhead of a full-time hire. Our PMs embed with your team, manage risk, and keep stakeholders aligned.",
  },
  {
    Icon: Repeat2,
    title: "Agile Transformation",
    body: "Adopting Agile isn't just about switching tools or holding daily standups. It's a fundamental shift in how work gets prioritized, delivered, and measured. We guide organizations through Agile and SAFe transformations that stick, building the habits, structures, and culture that make iterative delivery work at enterprise scale.",
  },
  {
    Icon: Settings,
    title: "IT Service Management (ITSM)",
    body: "Effective ITSM keeps your IT organization running as a business service, not just a cost center. We implement ITIL-aligned service management practices and configure the platforms that support them, reducing incidents, improving change success rates, and delivering a better experience for end users.",
  },
];

const LEFT_TOOLS = [
  { name: "Jira & Jira Service Management", description: "Jira configuration, workflow design, and administration for software and business teams. We also implement Jira Service Management for ITSM, including incident, change, and problem management workflows." },
  { name: "Confluence", description: "Knowledge management and team collaboration on Confluence, including space design, template libraries, and integration with your Jira project workflows." },
  { name: "ServiceNow", description: "ITSM, ITOM, and custom workflow implementation on ServiceNow. We configure the platform to match your service catalog, SLAs, and escalation paths." },
  { name: "SAFe & Scrum", description: "Scaled Agile Framework (SAFe) implementation and Scrum coaching for enterprise programs. We train teams, configure tooling, and run Program Increment planning events." },
];

const RIGHT_TOOLS = [
  { name: "Azure DevOps & Boards", description: "Sprint planning, backlog management, and pipeline visibility using Azure Boards, tightly integrated with your development and deployment workflows." },
  { name: "Microsoft Project & Planner", description: "Traditional and hybrid project planning using Microsoft Project and Planner, integrated into Teams, SharePoint, and the broader M365 ecosystem." },
  { name: "ITIL Framework", description: "ITIL-aligned process design for incident, problem, change, and release management. We help you mature your IT service delivery without over-engineering the process." },
  { name: "Monday.com & Smartsheet", description: "Portfolio and work management on Monday.com and Smartsheet for teams that need flexible planning tools with strong reporting across programs." },
];

const STEPS = [
  { num: "01", title: "Assess", body: "We audit your current project landscape, backlog, resourcing, delivery cadence, and stakeholder expectations." },
  { num: "02", title: "Plan", body: "We define the governance model, tooling setup, and delivery methodology matched to your program's size and risk profile." },
  { num: "03", title: "Execute", body: "Our PMs embed with your team, lead delivery, manage risk, track progress, and keep stakeholders informed and aligned." },
  { num: "04", title: "Improve", body: "Retrospectives, metrics reviews, and continuous refinement build lasting delivery capability in your organization." },
];

export default function AgilePmPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <ServicePracticeHero
        eyebrow="AGILE PROJECT MANAGEMENT & ITSM"
        imageSrc="/media/PM-Agile.jpg"
        imageFit="cover"
        imageObjectPosition="center"
        imageBackground="#0A0E1A"
      >
        <HeroHighlight>Expected deliverables</HeroHighlight> at every stage of the work.
      </ServicePracticeHero>

      {/* ── Stats strip ──────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#EFEADB", borderBottom: "1px solid rgba(0,31,101,0.08)" }}>
        <div className="ms-container py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-[rgba(0,31,101,0.12)]">
            {[
              { value: "1 in 6", label: "Project failures tied to talent gaps", note: "PMI Talent Gap Report" },
              { value: "20+", label: "Years of program delivery", note: "Government & enterprise programs" },
              { value: "PMaaS", label: "Project management on demand", note: "No full-time hire required" },
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

      {/* ── Intro, image left ───────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#EFF6FF" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn delay={0.08}>
              <div className="relative overflow-hidden rounded-2xl" style={{ height: "420px", boxShadow: "0 20px 60px rgba(0,31,101,0.12)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/media/curated-lifestyle-yJAa_Q9MqPE-unsplash.jpg" alt="M&S Consulting project management team"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
              </div>
            </FadeIn>
            <FadeIn>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                Strategic project management is critical to success, yet many organizations face more projects than they have the skilled resources to execute.{" "}
                <strong>One in six project failures traces directly to a lack of talent with the appropriate skills.</strong>
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                For over 20 years, M&amp;S Consulting has served organizations with time-tested methods and best practices for project management, shifting the focus from activities to outcomes.
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748" }}>
                Ready to get work done faster and more effectively?{" "}
                <strong>Let M&amp;S Consulting take you there.</strong>
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── How PMaaS Works, numbered steps ─────────────────────────── */}
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container py-20 lg:py-24">
          <FadeIn className="mb-12">
            <p className="eyebrow mb-3" style={{ color: "#001F65" }}>HOW IT WORKS</p>
            <h2 className="font-serif font-medium" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#001F65", lineHeight: 1.2 }}>
              The M&amp;S PMaaS process
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {STEPS.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1}>
                <div style={{ paddingTop: "1.25rem", paddingRight: "1.5rem", paddingBottom: "1.25rem", borderTop: `3px solid ${i === 0 ? "#FCC541" : "rgba(0,31,101,0.12)"}` }}>
                  <div className="font-sans font-bold" style={{ fontSize: "2.5rem", color: "rgba(0,31,101,0.1)", lineHeight: 1, marginBottom: "0.75rem" }}>{step.num}</div>
                  <h3 className="font-sans font-semibold mb-2" style={{ fontSize: "1rem", color: "#001F65" }}>{step.title}</h3>
                  <p className="marketing-copy" style={{ color: "#4A5568" }}>{step.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission CTA ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#001F65" }}>
        <div className="ms-container">
          <FadeIn className="flex flex-col items-center text-center" style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p className="font-serif text-white font-medium" style={{ fontSize: "clamp(1.35rem, 2.6vw, 2rem)", lineHeight: 1.55, marginBottom: "2.5rem" }}>
              Whether you&rsquo;re managing a complex enterprise initiative, standing up an Agile practice, or maturing your IT service management capability, {" "}
              <strong>our team is here to deliver results that stick.</strong>
            </p>
            <Link href="/contact" className="font-sans font-semibold inline-flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-200"
              style={{ border: "1.5px solid rgba(255,255,255,0.7)", color: "white", fontSize: "0.9rem" }}>
              Schedule a Call
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Services, 3-col ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#EFEADB" }}>
        <div className="ms-container">
          <FadeIn className="mb-14">
            <p className="eyebrow mb-3" style={{ color: "#001F65" }}>WHAT WE DO</p>
            <h2 className="font-serif text-ms-navy font-medium" style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", lineHeight: 1.2, marginBottom: "0.5rem" }}>
              M&amp;S Consulting Agile PM &amp; ITSM Services
            </h2>
            <p className="font-sans" style={{ fontSize: "1rem", color: "#4A5568", fontStyle: "italic" }}>Our expert project management consultants can help you with&hellip;</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.map(({ Icon, title, body }, i) => (
              <FadeIn key={title} delay={i * 0.1} className="flex flex-col gap-4">
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "#001F65", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={20} color="white" strokeWidth={1.5} />
                </div>
                <div style={{ width: "40px", height: "3px", borderRadius: "2px", background: "linear-gradient(90deg,#5CA7F3,#001F65)" }} />
                <h3 className="font-sans font-semibold" style={{ fontSize: "1rem", color: "#001F65" }}>{title}</h3>
                <p className="marketing-copy" style={{ color: "#4A5568" }}>{body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ──────────────────────────────────────────────── */}
      <NewsletterSignup tagIds={[7355489]} tone="cream" />

      {/* ── Accordion ───────────────────────────────────────────────── */}
      <PracticeAreaAccordion heading="PM & ITSM Tools We Work With" leftTools={LEFT_TOOLS} rightTools={RIGHT_TOOLS} />

      {/* ── Contact ─────────────────────────────────────────────────── */}
      <MsContactForm />
    </>
  );
}

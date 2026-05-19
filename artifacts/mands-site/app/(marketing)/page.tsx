import type { Metadata } from "next";
import Link from "next/link";
import { HeroWithVideo } from "@/components/sections/hero";
import { CTABanner } from "@/components/sections/cta-banner";
import { ArrowRight, LayoutGrid, Cloud, Cpu, BarChart2, Layers, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "M&S Consulting — Enterprise Digital Transformation",
  description:
    "M&S Consulting delivers AI strategy, cloud modernization, and enterprise transformation for government agencies, healthcare networks, and commercial organizations. Est. 2002, Morgantown WV.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const PRACTICE_AREAS = [
  { name: "Enterprise Applications", href: "/practice-areas/enterprise-apps", Icon: LayoutGrid },
  { name: "Cloud & Infrastructure", href: "/practice-areas/cloud", Icon: Cloud },
  { name: "Emerging Technology & Artificial Intelligence (AI)", href: "/practice-areas/ai", Icon: Cpu },
  { name: "Data Analytics & Integration", href: "/practice-areas/data-analytics", Icon: BarChart2 },
  { name: "Agile Project Management & IT Service Management", href: "/practice-areas/agile-pm", Icon: Layers },
  { name: "Cybersecurity & Identity Management", href: "/practice-areas/cyber", Icon: ShieldCheck },
];

const SERVICE_LINES = [
  { name: "Atlassian", logo: "/media/logos/service-lines/atlassian.png", href: "/service-lines/atlassian" },
  { name: "AWS", logo: "/media/logos/service-lines/aws.svg", href: "/service-lines/aws" },
  { name: "Microsoft", logo: "/media/logos/service-lines/microsoft.png", href: "/service-lines/microsoft" },
  { name: "Oracle", logo: "/media/logos/service-lines/oracle.svg", href: "/service-lines/oracle" },
  { name: "Salesforce", logo: "/media/logos/service-lines/salesforce.svg", href: "/service-lines/salesforce" },
  { name: "SAP", logo: "/media/logos/service-lines/sap.png", href: "/service-lines/sap" },
  { name: "Snowflake", logo: "https://logo.clearbit.com/snowflake.com", href: "/service-lines/snowflake" },
];

const HOW_WE_WORK = [
  {
    title: "Advisory",
    description:
      "We assess where you are, identify the right path forward, and deliver a strategy that works — grounded in decades of delivery experience across government and enterprise.",
    bullets: [
      "Technology roadmaps",
      "Architecture review",
      "Program assessment",
      "Culture of excellence",
    ],
  },
  {
    title: "Implementation",
    description:
      "We embed alongside your team and execute. From enterprise system rollouts to cloud migrations, our consultants are hands-on from kickoff to go-live.",
    bullets: [
      "Execution and delivery",
      "Programs and projects",
      "Full-stack integration",
      "Outcome accountability",
    ],
  },
  {
    title: "Managed Services",
    description:
      "After launch, we stay to run it. Our managed services practice provides continuous operations, optimization, and support — so your team can focus on the mission.",
    bullets: [
      "Continuous operations",
      "Service desk support",
      "Platform optimization",
      "SLA-backed delivery",
    ],
  },
];

const AGENTIC_AI_ITEMS = [
  {
    title: "Autonomous decision-making",
    description:
      "AI agents assess complex data inputs, generate insights, and take action — streamlining decisions and reducing human workload on repetitive, high-volume processes.",
  },
  {
    title: "Enterprise system integration",
    description:
      "We connect Agentic AI with Salesforce, SAP, Oracle, and Microsoft 365, ensuring AI-driven workflows fit cleanly into the systems your organization already runs on.",
  },
  {
    title: "Adaptive process optimization",
    description:
      "From predictive analytics to intelligent automation, AI agents optimize workflows by adjusting dynamically to changing business needs rather than following rigid rules.",
  },
  {
    title: "Governance and oversight",
    description:
      "Advanced compliance frameworks and human oversight controls ensure autonomous AI operations stay aligned with your ethical standards and regulatory requirements.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "M&S didn't just deliver software — they understood our mission and helped us build the internal capability to run it ourselves. They're the only partner we've worked with who actually stays accountable after go-live.",
    name: "Deputy Director",
    title: "Federal Healthcare Agency",
  },
  {
    quote:
      "The speed and quality of the Microsoft 365 rollout was remarkable. M&S navigated the organizational complexity better than we expected, and user adoption was the highest we've seen for any platform change.",
    name: "CTO",
    title: "Regional Health Network",
  },
  {
    quote:
      "We've worked with large consulting firms before. M&S is different — they bring senior people who do the work, not junior staff who report to people who've never touched the problem.",
    name: "VP of Technology",
    title: "National Financial Services Group",
  },
];

const TRUSTED_BY = [
  "U.S. Department of Veterans Affairs",
  "West Virginia University",
  "USDA",
  "State of West Virginia",
  "City National Bank",
  "Cardinal Health",
];

/* ─── Page ───────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── 1. Hero: full-bleed video ─────────────────────── */}
      <HeroWithVideo
        tone="dark"
        videoSrc="/media/hero-background.webm"
        eyebrow="ESTABLISHED 2002 · MORGANTOWN, WV"
        headline={
          <>
            Solving{" "}
            <span className="text-tech-accent">technology</span>{" "}
            problems is our superpower
          </>
        }
        subhead="We deliver considered AI-first digital solutions for clients and partners."
        primaryCta={{ label: "Schedule a Call", href: "/contact" }}
        showGrid={false}
      />

      {/* ── 2. Done. Better. Together. ────────────────────── */}
      <section className="ms-section-editorial">
        <div className="ms-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              {
                word: "Done.",
                text: "At M&S, we focus on getting things done right and on time. Project accountability is built into how we staff and manage every engagement — not bolted on at the end.",
              },
              {
                word: "Better.",
                text: "We challenge ourselves to find solutions that may be atypical in your market — developed from seeing what works and what doesn't across government, healthcare, and enterprise.",
              },
              {
                word: "Together.",
                text: "We work alongside your team as true partners. Our consultants embed in your organization, take your goals personally, and care about the outcome beyond the contract.",
              },
            ].map(({ word, text }) => (
              <div key={word}>
                <h2 className="font-serif text-3xl font-medium text-ms-navy mb-4">
                  {word}
                </h2>
                <p className="font-sans text-base text-charcoal-700 leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Delivering Modernization for 20+ Years ───── */}
      <section
        className="ms-section-dark"
        style={{ backgroundColor: "#111215" }}
      >
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: headline with oval-outlined accent */}
            <div>
              <h2
                className="font-serif font-medium text-white"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  lineHeight: 1.15,
                }}
              >
                Delivering
                <br />
                Modernization for
                <br />
                {/* Oval outline around "Over 20 Years" */}
                <span
                  className="relative inline-block mt-1 italic"
                  style={{
                    border: "2px solid #5CA7F3",
                    borderRadius: "50%",
                    padding: "0.1em 0.55em 0.18em",
                    color: "#ffffff",
                  }}
                >
                  Over 20 Years
                </span>
              </h2>
            </div>

            {/* Right: body copy */}
            <div>
              <p className="font-sans text-base text-white/80 leading-relaxed mb-6">
                Since 2002, M&amp;S Consulting has been a trusted partner for
                both commercial and public sector clients, specializing in
                digital strategy and transformation for critical business
                functions.
              </p>
              <p className="font-sans text-base text-white/65 leading-relaxed">
                Our team of over 250 consultants has carved a niche in the
                industry by seamlessly integrating process and technology. With
                our depth and breadth of services, we offer decades of
                experience in identifying, scaling, mobilizing, implementing,
                and maintaining digital transformation initiatives regardless
                of where you are on the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Working across industries ─────────────────── */}
      <section className="ms-section">
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text */}
            <div>
              <p className="eyebrow text-ms-navy mb-6">WHAT WE DO</p>
              <h2
                className="font-serif font-medium text-ms-navy mb-6"
                style={{
                  fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.1,
                  textWrap: "balance",
                }}
              >
                Working across industries makes us better.
              </h2>
              <p className="font-sans text-base text-charcoal-700 leading-relaxed mb-8">
                Our exposure to a wide set of industries means we bring
                solutions that may be atypical in your market — developed from
                seeing what works and what doesn&rsquo;t across government,
                healthcare, financial services, and enterprise. The breadth is
                an advantage we bring to every engagement.
              </p>
              <Link
                href="/what-we-do"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-ms-navy hover:gap-3 transition-all duration-200"
              >
                How we work <ArrowRight size={14} />
              </Link>
            </div>

            {/* Geometric mosaic / industry visual */}
            <div
              className="grid gap-2"
              style={{ gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(3, 100px)" }}
              aria-hidden="true"
            >
              {[
                { bg: "bg-ms-navy", label: "Federal" },
                { bg: "bg-ms-cream border border-ms-navy/15", label: "State & Local" },
                { bg: "bg-ms-navy", label: "Healthcare" },
                { bg: "bg-ms-cream border border-ms-navy/15", label: "Financial" },
                { bg: "", label: "", style: { backgroundColor: "#FCC541" } },
                { bg: "bg-ms-cream border border-ms-navy/15", label: "Energy" },
                { bg: "bg-ms-navy", label: "Manufacturing" },
                { bg: "bg-ms-cream border border-ms-navy/15", label: "Higher Ed" },
                { bg: "bg-ms-navy", label: "Insurance" },
              ].map(({ bg, label, style }, i) => (
                <div
                  key={i}
                  className={`rounded-lg flex items-center justify-center ${bg}`}
                  style={style}
                >
                  <span
                    className="font-sans text-xs font-semibold uppercase tracking-wider"
                    style={{
                      color:
                        bg.includes("ms-navy") || style?.backgroundColor === "#FCC541"
                          ? bg.includes("ms-navy")
                            ? "rgba(255,255,255,0.85)"
                            : "#001F65"
                          : "#3D3E39",
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Service Lines & Practice Areas ─────────────── */}
      <section className="ms-section-editorial">
        <div className="ms-container">

          {/* Service Lines */}
          <h2
            className="font-serif italic font-normal text-ms-navy mb-12"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
          >
            Service Lines
          </h2>

          {/* Logo grid — 4 cols, natural wrap to 3 on second row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-10 mb-20">
            {SERVICE_LINES.map((sl) => (
              <Link
                key={sl.href}
                href={sl.href}
                className="group flex items-center justify-center h-16 hover:opacity-80 transition-opacity duration-200"
                title={sl.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={sl.logo}
                  alt={sl.name}
                  width={160}
                  height={56}
                  className="max-h-14 w-auto object-contain"
                />
              </Link>
            ))}
          </div>

          {/* Practice Areas */}
          <h2
            className="font-serif italic font-normal text-ms-navy mb-10"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
          >
            Practice Areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {PRACTICE_AREAS.map(({ name, href, Icon }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-start gap-4 hover:opacity-80 transition-opacity duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-ms-navy/30 group-hover:border-ms-navy flex items-center justify-center transition-colors duration-200">
                  <Icon size={16} className="text-ms-navy" strokeWidth={1.5} />
                </div>
                <span className="font-sans text-sm font-semibold text-ms-navy leading-snug pt-2">
                  {name}
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. How to Work With Us ───────────────────────── */}
      <section className="ms-section">
        <div className="ms-container">
          <p className="eyebrow text-ms-navy mb-4">HOW TO WORK WITH US</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {HOW_WE_WORK.map((item) => (
              <div
                key={item.title}
                className="border border-ms-navy/10 rounded-xl p-8 hover:border-ms-navy/25 hover:shadow-sm transition-all duration-300"
              >
                <h3 className="font-serif text-xl font-medium text-ms-navy mb-4">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-charcoal-700 leading-relaxed mb-6">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.bullets.map((b) => (
                    <li
                      key={b}
                      className="font-sans text-sm text-charcoal-700 flex items-start gap-2"
                    >
                      <span
                        className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-ms-navy/40"
                        aria-hidden="true"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Agentic AI (dark) ─────────────────────────── */}
      <section
        className="ms-section-dark"
        style={{ backgroundColor: "#0A0E1A" }}
      >
        <div className="ms-container">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-tech-accent mb-5">AGENTIC AI</p>
            <h2
              className="font-serif font-medium text-dark-ink mb-5"
              style={{
                fontSize: "clamp(1.85rem, 4vw, 2.75rem)",
                lineHeight: 1.1,
                textWrap: "balance",
              }}
            >
              Enhance Your Operations with Agentic AI
            </h2>
            <p className="font-sans text-base text-dark-muted leading-relaxed">
              Agentic AI systems autonomously plan, execute, and adjust tasks to
              achieve business goals — assessing objectives and devising
              solutions in real time, not by following rigid scripts. M&amp;S
              Consulting helps organizations put this capability to work
              responsibly, with the governance and integration work to back it
              up.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AGENTIC_AI_ITEMS.map((item, i) => (
              <div
                key={item.title}
                className="bg-dark-elevated border border-dark-border rounded-xl p-6"
              >
                <span className="font-sans text-xs font-semibold text-tech-accent tracking-widest mb-4 block">
                  0{i + 1}
                </span>
                <h3 className="font-sans text-sm font-semibold text-dark-ink mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-dark-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/practice-areas/ai"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-tech-accent hover:gap-3 transition-all duration-200"
            >
              Learn about our AI practice <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. What Our Clients Are Saying ───────────────── */}
      <section className="ms-section-editorial">
        <div className="ms-container">
          <p className="eyebrow text-ms-navy mb-4">WHAT OUR CLIENTS ARE SAYING</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-ms-paper rounded-xl p-8 border border-ms-navy/8 flex flex-col"
              >
                <span
                  className="font-serif text-5xl leading-none text-ms-navy/15 mb-4 select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="font-sans text-sm text-ms-ink leading-relaxed flex-1 mb-6">
                  {t.quote}
                </p>
                <div className="border-t border-ms-navy/10 pt-5">
                  <p className="font-sans text-sm font-semibold text-ms-navy">
                    {t.name}
                  </p>
                  <p className="font-sans text-xs text-charcoal-700 mt-0.5">
                    {t.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Trusted by ─────────────────────────────────── */}
      <section className="ms-section border-t border-b border-ms-navy/8">
        <div className="ms-container">
          <p className="eyebrow text-ms-navy text-center mb-10">Trusted by</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {TRUSTED_BY.map((org) => (
              <span
                key={org}
                className="font-sans text-sm font-semibold text-charcoal-700/60 hover:text-charcoal-700 transition-colors duration-200"
              >
                {org}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. CTA ───────────────────────────────────────── */}
      <CTABanner
        heading="Collaboration starts with conversation."
        subhead="Tell us where you are trying to go. We will tell you honestly what it takes to get there."
        primaryCta={{ label: "Schedule a Call", href: "/contact" }}
        secondaryCta={{ label: "See Case Studies", href: "/case-studies" }}
        tone="navy"
      />
    </>
  );
}

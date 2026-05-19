import type { Metadata } from "next";
import Link from "next/link";
import { HeroWithVideo } from "@/components/sections/hero";
import { CTABanner } from "@/components/sections/cta-banner";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "M&S Consulting — Enterprise Digital Transformation",
  description:
    "M&S Consulting delivers AI strategy, cloud modernization, and enterprise transformation for government agencies, healthcare networks, and commercial organizations. Est. 2002, Morgantown WV.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const PRACTICE_AREAS = [
  { name: "AI & Data", href: "/practice-areas/ai" },
  { name: "Cloud & Infrastructure", href: "/practice-areas/cloud" },
  { name: "Cyber & Identity Security", href: "/practice-areas/cyber" },
  { name: "Data Analytics", href: "/practice-areas/data-analytics" },
  { name: "Agile Project Management", href: "/practice-areas/agile-pm" },
  { name: "Enterprise Applications", href: "/practice-areas/enterprise-apps" },
];

const SERVICE_LINES = [
  { name: "Salesforce", domain: "salesforce.com", href: "/service-lines/salesforce" },
  { name: "AWS", domain: "aws.amazon.com", href: "/service-lines/aws" },
  { name: "Microsoft", domain: "microsoft.com", href: "/service-lines/microsoft" },
  { name: "Oracle", domain: "oracle.com", href: "/service-lines/oracle" },
  { name: "SAP", domain: "sap.com", href: "/service-lines/sap" },
  { name: "Snowflake", domain: "snowflake.com", href: "/service-lines/snowflake" },
  { name: "Atlassian", domain: "atlassian.com", href: "/service-lines/atlassian" },
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
        style={{ backgroundColor: "#001F65" }}
      >
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h2
                className="font-serif font-medium text-white"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  lineHeight: 1.1,
                  textWrap: "balance",
                }}
              >
                Delivering Modernization for Over 20 Years
              </h2>
            </div>
            <div>
              <p className="font-sans text-lg text-white/75 leading-relaxed mb-8">
                Since 2002, M&amp;S Consulting has helped government agencies,
                healthcare networks, and enterprise organizations solve their
                hardest technology problems. We are a 250-person firm built on
                delivery — not just advice.
              </p>
              <p className="font-sans text-base text-white/60 leading-relaxed mb-10">
                Our consultants have built data platforms for federal agencies,
                deployed enterprise software across thousands of users, and
                stood up cloud infrastructure that runs mission-critical
                systems. Every engagement, we bring that same depth.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-white/90 hover:text-white hover:gap-3 transition-all duration-200"
              >
                About M&S <ArrowRight size={14} />
              </Link>
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
          <p className="eyebrow text-ms-navy text-center mb-4">
            LET&rsquo;S SEE HOW WE CAN HELP YOU
          </p>
          <h2
            className="font-serif font-medium text-ms-navy text-center mb-14"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: 1.15 }}
          >
            Service Lines
          </h2>

          {/* Logo row */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
            {SERVICE_LINES.map((sl) => (
              <Link
                key={sl.href}
                href={sl.href}
                className="group flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-200"
                title={sl.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://logo.clearbit.com/${sl.domain}`}
                  alt={sl.name}
                  width={48}
                  height={48}
                  className="h-10 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-200"
                />
                <span className="font-sans text-xs font-semibold text-charcoal-700 group-hover:text-ms-navy">
                  {sl.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Practice areas divider */}
          <div className="border-t border-ms-navy/10 pt-14">
            <p className="eyebrow text-ms-navy text-center mb-10">
              Practice Areas
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {PRACTICE_AREAS.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-ms-paper hover:bg-ms-navy border border-ms-navy/10 hover:border-ms-navy transition-all duration-200 text-center"
                >
                  <span className="font-sans text-sm font-semibold text-ms-navy group-hover:text-white leading-snug transition-colors duration-200">
                    {area.name}
                  </span>
                  <ArrowRight
                    size={12}
                    className="text-ms-navy/40 group-hover:text-white/70 group-hover:translate-x-0.5 transition-all duration-200"
                  />
                </Link>
              ))}
            </div>
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

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CTABanner } from "@/components/sections/cta-banner";
import { StatCallout } from "@/components/technical/stat-callout";
import { NumberedSectionMark } from "@/components/technical/numbered-section-mark";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "M&S Consulting — Enterprise Digital Transformation",
  description:
    "M&S Consulting delivers AI strategy, cloud modernization, and enterprise transformation for government agencies, healthcare networks, and commercial organizations. Est. 2002, Morgantown WV.",
};

/* ─── SVG Graphic Accent Components ─────────────────────────── */

function WavyUnderline({ color = "#FCC541" }: { color?: string }) {
  return (
    <svg
      aria-hidden="true"
      className="absolute left-0 -bottom-2 w-full overflow-visible pointer-events-none"
      height="10"
      viewBox="0 0 300 10"
      preserveAspectRatio="none"
    >
      <path
        d="M2,7 Q37.5,2 75,7 Q112.5,12 150,7 Q187.5,2 225,7 Q262.5,12 298,6"
        stroke={color}
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CircleAccent({ color = "#FCC541" }: { color?: string }) {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full overflow-visible pointer-events-none scale-110"
      viewBox="0 0 120 48"
      preserveAspectRatio="none"
    >
      <ellipse
        cx="60"
        cy="24"
        rx="57"
        ry="20"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        strokeDasharray="6 3"
      />
    </svg>
  );
}

function StraightUnderline({ color = "#5CA7F3" }: { color?: string }) {
  return (
    <svg
      aria-hidden="true"
      className="absolute left-0 -bottom-1 w-full overflow-visible pointer-events-none"
      height="4"
      viewBox="0 0 200 4"
      preserveAspectRatio="none"
    >
      <line x1="0" y1="2" x2="200" y2="2" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Data ───────────────────────────────────────────────────── */

const CASE_STUDIES = [
  {
    sector: "Federal Government",
    headline: "Cloud-first transformation for a federal data platform",
    description:
      "We migrated 40+ legacy applications to Azure for a federal agency, cutting operational overhead by 35% and enabling real-time reporting for program managers.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=480&q=80&auto=format&fit=crop",
    href: "/case-studies",
  },
  {
    sector: "Healthcare",
    headline: "Unified analytics across 12 regional hospital sites",
    description:
      "We built a Snowflake-powered data fabric connecting clinical, financial, and operational systems — reducing report generation time from days to minutes.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=480&q=80&auto=format&fit=crop",
    href: "/case-studies",
  },
  {
    sector: "Financial Services",
    headline: "Salesforce FSC rollout for a national insurance group",
    description:
      "Deployed Salesforce Financial Services Cloud across a 3,000-person sales force, integrating 6 legacy systems and cutting onboarding time by 60%.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=480&q=80&auto=format&fit=crop",
    href: "/case-studies",
  },
];

const PRACTICE_AREAS = [
  { name: "AI & Data", href: "/practice-areas/ai", accent: "bg-ms-navy" },
  {
    name: "Cloud & Infrastructure",
    href: "/practice-areas/cloud",
    accent: "bg-dark-elevated",
  },
  {
    name: "Cyber & Identity",
    href: "/practice-areas/cyber",
    accent: "bg-ms-navy",
  },
  {
    name: "Data Analytics",
    href: "/practice-areas/data-analytics",
    accent: "bg-dark-elevated",
  },
  {
    name: "Agile PM",
    href: "/practice-areas/agile-pm",
    accent: "bg-ms-navy",
  },
  {
    name: "Enterprise Apps",
    href: "/practice-areas/enterprise-apps",
    accent: "bg-dark-elevated",
  },
];

const SERVICE_LINES = [
  { name: "Microsoft", href: "/service-lines/microsoft" },
  { name: "Salesforce", href: "/service-lines/salesforce" },
  { name: "AWS", href: "/service-lines/aws" },
  { name: "SAP", href: "/service-lines/sap" },
  { name: "Oracle", href: "/service-lines/oracle" },
  { name: "Snowflake", href: "/service-lines/snowflake" },
  { name: "Atlassian", href: "/service-lines/atlassian" },
];

const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Delivery focus",
    description:
      "We focus on getting work done right, on time, and on budget. Project accountability is built into how we staff and manage every engagement.",
  },
  {
    number: "02",
    title: "Cross-sector depth",
    description:
      "Our consultants have delivered across government, healthcare, financial services, and enterprise. That breadth brings solutions to your market that others haven't thought to try.",
  },
  {
    number: "03",
    title: "People-first teams",
    description:
      "We staff consultants with a service-minded, agile mentality. They embed alongside your team, take your goals personally, and care beyond the contract.",
  },
];

const AGENTIC_AI_FEATURES = [
  {
    title: "Autonomous decision-making",
    description:
      "AI agents assess complex inputs, generate insights, and take action — streamlining decisions and reducing human workload on repetitive, high-volume processes.",
  },
  {
    title: "Enterprise system integration",
    description:
      "We connect Agentic AI with Salesforce, SAP, Oracle, and Microsoft 365, so AI-driven workflows fit cleanly into the systems your organization already runs on.",
  },
  {
    title: "Adaptive process optimization",
    description:
      "From predictive analytics to intelligent automation, AI agents optimize workflows dynamically — adjusting to changing conditions rather than following rigid rules.",
  },
  {
    title: "Governance and oversight",
    description:
      "Advanced compliance frameworks and human-in-the-loop controls ensure autonomous AI stays aligned with your ethical standards and regulatory requirements.",
  },
];

/* ─── Page ───────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── Hero: Split layout ─────────────────────────────── */}
      <section className="bg-dark-base overflow-hidden">
        <div className="ms-container grid grid-cols-1 lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_560px] gap-8 lg:gap-16 items-center min-h-[82vh] pt-24 pb-16">
          {/* Left: Text */}
          <div className="py-8 lg:py-16">
            <p className="eyebrow text-tech-accent mb-8 tracking-widest">
              ESTABLISHED 2002 · MORGANTOWN, WV
            </p>
            <h1
              className="font-serif font-medium text-dark-ink mb-8"
              style={{
                fontSize: "clamp(2.75rem, 5.5vw, 4.5rem)",
                lineHeight: 1.06,
                textWrap: "balance",
              }}
            >
              Solving{" "}
              <span className="relative inline-block">
                hard problems
                <WavyUnderline />
              </span>{" "}
              is what we do.
            </h1>
            <p className="font-sans text-lg text-dark-muted leading-relaxed mb-10 max-w-lg">
              In enterprise technology, too many projects stall, stretch, or
              never reach the people they were built for. M&amp;S Consulting
              helps government agencies, healthcare networks, and enterprise
              teams move real work across the finish line. 250 consultants. Two
              decades of delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="primary" size="lg" tone="dark">
                <Link href="/contact">Schedule a Call</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" tone="dark">
                <Link href="/case-studies">See Recent Work</Link>
              </Button>
            </div>

            {/* Quick credential strip */}
            <div className="mt-12 pt-8 border-t border-dark-border flex flex-wrap gap-6">
              {["SBA 8(a) Certified", "ISO 9001:2015", "CMMI Level 3", "Woman-Owned"].map((badge) => (
                <span key={badge} className="font-sans text-xs text-dark-muted tracking-wider uppercase">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Image mosaic */}
          <div className="hidden lg:grid grid-rows-[280px_200px] grid-cols-[1fr_140px] gap-3 h-full py-16">
            <div className="row-span-1 col-span-1 relative rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=400&q=80&auto=format&fit=crop"
                alt="M&S Consulting team collaborating"
                fill
                sizes="(max-width: 1024px) 0px, 420px"
                className="object-cover"
                priority
              />
              {/* navy frame accent */}
              <div className="absolute inset-0 ring-1 ring-white/10 rounded-xl pointer-events-none" />
            </div>
            <div className="row-span-2 col-start-2 relative rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=600&q=80&auto=format&fit=crop"
                alt="Modern office environment"
                fill
                sizes="140px"
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-white/10 rounded-xl pointer-events-none" />
            </div>
            <div className="col-span-1 relative rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&h=300&q=80&auto=format&fit=crop"
                alt="Consultants in a working session"
                fill
                sizes="(max-width: 1024px) 0px, 420px"
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-white/10 rounded-xl pointer-events-none" />
              {/* sun accent overlay strip */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-sun-500/60" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ─────────────────────────────────────── */}
      <section className="ms-section-editorial border-b border-ms-navy/10">
        <div className="ms-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <StatCallout value="250+" label="Consultants" variant="featured" />
            <StatCallout value="20+" label="Years Delivering" variant="featured" />
            <StatCallout value="2002" label="Year Founded" variant="featured" />
            <StatCallout value="19+" label="Industries Served" variant="featured" />
          </div>
        </div>
      </section>

      {/* ── What We Do ──────────────────────────────────────── */}
      <section className="ms-section">
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Text column */}
            <div>
              <NumberedSectionMark number="01" label="WHAT WE DO" className="mb-8" />
              <h2
                className="font-serif font-medium text-ms-navy mb-6"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1, textWrap: "balance" }}
              >
                Working across industries makes us{" "}
                <span className="relative inline-block px-1">
                  better.
                  <CircleAccent />
                </span>
              </h2>
              <p className="font-sans text-base text-charcoal-700 leading-relaxed mb-8">
                Our exposure to a wide set of industries means we bring
                solutions that may be atypical in your market — developed from
                seeing what works and what does not across government,
                healthcare, financial services, and enterprise. The breadth is
                an advantage we bring to every engagement.
              </p>
              <Link
                href="/what-we-do"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-ms-navy hover:gap-3 transition-all duration-200 focus-visible:underline focus-visible:outline-none"
              >
                How we work <ArrowRight size={14} />
              </Link>

              {/* Service lines row */}
              <div className="mt-12 pt-8 border-t border-ms-navy/10">
                <p className="eyebrow text-ms-navy mb-5">Technology Partners</p>
                <div className="flex flex-wrap gap-3">
                  {SERVICE_LINES.map((sl) => (
                    <Link
                      key={sl.href}
                      href={sl.href}
                      className="font-sans text-xs font-semibold text-charcoal-700 bg-ms-cream/60 hover:bg-ms-cream border border-ms-navy/10 rounded-full px-3 py-1.5 transition-colors duration-200"
                    >
                      {sl.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Practice area cards */}
            <div className="grid grid-cols-2 gap-3">
              {PRACTICE_AREAS.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className={`group relative rounded-xl p-5 ${area.accent} text-dark-ink hover:opacity-90 transition-opacity duration-200 flex flex-col justify-between min-h-[120px]`}
                >
                  <span className="font-sans text-xs font-semibold uppercase tracking-widest text-dark-muted">
                    Practice Area
                  </span>
                  <div>
                    <span className="font-sans text-sm font-semibold text-dark-ink leading-snug block mb-2">
                      {area.name}
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-tech-accent group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Studies Preview ─────────────────────────────── */}
      <section className="ms-section-editorial">
        <div className="ms-container">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <NumberedSectionMark number="02" label="RECENT WORK" className="mb-4" />
              <h2
                className="font-serif font-medium text-ms-navy"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.1 }}
              >
                Work that{" "}
                <span className="relative inline-block">
                  ships.
                  <StraightUnderline />
                </span>
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-ms-navy hover:gap-3 transition-all duration-200 shrink-0"
            >
              All case studies <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.headline}
                href={cs.href}
                className="group bg-ms-paper rounded-xl overflow-hidden border border-ms-navy/8 hover:border-ms-navy/20 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={cs.image}
                    alt={cs.headline}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Sector tag overlay */}
                  <div className="absolute top-3 left-3">
                    <span className="font-sans text-xs font-semibold uppercase tracking-widest bg-ms-navy text-ms-paper px-2.5 py-1 rounded">
                      {cs.sector}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-lg font-medium text-ms-navy mb-3 leading-snug">
                    {cs.headline}
                  </h3>
                  <p className="font-sans text-sm text-charcoal-700 leading-relaxed flex-1">
                    {cs.description}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 font-sans text-xs font-semibold text-ms-navy group-hover:gap-2.5 transition-all duration-200">
                    Read case study <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agentic AI ──────────────────────────────────────── */}
      <section
        className="ms-section-dark"
        style={{ backgroundColor: "#0A0E1A" }}
      >
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-start mb-14">
            <div>
              <NumberedSectionMark number="03" label="AGENTIC AI" className="mb-6 text-tech-accent" />
              <h2
                className="font-serif font-medium text-dark-ink mb-5"
                style={{ fontSize: "clamp(1.85rem, 4vw, 2.75rem)", lineHeight: 1.1, textWrap: "balance" }}
              >
                AI that plans, acts,{" "}
                <span className="relative inline-block">
                  and adapts.
                  <WavyUnderline color="#5CA7F3" />
                </span>
              </h2>
              <p className="font-sans text-base text-dark-muted leading-relaxed max-w-xl">
                Agentic AI systems autonomously plan, execute, and adjust tasks
                to achieve business goals — assessing objectives and devising
                solutions in real time, not by following rigid scripts. M&amp;S
                Consulting helps organizations put this capability to work
                responsibly.
              </p>
            </div>
            <div className="lg:pt-12">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=450&q=80&auto=format&fit=crop"
                  alt="AI strategy and implementation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-base/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-sans text-xs text-dark-muted uppercase tracking-widest">
                    Practice Area
                  </p>
                  <Link
                    href="/practice-areas/ai"
                    className="font-sans text-sm font-semibold text-dark-ink hover:text-tech-accent transition-colors duration-200 inline-flex items-center gap-1.5 mt-1"
                  >
                    AI &amp; Data Practice <ExternalLink size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AGENTIC_AI_FEATURES.map((item, i) => (
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
        </div>
      </section>

      {/* ── How We're Different ─────────────────────────────── */}
      <section className="ms-section">
        <div className="ms-container">
          <div className="mb-14">
            <NumberedSectionMark number="04" label="HOW WE'RE DIFFERENT" className="mb-6" />
            <h2
              className="font-serif font-medium text-ms-navy max-w-xl"
              style={{ fontSize: "clamp(1.85rem, 4vw, 2.75rem)", lineHeight: 1.1, textWrap: "balance" }}
            >
              No need to find a different firm for every{" "}
              <span className="relative inline-block">
                problem.
                <WavyUnderline color="#FCC541" />
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DIFFERENTIATORS.map((d) => (
              <div
                key={d.title}
                className="border border-ms-navy/10 rounded-xl p-8 bg-ms-paper hover:border-ms-navy/25 hover:shadow-sm transition-all duration-300"
              >
                <span className="font-sans text-4xl font-semibold text-ms-cream/80 block mb-4 tabular-nums select-none" style={{ color: "#E8E4DA" }}>
                  {d.number}
                </span>
                <h3 className="font-sans text-base font-semibold text-ms-navy mb-3">
                  {d.title}
                </h3>
                <p className="font-sans text-sm text-charcoal-700 leading-relaxed">
                  {d.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial / proof strip ──────────────────────── */}
      <section className="ms-section-editorial">
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-center">
            <div>
              <NumberedSectionMark number="05" label="CLIENT PERSPECTIVE" className="mb-8" />
              <blockquote>
                <p
                  className="font-serif font-medium text-ms-navy mb-8 leading-snug"
                  style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", textWrap: "balance" }}
                >
                  &ldquo;M&amp;S didn&rsquo;t just deliver software — they understood
                  our mission and helped us build the internal capability to
                  run it ourselves.&rdquo;
                </p>
                <footer className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-ms-navy/10 flex items-center justify-center shrink-0">
                    <span className="font-sans text-sm font-semibold text-ms-navy">D.R.</span>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-ms-navy">Deputy Director</p>
                    <p className="font-sans text-xs text-charcoal-700">Federal Healthcare Agency</p>
                  </div>
                </footer>
              </blockquote>
            </div>

            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=450&q=80&auto=format&fit=crop"
                alt="Consulting team in a working session"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-ms-navy/10 rounded-xl pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

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

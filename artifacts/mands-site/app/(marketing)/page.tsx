import type { Metadata } from "next";
import Link from "next/link";
import { HeroWithVideo } from "@/components/sections/hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CTABanner } from "@/components/sections/cta-banner";
import { StatCallout } from "@/components/technical/stat-callout";
import { NumberedSectionMark } from "@/components/technical/numbered-section-mark";

export const metadata: Metadata = {
  title: "M&S Consulting — Enterprise Digital Transformation",
  description:
    "M&S Consulting delivers AI strategy, cloud modernization, and enterprise transformation for government agencies, healthcare networks, and commercial organizations. Est. 2002, Morgantown WV.",
};

const PRACTICE_AREAS = [
  { name: "AI & Data", href: "/practice-areas/ai" },
  { name: "Cloud & Infrastructure", href: "/practice-areas/cloud" },
  { name: "Cyber & Identity Security", href: "/practice-areas/cyber" },
  { name: "Data Analytics", href: "/practice-areas/data-analytics" },
  { name: "Agile Project Management", href: "/practice-areas/agile-pm" },
  { name: "Enterprise Applications", href: "/practice-areas/enterprise-apps" },
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

const AGENTIC_AI_ITEMS = [
  {
    title: "Autonomous decision-making",
    description:
      "AI agents assess complex data inputs, generate insights, and take action — streamlining decisions and reducing the human workload on repetitive, high-volume processes.",
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

const DIFFERENTIATORS = [
  {
    title: "Delivery focus",
    description:
      "We focus on getting work done right, on time, and on budget. Project accountability is built into how we staff and manage every engagement — not bolted on at the end.",
  },
  {
    title: "Cross-sector depth",
    description:
      "Our consultants have delivered across government, healthcare, financial services, and enterprise. That breadth brings solutions to your market that others haven't thought to try.",
  },
  {
    title: "People-first teams",
    description:
      "We staff consultants with a service-minded, agile mentality. They embed alongside your team, take your goals personally, and care about the outcome beyond the contract.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroWithVideo
        tone="dark"
        eyebrow="ESTABLISHED 2002 · MORGANTOWN, WV"
        headline="Solving hard problems is what we do."
        subhead="In enterprise technology, too many projects stall, stretch, or never reach the people they were built for. M&S Consulting helps government agencies, healthcare networks, and enterprise teams move real work across the finish line. 250 consultants. Two decades of delivery. We embed alongside your team and ship."
        primaryCta={{ label: "Schedule a Call", href: "/contact" }}
        secondaryCta={{ label: "See Recent Work", href: "/case-studies" }}
      />

      {/* Stats */}
      <section className="ms-section-editorial">
        <div className="ms-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <StatCallout value="250+" label="Consultants" variant="featured" />
            <StatCallout value="20+" label="Years Delivering" variant="featured" />
            <StatCallout value="2002" label="Year Founded" variant="featured" />
            <StatCallout value="19+" label="Industries Served" variant="featured" />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="ms-section">
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <NumberedSectionMark number="01" label="WHAT WE DO" className="mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-display text-ms-navy mb-5">
                Working across industries makes us better.
              </h2>
              <p className="font-sans text-lg text-charcoal-700 leading-relaxed mb-8">
                Our exposure to a wide set of industries means we bring solutions
                that may be atypical in your market — developed from seeing what
                works and what does not across government, healthcare, financial
                services, and enterprise. The breadth is an advantage we bring to
                every engagement.
              </p>
              <Link
                href="/what-we-do"
                className="font-sans text-sm font-semibold text-ms-navy underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
              >
                How we work →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-x-8">
              <div>
                <p className="eyebrow text-ms-navy mb-5">Practice Areas</p>
                <ul className="space-y-3">
                  {PRACTICE_AREAS.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="font-sans text-sm font-medium text-charcoal-700 hover:text-ms-navy transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow text-ms-navy mb-5">Service Lines</p>
                <ul className="space-y-3">
                  {SERVICE_LINES.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="font-sans text-sm font-medium text-charcoal-700 hover:text-ms-navy transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agentic AI spotlight */}
      <FeatureGrid
        sectionNumber="02"
        eyebrow="AGENTIC AI"
        heading="AI that plans, acts, and adapts."
        subhead="Agentic AI introduces a new paradigm where systems autonomously plan, execute, and adjust tasks to achieve business goals — not by following rigid scripts, but by assessing objectives and devising solutions in real time. M&S Consulting helps organizations put this capability to work."
        items={AGENTIC_AI_ITEMS}
        columns={2}
        tone="dark"
      />

      {/* How We're Different */}
      <FeatureGrid
        sectionNumber="03"
        eyebrow="HOW WE'RE DIFFERENT"
        heading="No need to find a different firm for every problem."
        subhead="M&S Consulting brings digital transformation expertise across strategy, delivery, and managed services — under one roof, with one team accountable for the outcome."
        items={DIFFERENTIATORS}
        columns={3}
        tone="cream"
      />

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

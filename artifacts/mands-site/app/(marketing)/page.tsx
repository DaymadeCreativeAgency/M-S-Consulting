import type { Metadata } from "next";
import Link from "next/link";
import { HeroWithVideo, RotatingHeroWord } from "@/components/sections/hero";
import { CTABanner } from "@/components/sections/cta-banner";
import { TrustedByCarousel } from "@/components/sections/trusted-by-carousel";
import { HowWeWork } from "@/components/sections/how-we-work";
import { TestimonialsStack } from "@/components/sections/testimonials-stack";
import { AnimatedOvalText } from "@/components/sections/animated-oval-text";
import { ArrowRight, LayoutGrid, Cloud, Cpu, BarChart2, Layers, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "M&S Consulting — Enterprise Digital Transformation" },
  description:
    "M&S Consulting delivers AI strategy, cloud modernization, and enterprise transformation for government agencies, healthcare networks, and commercial organizations. Est. 2002, Morgantown WV.",
  alternates: { canonical: "/" },
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

// crop: wrapW/H is the visible box; imgW/H is the full rendered img; top/left are negative offsets
// Used for PNGs that have large whitespace margins around the actual logo content.
type LogoCrop = { wrapW: number; wrapH: number; imgW: number; imgH: number; top: number; left: number };
type ServiceLine = { name: string; logo: string; href: string; h?: number; crop?: LogoCrop };

const SERVICE_LINES: ServiceLine[] = [
  { name: "Atlassian",  logo: "/media/logos/service-lines/atlassian.png",  href: "/service-lines/atlassian",  h: 40 },
  // AWS SVG viewBox="166 159 462 446" — nearly square, needs bigger height to look substantial
  { name: "AWS",        logo: "/media/logos/service-lines/aws.svg",         href: "/service-lines/aws",        h: 72 },
  // Microsoft: 800×600 PNG, logo content at x=[75,725] y=[231,369]
  // Scale = 52/138 = 0.377; wrapW = 650×0.377 = 245; imgW = 800×0.377 = 302; imgH = 600×0.377 = 226
  { name: "Microsoft",  logo: "/media/logos/service-lines/microsoft.png",   href: "/service-lines/microsoft",
    crop: { wrapW: 245, wrapH: 52, imgW: 302, imgH: 226, top: -87, left: -28 } },
  // Oracle SVG viewBox="65 240 670 115" — very wide, short
  { name: "Oracle",     logo: "/media/logos/service-lines/oracle.svg",      href: "/service-lines/oracle",     h: 36 },
  // Salesforce SVG viewBox="135 110 531 425" — cloud icon with large internal padding, needs tall height
  { name: "Salesforce", logo: "/media/logos/service-lines/salesforce.svg",  href: "/service-lines/salesforce", h: 84 },
  // SAP: 800×600 PNG — show generous window so the full SAP mark is never clipped
  // imgW=143 imgH=107 (scale=0.178), wrapW wider to allow centering, left=-14 starts at original x≈79
  { name: "SAP",        logo: "/media/logos/service-lines/sap.png",         href: "/service-lines/sap",
    crop: { wrapW: 120, wrapH: 44, imgW: 143, imgH: 107, top: -31, left: -14 } },
  { name: "Snowflake",  logo: "/media/logos/service-lines/snowflake.png",   href: "/service-lines/snowflake",  h: 40 },
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


const TESTIMONIALS = [
  {
    quote:
      "M&S Consulting has been a trusted business partner to me for the last 9 years. They help empower organizations to leverage the technological advancements available. I would recommend them to any organization.",
    name: "CIO",
    title: "Deltacom (now Windstream)",
    org: "Telecommunications",
  },
  {
    quote:
      "Using AI, M&S developed an innovative solution that is much better, much faster, and much less expensive than our previous process. Very rare to get all three benefits at once.",
    name: "Senior Partner",
    title: "International Law Firm",
    org: "Legal Services",
  },
  {
    quote:
      "Last year we worked 1.8 million hourly hours. This year, we will do the same amount of work in 1.7 million hours. Because of M&S Consulting's tech solutions, we will have a 100,000-hour reduction just by giving people true expectations.",
    name: "COO",
    title: "Horticulture Industry",
    org: "",
  },
  {
    quote:
      "M&S resources helped us identify areas for process improvement in correlation with customer requirements. Those resources were Lean Six Sigma trained, and also provided that methodology expertise and support in facilitation of the activities.",
    name: "Process Improvement Group Leader",
    title: "Lockheed Martin",
    org: "Defense & Aerospace",
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
            <RotatingHeroWord />{" "}
            problems is our superpower
          </>
        }
        subhead="We deliver considered AI-first digital solutions for clients and partners."
        primaryCta={{ label: "Schedule a Call", href: "/contact" }}
        showGrid={false}
      />

      {/* ── 2. Done. Better. Together. ────────────────────── */}
      <section className="ms-section-editorial overflow-hidden">
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-stretch">

            {/* Left: stacked word blocks */}
            <div className="flex flex-col justify-center">
              <p className="eyebrow text-ms-navy mb-8">WHO WE ARE</p>
              <div className="divide-y divide-ms-navy/10">
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
                  <div key={word} className="py-7 grid grid-cols-[200px_1fr] gap-10 items-start">
                    <h2
                      className="font-serif font-medium text-ms-navy"
                      style={{ fontSize: "clamp(2.25rem, 3.5vw, 3rem)", lineHeight: 1.05 }}
                    >
                      {word}
                    </h2>
                    <p className="font-sans text-sm text-charcoal-700 leading-relaxed pt-1">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: photo */}
            <div className="hidden lg:block rounded-2xl overflow-hidden" style={{ minHeight: 460 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/media/team/consultant-meeting.jpg"
                alt="M&S consultant in a client meeting"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>

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
                  textWrap: "initial",
                }}
              >
                Delivering
                <br />
                Modernization for{" "}
                <AnimatedOvalText>Over 20 Years</AnimatedOvalText>
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
                href="/practice-areas"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-ms-navy hover:gap-3 transition-all duration-200"
              >
                How we work <ArrowRight size={14} />
              </Link>
            </div>

            {/* Geometric collage graphic */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/graphics/geometric-8-1.png"
              alt=""
              aria-hidden="true"
              className="w-full rounded-xl"
              style={{ maxWidth: 520 }}
            />
          </div>
        </div>
      </section>

      {/* ── 5. Service Lines & Practice Areas ─────────────── */}
      <section id="service-lines" className="ms-section-editorial">
        <div className="ms-container">

          {/* ── Header row ── */}
          <div className="mb-12">
            <p className="eyebrow text-ms-navy mb-3">TECHNOLOGY PARTNERS</p>
            <h2
              className="font-serif font-medium text-ms-navy"
              style={{ fontSize: "clamp(1.85rem, 3vw, 2.5rem)", lineHeight: 1.1 }}
            >
              Service Lines
            </h2>
          </div>

          {/* ── Logo grid ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10 mb-20">
            {SERVICE_LINES.map((sl) => (
              <Link
                key={sl.href}
                href={sl.href}
                className="group flex items-center justify-center transition-opacity duration-200 hover:opacity-70"
                style={{ minHeight: 72 }}
                title={sl.name}
              >
                {sl.crop ? (
                  <div style={{ width: sl.crop.wrapW, height: sl.crop.wrapH, overflow: "hidden", position: "relative", flexShrink: 0, maxWidth: "100%" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={sl.logo} alt={sl.name} style={{ position: "absolute", width: sl.crop.imgW, height: sl.crop.imgH, top: sl.crop.top, left: sl.crop.left }} />
                  </div>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={sl.logo} alt={sl.name} style={{ maxHeight: sl.h ?? 48, height: "auto", width: "auto", maxWidth: "100%", display: "block" }} />
                )}
              </Link>
            ))}
          </div>

          {/* ── Divider ── */}
          <div className="border-t border-ms-navy/10 mb-12" />

          {/* ── Practice Areas ── */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <p className="eyebrow text-ms-navy mb-3">WHAT WE SPECIALIZE IN</p>
              <h2
                className="font-serif font-medium text-ms-navy"
                style={{ fontSize: "clamp(1.85rem, 3vw, 2.5rem)", lineHeight: 1.1 }}
              >
                Practice Areas
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {PRACTICE_AREAS.map(({ name, href, Icon }, i) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center gap-4 px-5 py-4 rounded-lg hover:bg-ms-navy/4 transition-colors duration-200"
              >
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:bg-ms-navy"
                  style={{ backgroundColor: "rgba(0,31,101,0.06)" }}
                >
                  <Icon size={15} className="text-ms-navy group-hover:text-white transition-colors duration-200" strokeWidth={1.5} />
                </div>
                <span className="font-sans text-base font-medium text-ms-ink group-hover:text-ms-navy leading-snug flex-1">
                  {name}
                </span>
                <span className="font-sans text-xs text-ms-navy/30 group-hover:text-ms-navy/60 transition-colors tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. How to Work With Us ───────────────────────── */}
      <HowWeWork phases={HOW_WE_WORK} />

      {/* ── 7. What Our Clients Are Saying ───────────────── */}
      <TestimonialsStack testimonials={TESTIMONIALS} />

      {/* ── 9. Trusted by ─────────────────────────────────── */}
      <TrustedByCarousel />

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

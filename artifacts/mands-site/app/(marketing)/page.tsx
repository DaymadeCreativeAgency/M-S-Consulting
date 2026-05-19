import type { Metadata } from "next";
import Link from "next/link";
import { HeroWithVideo } from "@/components/sections/hero";
import { CTABanner } from "@/components/sections/cta-banner";
import { TrustedByCarousel } from "@/components/sections/trusted-by-carousel";
import { HowWeWork } from "@/components/sections/how-we-work";
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

// crop: wrapW/H is the visible box; imgW/H is the full rendered img; top/left are negative offsets
// Used for PNGs that have large whitespace margins around the actual logo content.
type LogoCrop = { wrapW: number; wrapH: number; imgW: number; imgH: number; top: number; left: number };
type ServiceLine = { name: string; logo: string; href: string; h?: number; crop?: LogoCrop };

const SERVICE_LINES: ServiceLine[] = [
  { name: "Atlassian",  logo: "/media/logos/service-lines/atlassian.png",  href: "/service-lines/atlassian",  h: 52 },
  { name: "AWS",        logo: "/media/logos/service-lines/aws.svg",         href: "/service-lines/aws",        h: 52 },
  // Microsoft: 800×600 PNG, content at x=[75,725] y=[231,369] — all numbers scaled so visible content = 52px tall
  { name: "Microsoft",  logo: "/media/logos/service-lines/microsoft.png",   href: "/service-lines/microsoft",
    crop: { wrapW: 245, wrapH: 52, imgW: 302, imgH: 226, top: -87, left: -28 } },
  { name: "Oracle",     logo: "/media/logos/service-lines/oracle.svg",      href: "/service-lines/oracle",     h: 40 },
  { name: "Salesforce", logo: "/media/logos/service-lines/salesforce.svg",  href: "/service-lines/salesforce", h: 56 },
  // SAP: 800×600 PNG, content at x=[187,687] y=[176,423] — visible content = 52px tall
  { name: "SAP",        logo: "/media/logos/service-lines/sap.png",         href: "/service-lines/sap",
    crop: { wrapW: 111, wrapH: 52, imgW: 168, imgH: 126, top: -37, left: -33 } },
  { name: "Snowflake",  logo: "/media/logos/service-lines/snowflake.png",   href: "/service-lines/snowflake",  h: 52 },
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
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow text-ms-navy mb-3">TECHNOLOGY PARTNERS</p>
              <h2
                className="font-serif font-medium text-ms-navy"
                style={{ fontSize: "clamp(1.85rem, 3vw, 2.5rem)", lineHeight: 1.1 }}
              >
                Service Lines
              </h2>
            </div>
            <Link
              href="/service-lines"
              className="font-sans text-sm font-semibold text-ms-navy underline-offset-4 hover:underline flex-shrink-0"
            >
              View all service lines →
            </Link>
          </div>

          {/* ── Logo cards ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-20">
            {SERVICE_LINES.map((sl) => (
              <Link
                key={sl.href}
                href={sl.href}
                className="group flex items-center justify-center bg-ms-paper border border-ms-navy/10 rounded-xl hover:border-ms-navy/30 hover:shadow-sm transition-all duration-200 px-6"
                style={{ minHeight: 104 }}
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
            {/* Filler to complete the 4-col row */}
            <div className="bg-ms-paper border border-ms-navy/10 rounded-xl" style={{ minHeight: 104 }} />
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
                <span className="font-sans text-sm font-medium text-ms-ink group-hover:text-ms-navy leading-snug flex-1">
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
      <section style={{ backgroundColor: "#001F65" }} className="py-24 lg:py-32 overflow-hidden">
        <div className="ms-container">

          {/* Eyebrow */}
          <p className="eyebrow mb-12" style={{ color: "rgba(255,255,255,0.45)" }}>
            WHAT OUR CLIENTS ARE SAYING
          </p>

          {/* Featured pull-quote */}
          <div className="relative mb-16 lg:mb-20">
            {/* Background quote mark — large watermark */}
            <span
              className="absolute select-none pointer-events-none font-serif leading-none"
              aria-hidden="true"
              style={{
                fontSize: "clamp(12rem, 24vw, 22rem)",
                color: "rgba(255,255,255,0.04)",
                top: "-0.25em",
                left: "-0.05em",
                lineHeight: 1,
              }}
            >
              &ldquo;
            </span>

            <div className="relative" style={{ maxWidth: "820px" }}>
              {/* Small leading mark for readability */}
              <span
                className="font-serif block mb-4"
                aria-hidden="true"
                style={{ fontSize: "2.5rem", color: "rgba(92,167,243,0.6)", lineHeight: 1 }}
              >
                &ldquo;
              </span>
              <p
                className="font-serif text-white mb-8"
                style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.85rem)", lineHeight: 1.45, fontWeight: 400 }}
              >
                {TESTIMONIALS[0].quote}
              </p>
              <div className="flex items-center gap-4">
                <span
                  className="block w-8 h-px flex-shrink-0"
                  style={{ backgroundColor: "rgba(92,167,243,0.5)" }}
                  aria-hidden="true"
                />
                <div>
                  <p className="font-sans text-sm font-semibold text-white">{TESTIMONIALS[0].name}</p>
                  <p className="font-sans text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {TESTIMONIALS[0].title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mb-12" style={{ height: 1, backgroundColor: "rgba(255,255,255,0.08)" }} aria-hidden="true" />

          {/* Supporting testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.slice(1).map((t) => (
              <div
                key={t.name}
                className="rounded-2xl p-8 flex flex-col"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span
                  className="font-serif block mb-4 leading-none select-none"
                  aria-hidden="true"
                  style={{ fontSize: "2rem", color: "rgba(255,255,255,0.18)" }}
                >
                  &ldquo;
                </span>
                <p
                  className="font-sans flex-1 mb-6 leading-relaxed"
                  style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.75)" }}
                >
                  {t.quote}
                </p>
                <div
                  className="pt-5 flex items-center gap-3"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-sans text-xs font-semibold"
                    style={{ backgroundColor: "rgba(92,167,243,0.15)", color: "#5CA7F3" }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-white">{t.name}</p>
                    <p className="font-sans text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

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

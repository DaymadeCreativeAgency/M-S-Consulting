import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroWithVideo, RotatingHeroWord } from "@/components/sections/hero";
import { CTABanner } from "@/components/sections/cta-banner";
import { TrustedByCarousel } from "@/components/sections/trusted-by-carousel";
import { HowWeWork } from "@/components/sections/how-we-work";
import { TestimonialsStack } from "@/components/sections/testimonials-stack";
import { AnimatedOvalText } from "@/components/sections/animated-oval-text";
import { PartnerLogoTile } from "@/components/sections/partner-logo-tile";
import { DoneBetterTogether } from "@/components/sections/done-better-together";
import { RoadmapCallout } from "@/components/roadmap/roadmap-callout";
import { Button } from "@/components/ui/button";
import {
  HOMEPAGE_PRACTICE_AREAS,
  HOMEPAGE_SERVICE_LINES,
} from "@/lib/homepage-partners";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: { absolute: "M&S Consulting — Enterprise Digital Transformation" },
  description:
    "M&S Consulting delivers AI strategy, cloud modernization, and enterprise transformation for government agencies, healthcare networks, and commercial organizations. Est. 2002, Morgantown WV.",
  alternates: { canonical: "/" },
};

/* ─── Data ───────────────────────────────────────────────────── */

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
              <DoneBetterTogether />
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

      {/* ── 3. Delivering Digital Modernization for X Years ───── */}
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
                Delivering Digital
                <br />
                Modernization for{" "}
                <AnimatedOvalText>{new Date().getFullYear() - 2002} Years</AnimatedOvalText>
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
                Working across industries makes us{" "}
                <span className="relative inline-block italic text-[#001F65]">
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-[0.05em] -left-[0.08em] -right-[0.08em] z-0 h-[0.55em] bg-[#5CA7F3]/35"
                  />
                  <span className="relative z-10">better.</span>
                </span>
              </h2>
              <p className="font-sans text-base text-charcoal-700 leading-relaxed mb-8">
                Our exposure to a wide set of industries means we bring
                solutions that may be atypical in your market, developed from
                seeing what works and what doesn&rsquo;t across government,
                healthcare, financial services, and enterprise. The breadth is
                an advantage we bring to every engagement.
              </p>
              <Button asChild variant="secondary">
                <Link href="#how-we-work">
                  How We Work <ArrowRight size={14} />
                </Link>
              </Button>
            </div>

            {/* Geometric collage graphic */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/graphics/geometric-8-1.png"
              alt=""
              aria-hidden="true"
              className="hidden w-full rounded-xl lg:block"
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
          <div className="mb-20 grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-7">
            {HOMEPAGE_SERVICE_LINES.map((logo) => (
              <PartnerLogoTile key={logo.href} {...logo} />
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

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {HOMEPAGE_PRACTICE_AREAS.map(({ name, href, icon }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center gap-5 rounded-2xl border border-[rgba(0,31,101,0.08)] bg-white/80 px-5 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(0,31,101,0.16)] hover:bg-white hover:shadow-[0_12px_32px_rgba(0,31,101,0.08)]"
              >
                <div
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl p-2.5 transition-transform duration-200 group-hover:scale-[1.03]"
                  style={{ backgroundColor: "#E8F3FF" }}
                >
                  <Image
                    src={icon}
                    alt=""
                    aria-hidden
                    width={56}
                    height={56}
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <span className="flex-1 font-sans text-base font-medium leading-snug text-ms-ink group-hover:text-ms-navy">
                  {name}
                </span>
                <ArrowRight
                  size={18}
                  aria-hidden
                  className="shrink-0 text-ms-navy/0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-ms-navy/70"
                />
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

      {/* ── 9.5 AI Roadmap interactive resource ───────────── */}
      <RoadmapCallout />

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

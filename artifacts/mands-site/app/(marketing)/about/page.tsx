import type { Metadata } from "next";
import {
  BrainCircuit,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { AboutStatsStrip } from "@/components/sections/about-stats-strip";
import { MsContactForm } from "@/components/sections/ms-contact-form";
import { TeamSection } from "@/components/sections/team-section";

export const metadata: Metadata = {
  title: { absolute: "About M&S Consulting | Management & Solutions Since 2002" },
  description:
    "M&S stands for Management and Solutions. Since 2002 we've been making the complex simple, helping organizations from a diverse array of industries use advanced tech tools to achieve game-changing digital transformations.",
  alternates: { canonical: "/about" },
};

/* ─── Static data ────────────────────────────────────────────────────────── */

const STORY_PILLARS: {
  marker: string;
  headline: string;
  body: string;
  icon: LucideIcon;
}[] = [
  {
    marker: "WHO WE ARE",
    headline: "A digital consulting collective.",
    body: "Elite, industry-leading specialists with practitioner-level depth across SAP, Salesforce, cloud architecture, AI, data, and organizational change.",
    icon: UsersRound,
  },
  {
    marker: "WHAT WE DO",
    headline: "Fluent in complexity. Fluent in outcomes.",
    body: "We translate strategic goals into measurable programs, from ERP implementation to AI readiness to cloud migration.",
    icon: Target,
  },
  {
    marker: "HOW WE WORK",
    headline: "Every problem is a puzzle worth solving.",
    body: "We work alongside your team with clarity, positivity, and a bias toward delivery that lasts after launch.",
    icon: Puzzle,
  },
];

const VALUES: {
  icon: LucideIcon;
  label: string;
  body: string;
}[] = [
  {
    icon: Trophy,
    label: "Commitment to Customer Success",
    body: "We take our partners' outcomes personally. Your success is the only metric that matters.",
  },
  {
    icon: HeartHandshake,
    label: "Close Partnerships",
    body: "We're approachable, friendly, and genuinely committed to making your life easier at every turn.",
  },
  {
    icon: BrainCircuit,
    label: "Depth of Expertise",
    body: "We curate elite teams of industry-leading specialists—never generalists filling seats.",
  },
  {
    icon: ShieldCheck,
    label: "Living Up to Our Legacy",
    body: "Twenty-plus years of on-time delivery sets the bar we hold ourselves to, every single engagement.",
  },
  {
    icon: Lightbulb,
    label: "Innovative Solutions",
    body: "We think outside the box so you stay a cut above.",
  },
];

const CONTRACT_VEHICLES = [
  { label: "FBI ITSSS-2", detail: "Prime" },
  { label: "Navy SeaPort NxG", detail: "Prime" },
  { label: "NASA SEWP V", detail: "" },
  { label: "GSA Multi-Award Schedule (MAS) Contract", detail: "GS-35F-0231S SIN: 54151S" },
];

const NAICS = ["541430", "541511*", "541512", "541513", "51519", "541990", "541611", "51614", "51618", "518210"];

const DESIGNATIONS = [
  "SBA HUBZone Certified",
  "Woman-Owned Small Business (WOSB)",
  "Small Disadvantaged Business (SDB)",
];

const MEMBERSHIPS = [
  "Hiring Our Heroes",
  "Salesforce Talent Alliance",
  "Pledge 1%",
];

const DESIGNATION_BADGES = [
  { src: "/media/badge-sba-hubzone.png", alt: "SBA HUBZone Certified", aspect: "portrait" },
  { src: "/media/badge-sba-wosb.png", alt: "SBA WOSB Certified", aspect: "portrait" },
  { src: "/media/badge-gsa-contract.png", alt: "GSA Contract Holder", aspect: "wide" },
  { src: "/media/badge-iso-9001.png", alt: "ISO 9001:2015 Certified", aspect: "wide" },
  { src: "/media/badge-hiring-our-heroes.png", alt: "Hiring Our Heroes", aspect: "wide" },
  { src: "/media/badge-salesforce-talent.png", alt: "Salesforce Talent Alliance", aspect: "wide" },
];

const PARTNER_LOGOS: {
  name: string;
  logo: string;
  tier?: string;
  tierDetail?: string;
  logoMaxWidth?: number;
  logoMaxHeight?: number;
  nudgeY?: number;
}[] = [
  {
    name: "Atlassian",
    logo: "/media/logos/service-lines/atlassian.svg",
    tier: "Silver Solution Partner",
    tierDetail: "US Government",
    logoMaxWidth: 160,
    logoMaxHeight: 30,
  },
  {
    name: "AWS",
    logo: "/media/logos/service-lines/aws.svg",
    tier: "Partner",
    tierDetail: "Advanced Tier Services",
    logoMaxWidth: 86,
    logoMaxHeight: 42,
    nudgeY: 3,
  },
  {
    name: "Carahsoft",
    logo: "/media/logos/service-lines/carahsoft.svg",
    tier: "Delivery Partner",
    logoMaxWidth: 184,
    logoMaxHeight: 38,
  },
  {
    name: "Google Cloud",
    logo: "/media/logos/service-lines/google-cloud.svg",
    tier: "Partner",
    tierDetail: "Workspace Reseller",
    logoMaxWidth: 172,
    logoMaxHeight: 38,
  },
  { name: "Microsoft", logo: "/media/logos/service-lines/microsoft.svg", logoMaxWidth: 170, logoMaxHeight: 34 },
  { name: "Oracle", logo: "/media/logos/service-lines/oracle.svg", logoMaxWidth: 168, logoMaxHeight: 26 },
  { name: "Salesforce", logo: "/media/logos/service-lines/salesforce.svg", logoMaxWidth: 150, logoMaxHeight: 58 },
  { name: "Snowflake", logo: "/media/logos/service-lines/snowflake.svg", logoMaxWidth: 158, logoMaxHeight: 34 },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0A0E1A" }}>
        <div className="ms-container py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <p
                className="font-sans text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: "#5CA7F3" }}
              >
                ABOUT US
              </p>
              <h1
                className="font-serif text-white"
                style={{
                  fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
                  lineHeight: 1.1,
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  marginBottom: "1rem",
                }}
              >
                Who is M&amp;S?
              </h1>
              <p
                className="font-serif"
                style={{
                  fontSize: "clamp(1.25rem, 2vw, 1.6rem)",
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.4,
                  marginBottom: "1.75rem",
                }}
              >
                We&rsquo;re so glad you asked.
              </p>
              <p
                className="font-sans"
                style={{
                  fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.70)",
                }}
              >
                M&amp;S stands for <strong style={{ color: "white" }}>Management</strong> and{" "}
                <strong style={{ color: "white" }}>Solutions</strong>. Since 2002, we&rsquo;ve been{" "}
                <strong style={{ color: "white" }}>making the complex simple</strong>, helping
                organizations from a diverse array of industries use advanced tech tools to achieve{" "}
                <strong style={{ color: "white" }}>game-changing digital transformations</strong>.
              </p>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{
                  aspectRatio: "4/3",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.55)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/media/team/about-office.png"
                  alt="M&S Consulting team at work"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Stats strip ───────────────────────────────────────────────────── */}
      <AboutStatsStrip />

      {/* ── Who We Are / What We Do / How We Work ─────────────────────────── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#0A0E1A" }}>
        <div
          className="pointer-events-none absolute left-[-6rem] top-20 h-64 w-64 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(92,167,243,0.13)" }}
          aria-hidden="true"
        />
        <div className="ms-container py-20 lg:py-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <FadeIn direction="left">
              <div className="relative mx-auto w-full max-w-[480px]">
                <div
                  className="absolute -left-5 -top-5 h-24 w-24 rounded-full border border-[#5CA7F3]/30"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-6 right-8 z-20 rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur"
                  aria-hidden="true"
                >
                  <p className="font-sans text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/55">
                    Built To Deliver
                  </p>
                  <p className="mt-1 font-serif text-2xl text-white">strategy + execution</p>
                </div>
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.42)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1100&q=80"
                    alt="Consultants collaborating around a conference table"
                    className="block h-full w-full object-cover"
                    style={{ aspectRatio: "4/5" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(10,14,26,0.04) 0%, rgba(10,14,26,0.30) 100%)",
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </FadeIn>

            <div className="ml-auto w-full max-w-2xl">
              <FadeIn className="mb-8" direction="right">
                <p className="eyebrow mb-3 text-[#5CA7F3]">HOW WE SHOW UP</p>
                <h2
                  className="font-serif font-medium text-white"
                  style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.75rem)", lineHeight: 1.12 }}
                >
                  Deep expertise, practical momentum, and a team that stays close to the work.
                </h2>
              </FadeIn>

              <div className="space-y-4">
                {STORY_PILLARS.map(({ marker, headline, body, icon: Icon }, i) => (
                  <FadeIn key={marker} delay={i * 0.08} direction="right">
                    <div className="group grid gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition-colors duration-300 hover:bg-white/[0.075] sm:grid-cols-[3.5rem_1fr]">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5CA7F3]/12 text-[#5CA7F3] transition-transform duration-300 group-hover:-translate-y-1">
                        <Icon size={25} strokeWidth={1.8} />
                      </div>
                      <div>
                        <p className="font-sans text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#5CA7F3]">
                          {marker}
                        </p>
                        <h3 className="mt-2 font-serif text-[1.35rem] font-medium leading-tight text-white">
                          {headline}
                        </h3>
                        <p className="mt-2 font-sans text-[0.98rem] leading-7 text-white/72">
                          {body}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Values ────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#001F65" }}>
        <div className="ms-container py-16 lg:py-24">

          {/* Header row */}
          <FadeIn className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p
                className="font-sans text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                OUR VALUES
              </p>
              <h2
                className="font-serif text-white"
                style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", fontWeight: 500, lineHeight: 1.2 }}
              >
                How we show up.
              </h2>
            </div>
          </FadeIn>

          {/* Card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.07)" }}>
            {VALUES.map(({ icon: Icon, label, body }, i) => (
              <FadeIn key={label} delay={i * 0.09}>
                <div className="group relative flex flex-col h-full p-8 bg-[#001F65] hover:bg-[#00267a] transition-colors duration-300">

                  {/* Accent line — appears on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#5CA7F3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-[#5CA7F3] transition-transform duration-300 group-hover:-translate-y-1 group-hover:bg-white/12">
                    <Icon size={24} strokeWidth={1.75} />
                  </div>

                  {/* Label */}
                  <p
                    className="font-sans font-semibold mb-3"
                    style={{ fontSize: "1rem", color: "white", lineHeight: 1.35 }}
                  >
                    {label}
                  </p>

                  {/* Body */}
                  <p
                    className="font-sans mt-auto"
                    style={{ fontSize: "0.94rem", color: "rgba(255,255,255,0.62)", lineHeight: 1.7 }}
                  >
                    {body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* ── Our Leaders ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 lg:py-28" style={{ backgroundColor: "#EFEADB" }}>
        <div
          className="pointer-events-none absolute right-[-8rem] top-[-8rem] h-80 w-80 rounded-full"
          style={{ backgroundColor: "rgba(92,167,243,0.16)", filter: "blur(70px)" }}
          aria-hidden="true"
        />
        <div className="ms-container relative">
          <FadeIn className="mb-14">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
              <div>
                <p className="eyebrow mb-3" style={{ color: "#001F65" }}>OUR LEADERS</p>
                <h2
                  className="font-serif font-medium"
                  style={{ fontSize: "clamp(1.9rem, 3vw, 2.75rem)", color: "#001F65", lineHeight: 1.12, marginBottom: "1rem" }}
                >
                  Problem-solving is our superpower.
                </h2>
                <p className="font-sans" style={{ fontSize: "1rem", color: "#4A5568", lineHeight: 1.7, maxWidth: "620px" }}>
                  Meet the people who shape the standards, delivery culture, and client relationships behind M&amp;S.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { icon: Sparkles, label: "Hands-on delivery leadership", body: "Senior people stay close to complex work." },
                  { icon: Handshake, label: "Long-term client partnership", body: "Relationships are managed with care and accountability." },
                ].map(({ icon: Icon, label, body }) => (
                  <div key={label} className="rounded-2xl border border-[#001F65]/10 bg-white/70 p-5 shadow-[0_14px_40px_rgba(0,31,101,0.07)]">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#001F65]/8 text-[#001F65]">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <p className="font-sans text-sm font-bold text-[#001F65]">{label}</p>
                    <p className="mt-1 font-sans text-sm leading-6 text-[#4A5568]">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="rounded-[2rem] border border-[#001F65]/10 bg-white/78 p-6 shadow-[0_24px_80px_rgba(0,31,101,0.08)] backdrop-blur sm:p-8 lg:p-10">
            <TeamSection />
          </div>
        </div>
      </section>

      {/* ── Government & Diversity Designations ───────────────────────────── */}
      <section
        id="government-designations"
        className="scroll-mt-24 pb-10 pt-20 lg:pb-14 lg:pt-28"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="ms-container">

          {/* Header */}
          <FadeIn className="mb-12">
            <p className="eyebrow mb-3" style={{ color: "#001F65" }}>GOVERNMENT &amp; DIVERSITY DESIGNATIONS</p>
            <h2
              className="font-serif font-medium"
              style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", color: "#001F65", lineHeight: 1.2, marginBottom: "0.75rem" }}
            >
              Built for government and commercial clients alike.
            </h2>
            <p className="font-sans" style={{ fontSize: "1rem", color: "#4A5568", lineHeight: 1.7, maxWidth: "680px" }}>
              M&amp;S holds multiple small business designations and active contract vehicles, making it straightforward for federal, state, and local agencies to engage us directly.
            </p>
          </FadeIn>

          {/* Badge row */}
          <FadeIn className="mb-14">
            <div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 rounded-2xl p-4 sm:p-5"
              style={{ backgroundColor: "#F4F7FB", border: "1px solid rgba(0,31,101,0.08)" }}
            >
              {DESIGNATION_BADGES.map(({ src, alt, aspect }) => (
                <div
                  key={alt}
                  className="flex items-center justify-center rounded-xl bg-white px-5 py-6 shadow-[0_10px_30px_rgba(0,31,101,0.06)]"
                  style={{ minHeight: 150 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={alt}
                    style={{
                      height: aspect === "portrait" ? 118 : 82,
                      width: "auto",
                      maxWidth: aspect === "portrait" ? 96 : 190,
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Details grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(0,31,101,0.08)", borderRadius: "14px", overflow: "hidden" }}>

            {/* Designations & memberships */}
            <FadeIn>
              <div className="bg-white h-full p-8">
                <p className="eyebrow mb-5" style={{ color: "rgba(0,31,101,0.50)" }}>Certifications</p>
                <ul className="space-y-2.5 mb-7">
                  {DESIGNATIONS.map((d) => (
                    <li key={d} className="flex gap-2.5 items-start">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#001F65" }} />
                      <span className="font-sans font-medium" style={{ fontSize: "0.94rem", color: "#1A1B17", lineHeight: 1.5 }}>{d}</span>
                    </li>
                  ))}
                </ul>
                <p className="eyebrow mb-4" style={{ color: "rgba(0,31,101,0.50)" }}>Memberships</p>
                <ul className="space-y-2.5">
                  {MEMBERSHIPS.map((m) => (
                    <li key={m} className="flex gap-2.5 items-start">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#001F65" }} />
                      <span className="font-sans font-medium" style={{ fontSize: "0.94rem", color: "#1A1B17", lineHeight: 1.5 }}>{m}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-sans mt-5" style={{ fontSize: "0.9rem", color: "#4B5563", lineHeight: 1.6 }}>
                  Numerous contracts with Federal, State and Local, and Education clients.
                </p>
              </div>
            </FadeIn>

            {/* Contract vehicles */}
            <FadeIn delay={0.08}>
              <div className="bg-white h-full p-8">
                <p className="eyebrow mb-5" style={{ color: "rgba(0,31,101,0.50)" }}>Contract Vehicles</p>
                <ul className="space-y-5">
                  {CONTRACT_VEHICLES.map((c) => (
                    <li key={c.label} style={{ paddingBottom: "1.1rem", borderBottom: "1px solid rgba(0,31,101,0.07)" }}>
                      <p className="font-sans font-semibold" style={{ fontSize: "0.9rem", color: "#001F65", lineHeight: 1.35 }}>{c.label}</p>
                      {c.detail && (
                        <p className="font-sans mt-0.5" style={{ fontSize: "0.88rem", color: "#4B5563" }}>{c.detail}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* NAICS codes */}
            <FadeIn delay={0.16}>
              <div className="bg-white h-full p-8">
                <p className="eyebrow mb-5" style={{ color: "rgba(0,31,101,0.50)" }}>NAICS Codes</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {NAICS.map((code) => (
                    <span
                      key={code}
                      className="font-sans font-semibold"
                      style={{
                        fontSize: "0.82rem",
                        color: "#001F65",
                        backgroundColor: "rgba(0,31,101,0.07)",
                        padding: "0.3rem 0.65rem",
                        borderRadius: "5px",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {code}
                    </span>
                  ))}
                </div>
                <p className="font-sans" style={{ fontSize: "0.82rem", color: "#6B7280" }}>* Primary NAICS Code</p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── Our Partnerships ──────────────────────────────────────────────── */}
      <section className="pb-20 pt-8 lg:pb-28 lg:pt-10" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container">

          {/* Header */}
          <FadeIn className="mb-12 max-w-[920px]">
            <p className="eyebrow mb-3" style={{ color: "#001F65" }}>OUR PARTNERSHIPS</p>
            <h2
              className="font-serif font-medium"
              style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", color: "#001F65", lineHeight: 1.2, marginBottom: "0.75rem" }}
            >
              Trusted alliances with the world&rsquo;s leading software providers.
            </h2>
            <p className="font-sans" style={{ fontSize: "1rem", color: "#4A5568", lineHeight: 1.7 }}>
              Each certification and alliance means a leading software provider trusts M&amp;S to deliver optimized implementations of their platform. Work with us to get more from your technology investments.
            </p>
          </FadeIn>

          {/* Row 1 — tiered partners */}
          <FadeIn>
            <div
              className="grid grid-cols-2 md:grid-cols-4"
              style={{ borderTop: "1px solid rgba(0,31,101,0.10)", borderLeft: "1px solid rgba(0,31,101,0.10)" }}
            >
              {PARTNER_LOGOS.slice(0, 4).map(({ name, logo, tier, tierDetail, logoMaxWidth = 150, logoMaxHeight = 36, nudgeY = 0 }) => (
                <div
                  key={name}
                  className="flex flex-col justify-between"
                  style={{
                    borderRight: "1px solid rgba(0,31,101,0.10)",
                    borderBottom: "1px solid rgba(0,31,101,0.10)",
                    padding: "2rem 2rem 1.5rem",
                    minHeight: "140px",
                  }}
                >
                  <div className="flex items-center" style={{ minHeight: "52px" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo}
                      alt={name}
                      style={{
                        maxHeight: `${logoMaxHeight}px`,
                        maxWidth: `${logoMaxWidth}px`,
                        width: "auto",
                        height: "auto",
                        objectFit: "contain",
                        objectPosition: "left center",
                        display: "block",
                        transform: `translateY(${nudgeY}px)`,
                      }}
                    />
                  </div>
                  {tier && (
                    <div className="mt-4">
                      <p className="font-sans font-semibold" style={{ fontSize: "0.86rem", color: "#001F65", lineHeight: 1.3 }}>
                        {tier}
                      </p>
                      {tierDetail && (
                        <p className="font-sans" style={{ fontSize: "0.82rem", color: "#4B5563", marginTop: "2px" }}>
                          {tierDetail}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Row 2 — standard partners */}
          <FadeIn delay={0.1}>
            <div
              className="grid grid-cols-2 md:grid-cols-4"
              style={{ borderLeft: "1px solid rgba(0,31,101,0.10)" }}
            >
              {PARTNER_LOGOS.slice(4).map(({ name, logo, logoMaxWidth = 150, logoMaxHeight = 36, nudgeY = 0 }) => (
                <div
                  key={name}
                  className="flex items-center"
                  style={{
                    borderRight: "1px solid rgba(0,31,101,0.10)",
                    borderBottom: "1px solid rgba(0,31,101,0.10)",
                    padding: "2rem 2rem",
                    minHeight: "110px",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo}
                    alt={name}
                    style={{
                      maxHeight: `${logoMaxHeight}px`,
                      maxWidth: `${logoMaxWidth}px`,
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                      objectPosition: "left center",
                      display: "block",
                      transform: `translateY(${nudgeY}px)`,
                    }}
                  />
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────────────────────── */}
      <MsContactForm />
    </>
  );
}

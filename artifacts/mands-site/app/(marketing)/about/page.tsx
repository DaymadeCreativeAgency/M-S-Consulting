import type { Metadata } from "next";
import { HeroWithVideo } from "@/components/sections/hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { CTABanner } from "@/components/sections/cta-banner";
import { NumberedSectionMark } from "@/components/technical/numbered-section-mark";

export const metadata: Metadata = {
  title: "About",
  description:
    "M&S Consulting is a digital consulting collective of over 250 specialists. Founded in Morgantown, WV in 2002, we deliver enterprise digital transformation for commercial and public sector clients.",
};

const VALUES = [
  {
    title: "We take outcomes personally",
    description:
      "Partners and clients trust us with work that matters. We don't treat that lightly — your success is how we measure ours.",
  },
  {
    title: "Approachable and committed",
    description:
      "We make your life easier, not harder. Strong opinions, held loosely — and a genuine commitment to making every engagement work.",
  },
  {
    title: "Elite, curated teams",
    description:
      "We build industry-leading specialist teams for every engagement. No bench-warming generalists filling headcount.",
  },
  {
    title: "Customer success first",
    description:
      "Client satisfaction is not a metric we track after the fact. It is built into how we work from day one.",
  },
  {
    title: "We think differently",
    description:
      "Cross-sector exposure and genuine creative problem-solving mean we bring solutions your market may not have seen yet.",
  },
];

const CONTRACT_VEHICLES = [
  { label: "FBI ITSSS-2", role: "Prime" },
  { label: "Navy SeaPort NxG", role: "Prime" },
  { label: "NASA SEWP V", role: "" },
  { label: "GSA MAS Contract", role: "GS-35F-0231S SIN: 54151S" },
];

const PARTNER_LOGOS = [
  { name: "Atlassian" },
  { name: "AWS" },
  { name: "Microsoft" },
  { name: "Salesforce" },
  { name: "SAP" },
  { name: "Oracle" },
  { name: "Snowflake" },
];

export default function AboutPage() {
  return (
    <>
      <HeroWithVideo
        tone="light"
        eyebrow="MANAGEMENT & SOLUTIONS · EST. 2002"
        headline="The people behind the work."
        subhead="M&S Consulting is a digital consulting collective of over 250 specialists. We have been helping organizations use advanced technology to achieve real transformation since 2002 — not as a vendor, but as an embedded partner."
        primaryCta={{ label: "Schedule a Call", href: "/contact" }}
        secondaryCta={{ label: "See Our Work", href: "/case-studies" }}
      />

      {/* Values */}
      <FeatureGrid
        sectionNumber="01"
        eyebrow="OUR VALUES"
        heading="How we show up."
        subhead="M&S stands for Management and Solutions. The name reflects our founding belief: that the right management of people and process unlocks the full value of any technology investment."
        items={VALUES}
        columns={3}
        tone="cream"
      />

      {/* Government & Diversity Designations */}
      <section className="ms-section">
        <div className="ms-container">
          <NumberedSectionMark number="02" label="GOVERNMENT &amp; DIVERSITY" className="mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-display text-ms-navy mb-5 max-w-2xl">
            Built for government and commercial clients alike.
          </h2>
          <p className="font-sans text-lg text-charcoal-700 leading-relaxed mb-12 max-w-2xl">
            M&S Consulting holds multiple small business designations and contract
            vehicles, making it straightforward for federal, state, and local
            agencies to engage us directly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Designations */}
            <div className="rounded-lg p-6 bg-ms-cream/50 border border-[rgba(0,31,101,0.08)]">
              <p className="eyebrow text-ms-navy mb-4">Certifications</p>
              <ul className="space-y-2.5">
                {[
                  "SBA HUBZone Certified",
                  "Woman-Owned Small Business (WOSB)",
                  "Small Disadvantaged Business (SDB)",
                  "Hiring our Heroes",
                  "Talent Alliance",
                  "Pledge 1%",
                ].map((cert) => (
                  <li key={cert} className="font-sans text-sm text-charcoal-700 flex items-start gap-2">
                    <span className="text-ms-navy mt-0.5 shrink-0">–</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contract Vehicles */}
            <div className="rounded-lg p-6 bg-ms-cream/50 border border-[rgba(0,31,101,0.08)]">
              <p className="eyebrow text-ms-navy mb-4">Contract Vehicles</p>
              <ul className="space-y-3">
                {CONTRACT_VEHICLES.map((c) => (
                  <li key={c.label}>
                    <p className="font-sans text-sm font-semibold text-ms-navy">{c.label}</p>
                    {c.role && (
                      <p className="font-sans text-xs text-charcoal-700 mt-0.5">{c.role}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* NAICS */}
            <div className="rounded-lg p-6 bg-ms-cream/50 border border-[rgba(0,31,101,0.08)]">
              <p className="eyebrow text-ms-navy mb-4">NAICS Codes</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "541430",
                  "541511*",
                  "541512",
                  "541513",
                  "51519",
                  "541990",
                  "541611",
                  "51614",
                  "51618",
                  "518210",
                ].map((code) => (
                  <span
                    key={code}
                    className="font-sans text-xs font-semibold text-ms-navy bg-ms-navy/8 px-2 py-1 rounded"
                  >
                    {code}
                  </span>
                ))}
              </div>
              <p className="font-sans text-xs text-charcoal-700 mt-3">* Primary NAICS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="ms-section-editorial">
        <div className="ms-container">
          <NumberedSectionMark number="03" label="OUR LEADERS" className="mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-display text-ms-navy mb-4 max-w-2xl">
            Problem-solving is our superpower. Meet the people who make it possible.
          </h2>
          <p className="font-sans text-lg text-charcoal-700 leading-relaxed mb-12 max-w-2xl">
            At M&S, our people are our biggest pride point. The consultants who
            lead our work bring decades of combined experience across public sector,
            enterprise, and technology delivery.
          </p>

          {/* Managing Partners */}
          <div className="mb-12">
            <p className="eyebrow text-ms-navy mb-6">Managing Partners</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* TODO: team-members — populate from headshots in /public/media/team/ */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="rounded-lg bg-ms-paper border border-[rgba(0,31,101,0.08)] overflow-hidden">
                  <div className="aspect-square bg-ms-navy/8 flex items-center justify-center">
                    <span className="font-sans text-xs text-charcoal-700">Photo placeholder</span>
                  </div>
                  <div className="p-4">
                    <p className="font-sans text-sm font-semibold text-ms-navy">Name Surname</p>
                    <p className="font-sans text-xs text-charcoal-700 mt-0.5">Managing Partner</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Associate Partners */}
          <div className="mb-12">
            <p className="eyebrow text-ms-navy mb-6">Associate Partners</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {/* TODO: team-members — populate from headshots in /public/media/team/ */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="rounded-lg bg-ms-paper border border-[rgba(0,31,101,0.08)] overflow-hidden">
                  <div className="aspect-square bg-ms-navy/8 flex items-center justify-center">
                    <span className="font-sans text-xs text-charcoal-700">Photo placeholder</span>
                  </div>
                  <div className="p-4">
                    <p className="font-sans text-sm font-semibold text-ms-navy">Name Surname</p>
                    <p className="font-sans text-xs text-charcoal-700 mt-0.5">Associate Partner</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Directors */}
          <div>
            <p className="eyebrow text-ms-navy mb-4">Directors &amp; Practice Leads</p>
            <p className="font-sans text-sm text-charcoal-700">
              {/* TODO: team-members — populate names from WordPress team data */}
              M&S practice leads are listed on each Practice Area page.
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <LogoCloud
        eyebrow="OUR PARTNERSHIPS"
        logos={PARTNER_LOGOS}
        tone="paper"
      />

      <CTABanner
        heading="Work with a team that takes your outcomes personally."
        subhead="Whether you need a trusted advisory partner or an embedded delivery team, we are ready to talk through what your organization actually needs."
        primaryCta={{ label: "Schedule a Call", href: "/contact" }}
        secondaryCta={{ label: "See Case Studies", href: "/case-studies" }}
        tone="navy"
      />
    </>
  );
}

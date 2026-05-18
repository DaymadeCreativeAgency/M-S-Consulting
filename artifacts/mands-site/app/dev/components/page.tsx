import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { HeroWithVideo } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { NumberedSectionMark } from "@/components/technical/numbered-section-mark";
import { StatCallout } from "@/components/technical/stat-callout";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { Download, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Components · Checkpoint Review",
  robots: { index: false, follow: false },
};

export default function ComponentsCheckpoint() {
  return (
    <div className="bg-ms-paper text-ms-ink">
      {/* Header (with mega-menu open by default for review) */}
      <Header defaultOpenMegaMenu />

      {/* ─────────────────────────────────────────────
          HERO — WithVideo variant, light section
      ───────────────────────────────────────────── */}
      <HeroWithVideo
        eyebrow="ESTABLISHED 2002 · 250+ CONSULTANTS"
        headline="Twenty years of delivery. The right to talk about what comes next."
        subhead="M&S Consulting builds and runs the systems that government agencies, healthcare networks, and enterprise legal teams depend on. We embed alongside your team. We ship work, not slides."
        primaryCta={{ label: "Schedule a Call", href: "/contact" }}
        secondaryCta={{ label: "See Recent Work", href: "/case-studies" }}
      />

      {/* ─────────────────────────────────────────────
          BUTTON SHOWCASE
      ───────────────────────────────────────────── */}
      <section className="ms-section ms-container">
        <NumberedSectionMark number="01" label="BUTTON · LIGHT GROUND" />
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-ms-navy tracking-display mt-3 mb-10 max-w-2xl">
          Variants, sizes, and states
        </h2>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Variants */}
          <div>
            <p className="eyebrow text-charcoal-700 mb-4">Variants · md size</p>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Text link</Button>
              <Button variant="danger">Danger</Button>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <p className="eyebrow text-charcoal-700 mb-4">Sizes · primary variant</p>
            <div className="flex flex-wrap items-end gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* States */}
          <div>
            <p className="eyebrow text-charcoal-700 mb-4">States</p>
            <div className="flex flex-wrap items-center gap-3">
              <Button>Default</Button>
              <Button disabled>Disabled</Button>
              <Button loading>Saving</Button>
              <Button>
                <Download className="h-4 w-4" aria-hidden="true" /> With icon
              </Button>
              <Button variant="secondary">
                Read more
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
            <p className="font-sans text-xs text-charcoal-700 mt-3 max-w-md">
              Hover, focus-visible (Tab to focus), and active states are styled
              for every variant. Loading sets <code className="font-mono text-[11px]">aria-busy</code> and disables the button.
            </p>
          </div>

          <div className="lg:col-span-2 pt-2">
            <p className="eyebrow text-charcoal-700 mb-4">Link variant for inline use</p>
            <p className="font-sans text-base leading-relaxed text-ms-ink max-w-2xl">
              We have spent two decades inside the systems other firms only diagram.{" "}
              <Button variant="link" asChild>
                <a href="#about">Read how we work →</a>
              </Button>
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          NUMBERED SECTION MARK
      ───────────────────────────────────────────── */}
      <section className="ms-section ms-container border-t border-[rgba(0,31,101,0.10)]">
        <NumberedSectionMark number="02" label="NUMBEREDSECTIONMARK" />
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-ms-navy tracking-display mt-3 mb-10 max-w-2xl">
          Section markers as a structural cue
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-3">
            <p className="eyebrow text-charcoal-700">Navy (default, on light)</p>
            <NumberedSectionMark number="01" label="WHAT WE DO" />
            <NumberedSectionMark number="02" label="PRACTICE AREAS" />
            <NumberedSectionMark number="03" label="HOW WE ENGAGE" />
            <NumberedSectionMark number="04" label="CLIENT OUTCOMES" />
          </div>
          <div className="space-y-3 p-8 rounded-lg" style={{ backgroundColor: "#0A0E1A" }}>
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-dark-muted">
              Accent (on dark)
            </p>
            <NumberedSectionMark number="01" label="AI PRACTICE" color="accent" />
            <NumberedSectionMark number="02" label="DATA ENGINEERING" color="accent" />
            <NumberedSectionMark number="03" label="CLOUD MODERNIZATION" color="accent" />
            <NumberedSectionMark number="04" label="CONTINUOUS COMPLIANCE" color="accent" />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          STAT CALLOUT (featured with count-up)
      ───────────────────────────────────────────── */}
      <section className="ms-section-editorial">
        <div className="ms-container">
          <NumberedSectionMark number="03" label="STATCALLOUT · FEATURED" />
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-ms-navy tracking-display mt-3 mb-12 max-w-2xl">
            Numbers that earn the weight they carry
          </h2>

          <div className="grid gap-12 md:gap-16 md:grid-cols-3 mb-12">
            <StatCallout
              value="100,000"
              label="HOURS SAVED ANNUALLY"
              context="Horticulture client · custom workflow automation across six regional operations."
            />
            <StatCallout
              value="40%"
              label="FASTER CONTRACT REVIEW"
              context="AmLaw 100 firm · contract intelligence platform deployed to 1,200 attorneys."
            />
            <StatCallout
              value="$1.2M"
              label="AVOIDED LICENSING SPEND"
              context="Federal civilian agency · enterprise application rationalization in year one."
            />
          </div>

          <p className="eyebrow text-ms-navy mb-4">Inline variant · within prose</p>
          <p className="font-sans text-base leading-relaxed text-ms-ink max-w-2xl">
            Numbers should be load-bearing. On a recent engagement, our team
            took an AmLaw 100 contract review workflow from forty business days
            to twenty-three. The same approach has now run across three more
            verticals.
          </p>
          <div className="mt-6 max-w-xs">
            <StatCallout variant="inline" value="23" label="DAYS · POST-DEPLOYMENT" />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          CASE STUDY CARD (light)
      ───────────────────────────────────────────── */}
      <section className="ms-section ms-container">
        <NumberedSectionMark number="04" label="CASESTUDYCARD · LIGHT" />
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-ms-navy tracking-display mt-3 mb-10 max-w-2xl">
          Featured engagements
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CaseStudyCard
            industry="LEGAL"
            metric={{ value: "40%", label: "FASTER CONTRACT REVIEW" }}
            headline="Contract intelligence for an AmLaw 100 firm"
            summary="Eighteen-month delivery: ingestion pipeline, model fine-tuning, and reviewer workflow for 1,200 attorneys across four offices."
            href="#case-1"
          />
          <CaseStudyCard
            industry="PUBLIC SECTOR"
            metric={{ value: "$1.2M", label: "AVOIDED IN YEAR ONE" }}
            headline="Application rationalization for a federal agency"
            summary="Inventory, scoring, and retirement plan for 340 line-of-business apps. Approved by IG. Executed without service interruption."
            href="#case-2"
          />
          <CaseStudyCard
            industry="HEALTHCARE"
            metric={{ value: "100K", label: "HOURS SAVED ANNUALLY" }}
            headline="Scheduling workflow rebuild for a regional health system"
            summary="Custom workflow engine replacing four legacy point solutions. Single source of truth across twelve facilities."
            href="#case-3"
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          DARK SECTION — Button + StatCallout on dark
      ───────────────────────────────────────────── */}
      <section
        className="ms-section-dark relative overflow-hidden"
        style={{ backgroundColor: "#0A0E1A" }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(31,36,56,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(31,36,56,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="ms-container relative z-10">
          <NumberedSectionMark number="05" label="DARK GROUND · TONE='DARK'" color="accent" />
          <h2
            className="font-serif text-3xl md:text-4xl font-medium tracking-display mt-3 mb-12 max-w-2xl"
            style={{ color: "#E8EAED" }}
          >
            The same components on dark grounds
          </h2>

          <div className="mb-12">
            <p className="eyebrow mb-4" style={{ color: "#8B92A8" }}>
              BUTTON · DARK VARIANTS
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button tone="dark" variant="primary">Primary</Button>
              <Button tone="dark" variant="secondary">Secondary</Button>
              <Button tone="dark" variant="ghost">Ghost</Button>
              <Button tone="dark" variant="link">Text link</Button>
              <Button tone="dark" variant="primary" loading>Loading</Button>
            </div>
          </div>

          <div className="grid gap-12 md:grid-cols-3 mb-12">
            <StatCallout
              tone="dark"
              value="250"
              label="CONSULTANTS DEPLOYED"
              context="Across federal, healthcare, legal, and education verticals."
            />
            <StatCallout
              tone="dark"
              value="20"
              label="YEARS OF DELIVERY"
              context="Continuously operating since 2002. Same name, same people, same standards."
            />
            <StatCallout
              tone="dark"
              value="47"
              label="ACTIVE ENGAGEMENTS"
              context="Currently running. Six are in classified environments."
            />
          </div>

          <p className="eyebrow mb-4" style={{ color: "#8B92A8" }}>
            CASESTUDYCARD · DARK VARIANT
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <CaseStudyCard
              tone="dark"
              industry="DEFENSE"
              metric={{ value: "11×", label: "FASTER REPORT GENERATION" }}
              headline="Decision-support tooling for a DoD program office"
              summary="Replaced manual analyst workflows with a streamlined briefing pipeline. Cleared team, on-premise deployment."
              href="#case-dark-1"
            />
            <CaseStudyCard
              tone="dark"
              industry="FINANCE"
              metric={{ value: "0", label: "AUDIT EXCEPTIONS · Y2" }}
              headline="Continuous compliance for a regional bank holding company"
              summary="Control library, evidence automation, and quarterly attestation moved from spreadsheets to a system of record."
              href="#case-dark-2"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          Notes
      ───────────────────────────────────────────── */}
      <section className="ms-section ms-container border-t border-[rgba(0,31,101,0.10)]">
        <NumberedSectionMark number="06" label="REVIEW NOTES" />
        <h2 className="font-serif text-2xl md:text-3xl font-medium text-ms-navy tracking-display mt-3 mb-6">
          What's here, what's deferred
        </h2>
        <ul className="font-sans text-sm leading-relaxed text-charcoal-700 space-y-2 max-w-2xl">
          <li>
            <strong className="text-ms-ink">Header mega-menu</strong> is open by default on this
            review page (<code className="font-mono text-[11px]">defaultOpenMegaMenu</code>). In
            production it opens on hover or click of "What We Do."
          </li>
          <li>
            <strong className="text-ms-ink">Hero poster</strong> renders a CSS treatment in this
            checkpoint. The <code className="font-mono text-[11px]">HeroWithVideo</code> component
            accepts <code className="font-mono text-[11px]">posterSrc</code> and{" "}
            <code className="font-mono text-[11px]">videoSrc</code> props for real assets.
          </li>
          <li>
            <strong className="text-ms-ink">StatCallout count-up</strong> animates on scroll into
            view, once, and respects <code className="font-mono text-[11px]">prefers-reduced-motion</code>.
          </li>
          <li>
            <strong className="text-ms-ink">All six are typed</strong>, server-rendered where
            possible (Hero, StatCallout, and Header are client-only because they need refs,
            effects, or state).
          </li>
        </ul>
      </section>

      {/* Spacer at bottom so sticky nav has scroll room */}
      <div className="h-24" />
    </div>
  );
}

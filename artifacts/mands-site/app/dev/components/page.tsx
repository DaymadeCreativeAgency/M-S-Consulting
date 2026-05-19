import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { HeroWithVideo } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { NumberedSectionMark } from "@/components/technical/numbered-section-mark";
import { StatCallout } from "@/components/technical/stat-callout";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { Download, ArrowRight } from "lucide-react";
import { TechnicalGridBackground } from "@/components/technical/technical-grid-background";

export const metadata: Metadata = {
  title: "Components · Checkpoint Review",
  robots: { index: false, follow: false },
};

export default function ComponentsCheckpoint() {
  return (
    <div className="bg-ms-cream text-ms-ink">
      <Header defaultOpenMegaMenu />

      {/* ─────────────────────────────────────────────
          HERO — dark tone, solid navy, no gradient
      ───────────────────────────────────────────── */}
      <HeroWithVideo
        tone="dark"
        eyebrow="ESTABLISHED 2002 · 250+ CONSULTANTS"
        headline="Twenty years of delivery. The right to talk about what comes next."
        subhead="M&S Consulting builds and runs the systems that government agencies, healthcare networks, and enterprise legal teams depend on. We embed alongside your team. We ship work, not slides."
        primaryCta={{ label: "Schedule a Call", href: "/contact" }}
        secondaryCta={{ label: "See Recent Work", href: "/case-studies" }}
      />

      {/* ─────────────────────────────────────────────
          01 · BUTTON SHOWCASE — cream ground
      ───────────────────────────────────────────── */}
      <section className="ms-section-editorial">
        <div className="ms-container">
          <NumberedSectionMark number="01" label="BUTTON · LIGHT GROUND" />
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-ms-navy tracking-display mt-3 mb-10 max-w-2xl">
            Variants, sizes, and states
          </h2>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow text-ms-navy/60 mb-5">Variants · md size</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Text link</Button>
                <Button variant="danger">Danger</Button>
              </div>
            </div>

            <div>
              <p className="eyebrow text-ms-navy/60 mb-5">Sizes · primary variant</p>
              <div className="flex flex-wrap items-end gap-3">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            <div>
              <p className="eyebrow text-ms-navy/60 mb-5">States</p>
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
            </div>

            <div className="lg:col-span-2 pt-2 border-t border-[rgba(0,31,101,0.10)]">
              <p className="eyebrow text-ms-navy/60 mb-4 mt-8">Link variant for inline use</p>
              <p className="font-sans text-lg leading-relaxed text-ms-ink max-w-2xl">
                We have spent two decades inside the systems other firms only diagram.{" "}
                <Button variant="link" asChild>
                  <a href="#about">Read how we work →</a>
                </Button>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          02 · STAT CALLOUT — navy full-bleed
      ───────────────────────────────────────────── */}
      <section
        className="ms-section"
        style={{ backgroundColor: "#001F65" }}
      >
        <div className="ms-container">
          <NumberedSectionMark number="02" label="STATCALLOUT · NAVY GROUND" color="accent" />
          <h2
            className="font-serif text-3xl md:text-4xl font-medium tracking-display mt-3 mb-12 max-w-2xl"
            style={{ color: "#E8EAED" }}
          >
            Numbers that earn the weight they carry
          </h2>

          <div className="grid gap-12 md:gap-16 md:grid-cols-3 mb-16">
            <StatCallout
              tone="dark"
              value="100,000"
              label="HOURS SAVED ANNUALLY"
              context="Horticulture client · custom workflow automation across six regional operations."
            />
            <StatCallout
              tone="dark"
              value="40%"
              label="FASTER CONTRACT REVIEW"
              context="AmLaw 100 firm · contract intelligence platform deployed to 1,200 attorneys."
            />
            <StatCallout
              tone="dark"
              value="$1.2M"
              label="AVOIDED LICENSING SPEND"
              context="Federal civilian agency · enterprise application rationalization in year one."
            />
          </div>

          <div className="border-t border-[rgba(255,255,255,0.12)] pt-12">
            <p className="eyebrow mb-4" style={{ color: "rgba(232,234,237,0.55)" }}>Inline variant · within prose</p>
            <p className="font-sans text-lg leading-relaxed max-w-2xl" style={{ color: "#C4C8D4" }}>
              Numbers should be load-bearing. On a recent engagement, our team
              took an AmLaw 100 contract review workflow from forty business days
              to twenty-three. The same approach has now run across three more
              verticals.
            </p>
            <div className="mt-8 max-w-xs">
              <StatCallout tone="dark" variant="inline" value="23" label="DAYS · POST-DEPLOYMENT" />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          03 · PHOTO TREATMENTS — cream ground
      ───────────────────────────────────────────── */}
      <section className="ms-section-editorial">
        <div className="ms-container">
          <NumberedSectionMark number="03" label="PHOTO TREATMENTS" />
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-ms-navy tracking-display mt-3 mb-3 max-w-2xl">
            How we handle photography
          </h2>
          <p className="font-sans text-lg text-ms-ink/70 mb-12 max-w-xl">
            Three approved approaches. No glowing brains or stock handshakes.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Treatment A: Navy color wash */}
            <div className="space-y-3">
              <p className="eyebrow text-ms-navy/60">A · Navy wash</p>
              <div
                className="relative rounded-lg overflow-hidden aspect-[4/3]"
                style={{ backgroundColor: "#001F65" }}
              >
                {/* Simulated photo with navy overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(160deg, #001F65 0%, #001F65 40%, rgba(0,31,101,0.75) 100%)",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="eyebrow text-[#5CA7F3] mb-2">PUBLIC SECTOR</p>
                  <p className="font-sans text-sm font-semibold text-white leading-snug">
                    Federal civilian agency,<br />Washington DC
                  </p>
                </div>
              </div>
              <p className="font-sans text-sm text-ms-ink/60 leading-relaxed">
                Navy wash over a real photo anchors brand color to imagery. Grid optional.
              </p>
            </div>

            {/* Treatment B: Editorial crop with caption strip */}
            <div className="space-y-3">
              <p className="eyebrow text-ms-navy/60">B · Editorial crop</p>
              <div
                className="relative rounded-lg overflow-hidden aspect-[4/3]"
                style={{ backgroundColor: "#1A1B17" }}
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 50%, #1A1B17 100%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <span
                    className="font-serif font-medium text-white"
                    style={{ fontSize: "5rem" }}
                  >
                    M&S
                  </span>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 px-5 py-4"
                  style={{ backgroundColor: "rgba(26,27,23,0.88)" }}
                >
                  <p className="font-sans text-xs font-semibold text-white/50 uppercase tracking-widest mb-1">
                    Morgantown, WV · 2024
                  </p>
                  <p className="font-sans text-sm text-white leading-snug">
                    The Morgantown operations center
                  </p>
                </div>
              </div>
              <p className="font-sans text-sm text-ms-ink/60 leading-relaxed">
                Dark scrim at base. Caption strip in ink with reduced opacity.
              </p>
            </div>

            {/* Treatment C: Cream tint, portrait format */}
            <div className="space-y-3">
              <p className="eyebrow text-ms-navy/60">C · Cream tint</p>
              <div
                className="relative rounded-lg overflow-hidden aspect-[4/3]"
                style={{ backgroundColor: "#EFEADB" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #EFEADB 0%, #E0D8C5 100%)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-between p-5">
                  <div className="flex items-center justify-between">
                    <p className="eyebrow text-ms-navy/50">HEALTHCARE</p>
                    <div
                      className="h-8 w-8 rounded-full"
                      style={{ backgroundColor: "#FCC541" }}
                    />
                  </div>
                  <div>
                    <p
                      className="font-serif font-medium text-ms-navy leading-tight mb-2"
                      style={{ fontSize: "1.35rem" }}
                    >
                      "They shipped in month three."
                    </p>
                    <p className="font-sans text-sm text-ms-navy/60">
                      — Regional health system CIO
                    </p>
                  </div>
                </div>
              </div>
              <p className="font-sans text-sm text-ms-ink/60 leading-relaxed">
                Cream ground with sun accent. For pull-quotes and people cards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          04 · CASE STUDY CARDS — white ground
      ───────────────────────────────────────────── */}
      <section className="ms-section bg-ms-paper">
        <div className="ms-container">
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
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          05 · SECTION MARKS
      ───────────────────────────────────────────── */}
      <section className="ms-section-editorial">
        <div className="ms-container">
          <NumberedSectionMark number="05" label="NUMBEREDSECTIONMARK" />
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-ms-navy tracking-display mt-3 mb-10 max-w-2xl">
            Section markers as structural cue
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-3">
              <p className="eyebrow text-ms-navy/60">Navy · on light</p>
              <NumberedSectionMark number="01" label="WHAT WE DO" />
              <NumberedSectionMark number="02" label="PRACTICE AREAS" />
              <NumberedSectionMark number="03" label="HOW WE ENGAGE" />
              <NumberedSectionMark number="04" label="CLIENT OUTCOMES" />
            </div>
            <div className="space-y-3 p-8 rounded-lg" style={{ backgroundColor: "#0A0E1A" }}>
              <p className="eyebrow text-dark-muted">Accent · on dark</p>
              <NumberedSectionMark number="01" label="AI PRACTICE" color="accent" />
              <NumberedSectionMark number="02" label="DATA ENGINEERING" color="accent" />
              <NumberedSectionMark number="03" label="CLOUD MODERNIZATION" color="accent" />
              <NumberedSectionMark number="04" label="CONTINUOUS COMPLIANCE" color="accent" />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          06 · DARK GROUND — no grid (clean)
      ───────────────────────────────────────────── */}
      <section
        className="ms-section-dark"
        style={{ backgroundColor: "#0A0E1A" }}
      >
        <div className="ms-container">
          <NumberedSectionMark number="06" label="DARK GROUND · TONE='DARK'" color="accent" />
          <h2
            className="font-serif text-3xl md:text-4xl font-medium tracking-display mt-3 mb-12 max-w-2xl"
            style={{ color: "#E8EAED" }}
          >
            The same components on dark grounds
          </h2>

          <div className="mb-12">
            <p className="eyebrow mb-5" style={{ color: "#8B92A8" }}>
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

          <div className="grid gap-12 md:grid-cols-3 mb-14">
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
          07 · DARK WITH GRID — opt-in treatment
      ───────────────────────────────────────────── */}
      <section
        className="ms-section relative overflow-hidden"
        style={{ backgroundColor: "#0A0E1A" }}
      >
        <TechnicalGridBackground tone="dark" />
        <div className="ms-container relative z-10">
          <NumberedSectionMark number="07" label="DARK + GRID · OPT-IN" color="accent" />
          <h2
            className="font-serif text-3xl md:text-4xl font-medium tracking-display mt-3 mb-6 max-w-2xl"
            style={{ color: "#E8EAED" }}
          >
            The grid is a deliberate accent — use it once per page, max.
          </h2>
          <p className="font-sans text-lg leading-relaxed max-w-2xl" style={{ color: "#8B92A8" }}>
            Add the grid behind a technical context — an infrastructure diagram,
            a data pipeline breakdown, or a "How we work" systems section.
            Never as decoration. The Hero component accepts{" "}
            <code className="text-[#5CA7F3] text-[0.9em]">showGrid</code> for this purpose.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          Notes — cream ground
      ───────────────────────────────────────────── */}
      <section className="ms-section-editorial">
        <div className="ms-container">
          <NumberedSectionMark number="08" label="REVIEW NOTES" />
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-ms-navy tracking-display mt-3 mb-6">
            What's here, what's next
          </h2>
          <ul className="font-sans text-base leading-relaxed text-ms-ink/70 space-y-3 max-w-2xl">
            <li>
              <strong className="text-ms-ink">Header mega-menu</strong> is open by default on this
              review page. In production it opens on hover or click of "What We Do." Logo flips
              white when the header is transparent over a dark hero.
            </li>
            <li>
              <strong className="text-ms-ink">Hero</strong> uses a solid navy fallback with no
              gradient. Pass <code className="text-ms-navy text-[0.9em]">showGrid</code> to add the
              technical grid, and <code className="text-ms-navy text-[0.9em]">posterSrc</code> /{" "}
              <code className="text-ms-navy text-[0.9em]">videoSrc</code> for real assets.
            </li>
            <li>
              <strong className="text-ms-ink">StatCallout count-up</strong> animates on scroll into
              view, once only, and respects{" "}
              <code className="text-ms-navy text-[0.9em]">prefers-reduced-motion</code>.
            </li>
            <li>
              <strong className="text-ms-ink">Grid</strong> is opt-in only — pass it as a prop or
              as a class. Never present by default on dark sections.
            </li>
          </ul>
        </div>
      </section>

      <div className="h-16" style={{ backgroundColor: "#EFEADB" }} />
    </div>
  );
}

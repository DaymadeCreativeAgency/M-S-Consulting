import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArticleContactCTA } from "@/components/sections/article-contact-cta";

export const metadata: Metadata = {
  title: "Racing Against Time: Team USA Olympic Analytics",
  description:
    "How M&S Consulting and IBM built a real-time sensor analytics platform that helped Team USA's cyclists go from 6th in the world to Olympic silver at Rio 2016.",
  alternates: { canonical: "/case-studies/racing-against-time" },
};

const STATS = [
  { value: "6th → 1st", label: "World ranking jump" },
  { value: "Silver", label: "Olympic medal, Rio 2016" },
  { value: "Minutes", label: "Time to coach insight" },
  { value: "2×", label: "Sports deployed" },
];

export default function RacingAgainstTimePage() {
  return (
    <main>
      {/* Back nav */}
      <div className="bg-ms-paper border-b border-[rgba(0,31,101,0.08)]">
        <div className="ms-container py-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-ms-navy hover:opacity-75 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy rounded"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All Case Studies
          </Link>
        </div>
      </div>

      {/* Full-bleed hero */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="hero-heading"
        style={{ minHeight: "90vh" }}
      >
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80"
          alt="Track cycling"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Layered overlays for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(4,8,20,0.98) 0%, rgba(4,8,20,0.75) 40%, rgba(4,8,20,0.35) 70%, rgba(4,8,20,0.20) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,15,60,0.60) 0%, transparent 60%)",
          }}
        />

        {/* Content — pinned to bottom */}
        <div className="absolute bottom-0 left-0 right-0 ms-container pb-14 md:pb-20">
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-7">
            {["Sports & Non-Profit", "Data Analytics", "IoT"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-white/85"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="eyebrow text-tech-accent mb-4">Case Study</p>
          <h1
            id="hero-heading"
            className="font-serif text-[clamp(2.5rem,5.5vw,5rem)] text-white leading-[1.0] tracking-[-0.01em] max-w-4xl mb-6"
          >
            Racing Against Time
          </h1>
          <p className="font-sans text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed mb-14">
            How M&S Consulting and IBM built real-time performance analytics
            that took Team USA's cyclists from sixth in the world to Olympic
            silver at Rio 2016.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10 max-w-3xl">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-[rgba(4,8,20,0.60)] backdrop-blur-sm px-5 py-4 flex flex-col gap-1.5"
              >
                <p className="font-sans font-extrabold tabular-nums text-2xl md:text-3xl leading-none text-white">
                  {s.value}
                </p>
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.1em] text-white/50">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client context bar */}
      <section
        className="border-b border-[rgba(0,31,101,0.10)]"
        style={{ backgroundColor: "#EFEADB" }}
        aria-label="Engagement overview"
      >
        <div className="ms-container py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="space-y-1.5">
              <p className="eyebrow text-ms-navy">Client</p>
              <p className="font-sans text-sm font-medium text-ms-ink">
                United States Olympic Committee
              </p>
            </div>
            <div className="space-y-1.5">
              <p className="eyebrow text-ms-navy">Engagement</p>
              <p className="font-sans text-sm font-medium text-ms-ink">
                Real-Time Performance Analytics Platform
              </p>
            </div>
            <div className="space-y-1.5">
              <p className="eyebrow text-ms-navy">Partners</p>
              <p className="font-sans text-sm font-medium text-ms-ink">IBM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="ms-section bg-ms-paper" aria-labelledby="challenge-heading">
        <div className="ms-container max-w-4xl">
          <p className="section-marker text-ms-navy mb-6">
            01<span aria-hidden="true" className="mx-2 opacity-40">/</span>THE CHALLENGE
          </p>
          <h2
            id="challenge-heading"
            className="font-serif text-[clamp(1.6rem,2.8vw,2.4rem)] text-ms-ink mb-8 leading-[1.15] max-w-3xl"
          >
            Fractions of a second define Olympic outcomes. The data couldn&apos;t wait overnight.
          </h2>
          <div className="space-y-5 font-sans text-[17px] leading-relaxed text-charcoal-700">
            <p>
              When Team USA&apos;s cyclists and speed skaters lined up ahead of the
              2016 Rio Olympics, raw talent wasn&apos;t enough. In sports where
              hundredths of a second define victory, athletes and coaches needed
              smarter training, faster insights, and technology that could keep
              pace with their drive.
            </p>
            <p>
              For the cycling team, the problem was painfully concrete: critical
              training data was slow to process. After each run, coaches waited
              hours — sometimes overnight — to review split times, heart rate
              trends, and power output. By the time analysis was ready, the
              training session was a distant memory. Small adjustments that
              could mean the difference between a podium finish and a
              consolation round simply weren&apos;t happening fast enough.
            </p>
            <p>
              These were underfunded sports without a dedicated year-round tech
              team. The solution had to be lightweight, deployable in the field,
              and immediately useful to coaches who weren&apos;t data scientists.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section
        className="ms-section"
        style={{ backgroundColor: "#001F65" }}
        aria-labelledby="solution-heading"
      >
        <div className="ms-container max-w-4xl">
          <p className="section-marker text-white/40 mb-6">
            02<span aria-hidden="true" className="mx-2 opacity-40">/</span>THE SOLUTION
          </p>
          <h2
            id="solution-heading"
            className="font-serif text-[clamp(1.6rem,2.8vw,2.4rem)] text-white mb-8 leading-[1.15] max-w-3xl"
          >
            A Raspberry Pi on the track. Sensor telemetry in the cloud. Coach insights on a tablet in minutes.
          </h2>
          <div className="space-y-5 font-sans text-[17px] leading-relaxed text-white/70 mb-10">
            <p>
              M&S Consulting teamed up with IBM to deliver a solution that was
              fast, flexible, and built to perform under pressure. The
              architecture was deliberately simple at the edge — and powerful in
              the cloud.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              {
                label: "Edge capture",
                body: "A Raspberry Pi connected directly to the track's timing system, capturing precise split times for every rider on every run.",
              },
              {
                label: "Sensor fusion",
                body: "Heart rate, breathing rate, power output, and environmental data flowed from wearables into a unified telemetry stream via IBM's cloud.",
              },
              {
                label: "Coach dashboard",
                body: "Within minutes of a run, coaches reviewed complete performance breakdowns on tablets. Adjustments happened between laps, not overnight.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-6 border border-white/10 bg-white/[0.06] hover:bg-white/[0.09] transition-colors"
              >
                <p className="eyebrow text-tech-accent mb-3">{item.label}</p>
                <p className="font-sans text-sm leading-relaxed text-white/65">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-5 font-sans text-[17px] leading-relaxed text-white/70">
            <p>
              The solution wasn&apos;t purpose-built for one team and then shelved.
              After proving its value on the cycling track, the platform was
              repurposed for speed skating at the Utah Olympic Oval —
              supporting both Olympic and Paralympic athletes with the same core
              architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section
        className="py-20 md:py-28 overflow-hidden"
        style={{ backgroundColor: "#0A0E1A" }}
        aria-hidden="true"
      >
        <div className="ms-container max-w-4xl">
          <blockquote className="relative">
            <span
              className="absolute -top-8 -left-4 font-serif text-[9rem] leading-none text-white/5 select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="font-serif text-[clamp(1.4rem,2.5vw,2rem)] text-white/90 leading-[1.3] relative z-10 max-w-3xl">
              Analysis revealed that the riders performed measurably better
              going clockwise versus counterclockwise. That insight — validated
              in a wind tunnel — directly shaped their competition strategy at
              Rio.
            </p>
            <footer className="mt-6">
              <p className="font-sans text-sm text-white/40 uppercase tracking-widest">
                M&S Consulting — Team USA Cycling Analytics
              </p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Results */}
      <section
        className="ms-section-editorial"
        style={{ backgroundColor: "#EFEADB" }}
        aria-labelledby="results-heading"
      >
        <div className="ms-container max-w-4xl">
          <p className="section-marker text-ms-navy mb-6">
            03<span aria-hidden="true" className="mx-2 opacity-40">/</span>THE RESULTS
          </p>
          <h2
            id="results-heading"
            className="font-serif text-[clamp(1.6rem,2.8vw,2.4rem)] text-ms-ink mb-10 leading-[1.15] max-w-3xl"
          >
            From sixth in the world to Olympic silver — with a world record along the way.
          </h2>
          <div className="space-y-5 font-sans text-[17px] leading-relaxed text-charcoal-700 mb-12">
            <p>
              Real-time data empowered coaches to adjust strategies on the fly.
              Rotation decisions, pacing changes, and technique corrections that
              previously took days to act on were made between training runs.
            </p>
            <p>
              Analysis of the sensor data surfaced a subtle competitive
              advantage: a measurable difference in performance between
              clockwise and counterclockwise riding patterns. The insight was
              validated through wind tunnel testing and directly informed the
              team&apos;s competition strategy.
            </p>
            <p>
              Team USA&apos;s women&apos;s pursuit team rose from sixth in the world,
              set a world record in the trial round, and earned an Olympic
              silver medal at the 2016 Rio Games.
            </p>
          </div>

          {/* Large stat callouts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {[
              {
                value: "Silver",
                label: "Olympic medal",
                body: "Women's pursuit team, Rio 2016 — one of the highest-profile outcomes in U.S. cycling that year.",
              },
              {
                value: "World record",
                label: "Set in the trial round",
                body: "Qualifying results that validated every training adjustment the analytics platform enabled.",
              },
              {
                value: "2×",
                label: "Sports deployed",
                body: "Cycling and speed skating. Same core architecture. Both Olympic and Paralympic athletes served.",
              },
              {
                value: "<10 min",
                label: "From run to insight",
                body: "A multi-hour process compressed to under ten minutes between laps, during live training sessions.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-xl border border-[rgba(0,31,101,0.12)] bg-white hover:shadow-card transition-shadow"
              >
                <p className="font-sans font-extrabold tabular-nums text-[2rem] leading-none text-ms-navy mb-1">
                  {item.value}
                </p>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-ms-navy/50 mb-3">
                  {item.label}
                </p>
                <p className="font-sans text-sm leading-relaxed text-charcoal-700">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="ms-section bg-ms-paper" aria-labelledby="team-heading">
        <div className="ms-container max-w-4xl">
          <p className="section-marker text-ms-navy mb-6">
            04<span aria-hidden="true" className="mx-2 opacity-40">/</span>M&amp;S TEAM
          </p>
          <h2
            id="team-heading"
            className="font-sans text-lg font-semibold text-ms-ink mb-6"
          >
            Delivered by
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Sanu Chadha",
              "Ashok Aggarwal",
              "Jay Mason",
              "Tina Mascaro",
              "Daidre Fanis",
            ].map((name) => (
              <span
                key={name}
                className="inline-flex items-center px-4 py-2.5 rounded-lg bg-ms-cream border border-[rgba(0,31,101,0.10)] font-sans text-sm font-medium text-ms-ink"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ArticleContactCTA category="Sports & Non-Profit" />
    </main>
  );
}

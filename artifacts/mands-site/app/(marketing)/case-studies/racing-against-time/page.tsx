import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Racing Against Time: Team USA Olympic Analytics",
  description:
    "How M&S Consulting and IBM built a real-time sensor analytics platform that helped Team USA's cyclists go from 6th in the world to Olympic silver at Rio 2016.",
  alternates: { canonical: "/case-studies/racing-against-time" },
};

const STATS = [
  { value: "6th → 1st", label: "World ranking jump" },
  { value: "Silver", label: "Olympic medal, Rio 2016" },
  { value: "Minutes", label: "Time to actionable coach insight" },
  { value: "2×", label: "Platform reused — cycling + speed skating" },
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

      {/* Hero */}
      <section
        className="ms-section-dark"
        style={{ backgroundColor: "#0A0E1A" }}
        aria-labelledby="hero-heading"
      >
        <div className="ms-container">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center rounded-pill px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-widest bg-dark-base text-tech-accent border border-dark-border">
              Sports & Non-Profit
            </span>
            <span className="inline-flex items-center rounded-pill px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-widest bg-dark-base text-tech-accent border border-dark-border">
              Data Analytics
            </span>
            <span className="inline-flex items-center rounded-pill px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-widest bg-dark-base text-tech-accent border border-dark-border">
              IoT
            </span>
          </div>
          <p className="eyebrow text-tech-accent mb-4">Case Study</p>
          <h1
            id="hero-heading"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-ink max-w-4xl mb-6 leading-tight"
          >
            Racing Against Time
          </h1>
          <p className="font-sans text-xl text-dark-muted max-w-2xl leading-relaxed mb-10">
            How M&S Consulting and IBM built real-time performance analytics that
            took Team USA's cyclists from sixth in the world to Olympic silver at
            Rio 2016.
          </p>
          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-dark-border">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <p className="font-sans font-semibold tabular-nums text-3xl md:text-4xl text-dark-ink leading-none">
                  {s.value}
                </p>
                <p className="font-sans text-xs font-medium uppercase tracking-widest text-dark-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client context */}
      <section
        className="ms-section-editorial"
        style={{ backgroundColor: "#EFEADB" }}
        aria-label="Client context"
      >
        <div className="ms-container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-1">
              <p className="eyebrow text-ms-navy">Client</p>
              <p className="font-sans text-sm text-ms-ink">
                United States Olympic Committee
              </p>
            </div>
            <div className="space-y-1">
              <p className="eyebrow text-ms-navy">Engagement</p>
              <p className="font-sans text-sm text-ms-ink">
                Real-Time Performance Analytics Platform
              </p>
            </div>
            <div className="space-y-1">
              <p className="eyebrow text-ms-navy">Partners</p>
              <p className="font-sans text-sm text-ms-ink">IBM</p>
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
            className="font-serif text-3xl md:text-4xl text-ms-ink mb-8"
          >
            Fractions of a second define Olympic outcomes. The data couldn't wait overnight.
          </h2>
          <div className="space-y-5 font-sans text-[17px] leading-relaxed text-charcoal-700">
            <p>
              When Team USA's cyclists and speed skaters lined up ahead of the 2016
              Rio Olympics, raw talent wasn't enough. In sports where hundredths of a
              second define victory, athletes and coaches needed smarter training,
              faster insights, and technology that could keep pace with their drive.
            </p>
            <p>
              For the cycling team, the problem was painfully concrete: critical
              training data was slow to process. After each run, coaches waited hours
              — sometimes overnight — to review split times, heart rate trends, and
              power output. By the time analysis was ready, the training session was a
              distant memory. Small adjustments that could mean the difference between
              a podium finish and a consolation round simply weren't happening fast
              enough.
            </p>
            <p>
              These were underfunded sports without a dedicated year-round tech team.
              The solution had to be lightweight, deployable in the field, and
              immediately useful to coaches who weren't data scientists.
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
          <p className="section-marker text-white/50 mb-6">
            02<span aria-hidden="true" className="mx-2 opacity-40">/</span>THE SOLUTION
          </p>
          <h2
            id="solution-heading"
            className="font-serif text-3xl md:text-4xl text-white mb-8"
          >
            A Raspberry Pi on the track. Sensor telemetry in the cloud. Coach insights on a tablet in minutes.
          </h2>
          <div className="space-y-5 font-sans text-[17px] leading-relaxed text-white/75">
            <p>
              M&S Consulting teamed up with IBM to deliver a solution that was fast,
              flexible, and built to perform under pressure. The architecture was
              deliberately simple at the edge — and powerful in the cloud.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Edge capture",
                body: "A Raspberry Pi device connected directly to the track's electronic timing system, capturing precise split times for every rider on every run.",
              },
              {
                label: "Sensor fusion",
                body: "Heart rate, breathing rate, bike power output, and environmental conditions flowed from wearable sensors into a unified telemetry stream via IBM's cloud infrastructure.",
              },
              {
                label: "Coach dashboard",
                body: "Within minutes of a run, coaches could review full performance breakdowns on tablets — no waiting overnight, no exporting to spreadsheets. Adjustments happened between laps.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg p-6 border border-white/10 bg-white/5"
              >
                <p className="eyebrow text-tech-accent mb-3">{item.label}</p>
                <p className="font-sans text-sm leading-relaxed text-white/70">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-5 font-sans text-[17px] leading-relaxed text-white/75">
            <p>
              The solution wasn't purpose-built for one team and then shelved. After
              proving its value on the cycling track, the platform was repurposed for
              speed skating at the Utah Olympic Oval — supporting both Olympic and
              Paralympic athletes with the same core architecture.
            </p>
          </div>
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
            className="font-serif text-3xl md:text-4xl text-ms-ink mb-10"
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
              Analysis of the sensor data surfaced a subtle competitive advantage: a
              measurable difference in performance between clockwise and
              counterclockwise riding patterns. The insight was validated through
              wind tunnel testing and directly informed the team's competition
              strategy.
            </p>
            <p>
              The outcome: Team USA's women's pursuit team rose from sixth in the
              world to set a world record in the trial round and earn an Olympic
              silver medal at the 2016 Rio Games.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                headline: "Olympic silver medal",
                body: "Women's pursuit team, Rio 2016 — one of the highest-profile outcomes in U.S. cycling that year.",
              },
              {
                headline: "World record in trial",
                body: "Set during the qualification round, validating the training adjustments the analytics platform enabled.",
              },
              {
                headline: "Platform reused for speed skating",
                body: "The same architecture was deployed at the Utah Olympic Oval, demonstrating the solution's adaptability across disciplines.",
              },
              {
                headline: "Insights in minutes, not overnight",
                body: "Coaches received actionable, complete performance data between training runs — compressing a multi-hour process to under ten minutes.",
              },
            ].map((item) => (
              <div
                key={item.headline}
                className="p-6 rounded-lg border border-[rgba(0,31,101,0.12)] bg-white"
              >
                <p className="font-sans font-semibold text-ms-ink mb-2">
                  {item.headline}
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
            04<span aria-hidden="true" className="mx-2 opacity-40">/</span>M&S TEAM
          </p>
          <h2
            id="team-heading"
            className="font-sans text-xl font-semibold text-ms-ink mb-6"
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
                className="inline-flex items-center px-4 py-2 rounded-lg bg-ms-cream border border-[rgba(0,31,101,0.10)] font-sans text-sm font-medium text-ms-ink"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="ms-section-dark"
        style={{ backgroundColor: "#0A0E1A" }}
        aria-label="Next steps"
      >
        <div className="ms-container max-w-4xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="eyebrow text-tech-accent mb-3">Work with us</p>
              <h2 className="font-serif text-3xl text-dark-ink mb-3">
                Ready to talk about your project?
              </h2>
              <p className="font-sans text-dark-muted max-w-lg leading-relaxed">
                Whether you're modernizing legacy systems, building a data
                platform, or navigating a complex transformation — we've done it
                before.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button asChild variant="primary" size="lg">
                <Link href="/contact">Schedule a Call</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/case-studies" className="inline-flex items-center gap-2">
                  More Case Studies
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

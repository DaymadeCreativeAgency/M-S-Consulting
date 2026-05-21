import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CASE_STUDIES } from "@/lib/case-studies";
import { CASE_STUDY_CONTENT, computeReadTime } from "@/lib/case-study-content";
import { ReadingProgressBar } from "@/components/ui/reading-progress-bar";

type Props = { params: Promise<{ slug: string }> };

const STATIC_SLUG = "racing-against-time";

export async function generateStaticParams() {
  return CASE_STUDIES.filter((cs) => cs.slug !== STATIC_SLUG).map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.summary,
    alternates: { canonical: `/case-studies/${cs.slug}` },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) notFound();

  const content = CASE_STUDY_CONTENT[slug];
  const stats = content?.stats ?? [{ value: cs.metric.value, label: cs.metric.label }];
  const readTime = computeReadTime(content);

  // Related case studies: same practice area, excluding this one
  const related = CASE_STUDIES.filter(
    (c) =>
      c.slug !== slug &&
      c.practiceAreas.some((p) => cs.practiceAreas.includes(p))
  ).slice(0, 3);

  return (
    <main>
      <ReadingProgressBar />

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
        className="relative overflow-hidden"
        aria-labelledby="cs-hero-heading"
        style={{ minHeight: "80vh" }}
      >
        <Image
          src={cs.coverImage}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(4,8,20,0.97) 0%, rgba(4,8,20,0.80) 40%, rgba(4,8,20,0.45) 70%, rgba(4,8,20,0.25) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,15,60,0.55) 0%, transparent 55%)",
          }}
        />

        <div className="absolute bottom-0 left-0 right-0 ms-container pb-12 md:pb-18">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-white/85">
              {cs.industry}
            </span>
            {cs.practiceAreas.slice(0, 2).map((pa) => (
              <span
                key={pa}
                className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-white/85"
              >
                {pa.replace(/-/g, " ")}
              </span>
            ))}
          </div>

          <p className="eyebrow text-tech-accent mb-4">Case Study</p>
          <h1
            id="cs-hero-heading"
            className="font-serif text-[clamp(2rem,4.5vw,4rem)] text-white leading-[1.05] tracking-[-0.01em] max-w-4xl mb-5"
          >
            {cs.title}
          </h1>
          <p className="font-sans text-lg text-white/65 max-w-2xl leading-relaxed mb-5">
            {cs.summary}
          </p>

          <p className="font-sans text-sm font-semibold text-white/40 mb-10 tracking-wide">
            {readTime}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10 max-w-3xl">
            {stats.map((s) => (
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

      {/* Context bar */}
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
                {cs.client}
              </p>
            </div>
            <div className="space-y-1.5">
              <p className="eyebrow text-ms-navy">Engagement</p>
              <p className="font-sans text-sm font-medium text-ms-ink">
                {content?.engagement ?? cs.industry}
              </p>
            </div>
            <div className="space-y-1.5">
              <p className="eyebrow text-ms-navy">Technologies</p>
              <p className="font-sans text-sm font-medium text-ms-ink">
                {cs.technologies.slice(0, 4).join(", ")}
              </p>
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
            className="font-serif text-[clamp(1.5rem,2.6vw,2.2rem)] text-ms-ink mb-8 leading-[1.15] max-w-3xl"
          >
            {content?.challengeHeading ?? `The challenge facing ${cs.client}`}
          </h2>
          <div className="space-y-5 font-sans text-[17px] leading-relaxed text-charcoal-700">
            {content?.challengeBody.map((para, i) => (
              <p key={i}>{para}</p>
            )) ?? (
              <p>{cs.summary}</p>
            )}
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
            className="font-serif text-[clamp(1.5rem,2.6vw,2.2rem)] text-white mb-8 leading-[1.15] max-w-3xl"
          >
            {content?.solutionHeading ?? `How M&S Consulting delivered`}
          </h2>
          <div className="space-y-5 font-sans text-[17px] leading-relaxed text-white/70 mb-10">
            {content?.solutionBody.map((para, i) => (
              <p key={i}>{para}</p>
            )) ?? null}
          </div>
          {content?.solutionPillars && content.solutionPillars.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {content.solutionPillars.map((pillar) => (
                <div
                  key={pillar.label}
                  className="rounded-xl p-6 border border-white/10 bg-white/[0.06] hover:bg-white/[0.09] transition-colors"
                >
                  <p className="eyebrow text-tech-accent mb-3">{pillar.label}</p>
                  <p className="font-sans text-sm leading-relaxed text-white/65">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          )}
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
            className="font-serif text-[clamp(1.5rem,2.6vw,2.2rem)] text-ms-ink mb-8 leading-[1.15] max-w-3xl"
          >
            {content?.resultsHeading ?? `Results delivered for ${cs.client}`}
          </h2>
          <div className="space-y-5 font-sans text-[17px] leading-relaxed text-charcoal-700 mb-12">
            {content?.resultsBody.map((para, i) => (
              <p key={i}>{para}</p>
            )) ?? null}
          </div>
          {content?.resultsStats && content.resultsStats.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {content.resultsStats.map((item) => (
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
          )}
        </div>
      </section>

      {/* Related case studies */}
      {related.length > 0 && (
        <section className="ms-section bg-ms-paper" aria-labelledby="related-heading">
          <div className="ms-container max-w-4xl">
            <p className="section-marker text-ms-navy mb-6" id="related-heading">
              Related Work
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/case-studies/${r.slug}`}
                  className="group block rounded-xl border border-[rgba(0,31,101,0.10)] bg-ms-paper overflow-hidden hover:shadow-card hover:border-ms-navy/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy"
                >
                  <div
                    className="px-5 py-4 border-b border-[rgba(0,31,101,0.08)]"
                    style={{ backgroundColor: "#EFEADB" }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded bg-ms-navy font-sans text-[9px] font-bold uppercase tracking-[0.1em] text-white">
                        {r.industry}
                      </span>
                      <p className="font-sans font-extrabold tabular-nums text-xl leading-none text-ms-navy">
                        {r.metric.value}
                      </p>
                    </div>
                  </div>
                  <div className="px-5 py-4">
                    <h3 className="font-serif text-[0.95rem] leading-[1.25] text-ms-ink group-hover:text-ms-navy transition-colors line-clamp-3">
                      {r.title}
                    </h3>
                    <p className="font-sans text-xs text-ms-navy font-bold mt-3 inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">
                      Read <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
              <h2 className="font-serif text-2xl md:text-3xl text-dark-ink mb-3">
                Ready to talk about your project?
              </h2>
              <p className="font-sans text-dark-muted max-w-lg leading-relaxed">
                Whether you&apos;re modernizing legacy systems, building a data
                platform, or navigating a complex transformation — we&apos;ve
                delivered programs like this before.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button asChild variant="primary" size="lg">
                <Link href="/contact">Start a conversation</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2"
                >
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

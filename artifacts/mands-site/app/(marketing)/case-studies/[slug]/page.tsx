import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CASE_STUDIES } from "@/lib/case-studies";
import { CASE_STUDY_CONTENT, computeReadTime } from "@/lib/case-study-content";
import { ReadingProgressBar } from "@/components/ui/reading-progress-bar";
import { ArticleContactCTA } from "@/components/sections/article-contact-cta";

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
    openGraph: {
      title: cs.title,
      description: cs.summary,
      type: "article",
      images: [{ url: cs.coverImage }],
    },
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
                  <p className="marketing-copy text-white/85">
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
                  <p className="marketing-copy text-charcoal-700">
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
          <div className="ms-container max-w-6xl">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-marker text-ms-navy mb-3" id="related-heading">
                  Related Work
                </p>
                <h2 className="font-serif text-[clamp(1.4rem,2.4vw,2rem)] leading-tight text-ms-ink max-w-xl">
                  More proof from similar engagements
                </h2>
              </div>
              <Link
                href="/case-studies"
                className="group inline-flex items-center gap-1.5 self-start font-sans text-sm font-semibold text-ms-navy transition-all hover:gap-2.5 sm:self-auto"
              >
                View all case studies
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/case-studies/${r.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[rgba(0,31,101,0.10)] bg-white shadow-[0_1px_2px_rgba(0,31,101,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-ms-navy/20 hover:shadow-[0_24px_60px_rgba(0,31,101,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy focus-visible:ring-offset-2"
                >
                  {/* Cover */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={r.coverImage}
                      alt=""
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(4,8,20,0.72) 0%, rgba(4,8,20,0.12) 55%, transparent 100%)",
                      }}
                    />
                    <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/92 px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-ms-navy backdrop-blur-sm">
                      {r.industry}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-[1.05rem] leading-[1.28] text-ms-ink transition-colors group-hover:text-ms-navy">
                      {r.title}
                    </h3>
                    <p className="marketing-note mt-3 line-clamp-2 text-charcoal-700">
                      {r.summary}
                    </p>

                    <div className="mt-auto flex items-end justify-between gap-3 border-t border-[rgba(0,31,101,0.08)] pt-4">
                      <div className="min-w-0">
                        <p className="font-sans text-lg font-extrabold leading-none tabular-nums text-ms-navy">
                          {r.metric.value}
                        </p>
                        <p className="mt-1 font-sans text-[10px] font-semibold uppercase tracking-[0.08em] text-ms-navy/45">
                          {r.metric.label}
                        </p>
                      </div>
                      <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap font-sans text-sm font-bold text-ms-navy transition-all group-hover:gap-2.5">
                        Read
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <ArticleContactCTA category={cs.serviceLines[0]} />
    </main>
  );
}

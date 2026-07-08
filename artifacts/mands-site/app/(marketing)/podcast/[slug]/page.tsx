import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar, Headphones, Linkedin } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getAllEpisodes,
  getEpisode,
  formatDate,
} from "@/lib/content/podcast";
import { getCategoryImage } from "@/lib/content/blog-client";
import { resolveAuthor } from "@/lib/content/authors";
import { blogComponents } from "@/components/mdx/blog-components";
import { Button } from "@/components/ui/button";
import { ReadingProgressBar } from "@/components/ui/reading-progress-bar";
import { ArticleContactCTA } from "@/components/sections/article-contact-cta";

type Props = { params: Promise<{ slug: string }> };

function formatEpisode(number: number | null) {
  return number === null ? "Human Coded" : `Human Coded ${String(number).padStart(3, "0")}`;
}

export async function generateStaticParams() {
  return getAllEpisodes().map((episode) => ({ slug: episode.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const episode = getEpisode(slug);
  if (!episode) return {};

  const heroImage = episode.coverImage ?? getCategoryImage(episode.category);
  return {
    title: `${episode.title} | Human Coded`,
    description: episode.description,
    alternates: { canonical: `/podcast/${episode.slug}` },
    openGraph: {
      title: episode.title,
      description: episode.description,
      type: "article",
      publishedTime: episode.datePublished,
      authors: [resolveAuthor(episode.author).name],
      images: [{ url: heroImage }],
    },
  };
}

export default async function PodcastEpisodePage({ params }: Props) {
  const { slug } = await params;
  const episode = getEpisode(slug);
  if (!episode) notFound();

  const heroImage = episode.coverImage ?? getCategoryImage(episode.category);
  const author = resolveAuthor(episode.author);
  const allEpisodes = getAllEpisodes();
  const currentIdx = allEpisodes.findIndex((e) => e.slug === slug);
  const prevEpisode =
    currentIdx < allEpisodes.length - 1 ? allEpisodes[currentIdx + 1] : null;
  const nextEpisode = currentIdx > 0 ? allEpisodes[currentIdx - 1] : null;
  const related = allEpisodes.filter((e) => e.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: episode.title,
    description: episode.description,
    datePublished: episode.datePublished,
    episodeNumber: episode.episodeNumber ?? undefined,
    partOfSeries: {
      "@type": "PodcastSeries",
      name: "Human Coded",
      url: "https://www.mandsconsulting.com/podcast",
    },
    author: {
      "@type": "Person",
      name: author.name,
      ...(author.linkedIn ? { url: author.linkedIn } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: "M&S Consulting",
      url: "https://www.mandsconsulting.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.mandsconsulting.com/podcast/${episode.slug}`,
    },
    image: heroImage,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgressBar />

      <div className="bg-[#0A0E1A] border-b border-white/10">
        <div className="ms-container py-4">
          <Link
            href="/podcast"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#9DCCF5] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9DCCF5] rounded"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All Episodes
          </Link>
        </div>
      </div>

      <section className="relative overflow-hidden bg-[#0A0E1A] pt-8 pb-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(92,167,243,0.22),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(253,210,112,0.12),transparent_24%)]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:44px_44px]" />

        <div className="relative ms-container max-w-[64rem] mx-auto">
          <div className="relative aspect-[1200/400] rounded-xl overflow-hidden border border-white/10 bg-black shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <Image
              src={heroImage}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 64rem"
            />
          </div>
        </div>

        <div className="relative ms-container max-w-[52rem] mx-auto pt-10">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-[#9DCCF5] font-sans text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[#0A0E1A]">
              {formatEpisode(episode.episodeNumber)}
            </span>
          </div>

          <h1 className="font-serif text-[clamp(2.1rem,3.7vw,3.05rem)] leading-[1.13] tracking-[-0.015em] text-white mb-6">
            {episode.title}
          </h1>

          <p className="font-sans text-base md:text-[1.08rem] leading-[1.7] mb-7 text-white/90">
            {episode.description}
          </p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 border-y border-white/10 py-4">
            {author.linkedIn ? (
              <a
                href={author.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-white hover:text-[#9DCCF5] transition-colors"
                aria-label={`${author.name} on LinkedIn`}
              >
                <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
                {author.name}
              </a>
            ) : (
              <span className="font-sans text-sm font-medium text-white">
                {author.name}
              </span>
            )}
            <span className="text-white/45" aria-hidden="true">·</span>
            <p className="inline-flex items-center gap-1.5 font-sans text-sm text-white/85">
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              {formatDate(episode.datePublished)}
            </p>
            <span className="text-white/45" aria-hidden="true">·</span>
            <p className="inline-flex items-center gap-1.5 font-sans text-sm text-white/85">
              <Headphones className="h-3.5 w-3.5" aria-hidden="true" />
              {episode.readTime}
            </p>
          </div>
          {episode.buzzsproutEmbedUrl && (
            <div className="mt-8">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-white p-2">
                <iframe
                  src={episode.buzzsproutEmbedUrl}
                  title={`${episode.title} Buzzsprout player`}
                  className="block h-[200px] w-full rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <article className="bg-ms-paper pb-16 pt-2">
        <div className="ms-container max-w-[50rem] mx-auto">
          <div className="article-body [&>*:first-child]:mt-0">
            <MDXRemote source={episode.content} components={blogComponents} />
          </div>
        </div>
      </article>

      {episode.tags.length > 0 && (
        <div
          className="bg-ms-paper pb-12"
          style={{ borderTop: "1px solid rgba(0,31,101,0.08)" }}
        >
          <div className="ms-container max-w-[50rem] mx-auto pt-8">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-widest text-ms-navy mb-3">
              Topics
            </p>
            <div className="flex flex-wrap gap-2">
              {episode.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-xs px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: "rgba(0,31,101,0.05)",
                    color: "rgba(0,31,101,0.65)",
                    border: "1px solid rgba(0,31,101,0.10)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <section
        className="ms-section-editorial border-t border-[rgba(0,31,101,0.08)]"
        style={{ backgroundColor: "#EFEADB" }}
        aria-label="Continue listening"
      >
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
            {related.length > 0 && (
              <div>
                <p className="section-marker text-ms-navy mb-7">
                  More Human Coded
                </p>
                <div className="space-y-4">
                  {related.map((rel) => {
                    const relImage = rel.coverImage ?? getCategoryImage(rel.category);
                    return (
                      <Link
                        key={rel.slug}
                        href={`/podcast/${rel.slug}`}
                        className="group flex gap-4 p-4 -mx-4 rounded-xl hover:bg-ms-cream/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy"
                      >
                        <div className="relative w-20 h-14 rounded-lg overflow-hidden shrink-0">
                          <Image
                            src={relImage}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="inline-block px-2 py-0.5 rounded-full bg-ms-navy/10 font-sans text-[9px] font-bold uppercase tracking-[0.08em] text-ms-navy mb-1.5">
                            {formatEpisode(rel.episodeNumber)}
                          </span>
                          <p className="font-serif text-[0.95rem] leading-[1.25] text-ms-ink group-hover:text-ms-navy transition-colors line-clamp-2">
                            {rel.title}
                          </p>
                          <p className="font-sans text-[11px] text-charcoal-700 mt-1">
                            {rel.readTime}
                          </p>
                        </div>
                        <ArrowRight
                          className="h-4 w-4 text-ms-navy/40 shrink-0 self-center group-hover:text-ms-navy group-hover:translate-x-0.5 transition-all mt-4"
                          aria-hidden="true"
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="p-8 rounded-xl border border-[rgba(0,31,101,0.12)] bg-ms-navy self-start">
              <p className="eyebrow text-white/50 mb-4">Work with us</p>
              <h2 className="font-serif text-xl text-white mb-3 leading-snug">
                Human Coded is about making technology useful to people.
              </h2>
              <p className="font-sans text-sm text-white/65 leading-relaxed mb-6">
                M&amp;S Consulting helps organizations turn AI, data, cloud,
                and enterprise platforms into practical operating advantage.
              </p>
              <div className="flex flex-col gap-3">
                <Button
                  asChild
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                >
                  <Link href="/contact">Start a conversation</Link>
                </Button>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center gap-1.5 font-sans text-sm font-semibold text-white/70 hover:text-white transition-colors py-1"
                >
                  See our work
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ArticleContactCTA category="Podcast" />

      {(prevEpisode || nextEpisode) && (
        <section className="bg-ms-paper border-t border-[rgba(0,31,101,0.08)]">
          <div className="ms-container py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevEpisode ? (
              <Link
                href={`/podcast/${prevEpisode.slug}`}
                className="group flex flex-col gap-1.5 p-5 rounded-xl border border-[rgba(0,31,101,0.10)] hover:border-ms-navy/30 hover:bg-ms-cream/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy"
              >
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-charcoal-700 flex items-center gap-1.5">
                  <ArrowLeft className="h-3 w-3" aria-hidden="true" /> Previous
                </p>
                <p className="font-serif text-base leading-snug text-ms-ink group-hover:text-ms-navy transition-colors">
                  {prevEpisode.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextEpisode ? (
              <Link
                href={`/podcast/${nextEpisode.slug}`}
                className="group flex flex-col gap-1.5 p-5 rounded-xl border border-[rgba(0,31,101,0.10)] hover:border-ms-navy/30 hover:bg-ms-cream/30 transition-all text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy"
              >
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-charcoal-700 flex items-center justify-end gap-1.5">
                  Next <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </p>
                <p className="font-serif text-base leading-snug text-ms-ink group-hover:text-ms-navy transition-colors">
                  {nextEpisode.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>
      )}
    </main>
  );
}

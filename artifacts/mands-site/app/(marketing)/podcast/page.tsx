import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Headphones } from "lucide-react";
import { getAllEpisodes, formatDate } from "@/lib/content/podcast";
import { getCategoryImage } from "@/lib/content/blog-client";

export const metadata: Metadata = {
  title: "Human Coded Podcast | M&S Consulting",
  description:
    "Human Coded is the M&S Consulting podcast on AI, enterprise transformation, change management, and the human side of technology.",
  alternates: { canonical: "/podcast" },
};

const PODCAST_COVER_IMAGE = "/media/podcast/cover-art.png";

function formatEpisode(number: number | null) {
  return number === null ? "Episode" : `Episode ${String(number).padStart(3, "0")}`;
}

export default function PodcastPage() {
  const episodes = getAllEpisodes();
  const latest = episodes[0];
  const remaining = episodes.slice(1);

  return (
    <main>
      <section
        className="relative overflow-hidden"
        aria-labelledby="podcast-heading"
        style={{ backgroundColor: "#0A0E1A" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(92,167,243,0.28),transparent_28%),radial-gradient(circle_at_82%_10%,rgba(253,210,112,0.16),transparent_24%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="relative ms-container py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_430px] gap-12 lg:gap-16 items-center">
            <div>
              <p
                className="font-sans text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ color: "rgba(92,167,243,0.95)" }}
              >
                Human Coded Podcast
              </p>
              <h1
                id="podcast-heading"
                className="font-serif text-white leading-[1.0] tracking-[-0.01em] mb-6"
                style={{ fontSize: "clamp(3rem, 6vw, 5.75rem)", maxWidth: "48rem" }}
              >
                Technology conversations with people at the center.
              </h1>
              <p
                className="font-sans leading-relaxed"
                style={{
                  fontSize: "1.08rem",
                  color: "rgba(255,255,255,0.66)",
                  maxWidth: "42rem",
                }}
              >
                Human Coded brings M&S consultants, founders, and technology
                leaders together for practical conversations about AI, change,
                enterprise platforms, and what it takes to make innovation work.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href={latest ? `/podcast/${latest.slug}` : "#episodes"}
                  className="inline-flex items-center gap-2 rounded-full bg-[#9DCCF5] px-5 py-2.5 font-sans text-sm font-bold text-[#0A0E1A] transition hover:bg-white"
                >
                  Play the latest
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="#episodes"
                  className="inline-flex items-center gap-2 rounded-full border border-white/16 px-5 py-2.5 font-sans text-sm font-semibold text-white/72 transition hover:border-white/40 hover:text-white"
                >
                  Browse episodes
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-5 -top-5 h-16 w-16 rounded-full bg-[#DFA2AE]" />
              <div className="absolute -right-6 top-16 h-14 w-14 bg-[#F6D16E]" />
              <div className="absolute -bottom-5 left-10 h-10 w-10 rounded-full bg-[#9DCCF5]" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/[0.04] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
                <Image
                  src={PODCAST_COVER_IMAGE}
                  alt="Human Coded podcast cover art"
                  width={1024}
                  height={1024}
                  priority
                  className="rounded-[1.25rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {latest && (
        <section className="bg-[#0A0E1A] py-16 lg:py-24">
          <div className="ms-container">
            <p className="section-marker text-[#9DCCF5] mb-7">Latest episode</p>
            <Link
              href={`/podcast/${latest.slug}`}
              className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 lg:p-5 transition-all hover:-translate-y-1 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9DCCF5]"
            >
              <div className="relative aspect-[1200/400] overflow-hidden rounded-xl bg-black">
                <Image
                  src={latest.coverImage ?? getCategoryImage(latest.category)}
                  alt=""
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 42rem"
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.66fr)_minmax(18rem,0.34fr)] gap-6 lg:gap-10 px-2 py-7 lg:px-4 lg:py-8">
                <div>
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#9DCCF5] mb-4">
                    {formatEpisode(latest.episodeNumber)}
                  </p>
                  <h2 className="font-serif text-[clamp(1.9rem,2.8vw,2.65rem)] leading-[1.12] tracking-[-0.01em] text-white transition-colors">
                    {latest.title}
                  </h2>
                </div>
                <div className="flex flex-col justify-between gap-6">
                  <p className="font-sans text-[15px] leading-relaxed text-white/88">
                    {latest.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-sans text-sm text-white/82">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-[#9DCCF5]/90" aria-hidden="true" />
                      {formatDate(latest.datePublished)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Headphones className="h-4 w-4 text-[#9DCCF5]/90" aria-hidden="true" />
                      {latest.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section id="episodes" className="bg-[#11131A] py-16 lg:py-24">
        <div className="ms-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-9">
            <div>
              <p className="section-marker text-[#9DCCF5] mb-4">All episodes</p>
              <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-tight text-white">
                Listen through the archive.
              </h2>
            </div>
            <p className="font-sans text-sm text-white/50">
              {episodes.length} episodes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {remaining.map((episode) => (
              <Link
                key={episode.slug}
                href={`/podcast/${episode.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] transition-all hover:-translate-y-1 hover:border-[#9DCCF5]/40 hover:bg-white/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9DCCF5]"
              >
                <div className="relative aspect-[1200/400] bg-black">
                  <Image
                    src={episode.coverImage ?? getCategoryImage(episode.category)}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-widest text-[#9DCCF5] mb-3">
                    {formatEpisode(episode.episodeNumber)}
                  </p>
                  <h3 className="font-serif text-xl leading-snug text-white transition-colors mb-3">
                    {episode.title}
                  </h3>
                  <p className="marketing-copy text-white/82 line-clamp-3 mb-6">
                    {episode.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-white/10">
                    <span className="font-sans text-xs text-white/45">
                      {formatDate(episode.datePublished)}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-[#9DCCF5]">
                      Listen
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

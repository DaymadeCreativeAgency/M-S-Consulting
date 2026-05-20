import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getAllPosts, formatDate, getCategoryColor } from "@/lib/content/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical thinking on AI, cloud, enterprise transformation, and the work behind delivering technology at scale — from the M&S Consulting team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <main>
      {/* Hero — editorial split with featured article */}
      <section
        className="ms-section-dark"
        style={{ backgroundColor: "#0A0E1A" }}
        aria-labelledby="blog-heading"
      >
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
            {/* Left: headline copy */}
            <div>
              <p className="eyebrow text-tech-accent mb-5">Insights</p>
              <h1
                id="blog-heading"
                className="font-serif text-[clamp(2.6rem,4.5vw,4rem)] text-dark-ink leading-[1.0] tracking-[-0.01em] max-w-2xl mb-5"
              >
                Ideas from the field.
              </h1>
              <p className="font-sans text-lg text-dark-muted max-w-lg leading-relaxed mb-10">
                Straight talk from consultants doing the work — on AI, cloud,
                data, and the realities of enterprise transformation.
              </p>

              {/* Category pills */}
              {categories.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => {
                    const color = getCategoryColor(cat);
                    return (
                      <span
                        key={cat}
                        className="inline-flex items-center px-3 py-1.5 rounded-full font-sans text-[11px] font-bold uppercase tracking-[0.08em]"
                        style={{ backgroundColor: color.border + "22", color: color.border }}
                      >
                        {cat}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Right: featured article card */}
            {featured && (
              <Link
                href={`/blog/${featured.slug}`}
                className="group block outline-none focus-visible:ring-2 focus-visible:ring-white rounded-xl"
              >
                <article className="rounded-xl overflow-hidden bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200">
                  {featured.coverImage && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={featured.coverImage}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 1024px) 100vw, 420px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  )}
                  <div className="p-6">
                    <FeaturePill category={featured.category} />
                    <h2 className="font-serif text-[1.15rem] leading-[1.2] text-dark-ink mt-3 mb-2 group-hover:text-white transition-colors">
                      {featured.title}
                    </h2>
                    <p className="font-sans text-[13px] text-dark-muted leading-relaxed line-clamp-2 mb-4">
                      {featured.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="font-sans text-[11px] text-dark-muted/60">
                        {formatDate(featured.datePublished)}&nbsp;·&nbsp;{featured.readTime}
                      </p>
                      <span className="inline-flex items-center gap-1 font-sans text-xs font-bold text-tech-accent group-hover:gap-1.5 transition-all">
                        Read <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Post grid */}
      {posts.length > 0 && (
        <section className="ms-section bg-ms-paper" aria-label="All articles">
          <div className="ms-container">
            <div className="flex items-baseline justify-between mb-10">
              <p className="section-marker text-ms-navy">
                {rest.length > 0 ? "All Articles" : "Latest"}
              </p>
              <p className="font-sans text-sm text-charcoal-700">
                {posts.length} {posts.length === 1 ? "article" : "articles"}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {posts.length === 0 && (
        <section className="ms-section bg-ms-paper">
          <div className="ms-container text-center py-16">
            <p className="font-sans text-lg text-charcoal-700">
              Articles coming soon.
            </p>
          </div>
        </section>
      )}
    </main>
  );
}

function FeaturePill({ category }: { category: string }) {
  const color = getCategoryColor(category);
  return (
    <span
      className="inline-block px-2.5 py-1 rounded-full font-sans text-[0.65rem] font-bold uppercase tracking-[0.08em]"
      style={{ backgroundColor: color.border + "25", color: color.border }}
    >
      {category}
    </span>
  );
}

function PostCard({
  post,
}: {
  post: ReturnType<typeof getAllPosts>[number];
}) {
  const color = getCategoryColor(post.category);

  return (
    <Link href={`/blog/${post.slug}`} className="group block outline-none">
      <article
        className="h-full flex flex-col overflow-hidden rounded-xl border border-[rgba(0,31,101,0.10)] bg-white hover:shadow-[0_8px_32px_rgba(0,31,101,0.10)] hover:-translate-y-0.5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ms-navy focus-visible:ring-offset-2"
        style={{ borderTop: `3px solid ${color.border}` }}
      >
        {/* Image */}
        <div className="relative aspect-[16/10] bg-[rgba(0,31,101,0.05)] overflow-hidden">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt=""
              fill
              className="object-cover transition-transform duration-400 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          ) : (
            <PlaceholderImage category={post.category} />
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          <span
            className="inline-block self-start px-2.5 py-1 rounded-full font-sans text-[0.65rem] font-bold uppercase tracking-[0.08em] mb-4"
            style={{ backgroundColor: color.bg, color: color.text === "#ffffff" ? "#fff" : color.text }}
          >
            {post.category}
          </span>
          <h3 className="font-serif text-[1.05rem] leading-[1.2] text-ms-ink mt-1 mb-3 group-hover:text-ms-navy transition-colors flex-1">
            {post.title}
          </h3>
          <p className="font-sans text-[0.82rem] leading-relaxed text-charcoal-700 line-clamp-2 mb-5">
            {post.description}
          </p>
          <div className="mt-auto pt-4 border-t border-[rgba(0,31,101,0.07)] flex items-center justify-between gap-2">
            <p className="font-sans text-[11px] text-charcoal-700">
              {formatDate(post.datePublished)}&nbsp;·&nbsp;{post.readTime}
            </p>
            <span className="inline-flex items-center gap-1 font-sans text-xs font-bold text-ms-navy group-hover:gap-1.5 transition-all">
              Read <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

function PlaceholderImage({ category }: { category: string }) {
  const color = getCategoryColor(category);
  return (
    <div
      className="absolute inset-0 flex items-end p-5"
      style={{ backgroundColor: color.border + "14" }}
    >
      <span
        className="font-sans text-xs font-bold uppercase tracking-widest opacity-30"
        style={{ color: color.border }}
      >
        {category}
      </span>
    </div>
  );
}

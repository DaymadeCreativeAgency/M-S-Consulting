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

  return (
    <main>
      {/* Hero */}
      <section
        className="ms-section-dark"
        style={{ backgroundColor: "#0A0E1A" }}
        aria-labelledby="blog-heading"
      >
        <div className="ms-container">
          <p className="eyebrow text-tech-accent mb-5">Insights</p>
          <h1
            id="blog-heading"
            className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-dark-ink leading-[1.05] max-w-2xl mb-5"
          >
            Ideas from the field.
          </h1>
          <p className="font-sans text-lg text-dark-muted max-w-xl leading-relaxed">
            Straight talk from consultants doing the work — on AI, cloud, data,
            and the realities of enterprise transformation.
          </p>
        </div>
      </section>

      {/* Featured post */}
      {featured && <FeaturedPost post={featured} />}

      {/* Post grid */}
      {rest.length > 0 && (
        <section
          className="ms-section bg-ms-paper"
          aria-label="More articles"
        >
          <div className="ms-container">
            <p className="section-marker text-ms-navy mb-8">
              More Articles
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state */}
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

function FeaturedPost({
  post,
}: {
  post: ReturnType<typeof getAllPosts>[number];
}) {
  const color = getCategoryColor(post.category);

  return (
    <section
      className="ms-section-editorial"
      style={{ backgroundColor: "#EFEADB" }}
      aria-label="Featured article"
    >
      <div className="ms-container">
        <p className="font-sans text-xs font-bold uppercase tracking-[0.1em] text-sun-500 mb-4">
          ★ Featured
        </p>
        <Link href={`/blog/${post.slug}`} className="group block outline-none">
          <article
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-lg overflow-hidden border border-[rgba(0,31,101,0.12)] bg-white/50 hover:bg-white/70 hover:-translate-y-1 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ms-navy focus-visible:ring-offset-2"
            style={{ borderTop: `4px solid ${color.border}` }}
          >
            {/* Image */}
            <div className="relative min-h-[22rem] lg:min-h-[28rem] bg-[rgba(0,31,101,0.06)] overflow-hidden">
              {post.coverImage ? (
                <Image
                  src={post.coverImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <PlaceholderImage category={post.category} />
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between p-8 md:p-12">
              <div>
                <CategoryPill
                  category={post.category}
                  bg={color.bg}
                  text={color.text}
                />
                <h2 className="font-serif text-[clamp(1.4rem,2vw,2rem)] font-medium leading-[1.15] text-ms-ink mt-5 mb-4 group-hover:text-ms-navy transition-colors">
                  {post.title}
                </h2>
                <p className="font-sans text-[15px] leading-relaxed text-charcoal-700 max-w-md">
                  {post.description}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-[rgba(0,31,101,0.10)] flex items-center justify-between flex-wrap gap-3">
                <p className="font-sans text-xs text-charcoal-700">
                  {formatDate(post.datePublished)}&nbsp;&middot;&nbsp;
                  {post.readTime}
                </p>
                <span className="inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-ms-navy group-hover:gap-2.5 transition-all">
                  Read article{" "}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </div>
          </article>
        </Link>
      </div>
    </section>
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
        className="h-full flex flex-col overflow-hidden rounded-lg border border-[rgba(0,31,101,0.10)] bg-white hover:bg-ms-cream/30 hover:-translate-y-1 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ms-navy focus-visible:ring-offset-2"
        style={{ borderTop: `3px solid ${color.border}` }}
      >
        {/* Image */}
        <div className="relative aspect-[16/10] bg-[rgba(0,31,101,0.05)] overflow-hidden">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          ) : (
            <PlaceholderImage category={post.category} />
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          <CategoryPill
            category={post.category}
            bg={color.bg}
            text={color.text}
          />
          <h3 className="font-serif text-[clamp(1.3rem,2vw,1.6rem)] font-medium leading-[1.15] text-ms-ink mt-4 mb-3 group-hover:text-ms-navy transition-colors">
            {post.title}
          </h3>
          <p className="font-sans text-sm leading-relaxed text-charcoal-700 flex-1">
            {post.description}
          </p>
          <div className="mt-6 pt-4 border-t border-[rgba(0,31,101,0.08)] flex items-center justify-between gap-2">
            <p className="font-sans text-xs text-charcoal-700">
              {formatDate(post.datePublished)}&nbsp;&middot;&nbsp;{post.readTime}
            </p>
            <span className="inline-flex items-center gap-1 font-sans text-xs font-bold text-ms-navy group-hover:gap-2 transition-all">
              Read <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

function CategoryPill({
  category,
  bg,
  text,
}: {
  category: string;
  bg: string;
  text: string;
}) {
  return (
    <span
      className="inline-block px-3 py-1 rounded-full font-sans text-[0.7rem] font-bold uppercase tracking-[0.08em]"
      style={{ backgroundColor: bg, color: text }}
    >
      {category}
    </span>
  );
}

function PlaceholderImage({ category }: { category: string }) {
  const color = getCategoryColor(category);
  return (
    <div
      className="absolute inset-0 flex items-end p-5"
      style={{ backgroundColor: color.bg + "18" }}
    >
      <span
        className="font-sans text-xs font-bold uppercase tracking-widest opacity-40"
        style={{ color: color.bg }}
      >
        {category}
      </span>
    </div>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Linkedin } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getAllPosts,
  getPost,
  formatDate,
  getCategoryColor,
} from "@/lib/content/blog";
import { getCategoryImage } from "@/lib/content/blog-client";
import { resolveAuthor } from "@/lib/content/authors";
import { blogComponents } from "@/components/mdx/blog-components";
import { Button } from "@/components/ui/button";
import { ReadingProgressBar } from "@/components/ui/reading-progress-bar";
import { ArticleContactCTA } from "@/components/sections/article-contact-cta";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const heroImage = post.coverImage ?? getCategoryImage(post.category);
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.datePublished,
      authors: [resolveAuthor(post.author).name],
      images: [{ url: heroImage }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const color = getCategoryColor(post.category);
  const heroImage = post.coverImage ?? getCategoryImage(post.category);
  const author = resolveAuthor(post.author);

  const allPosts = getAllPosts();
  const currentIdx = allPosts.findIndex((p) => p.slug === slug);
  const prevPost =
    currentIdx < allPosts.length - 1 ? allPosts[currentIdx + 1] : null;
  const nextPost = currentIdx > 0 ? allPosts[currentIdx - 1] : null;

  const sameCat = allPosts.filter(
    (p) => p.slug !== slug && p.category === post.category
  );
  const otherPosts = allPosts.filter(
    (p) =>
      p.slug !== slug &&
      p.category !== post.category &&
      !sameCat.some((r) => r.slug === p.slug)
  );
  const related = [...sameCat, ...otherPosts].slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    author: {
      "@type": "Person",
      name: author.name,
      ...(author.linkedIn ? { url: author.linkedIn } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: "M&S Consulting",
      url: "https://www.mandsconsulting.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.mandsconsulting.com/media/MandS-Logo-Blue-copy.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.mandsconsulting.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    image: heroImage,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgressBar />

      {/* Back nav */}
      <div className="bg-ms-paper border-b border-[rgba(0,31,101,0.08)]">
        <div className="ms-container py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-ms-navy hover:opacity-75 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy rounded"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All Articles
          </Link>
        </div>
      </div>

      {/* Article header */}
      <header className="bg-ms-paper pt-12 pb-8">
        <div className="ms-container max-w-[52rem] mx-auto">
          {/* Category badge only — no tags here */}
          <div className="mb-6">
            <span
              className="inline-block px-3 py-1 rounded-full font-sans text-[0.68rem] font-bold uppercase tracking-[0.08em]"
              style={{ backgroundColor: color.bg, color: "#fff" }}
            >
              {post.category}
            </span>
          </div>

          <h1 className="font-serif text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.04] tracking-[-0.025em] text-ms-ink mb-6">
            {post.title}
          </h1>

          <p className="font-serif text-[1.25rem] md:text-[1.38rem] leading-[1.55] mb-7" style={{ color: "rgba(26,27,23,0.62)" }}>
            {post.description}
          </p>

          {/* Author + meta */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 border-y border-[rgba(0,31,101,0.08)] py-4">
            {author.linkedIn ? (
              <a
                href={author.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-ms-ink hover:text-ms-navy transition-colors"
                aria-label={`${author.name} on LinkedIn`}
              >
                <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
                {author.name}
              </a>
            ) : (
              <span className="font-sans text-sm font-medium text-ms-ink">
                {author.name}
              </span>
            )}
            <span style={{ color: "rgba(26,27,23,0.30)" }} aria-hidden="true">·</span>
            <p className="font-sans text-sm" style={{ color: "rgba(26,27,23,0.55)" }}>
              {formatDate(post.datePublished)}
            </p>
            <span style={{ color: "rgba(26,27,23,0.30)" }} aria-hidden="true">·</span>
            <p className="font-sans text-sm" style={{ color: "rgba(26,27,23,0.55)" }}>{post.readTime}</p>
          </div>
        </div>
      </header>

      {/* Hero image — always shown (fallback to category image) */}
      <div className="bg-ms-paper pb-12">
        <div className="ms-container max-w-[58rem] mx-auto">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={heroImage}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 58rem"
            />
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="bg-ms-paper pb-16">
        <div className="ms-container max-w-[50rem] mx-auto">
          <div className="article-body [&>*:first-child]:mt-0">
            <MDXRemote source={post.content} components={blogComponents} />
          </div>
        </div>
      </article>

      {/* Tags — at the bottom of the article */}
      {post.tags.length > 0 && (
        <div
          className="bg-ms-paper pb-12"
          style={{ borderTop: "1px solid rgba(0,31,101,0.08)" }}
        >
          <div className="ms-container max-w-[50rem] mx-auto pt-8">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-widest text-ms-navy mb-3">
              Topics
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
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

      {/* Related articles + CTA */}
      <section
        className="ms-section-editorial border-t border-[rgba(0,31,101,0.08)]"
        style={{ backgroundColor: "#EFEADB" }}
        aria-label="Continue reading"
      >
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
            {related.length > 0 && (
              <div>
                <p className="section-marker text-ms-navy mb-7">
                  More from our team
                </p>
                <div className="space-y-4">
                  {related.map((rel) => {
                    const rc = getCategoryColor(rel.category);
                    const relImage = rel.coverImage ?? getCategoryImage(rel.category);
                    return (
                      <Link
                        key={rel.slug}
                        href={`/blog/${rel.slug}`}
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
                          <span
                            className="inline-block px-2 py-0.5 rounded-full font-sans text-[9px] font-bold uppercase tracking-[0.08em] mb-1.5"
                            style={{
                              backgroundColor: rc.border + "20",
                              color: rc.border,
                            }}
                          >
                            {rel.category}
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

            {/* CTA */}
            <div className="p-8 rounded-xl border border-[rgba(0,31,101,0.12)] bg-ms-navy self-start">
              <p className="eyebrow text-white/50 mb-4">Work with us</p>
              <h2 className="font-serif text-xl text-white mb-3 leading-snug">
                The thinking behind this post is the work we do every day.
              </h2>
              <p className="font-sans text-sm text-white/65 leading-relaxed mb-6">
                M&amp;S Consulting has delivered{" "}
                {post.category.toLowerCase()} programs for federal agencies
                and commercial enterprises since 2002. Based in Morgantown,
                WV.
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
                  See our work{" "}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width contact CTA */}
      <ArticleContactCTA category={post.category} />

      {/* Post navigation */}
      {(prevPost || nextPost) && (
        <section className="bg-ms-paper border-t border-[rgba(0,31,101,0.08)]">
          <div className="ms-container py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {prevPost ? (
              <Link
                href={`/blog/${prevPost.slug}`}
                className="group flex flex-col gap-1.5 p-5 rounded-xl border border-[rgba(0,31,101,0.10)] hover:border-ms-navy/30 hover:bg-ms-cream/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy"
              >
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-charcoal-700 flex items-center gap-1.5">
                  <ArrowLeft className="h-3 w-3" aria-hidden="true" /> Previous
                </p>
                <p className="font-serif text-base leading-snug text-ms-ink group-hover:text-ms-navy transition-colors">
                  {prevPost.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group flex flex-col gap-1.5 p-5 rounded-xl border border-[rgba(0,31,101,0.10)] hover:border-ms-navy/30 hover:bg-ms-cream/30 transition-all text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy"
              >
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-charcoal-700 flex items-center justify-end gap-1.5">
                  Next <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </p>
                <p className="font-serif text-base leading-snug text-ms-ink group-hover:text-ms-navy transition-colors">
                  {nextPost.title}
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

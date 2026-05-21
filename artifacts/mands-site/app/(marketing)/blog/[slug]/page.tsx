import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getAllPosts,
  getPost,
  formatDate,
  getCategoryColor,
} from "@/lib/content/blog";
import { blogComponents } from "@/components/mdx/blog-components";
import { Button } from "@/components/ui/button";
import { ReadingProgressBar } from "@/components/ui/reading-progress-bar";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.datePublished,
      authors: [post.author],
      ...(post.coverImage ? { images: [{ url: post.coverImage }] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const color = getCategoryColor(post.category);
  const allPosts = getAllPosts();
  const currentIdx = allPosts.findIndex((p) => p.slug === slug);
  const prevPost =
    currentIdx < allPosts.length - 1 ? allPosts[currentIdx + 1] : null;
  const nextPost = currentIdx > 0 ? allPosts[currentIdx - 1] : null;

  // Related posts: same category first, then newest, never current
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

  return (
    <main>
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
      <header className="bg-ms-paper pt-14 pb-10">
        <div className="ms-container max-w-[58rem] mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-block px-3 py-1 rounded-full font-sans text-[0.68rem] font-bold uppercase tracking-[0.08em]"
              style={{ backgroundColor: color.bg, color: "#fff" }}
            >
              {post.category}
            </span>
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="font-sans text-xs text-charcoal-700 bg-ms-cream px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-[-0.01em] text-ms-ink max-w-[52rem] mb-6">
            {post.title}
          </h1>

          <p className="font-sans text-[15px] text-charcoal-700 leading-relaxed max-w-[48rem] mb-6">
            {post.description}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p className="font-sans text-sm text-charcoal-700">
              By {post.author}
            </p>
            <span className="text-charcoal-700/40" aria-hidden="true">·</span>
            <p className="font-sans text-sm text-charcoal-700">
              {formatDate(post.datePublished)}
            </p>
            <span className="text-charcoal-700/40" aria-hidden="true">·</span>
            <p className="font-sans text-sm text-charcoal-700">{post.readTime}</p>
          </div>
        </div>
      </header>

      {/* Cover image */}
      {post.coverImage && (
        <div className="bg-ms-paper pb-10">
          <div className="ms-container max-w-[58rem] mx-auto">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[rgba(0,31,101,0.06)]">
              <Image
                src={post.coverImage}
                alt=""
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 58rem"
              />
            </div>
          </div>
        </div>
      )}

      {/* Article body */}
      <article className="bg-ms-paper pb-16">
        <div className="ms-container max-w-[50rem] mx-auto">
          <div className="article-body">
            <MDXRemote source={post.content} components={blogComponents} />
          </div>
        </div>
      </article>

      {/* Related articles + CTA — side by side on large screens */}
      <section
        className="ms-section-editorial border-t border-[rgba(0,31,101,0.08)]"
        style={{ backgroundColor: "#EFEADB" }}
        aria-label="Continue reading"
      >
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
            {/* Related posts */}
            {related.length > 0 && (
              <div>
                <p className="section-marker text-ms-navy mb-7">
                  More from our team
                </p>
                <div className="space-y-4">
                  {related.map((rel) => {
                    const rc = getCategoryColor(rel.category);
                    return (
                      <Link
                        key={rel.slug}
                        href={`/blog/${rel.slug}`}
                        className="group flex gap-4 p-4 -mx-4 rounded-xl hover:bg-ms-cream/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy"
                      >
                        {rel.coverImage && (
                          <div className="relative w-20 h-14 rounded-lg overflow-hidden shrink-0 bg-ms-navy/10">
                            <Image
                              src={rel.coverImage}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="80px"
                            />
                          </div>
                        )}
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
            <div
              className="p-8 rounded-xl border border-[rgba(0,31,101,0.12)] bg-ms-navy self-start"
            >
              <p className="eyebrow text-white/50 mb-4">Work with us</p>
              <h2 className="font-serif text-xl text-white mb-3 leading-snug">
                The thinking behind this post is the work we do every day.
              </h2>
              <p className="font-sans text-sm text-white/65 leading-relaxed mb-6">
                M&amp;S Consulting has delivered {post.category.toLowerCase()}{" "}
                programs for federal agencies and commercial enterprises since
                2002. Based in Morgantown, WV.
              </p>
              <div className="flex flex-col gap-3">
                <Button asChild variant="primary" size="md" className="w-full justify-center">
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

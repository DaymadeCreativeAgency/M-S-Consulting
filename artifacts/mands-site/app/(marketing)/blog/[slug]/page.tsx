import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost, formatDate, getCategoryColor } from "@/lib/content/blog";
import { blogComponents } from "@/components/mdx/blog-components";
import { Button } from "@/components/ui/button";

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
  const prevPost = currentIdx < allPosts.length - 1 ? allPosts[currentIdx + 1] : null;
  const nextPost = currentIdx > 0 ? allPosts[currentIdx - 1] : null;

  return (
    <main>
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
          {/* Category + meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className="inline-block px-3 py-1 rounded-full font-sans text-[0.7rem] font-bold uppercase tracking-[0.08em]"
              style={{ backgroundColor: color.bg, color: color.text }}
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

          {/* Title */}
          <h1 className="font-sans font-extrabold text-[clamp(2rem,4.2vw,3.75rem)] leading-[0.98] tracking-tight text-ms-ink max-w-[58rem] mb-6">
            {post.title}
          </h1>

          {/* Byline */}
          <p className="font-sans text-sm text-charcoal-700">
            By {post.author}&nbsp;&nbsp;·&nbsp;&nbsp;
            {formatDate(post.datePublished)}&nbsp;&nbsp;·&nbsp;&nbsp;
            {post.readTime}
          </p>
        </div>
      </header>

      {/* Cover image */}
      {post.coverImage && (
        <div className="bg-ms-paper pb-10">
          <div className="ms-container max-w-[58rem] mx-auto">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-[rgba(0,31,101,0.06)]">
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

      {/* CTA block */}
      <section
        className="ms-section"
        style={{ backgroundColor: "#001F65" }}
        aria-label="Talk to M&S Consulting"
      >
        <div className="ms-container max-w-[50rem] mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="eyebrow text-white/50 mb-3">Ready to move forward?</p>
              <h2 className="font-serif text-2xl md:text-3xl text-white mb-3 leading-snug">
                Let's talk about what this means for your organization.
              </h2>
              <p className="font-sans text-sm text-white/70 max-w-md leading-relaxed">
                M&S Consulting has delivered AI, cloud, and enterprise transformation
                programs since 2002. We're based in Morgantown, WV and work with
                federal agencies, healthcare networks, and commercial enterprises.
              </p>
            </div>
            <div className="shrink-0">
              <Button asChild variant="primary" size="lg">
                <Link href="/contact">Schedule a Call</Link>
              </Button>
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
                className="group flex flex-col gap-1.5 p-5 rounded-lg border border-[rgba(0,31,101,0.10)] hover:border-ms-navy/30 hover:bg-ms-cream/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy"
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
                className="group flex flex-col gap-1.5 p-5 rounded-lg border border-[rgba(0,31,101,0.10)] hover:border-ms-navy/30 hover:bg-ms-cream/30 transition-all text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy"
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

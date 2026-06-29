import type { Metadata } from "next";
import Image from "next/image";
import { getAllPosts } from "@/lib/content/blog";
import { BlogGrid } from "@/components/sections/blog-grid";

export const metadata: Metadata = {
  title: "Blog — Ideas from the Field | M&S Consulting",
  description:
    "Practical perspectives on AI, cloud, enterprise transformation, and digital strategy — written by the consultants doing the work. M&S Consulting, Morgantown WV.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="blog-heading"
        style={{ minHeight: "480px", backgroundColor: "#0A0E1A" }}
      >
        {/* Background image */}
        <Image
          src="/media/blog-hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,14,26,0.65) 0%, rgba(10,14,26,0.80) 60%, rgba(10,14,26,0.96) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,15,60,0.55) 0%, transparent 60%)",
          }}
        />

        {/* Content */}
        <div className="relative ms-container flex flex-col justify-end py-20 lg:py-28" style={{ minHeight: "480px" }}>
          <p
            className="font-sans text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ color: "rgba(92,167,243,0.9)" }}
          >
            Insights
          </p>
          <h1
            id="blog-heading"
            className="font-serif text-white leading-[1.0] tracking-[-0.01em] mb-5"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)", maxWidth: "28rem" }}
          >
            Ideas from the field.
          </h1>
          <p
            className="font-sans leading-relaxed"
            style={{
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.60)",
              maxWidth: "38rem",
              marginBottom: "2rem",
            }}
          >
            Straight talk from consultants doing the work — on AI, cloud, data,
            and the realities of enterprise transformation.
          </p>
          <p
            className="font-sans text-sm font-semibold"
            style={{ color: "rgba(255,255,255,0.30)" }}
          >
            {posts.length} articles
          </p>
        </div>
      </section>

      {/* ── Search / Filter / Grid ─────────────────────────────────────────── */}
      <BlogGrid posts={posts} />
    </main>
  );
}

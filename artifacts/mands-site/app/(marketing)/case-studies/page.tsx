import type { Metadata } from "next";
import Image from "next/image";
import { CaseStudiesGrid } from "@/components/sections/case-studies-grid";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Client outcomes from M&S Consulting engagements across federal, commercial, and healthcare sectors — Salesforce, SAP, AWS, Microsoft, and more.",
  alternates: { canonical: "/case-studies" },
};

const HERO_STATS = [
  { value: "20+", label: "Years delivering" },
  { value: "250", label: "Consultants" },
  { value: "13+", label: "Published engagements" },
  { value: "6", label: "Practice areas" },
];

export default function CaseStudiesPage() {
  return (
    <main>
      {/* Hero — full-bleed image with overlay */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="cs-heading"
        style={{ minHeight: "520px" }}
      >
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Dark overlay — richer gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,15,50,0.97) 0%, rgba(0,25,70,0.88) 50%, rgba(0,20,55,0.75) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative ms-container py-24 md:py-32 flex flex-col justify-between gap-16">
          <div className="max-w-3xl">
            <p className="eyebrow text-tech-accent mb-5">Client Work</p>
            <h1
              id="cs-heading"
              className="font-serif text-[clamp(2.6rem,5vw,4.25rem)] text-white leading-[1.0] mb-6 tracking-[-0.01em]"
            >
              Outcomes that
              <br />
              speak for themselves.
            </h1>
            <p className="font-sans text-lg text-white/70 max-w-xl leading-relaxed">
              Real engagements, real results — across federal agencies,
              commercial enterprises, and healthcare organizations. We deliver
              on time and at scale.
            </p>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm px-6 py-5 flex flex-col gap-1"
              >
                <p className="font-sans font-extrabold tabular-nums text-[2rem] leading-none text-white">
                  {stat.value}
                </p>
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.1em] text-white/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filterable grid */}
      <CaseStudiesGrid />
    </main>
  );
}

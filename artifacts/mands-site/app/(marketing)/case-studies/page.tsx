import type { Metadata } from "next";
import { CaseStudiesGrid } from "@/components/sections/case-studies-grid";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Client outcomes from M&S Consulting engagements across federal, commercial, and healthcare sectors — Salesforce, SAP, AWS, Microsoft, and more.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <main>
      {/* Hero */}
      <section
        className="ms-section-dark"
        style={{ backgroundColor: "#0A0E1A" }}
        aria-labelledby="cs-heading"
      >
        <div className="ms-container">
          <p className="eyebrow text-tech-accent mb-5">Client Work</p>
          <h1
            id="cs-heading"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-dark-ink max-w-3xl mb-6"
          >
            Case Studies
          </h1>
          <p className="font-sans text-lg text-dark-muted max-w-2xl leading-relaxed">
            Real engagements. Real outcomes. Across federal agencies, commercial
            enterprises, and healthcare organizations — delivering on time, at
            scale.
          </p>
        </div>
      </section>

      {/* Filterable grid */}
      <CaseStudiesGrid />
    </main>
  );
}

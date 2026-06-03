import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

import { MsContactForm } from "@/components/sections/ms-contact-form";

export type StandalonePageSection = {
  eyebrow?: string;
  title: string;
  body: string[];
  bullets?: string[];
};

export type StandalonePageCard = {
  title: string;
  body: string;
};

export type StandalonePageStat = {
  value: string;
  label: string;
};

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  stats?: StandalonePageStat[];
  intro?: string[];
  sections: StandalonePageSection[];
  cards?: StandalonePageCard[];
  finalCta?: {
    eyebrow?: string;
    title: string;
    body: string;
    href?: string;
    label?: string;
  };
  includeContactForm?: boolean;
};

export function StandaloneMarketingPage({
  eyebrow,
  title,
  description,
  stats = [],
  intro = [],
  sections,
  cards = [],
  finalCta,
  includeContactForm = true,
}: Props) {
  return (
    <>
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0A0E1A" }}>
        <div className="ms-container">
          <div className="max-w-4xl">
            <p className="eyebrow mb-5" style={{ color: "#5CA7F3" }}>
              {eyebrow}
            </p>
            <h1
              className="font-serif text-white font-medium"
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                marginBottom: "1.5rem",
              }}
            >
              {title}
            </h1>
            <p
              className="font-sans max-w-3xl"
              style={{
                fontSize: "clamp(1.05rem, 1.6vw, 1.22rem)",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.68)",
              }}
            >
              {description}
            </p>
            <Link
              href="/contact"
              className="mt-9 font-sans font-semibold inline-flex items-center gap-2 px-7 py-3 rounded-full transition-all duration-200"
              style={{
                backgroundColor: "#5CA7F3",
                color: "#0A0E1A",
                fontSize: "0.9rem",
              }}
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {stats.length > 0 && (
        <section style={{ backgroundColor: "#EFEADB", borderBottom: "1px solid rgba(0,31,101,0.08)" }}>
          <div className="ms-container py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-[rgba(0,31,101,0.12)]">
              {stats.map((stat) => (
                <div key={`${stat.value}-${stat.label}`} className="text-center md:px-10">
                  <div
                    className="font-sans font-bold tabular-nums"
                    style={{
                      fontSize: "clamp(2rem, 3.4vw, 3.1rem)",
                      color: "#001F65",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-sans font-semibold mt-3"
                    style={{
                      fontSize: "0.78rem",
                      color: "#001F65",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {(intro.length > 0 || cards.length > 0) && (
        <section className="py-20 lg:py-24" style={{ backgroundColor: "#EFF6FF" }}>
          <div className="ms-container">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
              <div>
                <p className="eyebrow mb-4" style={{ color: "#001F65" }}>
                  Overview
                </p>
                <div className="space-y-5">
                  {intro.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="font-sans"
                      style={{ fontSize: "1rem", lineHeight: 1.75, color: "#2D3748" }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              {cards.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {cards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-xl bg-white"
                      style={{
                        padding: "1.5rem",
                        border: "1px solid rgba(0,31,101,0.08)",
                        boxShadow: "0 8px 30px rgba(0,31,101,0.06)",
                      }}
                    >
                      <h3 className="font-sans font-semibold mb-3" style={{ color: "#001F65" }}>
                        {card.title}
                      </h3>
                      <p className="marketing-copy" style={{ color: "#4A5568" }}>
                        {card.body}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl"
                style={{
                  padding: "2rem",
                  backgroundColor: "#F8FAFC",
                  border: "1px solid rgba(0,31,101,0.08)",
                }}
              >
                {section.eyebrow && (
                  <p className="eyebrow mb-3" style={{ color: "#001F65" }}>
                    {section.eyebrow}
                  </p>
                )}
                <h2
                  className="font-serif font-medium mb-5"
                  style={{ color: "#001F65", fontSize: "clamp(1.35rem, 2vw, 1.9rem)", lineHeight: 1.2 }}
                >
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="marketing-copy"
                      style={{ color: "#4A5568" }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-6 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <CheckCircle className="h-4 w-4 mt-1 shrink-0" style={{ color: "#5CA7F3" }} aria-hidden="true" />
                        <span className="marketing-copy" style={{ color: "#2D3748" }}>
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {finalCta && (
        <section className="py-20 lg:py-24" style={{ backgroundColor: "#001F65" }}>
          <div className="ms-container">
            <div className="max-w-3xl">
              {finalCta.eyebrow && (
                <p className="eyebrow mb-4" style={{ color: "#5CA7F3" }}>
                  {finalCta.eyebrow}
                </p>
              )}
              <h2
                className="font-serif text-white font-medium mb-5"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", lineHeight: 1.15 }}
              >
                {finalCta.title}
              </h2>
              <p className="font-sans mb-8" style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}>
                {finalCta.body}
              </p>
              <Link
                href={finalCta.href ?? "/contact"}
                className="font-sans font-semibold inline-flex items-center gap-2 px-7 py-3 rounded-full"
                style={{ border: "1.5px solid rgba(255,255,255,0.7)", color: "white", fontSize: "0.9rem" }}
              >
                {finalCta.label ?? "Contact Us"}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {includeContactForm && <MsContactForm />}
    </>
  );
}

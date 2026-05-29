import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MsContactForm } from "@/components/sections/ms-contact-form";
import { FadeIn } from "@/components/ui/fade-in";
import { CASE_STUDIES } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: { absolute: "Contact M&S Consulting | Schedule a Call" },
  description:
    "Ready to start your digital transformation? Get in touch with M&S Consulting. Headquartered in Morgantown, WV with nearshore and offshore delivery capabilities.",
  alternates: { canonical: "/contact" },
};

const OFFICES = [
  {
    label: "Headquarters",
    city: "Morgantown, WV",
    detail: "United States",
    note: "Primary office and delivery hub",
  },
  {
    label: "Nearshore",
    city: "Brasil",
    detail: "South America",
    note: "Nearshore delivery center",
  },
  {
    label: "Offshore",
    city: "India",
    detail: "Asia-Pacific",
    note: "Offshore delivery center",
  },
];

const FEATURED_CASE_STUDIES = CASE_STUDIES.slice(0, 3);

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0A0E1A" }}>
        <div className="ms-container">
          <div className="max-w-3xl">
            <FadeIn>
              <p className="eyebrow mb-5" style={{ color: "#5CA7F3" }}>
                CONTACT
              </p>
              <h1
                className="font-serif text-white font-medium"
                style={{
                  fontSize: "clamp(2.2rem, 4.5vw, 3.75rem)",
                  lineHeight: 1.12,
                  letterSpacing: "-0.01em",
                  marginBottom: "1.5rem",
                }}
              >
                Collaboration starts with conversation.
              </h1>
              <p
                className="font-sans"
                style={{
                  fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                Whether you&rsquo;re ready to kick off a project or just exploring what&rsquo;s possible, our team is happy to talk through your goals. Fill out the form below and we&rsquo;ll be in touch shortly.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Form ─────────────────────────────────────────────────────── */}
      <MsContactForm />

      {/* ── Office locations ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#EFEADB" }}>
        <div className="ms-container">
          <FadeIn className="mb-9">
            <p className="eyebrow mb-3" style={{ color: "#001F65" }}>WHERE WE WORK</p>
            <h2
              className="font-serif font-medium"
              style={{ fontSize: "clamp(1.65rem, 2.6vw, 2.25rem)", color: "#001F65", lineHeight: 1.2 }}
            >
              Local roots with distributed delivery.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {OFFICES.map((o, i) => (
              <FadeIn key={o.label} delay={i * 0.08}>
                <div
                  style={{
                    padding: "1.5rem",
                    backgroundColor: "white",
                    borderRadius: "12px",
                    borderTop: `3px solid ${i === 0 ? "#FCC541" : "rgba(0,31,101,0.12)"}`,
                  }}
                >
                  <p
                    className="eyebrow mb-2"
                    style={{ color: "#001F65" }}
                  >
                    {o.label}
                  </p>
                  <p
                    className="font-sans font-semibold"
                    style={{ fontSize: "1.05rem", color: "#001F65", marginBottom: "2px" }}
                  >
                    {o.city}
                  </p>
                  <p
                    className="font-sans"
                    style={{ fontSize: "0.85rem", color: "#6B7280", marginBottom: "0.8rem" }}
                  >
                    {o.detail}
                  </p>
                  <p className="font-sans" style={{ fontSize: "0.82rem", color: "#4A5568", lineHeight: 1.6 }}>
                    {o.note}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured case studies ────────────────────────────────────── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container">
          <FadeIn className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3" style={{ color: "#001F65" }}>FEATURED CASE STUDIES</p>
              <h2
                className="font-serif font-medium"
                style={{ fontSize: "clamp(1.65rem, 2.6vw, 2.25rem)", color: "#001F65", lineHeight: 1.2 }}
              >
                See what partnership can make possible.
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="font-sans inline-flex w-fit items-center gap-2 rounded-full border border-[#001F65]/20 px-5 py-2.5 text-sm font-bold text-[#001F65] transition-colors duration-200 hover:border-[#001F65] hover:bg-[#001F65] hover:text-white"
            >
              View all case studies
              <ArrowRight size={14} />
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {FEATURED_CASE_STUDIES.map((study, index) => (
              <FadeIn key={study.slug} delay={index * 0.08}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#001F65]/10 bg-white shadow-[0_14px_40px_rgba(0,31,101,0.07)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={study.coverImage}
                      alt=""
                      className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-sans text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#001F65]">
                      {study.industry}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="font-sans text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#5CA7F3]">
                      {study.client}
                    </p>
                    <h3 className="mt-2 font-serif text-xl font-medium leading-tight text-[#001F65]">
                      {study.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 font-sans text-sm leading-6 text-[#4A5568]">
                      {study.summary}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-[#001F65]/8 pt-4">
                      <div>
                        <p className="font-sans text-lg font-bold text-[#001F65]">{study.metric.value}</p>
                        <p className="font-sans text-xs text-[#6B7280]">{study.metric.label}</p>
                      </div>
                      <ArrowRight className="text-[#001F65] transition-transform duration-200 group-hover:translate-x-1" size={18} />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

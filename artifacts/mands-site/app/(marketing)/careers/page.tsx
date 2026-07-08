import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MsContactForm } from "@/components/sections/ms-contact-form";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: { absolute: "Careers at M&S Consulting | Join Our Team" },
  description:
    "Working at M&S is a fun and challenging experience. We deliver the highest quality work with the best and brightest people. Explore open roles and internship opportunities.",
  alternates: { canonical: "/careers" },
};

const BENEFITS = [
  { title: "Generous Compensation", body: "Competitive salary and performance-based compensation plans that reward great work.", accent: "#5CA7F3" },
  { title: "Medical Insurance", body: "Comprehensive health coverage for you and your family.", accent: "#34A853" },
  { title: "Dental Insurance", body: "Full dental coverage included as part of your benefits package.", accent: "#2DB5A3" },
  { title: "Vision Insurance", body: "Vision care coverage so you can stay sharp in every way.", accent: "#7C6FE8" },
  { title: "401(k) with 4% Match", body: "We contribute a 4% employer match to help you build long-term financial security.", accent: "#FCC541" },
  { title: "Paid Holidays", body: "A full calendar of paid federal and company holidays.", accent: "#F2784B" },
  { title: "Paid Training", body: "We invest in your growth, certifications, courses, and professional development covered.", accent: "#E0598B" },
  { title: "Paid Vacation", body: "Generous PTO so you can recharge and bring your best self to work.", accent: "#4C6EF5" },
];

export default function CareersPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0A0E1A" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <p className="eyebrow mb-5" style={{ color: "#5CA7F3" }}>
                CAREERS
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
                Work with the best in the business.
              </h1>
              <p
                className="font-sans mb-8"
                style={{
                  fontSize: "clamp(1.05rem, 1.6vw, 1.15rem)",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                Working at M&amp;S is a fun and challenging experience. We deliver the highest quality work, and we do it with the best and brightest people.
              </p>
              <Link
                href="#open-roles"
                className="font-sans font-semibold inline-flex items-center gap-2 px-7 py-3 rounded-full transition-all duration-200"
                style={{ backgroundColor: "#5CA7F3", color: "#0A0E1A", fontSize: "0.9rem" }}
              >
                See Open Roles
              </Link>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="relative">
                <div
                  className="pointer-events-none absolute -right-5 -top-5 h-28 w-28 rounded-full border border-[#5CA7F3]/30"
                  aria-hidden="true"
                />
                <div
                  className="relative overflow-hidden rounded-[1.75rem]"
                  style={{
                    border: "1px solid rgba(255,255,255,0.10)",
                    boxShadow: "0 24px 72px rgba(0,0,0,0.45)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/media/team/ms-2025-group-photo.jpg"
                    alt="M&S Consulting team group photo from 2025"
                    className="block h-full w-full object-cover"
                    style={{ aspectRatio: "16/10", objectPosition: "center" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(10,14,26,0.02) 0%, rgba(10,14,26,0.22) 100%)",
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Join our team ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn>
              <p className="eyebrow mb-4" style={{ color: "#001F65" }}>JOIN OUR TEAM</p>
              <h2
                className="font-serif font-medium"
                style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", color: "#001F65", lineHeight: 1.2, marginBottom: "1.25rem" }}
              >
                We deliver the highest quality work, and we do it with the best people.
              </h2>
              <p
                className="font-sans"
                style={{ fontSize: "1rem", lineHeight: 1.75, color: "#4A5568", marginBottom: "1rem" }}
              >
                M&amp;S is a 250-strong consulting collective with deep expertise across enterprise software, cloud, data, cybersecurity, and organizational transformation. We work with some of the most complex and interesting clients in government and commercial sectors.
              </p>
              <p
                className="font-sans"
                style={{ fontSize: "1rem", lineHeight: 1.75, color: "#4A5568" }}
              >
                If you&rsquo;re the kind of person who takes ownership, solves hard problems, and makes the people around you better, you&rsquo;ll fit right in.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div
                id="open-roles"
                style={{
                  padding: "2rem",
                  borderRadius: "16px",
                  backgroundColor: "#EFEADB",
                  border: "1px solid rgba(0,31,101,0.08)",
                }}
              >
                <p className="eyebrow mb-3" style={{ color: "#001F65" }}>OPEN ROLES</p>
                <p
                  className="font-sans font-semibold mb-2"
                  style={{ fontSize: "1.1rem", color: "#001F65" }}
                >
                  We&rsquo;re always looking for great people.
                </p>
                <p
                  className="font-sans marketing-copy mb-6"
                  style={{ color: "#4A5568" }}
                >
                  All open positions are managed through our JazzHR career portal, where listings stay current. We hire across consulting, engineering, design, and leadership.
                </p>

                <a
                  href="https://mandsc.applytojob.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group font-sans font-bold inline-flex w-full items-center justify-center gap-2.5 px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 sm:w-auto"
                  style={{
                    backgroundColor: "#001F65",
                    color: "white",
                    fontSize: "1.05rem",
                    boxShadow: "0 12px 30px rgba(0,31,101,0.28)",
                  }}
                >
                  View Open Positions
                  <ArrowUpRight size={19} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <p className="marketing-note mt-4" style={{ color: "#6B7280" }}>
                  Listings updated directly on JazzHR, always current.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#EFEADB" }}>
        <div className="ms-container">
          <FadeIn className="mb-12">
            <p className="eyebrow mb-3" style={{ color: "#001F65" }}>BENEFITS</p>
            <h2
              className="font-serif font-medium"
              style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", color: "#001F65", lineHeight: 1.2 }}
            >
              We take care of our people.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {BENEFITS.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.06}>
                <div
                  style={{
                    padding: "1.5rem",
                    backgroundColor: "white",
                    borderRadius: "12px",
                    borderTop: `3px solid ${b.accent}`,
                    height: "100%",
                  }}
                >
                  <p className="font-sans font-semibold mb-2" style={{ fontSize: "1.1rem", color: "#001F65", lineHeight: 1.3 }}>
                    {b.title}
                  </p>
                  <p className="font-sans" style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "#4A5568" }}>
                    {b.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internships ──────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn>
              <p className="eyebrow mb-4" style={{ color: "#001F65" }}>INTERNSHIPS</p>
              <h2
                className="font-serif font-medium"
                style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", color: "#001F65", lineHeight: 1.2, marginBottom: "1.25rem" }}
              >
                Not your average internship.
              </h2>
              <p
                className="font-sans"
                style={{ fontSize: "1rem", lineHeight: 1.75, color: "#4A5568", marginBottom: "1rem" }}
              >
                Your college education is a good foundation to begin your real learning. We allow you to get your hands dirty from day one. You&rsquo;ll enjoy an environment where you&rsquo;re challenged to find solutions and encouraged to ask questions.
              </p>
              <p
                className="font-sans"
                style={{ fontSize: "1rem", lineHeight: 1.75, color: "#4A5568" }}
              >
                Surrounding yourself with friendly and helpful professionals who are experts in their field will grow and motivate you. We want to pour our knowledge and understanding into the next generation of great consultants.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <blockquote
                style={{
                  padding: "2rem",
                  borderRadius: "12px",
                  backgroundColor: "#EFEADB",
                  borderLeft: "4px solid #FCC541",
                }}
              >
                <p
                  className="font-serif"
                  style={{ fontSize: "1.1rem", color: "#1A1B17", lineHeight: 1.65, marginBottom: "1.25rem", fontStyle: "italic" }}
                >
                  &ldquo;The experience I&rsquo;ve gained at M&amp;S is far and above more valuable than my experiences at other organizations. I&rsquo;m given important tasks and am continually learning in ways that benefit me now and down the road. That, combined with a positive, hardworking culture of the best consultants in the field, results in one of the most fertile grounds for young professionals.&rdquo;
                </p>
                <p className="font-sans font-semibold" style={{ fontSize: "0.85rem", color: "#001F65" }}>
                  M&amp;S Intern
                </p>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </section>

      <MsContactForm />
    </>
  );
}

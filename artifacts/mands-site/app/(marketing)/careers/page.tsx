import type { Metadata } from "next";
import Link from "next/link";
import { MsContactForm } from "@/components/sections/ms-contact-form";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: { absolute: "Careers at M&S Consulting | Join Our Team" },
  description:
    "Working at M&S is a fun and challenging experience. We deliver the highest quality work with the best and brightest people. Explore open roles and internship opportunities.",
  alternates: { canonical: "/careers" },
};

const BENEFITS = [
  { title: "Generous Compensation", body: "Competitive salary and performance-based compensation plans that reward great work." },
  { title: "Medical Insurance", body: "Comprehensive health coverage for you and your family." },
  { title: "Dental Insurance", body: "Full dental coverage included as part of your benefits package." },
  { title: "Vision Insurance", body: "Vision care coverage so you can stay sharp in every way." },
  { title: "401(k) with 4% Match", body: "We contribute a 4% employer match to help you build long-term financial security." },
  { title: "Paid Holidays", body: "A full calendar of paid federal and company holidays." },
  { title: "Paid Training", body: "We invest in your growth — certifications, courses, and professional development covered." },
  { title: "Paid Vacation", body: "Generous PTO so you can recharge and bring your best self to work." },
];

const OPEN_ROLES = [
  { title: "3D Animator", location: "Remote", href: "https://mandsc.applytojob.com/apply/weYsOpQI1B/3D-Animator" },
  { title: "Certinia Financial Management Cloud Developer", location: "Remote", href: "https://mandsc.applytojob.com/apply/yxgNRPPn8z/Certinia-Financial-Management-Cloud-Developer" },
  { title: "Copywriter/Content Strategist", location: "Pasadena, CA", href: "https://mandsc.applytojob.com/apply/aaFgBwOIF7/CopywriterContent-Strategist" },
  { title: "Designer/Maker", location: "Pasadena, CA", href: "https://mandsc.applytojob.com/apply/85Ldb6ZaYL/DesignerMaker" },
  { title: "Developer I - Salesforce Integration (Tier 2 Security Clearance)", location: "Remote", href: "https://mandsc.applytojob.com/apply/bQOBIRNOGY/Developer-I-Salesforce-Integration-Tier-2-Security-Clearance" },
  { title: "Developer II - Salesforce Integration (Tier 2 Security Clearance)", location: "Multiple states", href: "https://mandsc.applytojob.com/apply/RU1PPT3hks/Developer-II-Salesforce-Integration-Tier-2-Security-Clearance" },
  { title: "Developer III (Senior) - Salesforce Integration (Tier 2 Security Clearance)", location: "Remote", href: "https://mandsc.applytojob.com/apply/vaKeNtpv3D/Developer-III-Senior-Salesforce-Integration-Tier-2-Security-Clearance" },
  { title: "Electrical Design Engineer", location: "Greenville, SC", href: "https://mandsc.applytojob.com/apply/VzDrgxa88N/Electrical-Design-Engineer" },
  { title: "Presentation Designer", location: "Pasadena, CA", href: "https://mandsc.applytojob.com/apply/Mg8VqCdPBw/Presentation-Designer" },
  { title: "Salesforce - MuleSoft Sr. Integration Architect (Contract)", location: "Remote", href: "https://mandsc.applytojob.com/apply/KUUkcYCqLp/Salesforce-MuleSoft-Sr-Integration-Architect-Contract" },
  { title: "SAP ABAP Developer", location: "Remote", href: "https://mandsc.applytojob.com/apply/ZpeJhPDtxH/SAP-ABAP-Developer" },
  { title: "SENIOR ARCHITECT - ERP APPLICATIONS", location: "Morgantown, WV", href: "https://mandsc.applytojob.com/apply/d1fWsHRjHE/SENIOR-ARCHITECT-ERP-APPLICATIONS" },
  { title: "Senior SAP BRIM Convergent Invoicing (CI) Consultant", location: "Remote", href: "https://mandsc.applytojob.com/apply/7wdBIusYNV/Senior-SAP-BRIM-Convergent-Invoicing-CI-Consultant" },
  { title: "Siebel Application Architect Lead", location: "Remote", href: "https://mandsc.applytojob.com/apply/7Nv81HsptD/Siebel-Application-Architect-Lead" },
  { title: "Siebel Delivery Manager", location: "Remote", href: "https://mandsc.applytojob.com/apply/quTav0nfkM/Siebel-Delivery-Manager" },
  { title: "Siebel Development Lead", location: "Remote", href: "https://mandsc.applytojob.com/apply/ow4hZ3drN8/Siebel-Development-Lead" },
  { title: "Software Engineer I - Salesforce Integration (Tier 2 Security Clearance)", location: "Remote", href: "https://mandsc.applytojob.com/apply/oxEXxmWzn1/Software-Engineer-I-Salesforce-Integration-Tier-2-Security-Clearance" },
  { title: "Staff Assistant III", location: "Pasadena, CA", href: "https://mandsc.applytojob.com/apply/9FTndyHzwt/Staff-Assistant-III" },
  { title: "UI/UX Designer", location: "Remote", href: "https://mandsc.applytojob.com/apply/bgiMg6LENi/UIUX-Designer" },
  { title: "Videographer VI", location: "Pasadena, CA", href: "https://mandsc.applytojob.com/apply/GTF2lz4hDl/Videographer-VI" },
  { title: "Visual/Print Designer", location: "Pasadena, CA", href: "https://mandsc.applytojob.com/apply/TJdZbiomDj/VisualPrint-Designer" },
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
                We deliver the highest quality work — and we do it with the best people.
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
                If you&rsquo;re the kind of person who takes ownership, solves hard problems, and makes the people around you better — you&rsquo;ll fit right in.
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
                  Current openings on JazzHR.
                </p>
                <p
                  className="font-sans mb-6"
                  style={{ fontSize: "0.9rem", color: "#4A5568", lineHeight: 1.7 }}
                >
                  Review the roles below and apply through our JazzHR career portal.
                </p>
                <div className="mb-6 max-h-[30rem] overflow-y-auto rounded-xl border border-[rgba(0,31,101,0.08)] bg-white">
                  {OPEN_ROLES.map((role) => (
                    <a
                      key={role.href}
                      href={role.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start justify-between gap-4 border-b border-[rgba(0,31,101,0.08)] px-4 py-3 transition-colors last:border-b-0 hover:bg-[#F4F7FB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#001F65]"
                    >
                      <span>
                        <span className="block font-sans text-[0.95rem] font-semibold leading-snug text-[#001F65] transition-colors group-hover:text-[#0037A3]">
                          {role.title}
                        </span>
                        <span className="mt-1 block font-sans text-[0.84rem] leading-snug text-[#4B5563]">
                          {role.location}
                        </span>
                      </span>
                      <span className="shrink-0 pt-0.5 font-sans text-[0.78rem] font-bold uppercase tracking-[0.08em] text-[#001F65]">
                        Apply
                      </span>
                    </a>
                  ))}
                </div>
                <a
                  href="https://mandsc.applytojob.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-semibold inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-200"
                  style={{ backgroundColor: "#001F65", color: "white", fontSize: "0.875rem" }}
                >
                  View All Open Positions on JazzHR
                </a>
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
                    borderTop: `3px solid ${i === 0 || i === 4 ? "#FCC541" : "rgba(0,31,101,0.12)"}`,
                    height: "100%",
                  }}
                >
                  <p className="font-sans font-semibold mb-2" style={{ fontSize: "0.9rem", color: "#001F65" }}>
                    {b.title}
                  </p>
                  <p className="font-sans" style={{ fontSize: "0.85rem", color: "#4A5568", lineHeight: 1.65 }}>
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
                  — M&amp;S Intern
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

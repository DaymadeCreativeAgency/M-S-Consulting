import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, ArrowUpFromLine, Layers, Settings } from "lucide-react";
import { MsContactForm } from "@/components/sections/ms-contact-form";
import { HeroHighlight, ServicePracticeHero } from "@/components/sections/service-practice-hero";
import { NewsletterSignup } from "@/components/sections/newsletter-signup";

export const metadata: Metadata = {
  title: "Atlassian Consulting Services",
  description:
    "15+ years guiding clients through the Atlassian landscape. Expert Jira, Confluence, and Atlassian suite consulting for seamless team collaboration and agile project management.",
  alternates: { canonical: "/service-lines/atlassian" },
};

const SERVICES = [
  {
    Icon: ClipboardList,
    title: "Agile Training and Transformation",
    body: [
      { text: "When used strategically, Atlassian solutions can skyrocket your productivity.", bold: true },
      { text: " We're here to help you successfully deploy these solutions across your entire organization. We've helped countless clients make this transition seamlessly, and we're ready to walk your team through each step of the journey with wisdom, patience, and positivity.", bold: false },
    ],
  },
  {
    Icon: ArrowUpFromLine,
    title: "Installations and Upgrades",
    body: [
      { text: "We work diligently to keep your Atlassian solutions optimized with all the latest innovations. Our team will", bold: false },
      { text: " facilitate the installation of any new features introduced by Atlassian,", bold: true },
      { text: " advise you on which upgrades are worth investing in, and educate your workforce on how any changes to these tools may impact their daily operations.", bold: false },
    ],
  },
  {
    Icon: Layers,
    title: "Custom Integrations",
    body: [
      { text: "Atlassian tools are most powerful when connected to the rest of your tech stack. We build", bold: false },
      { text: " custom integrations between Jira, Confluence, and your existing enterprise systems —", bold: true },
      { text: " from Salesforce and ServiceNow to homegrown applications — so your teams work from a single source of truth.", bold: false },
    ],
  },
  {
    Icon: Settings,
    title: "Managed Services & Administration",
    body: [
      { text: "We act as an extension of your team, handling day-to-day Atlassian administration, licensing, and governance. Our specialists", bold: false },
      { text: " translate your collaboration objectives into a customized Atlassian implementation", bold: true },
      { text: " that maximizes the value of your investment in this software suite.", bold: false },
    ],
  },
];

const ATLASSIAN_PRODUCTS = [
  "Jira Software", "Jira Service Management", "Confluence", "Bitbucket",
  "Jira Work Management", "Compass", "Atlassian Access", "Guard",
];

export default function AtlassianPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <ServicePracticeHero
        eyebrow="ATLASSIAN CONSULTING SERVICES"
        imageSrc="/media/AtlassianServiceLine.png"
        imageFit="contain"
        imageBackground="#FFFFFF"
      >
        Streamline collaboration with <HeroHighlight>Atlassian tools</HeroHighlight> built for your team.
      </ServicePracticeHero>

      {/* ── Intro ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#EFF6FF" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative overflow-hidden rounded-2xl" style={{ height: "420px", backgroundColor: "#FFFFFF", boxShadow: "0 20px 60px rgba(0,31,101,0.12)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/media/AtlassianServiceLine.png" alt="Atlassian consulting services" style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", padding: "3rem" }} />
            </div>
            <div>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                Atlassian solutions are designed to make collaboration easy, efficient, and effective. But to fully experience the powerful teamwork transformation these products promise, you must implement them properly. Our consultants have{" "}
                <strong>15+ years of experience guiding clients through the Atlassian landscape</strong> and tailoring these tools to support unique workflows.
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "2rem" }}>
                Ready to lead your company into the future? Let our specialists leverage these software solutions to optimize your agile project management capabilities, accelerate your development cycles, and strengthen your competitive edge.
              </p>
              <div className="flex flex-wrap gap-2">
                {ATLASSIAN_PRODUCTS.map((p) => (
                  <span key={p} className="font-sans font-medium" style={{ fontSize: "0.75rem", color: "#001F65", backgroundColor: "rgba(0,31,101,0.08)", padding: "0.25rem 0.65rem", borderRadius: "4px" }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ───────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#001F65" }}>
        <div className="ms-container">
          <div className="flex flex-col items-center text-center" style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p className="font-serif text-white font-medium" style={{ fontSize: "clamp(1.35rem, 2.6vw, 2rem)", lineHeight: 1.55, marginBottom: "2.5rem" }}>
              Our team is fluent in all the complexities of Atlassian products. Allow our consultants to{" "}
              <strong>translate your collaboration objectives into a customized Atlassian implementation</strong> that maximizes the value of your investment in this software suite.
            </p>
            <Link href="/contact" className="font-sans font-semibold inline-flex items-center gap-2 px-8 py-3 rounded-full"
              style={{ border: "1.5px solid rgba(255,255,255,0.7)", color: "white", fontSize: "0.9rem", letterSpacing: "0.02em" }}>
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container">
          <div className="mb-14">
            <h2 className="font-serif text-ms-navy font-medium" style={{ fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)", lineHeight: 1.2, marginBottom: "0.5rem" }}>
              M&amp;S Consulting Atlassian Software Services
            </h2>
            <p className="font-sans" style={{ fontSize: "1rem", color: "#4A5568", fontStyle: "italic" }}>
              Our expert Atlassian consultants can help you with&hellip;
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {SERVICES.map(({ Icon, title, body }) => (
              <div key={title} className="flex flex-col gap-4">
                <div className="flex flex-col items-start gap-3 mb-1">
                  <div style={{ width: "52px", height: "52px", borderRadius: "50%", backgroundColor: "#001F65", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={22} color="white" strokeWidth={1.5} />
                  </div>
                  <div style={{ width: "52px", height: "3px", borderRadius: "2px", background: "linear-gradient(90deg, #5CA7F3, #001F65)" }} />
                </div>
                <h3 className="font-sans font-semibold" style={{ fontSize: "1.05rem", color: "#001F65" }}>{title}</h3>
                <div className="marketing-copy" style={{ color: "#4A5568" }}>
                  {body.map((seg, i) => seg.bold
                    ? <strong key={i} style={{ color: "#2D3748" }}>{seg.text}</strong>
                    : <span key={i}>{seg.text}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup tagIds={[7019072]} tone="cream" />
      <MsContactForm />
    </>
  );
}

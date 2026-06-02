import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, ArrowUpFromLine, ShieldCheck } from "lucide-react";
import { MsContactForm } from "@/components/sections/ms-contact-form";
import { HeroHighlight, ServicePracticeHero } from "@/components/sections/service-practice-hero";

export const metadata: Metadata = {
  title: "SAP Consulting Services",
  description:
    "Expert SAP strategy, implementation, and managed services. M&S Consulting helps organizations streamline operations and drive growth with tailored SAP solutions.",
  alternates: { canonical: "/service-lines/sap" },
};

const SERVICES = [
  {
    Icon: ClipboardList,
    title: "Strategy",
    body: [
      { text: "SAP solutions can help your organization enjoy enhanced efficiency, reduced costs, and boosted productivity. But to actually achieve all these benefits, it's crucial to", bold: false },
      { text: " start with a clear plan for a tailored SAP configuration", bold: true },
      { text: " that minimizes the cost of your investment while maximizing its performance. Our team will work with yours to lay out a detailed roadmap for a SAP implementation that puts your people first.", bold: false },
    ],
  },
  {
    Icon: ArrowUpFromLine,
    title: "Implementation",
    body: [
      { text: "Our consultants seamlessly integrate your chosen SAP solutions across your entire organization. Simultaneously, we train your teams on SAP best practices so that all of your separate departments can harness these tools to", bold: false },
      { text: " exchange 100% up-to-date data and stay on the same page.", bold: true },
      { text: " We've helped countless clients execute enterprise-wide programs — like major ERP overhauls and full HR system transformations.", bold: false },
    ],
  },
  {
    Icon: ShieldCheck,
    title: "Managed Services",
    body: [
      { text: "After your SAP systems are set up, our team can continue to act as an extension of yours. We'll", bold: false },
      { text: " continuously improve your implementation", bold: true },
      { text: " so that your ever-evolving organization continues to enjoy the highest level of SAP performance for the lowest cost. Our specialists use their up-to-date understanding of emerging SAP innovations to propose strategic optimizations.", bold: false },
    ],
  },
];

const SAP_SOLUTIONS = [
  "SAP S/4HANA", "SAP SuccessFactors", "SAP BTP", "SAP Ariba",
  "SAP Analytics Cloud", "SAP Commerce Cloud", "SAP Concur", "SAP IBP",
];

export default function SapPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <ServicePracticeHero
        eyebrow="SAP CONSULTING SERVICES"
        imageSrc="/media/SAPServiceLine.png"
        imageFit="contain"
        imageBackground="#FFFFFF"
      >
        Bring complex enterprise programs into focus with <HeroHighlight>SAP delivery expertise.</HeroHighlight>
      </ServicePracticeHero>

      {/* ── Intro ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#EFF6FF" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative overflow-hidden rounded-2xl" style={{ height: "420px", backgroundColor: "#FFFFFF", boxShadow: "0 20px 60px rgba(0,31,101,0.12)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/media/SAPServiceLine.png" alt="SAP consulting services" style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", padding: "3rem" }} />
            </div>
            <div>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                In order to run smoothly, modern businesses need to manage vast amounts of data. SAP is a smart solution that makes it possible to do so seamlessly. As the world&rsquo;s leading provider of ERP software,{" "}
                <strong>SAP has the potential to optimize every aspect of your business operations</strong> — if you configure it correctly.
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                Our consultants have spent years mastering SAP&rsquo;s ever-expanding ecosystem. Allow our seasoned experts to guide your entire organization through a seamless SAP implementation — empowering you to improve your customer experience, financial management, internal collaboration, and so much more.
              </p>
              <div className="flex flex-wrap gap-2">
                {SAP_SOLUTIONS.map((s) => (
                  <span key={s} className="font-sans font-medium" style={{ fontSize: "0.75rem", color: "#001F65", backgroundColor: "rgba(0,31,101,0.08)", padding: "0.25rem 0.65rem", borderRadius: "4px" }}>
                    {s}
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
              SAP is anything but a one-size-fits-all solution:{" "}
              <strong>its true magic lies in its incredible adaptability</strong>. Our mission — to fine-tune SAP&rsquo;s entire software suite to fit your organization&rsquo;s unique structure and goals.
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
              M&amp;S Consulting SAP Software Services
            </h2>
            <p className="font-sans" style={{ fontSize: "1rem", color: "#4A5568", fontStyle: "italic" }}>
              Your organization is a complex set of moving parts. Our M&amp;S team knows just the right way to fine-tune SAP&rsquo;s entire software suite to suit your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.map(({ Icon, title, body }) => (
              <div key={title} className="flex flex-col gap-4">
                <div className="flex flex-col items-start gap-3 mb-1">
                  <div style={{ width: "52px", height: "52px", borderRadius: "50%", backgroundColor: "#001F65", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={22} color="white" strokeWidth={1.5} />
                  </div>
                  <div style={{ width: "52px", height: "3px", borderRadius: "2px", background: "linear-gradient(90deg, #5CA7F3, #001F65)" }} />
                </div>
                <h3 className="font-sans font-semibold" style={{ fontSize: "1.05rem", color: "#001F65" }}>{title}</h3>
                <div className="font-sans" style={{ fontSize: "0.9rem", lineHeight: 1.7, color: "#4A5568" }}>
                  {body.map((seg, i) => seg.bold
                    ? <strong key={i} style={{ color: "#2D3748" }}>{seg.text}</strong>
                    : <span key={i}>{seg.text}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MsContactForm />
    </>
  );
}

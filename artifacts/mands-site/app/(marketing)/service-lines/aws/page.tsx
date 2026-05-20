import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, ArrowUpFromLine, Server, CheckCircle } from "lucide-react";
import { MsContactForm } from "@/components/sections/ms-contact-form";

export const metadata: Metadata = {
  title: "AWS Consulting Services | M&S Consulting",
  description:
    "Expert AWS consulting for secure, scalable cloud success. M&S is an AWS Well-Architected Program Partner specializing in cloud strategy, migration, and implementation.",
};

const SERVICES = [
  {
    Icon: ClipboardList,
    title: "AWS Strategy",
    body: [
      { text: "AWS offers pay-as-you-go pricing, so a smart strategy is crucial for getting the most out of your budget.", bold: false },
      { text: " We work together to clarify your vision and goals for incorporating cloud technology into your business.", bold: true },
      { text: " Then, our experts create a personalized roadmap for you, complete with actionable steps and a realistic timeline. This is how we help you achieve the impact you're after while staying within budget.", bold: false },
    ],
  },
  {
    Icon: Server,
    title: "Migration",
    body: [
      { text: "When you're ready to make the big move to AWS,", bold: false },
      { text: " we'll be there to make your journey feel less like a rocky road and more like smooth sailing.", bold: true },
      { text: " Cloud computing is the way of the future. If your business wants to scale up, evolve, and retain a competitive edge, you'll need a flexible solution like AWS on your side. Transitioning to AWS doesn't have to be disruptive — we make it seamless.", bold: false },
    ],
  },
  {
    Icon: ArrowUpFromLine,
    title: "Implementation",
    body: [
      { text: "We hold the highest standard possible of implementing solutions that are", bold: false },
      { text: " cost-effective, secure, and scalable.", bold: true },
      { text: " Then, our consultants train your team on how to utilize AWS tools for building robust, resilient infrastructure and applications. We also integrate DevOps best practices from the start to accelerate your delivery cycles.", bold: false },
    ],
  },
];

const WELL_ARCHITECTED = [
  "Operational Excellence",
  "Security",
  "Reliability",
  "Performance Efficiency",
  "Cost Optimization",
];

export default function AwsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 overflow-hidden relative" style={{ backgroundColor: "#0A0E1A" }}>
        <div className="ms-container relative" style={{ zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="eyebrow mb-5" style={{ color: "#5CA7F3" }}>AWS CONSULTING SERVICES</p>
              <h1
                className="font-serif text-white font-medium"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.75rem)", lineHeight: 1.12, letterSpacing: "-0.01em", marginBottom: "2rem" }}
              >
                Expert AWS solutions for secure,{" "}
                <span style={{ fontStyle: "italic", fontWeight: 700, textDecoration: "underline", textDecorationStyle: "wavy", textDecorationColor: "#5CA7F3", textDecorationThickness: "2px", textUnderlineOffset: "4px" }}>
                  scalable cloud success.
                </span>
              </h1>
              <Link href="/contact" className="font-sans font-semibold inline-flex items-center gap-2 px-7 py-3 rounded-full transition-all duration-200"
                style={{ backgroundColor: "#5CA7F3", color: "#0A0E1A", fontSize: "0.9rem", letterSpacing: "0.01em" }}>
                Schedule a Call
              </Link>
            </div>
            <div className="relative hidden lg:block" style={{ height: "480px" }}>
              <div style={{ position: "absolute", top: 0, left: "8%", right: 0, height: "62%", borderRadius: "20px", overflow: "hidden", transform: "rotate(-1deg)", boxShadow: "0 24px 64px rgba(0,0,0,0.6)", zIndex: 1 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/media/team/consultant-meeting.jpg" alt="" aria-hidden="true" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#EFF6FF" }}>
        <div className="ms-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative overflow-hidden rounded-2xl" style={{ height: "420px", boxShadow: "0 20px 60px rgba(0,31,101,0.12)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/media/team/about-office.png" alt="M&S Consulting team" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
            </div>
            <div>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                Amazon Web Services (AWS) is the most broadly adopted cloud in the world. Offering over 200 services — each with its own extensive set of features — this solution is powerful if you understand how to leverage all that it offers.
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                We help you harness the full potential of this cloud computing platform to{" "}
                <strong>reduce operational costs, modernize your systems, and accelerate your business toward a more agile future.</strong>
              </p>
              {/* Well-Architected badge */}
              <div style={{ padding: "1.25rem 1.5rem", borderRadius: "12px", backgroundColor: "white", border: "1px solid rgba(0,31,101,0.1)", boxShadow: "0 2px 12px rgba(0,31,101,0.06)" }}>
                <p className="font-sans font-semibold mb-3" style={{ fontSize: "0.85rem", color: "#001F65" }}>
                  AWS Well-Architected Program Partner
                </p>
                <div className="flex flex-col gap-1.5">
                  {WELL_ARCHITECTED.map((w) => (
                    <div key={w} className="flex items-center gap-2">
                      <CheckCircle size={14} style={{ color: "#5CA7F3", flexShrink: 0 }} />
                      <span className="font-sans" style={{ fontSize: "0.85rem", color: "#4A5568" }}>{w}</span>
                    </div>
                  ))}
                </div>
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
              M&amp;S is proud to be an{" "}
              <strong>AWS Well-Architected Program Partner</strong>. This qualification means our staff has a demonstrated history of designing cloud workloads that align with AWS best practices — and enables us to extend exclusive AWS benefits to our clients.
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
              M&amp;S Consulting AWS Services
            </h2>
            <p className="font-sans" style={{ fontSize: "1rem", color: "#4A5568", fontStyle: "italic" }}>
              Our expert AWS consultants can help you with&hellip;
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

import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, BarChart2, Sparkles, Workflow } from "lucide-react";
import { MsContactForm } from "@/components/sections/ms-contact-form";

export const metadata: Metadata = {
  title: "Salesforce Consulting Services | M&S Consulting",
  description:
    "25 years of enterprise experience in Salesforce — 300+ projects across 150+ clients. M&S helps you maximize CRM potential and unlock Salesforce's AI capabilities.",
};

const SERVICES = [
  {
    Icon: ClipboardList,
    title: "Smart Integrations & Automations",
    body: [
      { text: "Most organizations barely scratch the surface of Salesforce's capabilities. Our developers build at the code level, extending the platform with custom AI solutions that fit your architecture, your data, and your business.", bold: false },
      { text: " We help you implement Salesforce 10× faster", bold: true },
      { text: " through smart integrations and real automations that eliminate friction and accelerate time-to-value.", bold: false },
    ],
  },
  {
    Icon: BarChart2,
    title: "Predictive AI That Delivers",
    body: [
      { text: "Churn prediction. Sales forecasting. Lead scoring. Resource optimization. Salesforce includes predictive tools many teams never fully activate.", bold: false },
      { text: " We help you prepare the data, design the models, and deploy predictions your teams can actually trust.", bold: true },
      { text: " No AI theater — just forecasts grounded in your real pipeline.", bold: false },
    ],
  },
  {
    Icon: Sparkles,
    title: "Generative AI That's Grounded",
    body: [
      { text: "Einstein GPT, Copilot, and Salesforce's generative ecosystem can automate emails, support agents, and customer interactions.", bold: false },
      { text: " We make sure it's grounded in your real data and workflows", bold: true },
      { text: " so it enhances performance instead of creating noise.", bold: false },
    ],
  },
  {
    Icon: Workflow,
    title: "Agentic AI & Intelligent Workflows",
    body: [
      { text: "AI should not stop at dashboards.", bold: true },
      { text: " We design human-machine workflows where AI triggers actions across your CRM, ERP, marketing platforms, and data systems — so your teams spend time on decisions, not data entry.", bold: false },
    ],
  },
];

export default function SalesforcePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 overflow-hidden relative" style={{ backgroundColor: "#0A0E1A" }}>
        <div className="ms-container relative" style={{ zIndex: 1 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="eyebrow mb-5" style={{ color: "#5CA7F3" }}>
                SALESFORCE CONSULTING SERVICES
              </p>
              <h1
                className="font-serif text-white font-medium"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.75rem)", lineHeight: 1.12, letterSpacing: "-0.01em", marginBottom: "2rem" }}
              >
                Maximize CRM potential and{" "}
                <span style={{ fontStyle: "italic", fontWeight: 700, textDecoration: "underline", textDecorationStyle: "wavy", textDecorationColor: "#5CA7F3", textDecorationThickness: "2px", textUnderlineOffset: "4px" }}>
                  drive growth
                </span>{" "}
                with expert Salesforce solutions.
              </h1>
              <Link
                href="/contact"
                className="font-sans font-semibold inline-flex items-center gap-2 px-7 py-3 rounded-full transition-all duration-200"
                style={{ backgroundColor: "#5CA7F3", color: "#0A0E1A", fontSize: "0.9rem", letterSpacing: "0.01em" }}
              >
                Schedule a Call
              </Link>
            </div>
            <div className="relative hidden lg:block" style={{ height: "480px" }}>
              <div
                style={{
                  position: "absolute", top: 0, left: "8%", right: 0, height: "62%",
                  borderRadius: "20px", overflow: "hidden", transform: "rotate(-1deg)",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.6)", zIndex: 1,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/media/team/consultant-meeting.jpg" alt="" aria-hidden="true"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
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
                Salesforce has powerful AI capabilities. Most organizations barely scratch the surface. With{" "}
                <strong>25 years of enterprise experience</strong> and over{" "}
                <strong>300 Salesforce projects across 150+ clients</strong>, M&amp;S has been there, done that — and we&rsquo;ve been doing it smarter with AI for nearly a decade.
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748", marginBottom: "1.5rem" }}>
                Our developers build at the code level, extending the platform with custom solutions that fit your architecture, your data, and your business — not generic templates that force you to adapt to the tool.
              </p>
              <p className="font-sans" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75, color: "#2D3748" }}>
                The result:{" "}
                <strong>a Salesforce implementation that actually works for how your teams work</strong>, with AI that drives action instead of adding noise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission statement ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#001F65" }}>
        <div className="ms-container">
          <div className="flex flex-col items-center text-center" style={{ maxWidth: "820px", margin: "0 auto" }}>
            <p className="font-serif text-white font-medium" style={{ fontSize: "clamp(1.35rem, 2.6vw, 2rem)", lineHeight: 1.55, marginBottom: "2.5rem" }}>
              Whether you&rsquo;re just getting started with Salesforce or looking to{" "}
              <strong>unlock capabilities you&rsquo;ve never activated</strong>, our mission is to make the absolute most of your Salesforce investment — with AI built in from day one.
            </p>
            <Link href="/contact" className="font-sans font-semibold inline-flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-200"
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
              M&amp;S Consulting Salesforce Services
            </h2>
            <p className="font-sans" style={{ fontSize: "1rem", color: "#4A5568", fontStyle: "italic" }}>
              Our expert Salesforce consultants can help you with&hellip;
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {SERVICES.map(({ Icon, title, body }) => (
              <div key={title} className="flex flex-col gap-4">
                <div className="flex flex-col items-start gap-3 mb-1">
                  <div style={{ width: "52px", height: "52px", borderRadius: "50%", backgroundColor: "#001F65", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
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

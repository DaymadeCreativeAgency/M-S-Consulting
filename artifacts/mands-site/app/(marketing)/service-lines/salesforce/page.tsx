import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, Database, GitBranch, Network, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { MsContactForm } from "@/components/sections/ms-contact-form";
import { FadeIn } from "@/components/ui/fade-in";
import { NewsletterSignup } from "@/components/sections/newsletter-signup";
import { MissionCta } from "@/components/sections/mission-cta";

export const metadata: Metadata = {
  title: "Salesforce & Agentforce 360 Consulting",
  description:
    "M&S Consulting delivers Salesforce, Agentforce 360, Data 360, MuleSoft, and Informatica as one Trusted Context architecture, 300+ projects, Summit Partner, enterprise AI activation.",
  alternates: { canonical: "/service-lines/salesforce" },
};

const PROOF_STATS = [
  { value: "300+", label: "Salesforce projects delivered" },
  { value: "24+", label: "Years guiding Salesforce clients" },
  { value: "96%", label: "AppExchange CSAT" },
  { value: "500K", label: "Hands-on hours per year" },
];

const ARCHITECTURE_LAYERS = [
  {
    product: "MuleSoft",
    logo: "MuleSoft",
    role: "Orchestration & interoperability",
    body: "Enterprise orchestration across CRM, ERP, cloud, and legacy. Reusable API networks and real-time event flows, an integration fabric that scales with AI demand.",
    accent: "#5CA7F3",
  },
  {
    product: "Informatica",
    logo: "Informatica",
    role: "Governed intelligence & trust",
    body: "MDM, AI-ready data quality, lineage, and governance that give Agentforce a single source of truth. Fragmented enterprise data becomes governed intelligence.",
    accent: "#FCC541",
  },
  {
    product: "Data 360",
    logo: "Data 360",
    role: "Unified customer context",
    body: "The activation layer that harmonizes profiles and signals across systems so every agent and workflow operates on trusted, connected data.",
    accent: "#5CA7F3",
  },
  {
    product: "Agentforce 360",
    logo: "Agentforce",
    role: "Enterprise AI activation",
    body: "Operational intelligence on the platform you already own, Agentforce Sales, Service, Marketing, and custom agents with human-in-the-loop controls and the Einstein Trust Layer.",
    accent: "#FFFFFF",
  },
];

const CAPABILITIES = [
  {
    Icon: Sparkles,
    title: "Agentforce 360 & enterprise AI",
    body: "Design, deploy, and govern autonomous agents across sales, service, and marketing, grounded in Data 360 with escalation paths and observability built in from day one.",
  },
  {
    Icon: Network,
    title: "Salesforce Integration (MuleSoft)",
    body: "API-led connectivity that links Salesforce to SAP, Oracle, ServiceNow, and custom systems so Agentforce can act across your full estate, not just CRM silos.",
  },
  {
    Icon: Database,
    title: "Data 360 & analytics",
    body: "Unified profiles, activation pipelines, and analytics with Tableau, moving from legacy Data Cloud thinking to a single intelligence foundation for AI.",
  },
  {
    Icon: Workflow,
    title: "CRM implementation & automation",
    body: "Sales Cloud, Service Cloud, Marketing Cloud, Flow, Apex, Lightning Web Components, and OmniStudio, built for how your teams actually sell and serve.",
  },
  {
    Icon: ShieldCheck,
    title: "Governance & regulated delivery",
    body: "Public-sector and enterprise-grade execution: GSA MAS, HUBZone, ISO 9001, and hybrid onshore/nearshore/offshore teams that work cleanly in multi-vendor programs.",
  },
  {
    Icon: BarChart3,
    title: "Advisory through managed services",
    body: "Blueprinting, program management, implementation, and 24×7 operations, jump into one capability or own the full Salesforce footprint end to end.",
  },
];

const WHY_MS = [
  { label: "Salesforce Summit Partner", detail: "Deep platform delivery, not generic SI staffing." },
  { label: "Team-in-a-box crews", detail: "Established teams dropped in ready to execute." },
  { label: "Multi-vendor friendly", detail: "We collaborate alongside your existing partners." },
  { label: "Trusted Context delivery", detail: "MuleSoft + Informatica + Data 360 + Agentforce as one architecture." },
];

const TRANSFORMATION_LANES = [
  "Sales and service teams act from one governed customer view.",
  "Agents retrieve context, trigger actions, and hand off cleanly.",
  "Integration and data quality stop being separate workstreams.",
];

const DATA_360_CAPABILITIES = [
  "Customer profile unification",
  "Identity resolution",
  "Data harmonization",
  "Zero-copy data access",
  "Metadata and semantics",
  "Activation audiences",
  "Governance policies",
  "Agent grounding",
  "Analytics-ready signals",
];

export default function SalesforcePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden" style={{ backgroundColor: "#050914" }}>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 12% 10%, rgba(92,167,243,0.30), transparent 30%), radial-gradient(circle at 88% 20%, rgba(252,197,65,0.16), transparent 26%), linear-gradient(120deg, #071024 0%, #050914 54%, #02040A 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-56"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(92,167,243,0.08)), linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
          }}
          aria-hidden="true"
        />
        <div className="ms-container relative py-16 lg:py-20">
          <div className="grid min-h-[620px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-5" style={{ color: "#9DCCFF" }}>
                SALESFORCE AGENTFORCE 360
              </p>
              <h1
                className="font-serif font-medium text-white"
                style={{
                  fontSize: "clamp(2.45rem, 4.6vw, 4.45rem)",
                  lineHeight: 1.03,
                  letterSpacing: "-0.035em",
                  maxWidth: "680px",
                }}
              >
                Make Salesforce think, move, and prove value.
              </h1>
              <p
                className="mt-7 max-w-2xl font-sans"
                style={{
                  color: "rgba(255,255,255,0.78)",
                  fontSize: "clamp(1.08rem,1.45vw,1.24rem)",
                  lineHeight: 1.72,
                }}
              >
                M&amp;S turns scattered CRM, ERP, and legacy data into Trusted Context: MuleSoft moves it,
                Informatica governs it, Data 360 unifies it, and Agentforce acts on it.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-sans font-bold transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#001F65",
                    boxShadow: "0 22px 64px rgba(92,167,243,0.24)",
                  }}
                >
                  Build the roadmap <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 rounded-full border border-white/18 px-8 py-3.5 font-sans font-semibold text-white/80 transition-all duration-200 hover:border-white/36 hover:text-white"
                >
                  See case studies
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[680px]">
              <div
                className="absolute -inset-6 rounded-[2.5rem] blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle at 30% 10%, rgba(92,167,243,0.25), transparent 38%), radial-gradient(circle at 80% 80%, rgba(252,197,65,0.14), transparent 34%)",
                }}
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-white/[0.08] p-3 shadow-[0_34px_100px_rgba(0,0,0,0.42)] backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-[1.55rem]" style={{ aspectRatio: "5 / 4" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/media/salesforce-cloud-hero.jpg"
                    alt="Salesforce cloud logo signage"
                    className="h-full w-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(5,9,20,0.08) 0%, rgba(5,9,20,0.62) 100%)",
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/12 bg-[#071024]/78 p-5 backdrop-blur-md">
                    <p className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#9DCCFF]">
                      Trusted Context
                    </p>
                    <p className="mt-2 font-serif text-2xl text-white">
                      Salesforce, connected to the systems that actually run the business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#F6F8FC" }}>
        <div className="ms-container py-16">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
            {PROOF_STATS.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.05}>
                <div
                  className="group relative flex h-full min-h-[190px] flex-col items-center justify-center overflow-hidden rounded-[1.75rem] border border-[#001F65]/10 bg-white p-6 text-center shadow-[0_18px_50px_rgba(0,31,101,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(0,31,101,0.12)]"
                  style={{
                    background:
                      i === 2
                        ? "linear-gradient(135deg, #FFFFFF 0%, #FFF7DC 100%)"
                        : "linear-gradient(135deg, #FFFFFF 0%, #EFF6FF 100%)",
                  }}
                >
                  <div
                    className="absolute -right-10 -top-10 h-28 w-28 rounded-full opacity-40 blur-3xl transition-opacity duration-300 group-hover:opacity-70"
                    style={{ backgroundColor: i === 2 ? "#FCC541" : "#5CA7F3" }}
                    aria-hidden="true"
                  />
                  <div
                    className="relative font-sans font-bold tabular-nums"
                    style={{
                      fontSize: "clamp(2.45rem, 4vw, 3.35rem)",
                      color: "#001F65",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {s.value}
                  </div>
                  <p
                    className="mt-4 font-sans text-xs font-bold uppercase tracking-[0.12em]"
                    style={{ color: "#001F65" }}
                  >
                    {s.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Premium story */}
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ backgroundColor: "#FFFFFF" }}>
        <div
          className="pointer-events-none absolute right-[-12rem] top-16 h-96 w-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(92,167,243,0.16)" }}
          aria-hidden="true"
        />
        <div className="ms-container">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <FadeIn>
              <p className="eyebrow mb-4" style={{ color: "#001F65" }}>
                THE OPPORTUNITY
              </p>
              <h2
                className="font-serif font-medium"
                style={{ fontSize: "clamp(2rem, 4vw, 3.55rem)", color: "#001F65", lineHeight: 1.05 }}
              >
                CRM is the interface. Trusted Context is the operating model.
              </h2>
              <p className="marketing-copy mt-6 max-w-xl" style={{ color: "#4A5568" }}>
                The next Salesforce advantage is not another isolated cloud. It is a connected operating layer where
                customer data, enterprise systems, governance, and AI agents move together.
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="relative overflow-hidden rounded-[2rem] bg-[#071024] p-5 shadow-[0_28px_90px_rgba(0,31,101,0.18)]">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
                  style={{ backgroundColor: "rgba(92,167,243,0.34)" }}
                  aria-hidden="true"
                />
                <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3">
                  {["Scattered data", "Trusted context", "Agent action"].map((stage, i) => (
                    <div
                      key={stage}
                      className="rounded-[1.35rem] border border-white/10 bg-white/[0.07] p-5 backdrop-blur"
                    >
                      <p className="font-serif text-3xl text-white">{stage}</p>
                      <p className="mt-4 font-sans text-sm leading-6 text-white/60">
                        {i === 0
                          ? "CRM, ERP, product, service, and legacy signals arrive fragmented."
                          : i === 1
                            ? "MuleSoft, Informatica, and Data 360 turn those signals into governed context."
                            : "Agentforce uses that context to recommend, execute, escalate, and prove value."}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="relative mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {TRANSFORMATION_LANES.map((lane) => (
                    <div key={lane} className="rounded-2xl border border-[#5CA7F3]/20 bg-[#5CA7F3]/10 p-5">
                      <p className="marketing-copy font-semibold" style={{ color: "rgba(255,255,255,0.86)" }}>
                        {lane}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ backgroundColor: "#001F65" }}>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
          aria-hidden="true"
        />
        <div className="ms-container relative">
          <FadeIn className="mb-16 max-w-3xl">
            <p className="eyebrow mb-4" style={{ color: "#9DCCFF" }}>
              TRUSTED CONTEXT ARCHITECTURE
            </p>
            <h2
              className="font-serif font-medium text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)", lineHeight: 1.08 }}
            >
              A production-ready Salesforce AI stack needs four layers working together.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
            {ARCHITECTURE_LAYERS.map((layer, i) => (
              <FadeIn key={layer.product} delay={i * 0.05}>
                <div className="group flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-[#071024]/92 p-7 shadow-[0_22px_70px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 lg:p-8">
                  <div className="mb-8 flex min-h-[5rem] items-center">
                    <div
                      className="inline-flex rounded-2xl border border-white/10 bg-white px-5 py-3 shadow-[0_14px_36px_rgba(0,0,0,0.18)]"
                      style={{ color: "#001F65" }}
                    >
                      <span className="font-sans text-xl font-black tracking-tight">{layer.logo}</span>
                    </div>
                  </div>
                  <p className="font-serif text-3xl text-white">{layer.product}</p>
                  <p className="mt-3 font-sans text-xs font-bold uppercase tracking-[0.14em]" style={{ color: layer.accent }}>
                    {layer.role}
                  </p>
                  <p className="marketing-copy mt-5" style={{ color: "rgba(255,255,255,0.70)" }}>
                    {layer.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Data 360 coverage */}
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ backgroundColor: "#EFEADB" }}>
        <div className="ms-container">
          <FadeIn className="mb-14 max-w-3xl">
            <p className="eyebrow mb-3" style={{ color: "#001F65" }}>
              DATA 360 COVERAGE
            </p>
            <h2
              className="font-serif font-medium"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#001F65", lineHeight: 1.1 }}
            >
              The data foundation that makes Agentforce trustworthy.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DATA_360_CAPABILITIES.map((item, i) => (
              <FadeIn key={item} delay={i * 0.035}>
                <div className="flex min-h-[6rem] items-center justify-center rounded-[1.35rem] border border-[#001F65]/10 bg-white px-5 py-6 text-center shadow-[0_12px_34px_rgba(0,31,101,0.06)]">
                  <p className="font-sans text-[1rem] font-bold" style={{ color: "#001F65" }}>
                    {item}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="ms-container">
          <FadeIn className="mb-14 max-w-3xl">
            <p className="eyebrow mb-3" style={{ color: "#001F65" }}>
              CAPABILITIES
            </p>
            <h2
              className="font-serif text-ms-navy font-medium"
              style={{ fontSize: "clamp(2rem, 3.6vw, 3.2rem)", lineHeight: 1.1 }}
            >
              Enterprise Salesforce capability, designed for the Agentforce era.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-6">
            {CAPABILITIES.map(({ Icon, title, body }, i) => (
              <FadeIn key={title} delay={i * 0.05}>
                <div
                  className={[
                    "group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-[1.75rem] p-7 shadow-[0_18px_60px_rgba(0,31,101,0.08)] transition-all duration-300 hover:-translate-y-1",
                    i < 2 ? "md:col-span-3" : "md:col-span-2",
                  ].join(" ")}
                  style={{
                    background: i < 2 ? "linear-gradient(135deg,#071024,#001F65)" : "#F7FAFF",
                    border: i < 2 ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(0,31,101,0.09)",
                  }}
                >
                  <div>
                    <div
                      className="mb-8 flex h-12 w-12 items-center justify-center rounded-full"
                      style={{ backgroundColor: i < 2 ? "rgba(255,255,255,0.12)" : "#001F65" }}
                    >
                      <Icon size={22} color="white" strokeWidth={1.6} />
                    </div>
                    <h3 className="font-sans text-xl font-bold" style={{ color: i < 2 ? "white" : "#001F65" }}>
                      {title}
                    </h3>
                  </div>
                  <p className="marketing-copy mt-5" style={{ color: i < 2 ? "rgba(255,255,255,0.72)" : "#4A5568" }}>
                    {body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why M&S */}
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ backgroundColor: "#050914" }}>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 72% 18%, rgba(92,167,243,0.22), transparent 34%), radial-gradient(circle at 18% 82%, rgba(252,197,65,0.12), transparent 32%)",
          }}
          aria-hidden="true"
        />
        <div className="ms-container relative">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <FadeIn>
              <p className="eyebrow mb-4" style={{ color: "#9DCCFF" }}>
                WHY M&amp;S
              </p>
              <h2
                className="font-serif font-medium text-white"
                style={{ fontSize: "clamp(2.2rem, 4.4vw, 4rem)", lineHeight: 1.02 }}
              >
                Senior teams. Real architecture. No AI theater.
              </h2>
              <p className="marketing-copy mt-6" style={{ color: "rgba(255,255,255,0.75)" }}>
                MuleSoft and Informatica are not platforms you learn on someone else&rsquo;s timeline. We bring the
                architecture, the data work, and the teams who have already shipped them together.
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {WHY_MS.map((item) => (
                  <div key={item.label} className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
                    <GitBranch size={20} style={{ color: "#5CA7F3" }} aria-hidden="true" />
                    <p className="mt-5 font-sans text-lg font-bold text-white">{item.label}</p>
                    <p className="marketing-note mt-2" style={{ color: "rgba(255,255,255,0.62)" }}>
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Newsletter ──────────────────────────────────────────────── */}
      <NewsletterSignup tagIds={[7019133]} tone="cream" />

      {/* CTA */}
      <MissionCta>
        One conversation. A clear picture of where MuleSoft, Informatica, Data
        360, and Agentforce fit in your <strong>Salesforce footprint</strong>,
        and a team ready to execute.
      </MissionCta>
      <MsContactForm />
    </>
  );
}

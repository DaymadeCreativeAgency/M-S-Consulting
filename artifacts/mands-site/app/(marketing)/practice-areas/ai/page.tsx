import type { Metadata } from "next";
import { HeroWithVideo } from "@/components/sections/hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { TestimonialQuote } from "@/components/sections/testimonial-quote";
import { CTABanner } from "@/components/sections/cta-banner";
import { NumberedSectionMark } from "@/components/technical/numbered-section-mark";

export const metadata: Metadata = {
  title: "AI & Data Consulting",
  description:
    "M&S Consulting integrates AI into business operations with an emphasis on governance, data quality, and adoption. Strategy, Agentic AI, automation, and enterprise AI for commercial and public sector clients.",
};

const AGENTIC_CAPABILITIES = [
  {
    title: "Autonomous decision-making",
    description:
      "AI agents assess complex data inputs, generate insights, and take action — streamlining high-volume decisions and reducing manual workload across teams.",
  },
  {
    title: "Enterprise system integration",
    description:
      "We connect Agentic AI with Salesforce, SAP, Oracle, and Microsoft 365 to create seamless, AI-driven workflows inside the systems your organization already depends on.",
  },
  {
    title: "Adaptive process optimization",
    description:
      "From predictive analytics to intelligent automation, AI agents optimize workflows by adjusting dynamically to changing business conditions rather than following rigid rule sets.",
  },
  {
    title: "Governance and oversight",
    description:
      "Advanced compliance and oversight frameworks ensure that autonomous AI operations stay aligned with your ethical standards, regulatory requirements, and business objectives.",
  },
];

const EXPERT_SERVICES = [
  {
    title: "AI roadmap and strategy",
    description:
      "Build a practical AI implementation roadmap — grounded in your actual capabilities, timelines, and risk tolerance — so you can start racking up quick wins.",
  },
  {
    title: "Secure AI integration",
    description:
      "Protect data with secure AI solutions informed by policy, reinforced by end-user training, and backed by human oversight at every stage.",
  },
  {
    title: "Data fabric and infrastructure",
    description:
      "Create a robust data fabric that provides the capabilities needed for timely, well-informed decision-making across your organization.",
  },
  {
    title: "Process automation",
    description:
      "Streamline everyday operations by automating repetitive processes and designing optimized human-machine workflows that actually get used.",
  },
  {
    title: "Adoption and enablement",
    description:
      "Drive successful adoption of AI capabilities through reliable results, simple-to-use interfaces, and in-context, on-demand user training.",
  },
  {
    title: "AI-enhanced enterprise platforms",
    description:
      "Integrate AI-based solutions into Salesforce, SAP, Oracle, and Microsoft 365 to improve efficiency, reduce errors, and deliver a better user experience.",
  },
  {
    title: "Cloud infrastructure for AI",
    description:
      "Enhance operational agility through exceptional management of your digital infrastructure. We support AWS, Azure, Google Cloud, IBM, Oracle, and Salesforce platforms.",
  },
  {
    title: "Custom AI development",
    description:
      "Design and build AI solutions unique to your industry and organization — from proprietary ML models to bespoke agentic applications.",
  },
];

const INDUSTRIES = [
  {
    title: "Retail and consumer",
    description:
      "Personalized customer experiences, demand forecasting, and inventory optimization driven by predictive analytics.",
  },
  {
    title: "Manufacturing and operations",
    description:
      "Optimized production lines, predictive maintenance, enhanced safety protocols, and quality assurance at scale.",
  },
  {
    title: "Financial services",
    description:
      "AI-driven fraud detection, automated compliance workflows, credit risk modeling, and intelligent customer service.",
  },
  {
    title: "Government and public sector",
    description:
      "Data-driven public service delivery, streamlined FOIA and administrative processes, and citizen-facing AI applications.",
  },
  {
    title: "Healthcare and life sciences",
    description:
      "Improved patient outcomes, accelerated clinical workflows, drug discovery support, and healthcare operations efficiency.",
  },
  {
    title: "Telecom and media",
    description:
      "Network performance optimization, AI-powered content recommendations, churn prediction, and customer experience enhancement.",
  },
];

export default function AIPage() {
  return (
    <>
      <HeroWithVideo
        tone="dark"
        eyebrow="PRACTICE AREA · AI &amp; DATA"
        headline="AI strategy and implementation from practitioners who have done it."
        subhead="M&S Consulting integrates AI into business operations with an emphasis on governance, data quality, and adoption. We build systems that run — and help your teams run them."
        primaryCta={{ label: "Schedule a Call", href: "/contact" }}
        secondaryCta={{ label: "See AI Case Studies", href: "/case-studies" }}
      />

      {/* Agentic AI */}
      <FeatureGrid
        sectionNumber="01"
        eyebrow="AGENTIC AI"
        heading="AI that plans, acts, and adapts."
        subhead="AI is evolving beyond simple automation. Agentic AI introduces a new paradigm where systems autonomously plan, execute, and adjust tasks to achieve business goals — dynamically assessing objectives, resources, and constraints, then iterating in real time. M&S Consulting helps organizations design and deploy these capabilities responsibly."
        items={AGENTIC_CAPABILITIES}
        columns={2}
        tone="paper"
      />

      {/* Why Choose M&S */}
      <section className="ms-section-editorial">
        <div className="ms-container">
          <NumberedSectionMark number="02" label="OUR APPROACH" className="mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-display text-ms-navy mb-5">
                A holistic approach to AI implementation.
              </h2>
              <p className="font-sans text-lg text-charcoal-700 leading-relaxed mb-5">
                At M&S, we take a holistic approach to AI implementation —
                ensuring that AI agents integrate smoothly with your enterprise
                ecosystem while operating securely and efficiently. Our team
                brings deep experience in AI strategy, governance, and
                infrastructure.
              </p>
              <p className="font-sans text-lg text-charcoal-700 leading-relaxed">
                We bring traditional know-how alongside modern technology
                expertise — which makes us uniquely qualified to guide
                organizations from where they are today to where they need to be,
                across multiple business areas and at whatever pace is right for
                your risk tolerance.
              </p>
            </div>
            <div className="rounded-lg p-8 bg-ms-paper border border-[rgba(0,31,101,0.08)]">
              <p className="eyebrow text-ms-navy mb-5">What we prioritize</p>
              <ul className="space-y-4">
                {[
                  "Ethical AI practices and transparent decision-making",
                  "Robust security measures at every layer",
                  "Human oversight built into every autonomous process",
                  "Measurable outcomes over impressive demos",
                  "Adoption by the people who will actually use the system",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-ms-navy font-semibold mt-0.5 shrink-0">–</span>
                    <span className="font-sans text-sm text-charcoal-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Services */}
      <FeatureGrid
        sectionNumber="03"
        eyebrow="HOW WE HELP"
        heading="Our expert AI consultants can help you with..."
        items={EXPERT_SERVICES}
        columns={4}
        tone="paper"
      />

      {/* Testimonial */}
      <TestimonialQuote
        sectionNumber="04"
        eyebrow="CLIENT PERSPECTIVE"
        quote="Using AI, M&S developed an innovative solution that is much better, much faster, and much less expensive than our previous process. Very rare to get all three benefits at once."
        attribution="Senior Partner"
        title="International Law Firm"
        tone="dark"
      />

      {/* Safe AI */}
      <section className="ms-section-editorial">
        <div className="ms-container">
          <NumberedSectionMark number="05" label="RESPONSIBLE AI" className="mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-display text-ms-navy mb-5">
                Integrating AI safely into your business.
              </h2>
              <p className="font-sans text-lg text-charcoal-700 leading-relaxed mb-5">
                Businesses are understandably concerned with the safety and
                ethical considerations of incorporating AI into their operations.
                M&S recognizes the critical importance of AI safety — and
                addresses it directly in every engagement.
              </p>
              <p className="font-sans text-lg text-charcoal-700 leading-relaxed">
                {/* TODO: verify — the source claims "almost two decades of AI strategy experience" which overstates generative AI maturity. Softened below. */}
                With deep experience implementing AI strategies across commercial
                and public sector organizations, we integrate AI with confidence
                — grounded in ethical practices, robust security measures, and
                genuine transparency about what autonomous systems can and cannot
                do. For questions about AI safety or specific concerns in your
                environment, get in touch with our team directly.
              </p>
            </div>
            <div className="space-y-5">
              {[
                {
                  title: "Ethical practices",
                  body: "Every AI engagement starts with a clear-eyed conversation about bias, transparency, and the limits of automation.",
                },
                {
                  title: "Security by design",
                  body: "Security controls are built into AI architecture from the start — not added as an afterthought at deployment.",
                },
                {
                  title: "Human oversight",
                  body: "Autonomous processes include defined escalation paths and human review checkpoints appropriate to the risk level.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg p-5 bg-ms-paper border border-[rgba(0,31,101,0.08)]"
                >
                  <p className="font-sans text-sm font-semibold text-ms-navy mb-1.5">
                    {item.title}
                  </p>
                  <p className="font-sans text-sm text-charcoal-700 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <FeatureGrid
        sectionNumber="06"
        eyebrow="INDUSTRIES"
        heading="Where we are seeing AI transform real operations."
        subhead="M&S has delivered AI-driven transformation across a broad spectrum of industries. Don't see yours — don't count yourself out. The depth of what is possible with AI reaches well beyond these categories."
        items={INDUSTRIES}
        columns={3}
        tone="paper"
      />

      <CTABanner
        heading="Ready to learn how AI strategy can transform your business?"
        subhead="Connect with our AI practice team to talk through where you are on the journey and what the right next step looks like for your organization."
        primaryCta={{ label: "Schedule a Call", href: "/contact" }}
        secondaryCta={{ label: "See AI Case Studies", href: "/case-studies" }}
        tone="navy"
      />
    </>
  );
}

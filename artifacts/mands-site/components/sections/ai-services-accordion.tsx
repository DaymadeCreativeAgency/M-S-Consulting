"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const AI_SERVICES = [
  {
    title: "AI Strategy & Roadmap",
    body: "Start racking up quick wins by creating a practical AI implementation roadmap grounded in your actual capabilities, timelines, and risk tolerance. We help you identify where AI will move the needle fastest — and where to wait.",
  },
  {
    title: "Security & Governance for AI",
    body: "Protect data with secure AI solutions informed by AI policy, reinforced by end-user training, and backed by human oversight at every stage. We build compliance and oversight frameworks that ensure autonomous AI operations stay aligned with your ethical standards and regulatory requirements.",
  },
  {
    title: "Data Architecture for AI",
    body: "Create a robust data fabric that provides the capabilities needed for timely, well-informed AI decision-making across your organization. We handle data warehousing, lake architecture, integration pipelines, and quality controls so your models have the foundation they need.",
  },
  {
    title: "Process Automation",
    body: "Streamline everyday operations by automating repetitive processes and designing optimized human-machine workflows that actually get used. We identify the highest-value automation targets in your business and implement solutions that reduce burden without removing needed human judgment.",
  },
  {
    title: "Adoption & Enablement",
    body: "Drive successful adoption of AI capabilities through reliable results, simple-to-use interfaces, and in-context, on-demand user training. We know that a brilliant AI system that your team doesn't trust — or won't use — delivers zero value.",
  },
  {
    title: "AI-Enhanced Enterprise Platforms",
    body: "Integrate AI-based solutions into Salesforce, SAP, Oracle, and Microsoft 365 to improve efficiency, reduce errors, and deliver a better experience. We extend the platforms your organization already depends on rather than adding complexity with standalone AI tools.",
  },
  {
    title: "Cloud Infrastructure for AI",
    body: "Enhance operational agility through exceptional management of your digital infrastructure. We support AWS, Azure, Google Cloud, IBM, Oracle, and Salesforce platforms — designing and managing the underlying compute and storage systems that modern AI workloads demand.",
  },
  {
    title: "Custom AI Development",
    body: "Design and build AI solutions unique to your industry and organization — from proprietary ML models to bespoke agentic applications. When off-the-shelf tools don't fit your workflow, our developers build at the code level to deliver solutions tailored to your architecture, data, and budget.",
  },
];

const HALF = Math.ceil(AI_SERVICES.length / 2);
const LEFT_COL = AI_SERVICES.slice(0, HALF);
const RIGHT_COL = AI_SERVICES.slice(HALF);

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof AI_SERVICES)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(255,255,255,0.1)",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left gap-4"
        aria-expanded={isOpen}
      >
        <span
          className="font-sans font-semibold"
          style={{ fontSize: "0.95rem", color: "white", lineHeight: 1.4 }}
        >
          {item.title}
        </span>
        <ChevronDown
          size={18}
          color="#5CA7F3"
          strokeWidth={2}
          style={{
            flexShrink: 0,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease",
          }}
        />
      </button>
      <div
        style={{
          maxHeight: isOpen ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <p
          className="font-sans"
          style={{
            fontSize: "0.875rem",
            color: "#8B92A8",
            lineHeight: 1.7,
            paddingTop: "0.75rem",
          }}
        >
          {item.body}
        </p>
      </div>
    </div>
  );
}

export function AiServicesAccordion() {
  const [openLeft, setOpenLeft] = useState<number | null>(null);
  const [openRight, setOpenRight] = useState<number | null>(null);

  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ backgroundColor: "#0A0E1A" }}
    >
      <div className="ms-container">
        <div className="mb-14">
          <p className="eyebrow mb-4" style={{ color: "#5CA7F3" }}>
            HOW WE HELP
          </p>
          <h2
            className="font-serif text-white font-medium"
            style={{
              fontSize: "clamp(1.75rem, 2.8vw, 2.4rem)",
              lineHeight: 1.25,
              maxWidth: "640px",
            }}
          >
            Our expert AI consultants{" "}
            <span
              style={{
                textDecoration: "underline",
                textDecorationStyle: "wavy",
                textDecorationColor: "#5CA7F3",
                textDecorationThickness: "2px",
                textUnderlineOffset: "4px",
              }}
            >
              can help you with
            </span>
            &hellip;
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
          <div>
            {LEFT_COL.map((item, i) => (
              <AccordionItem
                key={item.title}
                item={item}
                isOpen={openLeft === i}
                onToggle={() => setOpenLeft(openLeft === i ? null : i)}
              />
            ))}
          </div>
          <div>
            {RIGHT_COL.map((item, i) => (
              <AccordionItem
                key={item.title}
                item={item}
                isOpen={openRight === i}
                onToggle={() => setOpenRight(openRight === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

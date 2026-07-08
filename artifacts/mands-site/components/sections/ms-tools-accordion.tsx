"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type Tool = { name: string; description: string };

const LEFT_TOOLS: Tool[] = [
  {
    name: "Active Directory",
    description:
      "Empower your administrators to control all network access permissions with sophistication and security. We deploy this solution across your enterprise and integrate it with Azure AD for unified identity management.",
  },
  {
    name: "Power BI",
    description:
      "Visualize your data and share the insights across your organization. Our team will show you how to use this tool to its full potential, building smart, easy-to-understand analytics reports that keep decision-makers aligned.",
  },
  {
    name: "SharePoint",
    description:
      "Perhaps the most customizable collaboration platform you'll ever encounter, SharePoint offers a high degree of flexibility. We tailor it to suit your organization rather than defaulting to out-of-the-box configuration.",
  },
  {
    name: ".NET",
    description:
      "This versatile development platform is a top solution for building web, mobile, desktop, and cloud applications. Our team advises on the languages and tools that will make the most of your .NET investment.",
  },
];

const RIGHT_TOOLS: Tool[] = [
  {
    name: "Power Apps",
    description:
      "Build and deploy simple or complex custom applications with this user-friendly Microsoft suite. Our consultants guide you through development without requiring heavy custom code.",
  },
  {
    name: "SQL Server",
    description:
      "Store, manage, and retrieve data effectively with this relational database management system. We help you integrate, streamline, and scale SQL Server while keeping your data secure and highly available.",
  },
  {
    name: "Azure",
    description:
      "Cosmos DB for global scalability and high availability. Azure AI for machine learning and automation. AKS (Azure Kubernetes Services) to simplify building, deploying, and scaling containerized applications. We help you navigate the Azure ecosystem and get real return on your cloud investment.",
  },
  {
    name: "Microsoft Copilot",
    description:
      "We help your organization get genuinely productive with Microsoft's AI assistant, covering best practices for working with Copilot and accelerating processes like writing, analysis, coding, and more.",
  },
];

function AccordionItem({ tool, isOpen, onToggle }: { tool: Tool; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      style={{
        border: "1px solid rgba(92,167,243,0.2)",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: isOpen ? "rgba(92,167,243,0.05)" : "transparent",
        transition: "background-color 0.2s ease",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span
          className="font-sans font-semibold"
          style={{ color: "#5CA7F3", fontSize: "0.95rem" }}
        >
          {tool.name}
        </span>
        <span style={{ color: "#5CA7F3", flexShrink: 0, marginLeft: "12px" }}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <div
        style={{
          maxHeight: isOpen ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <p
          className="marketing-copy px-5 pb-5"
          style={{ color: "rgba(232,234,237,0.86)" }}
        >
          {tool.description}
        </p>
      </div>
    </div>
  );
}

export function MsToolsAccordion() {
  const [openLeft, setOpenLeft] = useState<number | null>(null);
  const [openRight, setOpenRight] = useState<number | null>(null);

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#0A0E1A" }}
    >
      {/* Background texture, ai-rods photo at very low opacity */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/media/ai-rods.jpg"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          opacity: 0.09,
          mixBlendMode: "luminosity",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div className="ms-container relative" style={{ zIndex: 1 }}>
        {/* Heading with wavy SVG underline */}
        <div className="mb-14">
          <h2
            className="font-serif text-white font-medium"
            style={{ fontSize: "clamp(1.85rem, 3vw, 2.6rem)", lineHeight: 1.15 }}
          >
            Microsoft Tools We Work With
          </h2>
          <svg
            viewBox="0 0 320 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "clamp(200px, 30vw, 320px)", marginTop: "10px" }}
            aria-hidden="true"
          >
            <path
              d="M4 7 C30 1, 60 13, 90 7 C120 1, 150 13, 180 7 C210 1, 240 13, 270 7 C285 4, 300 10, 316 7"
              stroke="#5CA7F3"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Two-column accordion grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Left column */}
          <div className="flex flex-col gap-3">
            {LEFT_TOOLS.map((tool, i) => (
              <AccordionItem
                key={tool.name}
                tool={tool}
                isOpen={openLeft === i}
                onToggle={() => setOpenLeft(openLeft === i ? null : i)}
              />
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-3">
            {RIGHT_TOOLS.map((tool, i) => (
              <AccordionItem
                key={tool.name}
                tool={tool}
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

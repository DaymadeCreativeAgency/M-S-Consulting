"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export type AccordionTool = { name: string; description: string };

function AccordionItem({
  tool,
  isOpen,
  onToggle,
}: {
  tool: AccordionTool;
  isOpen: boolean;
  onToggle: () => void;
}) {
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
          className="font-sans px-5 pb-5"
          style={{
            fontSize: "0.875rem",
            lineHeight: 1.65,
            color: "rgba(232,234,237,0.75)",
          }}
        >
          {tool.description}
        </p>
      </div>
    </div>
  );
}

export function PracticeAreaAccordion({
  heading,
  leftTools,
  rightTools,
}: {
  heading: string;
  leftTools: AccordionTool[];
  rightTools: AccordionTool[];
}) {
  const [openLeft, setOpenLeft] = useState<number | null>(null);
  const [openRight, setOpenRight] = useState<number | null>(null);

  return (
    <section
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#0A0E1A" }}
    >
      <div className="ms-container">
        <div className="mb-14">
          <h2
            className="font-serif text-white font-medium"
            style={{
              fontSize: "clamp(1.85rem, 3vw, 2.6rem)",
              lineHeight: 1.15,
            }}
          >
            {heading}
          </h2>
          <svg
            viewBox="0 0 320 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: "clamp(200px, 30vw, 320px)",
              marginTop: "10px",
            }}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">
            {leftTools.map((tool, i) => (
              <AccordionItem
                key={tool.name}
                tool={tool}
                isOpen={openLeft === i}
                onToggle={() => setOpenLeft(openLeft === i ? null : i)}
              />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {rightTools.map((tool, i) => (
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

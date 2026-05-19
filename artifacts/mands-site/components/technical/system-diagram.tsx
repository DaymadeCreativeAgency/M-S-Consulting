import * as React from "react";
import { cn } from "@/lib/utils";

export type NodeType = "source" | "process" | "store" | "output";

export interface SystemDiagramNode {
  id: string;
  label: string;
  sublabel?: string;
  type?: NodeType;
}

export interface SystemDiagramProps {
  nodes: SystemDiagramNode[];
  label?: string;
  tone?: "light" | "dark";
  className?: string;
}

const NODE_ACCENT: Record<NodeType, string> = {
  source:  "#5CA7F3",
  process: "#001F65",
  store:   "#688A85",
  output:  "#FCC541",
};

function DiagramNode({
  node,
  tone,
}: {
  node: SystemDiagramNode;
  tone: "light" | "dark";
}) {
  const isLight = tone === "light";
  const type = node.type ?? "process";
  const accent = NODE_ACCENT[type];

  return (
    <div
      className="flex flex-col items-center gap-2 min-w-[7rem]"
      role="listitem"
    >
      <div
        className="w-full rounded-sm px-3 py-3 text-center"
        style={{
          backgroundColor: isLight ? "#FFFFFF" : "#131829",
          border: `1px solid ${isLight ? "rgba(0,31,101,0.12)" : "#1F2438"}`,
          borderTop: `2px solid ${accent}`,
        }}
      >
        <p
          className="font-sans text-xs font-semibold leading-snug"
          style={{ color: isLight ? "#1A1B17" : "#E8EAED" }}
        >
          {node.label}
        </p>
        {node.sublabel && (
          <p
            className="font-sans text-[10px] mt-0.5 leading-snug"
            style={{ color: isLight ? "#3D3E39" : "#8B92A8" }}
          >
            {node.sublabel}
          </p>
        )}
      </div>
      <span
        className="technical-meta text-center"
        style={{ color: isLight ? "#8B92A8" : "#8B92A8", fontSize: "9px" }}
      >
        {type.toUpperCase()}
      </span>
    </div>
  );
}

function Arrow({ tone }: { tone: "light" | "dark" }) {
  const color = tone === "dark" ? "#1F2438" : "rgba(0,31,101,0.15)";
  return (
    <div className="flex items-center self-start mt-3 px-1" aria-hidden="true">
      <div className="h-px w-6" style={{ backgroundColor: color }} />
      <svg width="6" height="8" viewBox="0 0 6 8" fill="none">
        <path d="M0 0L6 4L0 8V0Z" fill={color} />
      </svg>
    </div>
  );
}

export function SystemDiagram({
  nodes,
  label,
  tone = "light",
  className,
}: SystemDiagramProps) {
  const isLight = tone === "light";

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <p
          className="technical-meta mb-4"
          style={{ color: isLight ? "#3D3E39" : "#8B92A8" }}
        >
          {label}
        </p>
      )}
      <div
        className="flex items-start gap-0 overflow-x-auto pb-2"
        role="list"
        aria-label={label ?? "System diagram"}
      >
        {nodes.map((node, i) => (
          <React.Fragment key={node.id}>
            <DiagramNode node={node} tone={tone} />
            {i < nodes.length - 1 && <Arrow tone={tone} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

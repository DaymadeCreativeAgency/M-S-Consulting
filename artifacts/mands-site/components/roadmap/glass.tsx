"use client";

import {
  Bot,
  BrainCircuit,
  Database,
  Layers,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { DiagramKind } from "@/lib/ai-roadmap";

/** One distinctive icon per roadmap step, keyed off the diagram motif. */
export const STEP_ICON: Record<DiagramKind, LucideIcon> = {
  layers: Layers,
  fuel: Database,
  venn: ShieldCheck,
  untangle: Workflow,
  applications: BrainCircuit,
  lifecycle: RefreshCw,
  automation: Bot,
  execution: Rocket,
};

interface GlassIconProps {
  icon: LucideIcon;
  /** Pixel size of the badge. */
  size?: number;
  className?: string;
}

/**
 * A frosted, "liquid glass" icon chip, translucent, blurred, with a bright
 * inner highlight and soft drop shadow so it reads as a pane of glass floating
 * just above the surface. Used to add depth and tactility across the roadmap.
 */
export function GlassIcon({ icon: Icon, size = 60, className }: GlassIconProps) {
  return (
    <div className={`relative inline-flex ${className ?? ""}`} style={{ width: size, height: size }}>
      {/* Colored bloom behind the glass */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-3 rounded-[1.6rem] blur-xl"
        style={{
          background:
            "radial-gradient(60% 60% at 30% 25%, rgba(244,168,192,0.55), transparent 70%), radial-gradient(60% 60% at 75% 80%, rgba(143,211,232,0.45), transparent 70%)",
          opacity: 0.85,
        }}
      />
      <span
        className="relative flex h-full w-full items-center justify-center"
        style={{
          borderRadius: size * 0.32,
          background:
            "linear-gradient(150deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.06) 45%, rgba(184,164,232,0.1) 100%)",
          border: "1px solid rgba(255,255,255,0.28)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow:
            "inset 0 1.5px 1px rgba(255,255,255,0.6), inset 0 -10px 22px rgba(120,80,200,0.28), 0 16px 34px rgba(0,0,0,0.45)",
        }}
      >
        {/* Specular sheen */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            borderRadius: size * 0.32,
            background:
              "linear-gradient(150deg, rgba(255,255,255,0.5), transparent 38%)",
            opacity: 0.7,
            mixBlendMode: "screen",
          }}
        />
        <Icon size={size * 0.42} strokeWidth={1.6} color="#F4ECFF" />
      </span>
    </div>
  );
}

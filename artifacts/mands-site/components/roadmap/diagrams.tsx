"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { DiagramKind } from "@/lib/ai-roadmap";

/* ────────────────────────────────────────────────────────────────────────────
 * Shared building blocks
 * ──────────────────────────────────────────────────────────────────────────── */

const IRIDESCENT_ID = "rm-iridescent";

/** Gradient + filter defs shared by every diagram. Render once per SVG. */
function Defs() {
  return (
    <defs>
      <linearGradient id={IRIDESCENT_ID} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#B8A4E8" />
        <stop offset="45%" stopColor="#F4A8C0" />
        <stop offset="100%" stopColor="#8FD3E8" />
      </linearGradient>
      <linearGradient id="rm-peri" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8FB8F0" />
        <stop offset="100%" stopColor="#B8A4E8" />
      </linearGradient>
      <radialGradient id="rm-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#F4A8C0" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#F4A8C0" stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

const STROKE = "#B8A4E8";
const STROKE_DIM = "rgba(184,164,232,0.4)";
const LABEL = "rgba(233,226,245,0.92)";

const ease = [0.22, 1, 0.36, 1] as const;

interface DiagramProps {
  active: boolean;
}

/* ────────────────────────────────────────────────────────────────────────────
 * 1. Layers — Strategy / Skills / Tech Stack assemble downward
 * ──────────────────────────────────────────────────────────────────────────── */

function LayersDiagram({ active }: DiagramProps) {
  const reduce = useReducedMotion();
  // Each isometric plane is a flat diamond; they stack with vertical offset.
  const planes = [
    { label: "STRATEGY", y: 70, fill: "rgba(143,184,240,0.22)", stroke: "#8FB8F0", delay: 0.5 },
    { label: "SKILLS", y: 110, fill: "rgba(184,164,232,0.22)", stroke: "#B8A4E8", delay: 0.3 },
    { label: "TECH STACK", y: 150, fill: "rgba(92,167,243,0.18)", stroke: "#5CA7F3", delay: 0.1 },
  ];
  const cx = 160;
  const rx = 110;
  const ry = 46;
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" aria-hidden>
      <Defs />
      {planes.map((p) => {
        const path = `M ${cx} ${p.y - ry} L ${cx + rx} ${p.y} L ${cx} ${p.y + ry} L ${cx - rx} ${p.y} Z`;
        return (
          <motion.g
            key={p.label}
            initial={reduce ? false : { opacity: 0, y: -40 }}
            animate={active ? { opacity: 1, y: 0 } : reduce ? {} : { opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease, delay: reduce ? 0 : p.delay }}
          >
            <path d={path} fill={p.fill} stroke={p.stroke} strokeWidth={1.5} />
            <text
              x={cx}
              y={p.y + 4}
              textAnchor="middle"
              fontSize="12"
              letterSpacing="1.5"
              fontWeight={600}
              fill={LABEL}
              fontFamily="var(--font-sans)"
            >
              {p.label}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
 * 2. Fuel — data droplets flow into a vessel
 * ──────────────────────────────────────────────────────────────────────────── */

function FuelDiagram({ active }: DiagramProps) {
  const reduce = useReducedMotion();
  const drops = [0, 1, 2, 3, 4];
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" aria-hidden>
      <Defs />
      {/* vessel */}
      <path
        d="M 120 70 L 200 70 L 184 175 Q 184 195 160 195 Q 136 195 136 175 Z"
        fill="none"
        stroke={STROKE}
        strokeWidth={2}
      />
      {/* fill level */}
      <motion.path
        d="M 142 150 L 178 150 L 184 175 Q 184 195 160 195 Q 136 195 136 175 Z"
        fill="url(#rm-peri)"
        initial={reduce ? false : { opacity: 0 }}
        animate={active ? { opacity: 0.85 } : reduce ? {} : { opacity: 0 }}
        transition={{ duration: 1, ease, delay: 0.7 }}
      />
      {/* droplets */}
      {drops.map((d) => (
        <motion.circle
          key={d}
          cx={130 + d * 15}
          r={4}
          fill="url(#rm-iridescent)"
          initial={reduce ? false : { cy: 20, opacity: 0 }}
          animate={
            active && !reduce
              ? { cy: [20, 150], opacity: [0, 1, 1, 0] }
              : reduce
                ? { cy: 150, opacity: 0 }
                : { cy: 20, opacity: 0 }
          }
          transition={{ duration: 1.4, ease, delay: d * 0.25, repeat: active && !reduce ? Infinity : 0, repeatDelay: 1 }}
        />
      ))}
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
 * 3. Venn — four overlapping circles draw in
 * ──────────────────────────────────────────────────────────────────────────── */

function VennDiagram({ active }: DiagramProps) {
  const reduce = useReducedMotion();
  const circles = [
    { cx: 78, label: "Data" },
    { cx: 122, label: "Privacy" },
    { cx: 166, label: "Integrate" },
    { cx: 210, label: "Analytics" },
  ];
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" aria-hidden>
      <Defs />
      {circles.map((c, i) => (
        <motion.circle
          key={c.label}
          cx={c.cx + 12}
          cy={120}
          r={52}
          fill="rgba(184,164,232,0.06)"
          stroke={STROKE}
          strokeWidth={1.4}
          initial={reduce ? false : { scale: 0, opacity: 0 }}
          animate={active ? { scale: 1, opacity: 1 } : reduce ? {} : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.7, ease, delay: reduce ? 0 : i * 0.15 }}
          style={{ transformOrigin: `${c.cx + 12}px 120px` }}
        />
      ))}
      {circles.map((c, i) => (
        <motion.text
          key={`${c.label}-t`}
          x={c.cx + 12}
          y={i % 2 === 0 ? 116 : 128}
          textAnchor="middle"
          fontSize="10.5"
          fontStyle="italic"
          fill={LABEL}
          fontFamily="var(--font-serif)"
          initial={reduce ? false : { opacity: 0 }}
          animate={active ? { opacity: 1 } : reduce ? {} : { opacity: 0 }}
          transition={{ duration: 0.5, delay: reduce ? 0 : 0.4 + i * 0.15 }}
        >
          {c.label}
        </motion.text>
      ))}
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
 * 4. Untangle — tangled "Without AI" path straightens to "With AI"
 * ──────────────────────────────────────────────────────────────────────────── */

const TANGLE =
  "M 40 80 C 90 40, 110 130, 150 90 S 210 40, 200 90 S 120 130, 170 100 S 250 70, 280 85";

function UntangleDiagram({ active }: DiagramProps) {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" aria-hidden>
      <Defs />
      {/* Without AI */}
      <text x="40" y="50" fontSize="11" fontWeight={600} fill={LABEL} fontFamily="var(--font-sans)">
        Without AI
      </text>
      <motion.path
        d={TANGLE}
        fill="none"
        stroke={STROKE_DIM}
        strokeWidth={2}
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0 }}
        animate={active ? { pathLength: 1 } : reduce ? {} : { pathLength: 0 }}
        transition={{ duration: 1.6, ease }}
      />
      <circle cx="40" cy="80" r="5" fill={STROKE_DIM} />
      <circle cx="280" cy="85" r="7" fill="none" stroke={STROKE_DIM} strokeWidth={2} />

      {/* With Built-In AI */}
      <text x="40" y="165" fontSize="11" fontWeight={600} fill={LABEL} fontFamily="var(--font-sans)">
        With Built-In AI
      </text>
      <motion.line
        x1="40"
        y1="190"
        x2="280"
        y2="190"
        stroke="url(#rm-iridescent)"
        strokeWidth={2.5}
        strokeLinecap="round"
        initial={reduce ? false : { pathLength: 0 }}
        animate={active ? { pathLength: 1 } : reduce ? {} : { pathLength: 0 }}
        transition={{ duration: 0.9, ease, delay: reduce ? 0 : 0.6 }}
      />
      <circle cx="40" cy="190" r="5" fill="#5CA7F3" />
      <motion.circle
        cx="280"
        cy="190"
        r="7"
        fill="#5CA7F3"
        initial={reduce ? false : { scale: 0 }}
        animate={active ? { scale: 1 } : reduce ? {} : { scale: 0 }}
        transition={{ duration: 0.4, ease, delay: reduce ? 0 : 1.5 }}
        style={{ transformOrigin: "280px 190px" }}
      />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
 * 5. Applications — ML use-case constellation
 * ──────────────────────────────────────────────────────────────────────────── */

function ApplicationsDiagram({ active }: DiagramProps) {
  const reduce = useReducedMotion();
  const nodes = [
    { x: 80, y: 75, label: "Classify" },
    { x: 230, y: 70, label: "Predict" },
    { x: 95, y: 175, label: "Vision" },
    { x: 235, y: 170, label: "Generate" },
  ];
  const hub = { x: 160, y: 122 };
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" aria-hidden>
      <Defs />
      {nodes.map((n, i) => (
        <motion.line
          key={`l-${n.label}`}
          x1={hub.x}
          y1={hub.y}
          x2={n.x}
          y2={n.y}
          stroke={STROKE_DIM}
          strokeWidth={1.2}
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          animate={active ? { pathLength: 1, opacity: 1 } : reduce ? {} : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease, delay: reduce ? 0 : 0.2 + i * 0.12 }}
        />
      ))}
      <circle cx={hub.x} cy={hub.y} r="22" fill="url(#rm-glow)" />
      <circle cx={hub.x} cy={hub.y} r="10" fill="url(#rm-iridescent)" />
      {nodes.map((n, i) => (
        <motion.g
          key={n.label}
          initial={reduce ? false : { scale: 0, opacity: 0 }}
          animate={active ? { scale: 1, opacity: 1 } : reduce ? {} : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease, delay: reduce ? 0 : 0.4 + i * 0.12 }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
        >
          <circle cx={n.x} cy={n.y} r="26" fill="rgba(184,164,232,0.1)" stroke={STROKE} strokeWidth={1.3} />
          <text
            x={n.x}
            y={n.y + 4}
            textAnchor="middle"
            fontSize="10.5"
            fontStyle="italic"
            fill={LABEL}
            fontFamily="var(--font-serif)"
          >
            {n.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
 * 6. Lifecycle — Train → Tune → Test → Feedback loop
 * ──────────────────────────────────────────────────────────────────────────── */

function LifecycleDiagram({ active }: DiagramProps) {
  const reduce = useReducedMotion();
  const cx = 160;
  const cy = 120;
  const r = 74;
  const stages = ["Train", "Tune", "Test", "Feedback"];
  const points = stages.map((s, i) => {
    const a = (i / stages.length) * Math.PI * 2 - Math.PI / 2;
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a), label: s };
  });
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" aria-hidden>
      <Defs />
      <motion.circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke={STROKE_DIM}
        strokeWidth={1.5}
        strokeDasharray="4 6"
        initial={reduce ? false : { pathLength: 0 }}
        animate={active ? { pathLength: 1 } : reduce ? {} : { pathLength: 0 }}
        transition={{ duration: 1.2, ease }}
      />
      {!reduce && (
        <motion.circle
          cx={cx}
          cy={cy - r}
          r={5}
          fill="url(#rm-iridescent)"
          animate={active ? { rotate: 360 } : {}}
          transition={{ duration: 6, ease: "linear", repeat: Infinity }}
          style={{ transformBox: "fill-box", transformOrigin: `${cx}px ${cy}px`, originX: 0.5, originY: 0.5 }}
        />
      )}
      {points.map((p, i) => (
        <motion.g
          key={p.label}
          initial={reduce ? false : { scale: 0, opacity: 0 }}
          animate={active ? { scale: 1, opacity: 1 } : reduce ? {} : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease, delay: reduce ? 0 : 0.4 + i * 0.15 }}
          style={{ transformOrigin: `${p.x}px ${p.y}px` }}
        >
          <circle cx={p.x} cy={p.y} r="6" fill="#B8A4E8" />
          <text
            x={p.x}
            y={p.y < cy ? p.y - 12 : p.y + 20}
            textAnchor="middle"
            fontSize="11"
            fontStyle="italic"
            fill={LABEL}
            fontFamily="var(--font-serif)"
          >
            {p.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
 * 7. Automation — RPA → IPA flow nodes light up in sequence
 * ──────────────────────────────────────────────────────────────────────────── */

function AutomationDiagram({ active }: DiagramProps) {
  const reduce = useReducedMotion();
  const nodes = [
    { x: 50, label: "Manual" },
    { x: 130, label: "RPA" },
    { x: 210, label: "IPA" },
    { x: 285, label: "Scale" },
  ];
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" aria-hidden>
      <Defs />
      <motion.line
        x1="50"
        y1="120"
        x2="285"
        y2="120"
        stroke={STROKE_DIM}
        strokeWidth={1.5}
        initial={reduce ? false : { pathLength: 0 }}
        animate={active ? { pathLength: 1 } : reduce ? {} : { pathLength: 0 }}
        transition={{ duration: 1, ease }}
      />
      {nodes.map((n, i) => (
        <motion.g
          key={n.label}
          initial={reduce ? false : { scale: 0, opacity: 0 }}
          animate={active ? { scale: 1, opacity: 1 } : reduce ? {} : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.45, ease, delay: reduce ? 0 : 0.3 + i * 0.25 }}
          style={{ transformOrigin: `${n.x}px 120px` }}
        >
          <circle
            cx={n.x}
            cy={120}
            r={i === nodes.length - 1 ? 16 : 13}
            fill={i >= 2 ? "url(#rm-iridescent)" : "rgba(184,164,232,0.15)"}
            stroke={STROKE}
            strokeWidth={1.4}
          />
          <text
            x={n.x}
            y={160}
            textAnchor="middle"
            fontSize="11"
            fontStyle="italic"
            fill={LABEL}
            fontFamily="var(--font-serif)"
          >
            {n.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
 * 8. Execution — Vision arcs to Execution
 * ──────────────────────────────────────────────────────────────────────────── */

function ExecutionDiagram({ active }: DiagramProps) {
  const reduce = useReducedMotion();
  const arc = "M 50 185 Q 160 30, 270 120";
  return (
    <svg viewBox="0 0 320 240" className="h-full w-full" aria-hidden>
      <Defs />
      <motion.path
        d={arc}
        fill="none"
        stroke="url(#rm-iridescent)"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeDasharray="2 7"
        initial={reduce ? false : { pathLength: 0 }}
        animate={active ? { pathLength: 1 } : reduce ? {} : { pathLength: 0 }}
        transition={{ duration: 1.4, ease }}
      />
      {/* Vision origin */}
      <circle cx="50" cy="185" r="6" fill="#8FB8F0" />
      <text x="50" y="210" textAnchor="middle" fontSize="11" fontStyle="italic" fill={LABEL} fontFamily="var(--font-serif)">
        Vision
      </text>
      {/* Execution target */}
      <motion.g
        initial={reduce ? false : { scale: 0, opacity: 0 }}
        animate={active ? { scale: 1, opacity: 1 } : reduce ? {} : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.5, ease, delay: reduce ? 0 : 1.3 }}
        style={{ transformOrigin: "270px 120px" }}
      >
        <circle cx="270" cy="120" r="20" fill="url(#rm-glow)" />
        <circle cx="270" cy="120" r="9" fill="#F4A8C0" />
        <text x="270" y="160" textAnchor="middle" fontSize="11" fontStyle="italic" fill={LABEL} fontFamily="var(--font-serif)">
          Execution
        </text>
      </motion.g>
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
 * Dispatcher
 * ──────────────────────────────────────────────────────────────────────────── */

const MAP: Record<DiagramKind, React.ComponentType<DiagramProps>> = {
  layers: LayersDiagram,
  fuel: FuelDiagram,
  venn: VennDiagram,
  untangle: UntangleDiagram,
  applications: ApplicationsDiagram,
  lifecycle: LifecycleDiagram,
  automation: AutomationDiagram,
  execution: ExecutionDiagram,
};

export function StepDiagram({ kind, active }: { kind: DiagramKind; active: boolean }) {
  const Cmp = MAP[kind];
  return (
    <div className="h-full w-full">
      <Cmp active={active} />
    </div>
  );
}

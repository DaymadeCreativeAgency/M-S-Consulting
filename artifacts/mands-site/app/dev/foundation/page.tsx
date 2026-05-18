import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Foundation Verification",
  robots: { index: false, follow: false },
};

const brandColors = [
  { name: "ms-navy", hex: "#001F65", label: "MS Navy · Primary" },
  { name: "ms-cream", hex: "#EFEADB", label: "MS Cream · Background Alt" },
  { name: "ms-ink", hex: "#1A1B17", label: "MS Ink · Body Text" },
  { name: "ms-paper", hex: "#FFFFFF", label: "MS Paper · Page BG", border: true },
];

const darkColors = [
  { name: "dark-base", hex: "#0A0E1A", label: "Dark Base" },
  { name: "dark-elevated", hex: "#131829", label: "Dark Elevated" },
  { name: "dark-border", hex: "#1F2438", label: "Dark Border" },
  { name: "dark-ink", hex: "#E8EAED", label: "Dark Ink" },
  { name: "dark-muted", hex: "#8B92A8", label: "Dark Muted" },
];

const technicalColors = [
  { name: "tech-grid", hex: "#E5E5EA", label: "Tech Grid (light)", border: true },
  { name: "tech-grid-dark", hex: "#1F2438", label: "Tech Grid (dark)" },
  { name: "tech-accent", hex: "#5CA7F3", label: "Tech Accent · Electric Blue" },
];

const secondaryColors = [
  { name: "forest-900", hex: "#1C4640", label: "Forest 900 · Public Sector" },
  { name: "forest-500", hex: "#688A85", label: "Forest 500" },
  { name: "forest-200", hex: "#B1C2C1", label: "Forest 200" },
  { name: "terra-700", hex: "#C82F07", label: "Terra 700 · Urgency" },
  { name: "terra-500", hex: "#DE7B59", label: "Terra 500" },
  { name: "sun-500", hex: "#FCC541", label: "Sun 500 · Accent Pop" },
  { name: "sun-300", hex: "#FDDB87", label: "Sun 300" },
  { name: "wine-900", hex: "#6E0C1D", label: "Wine 900 · Legal/Finance" },
  { name: "mauve-500", hex: "#A36064", label: "Mauve 500" },
  { name: "charcoal-900", hex: "#1A1B17", label: "Charcoal 900" },
  { name: "charcoal-700", hex: "#3D3E39", label: "Charcoal 700" },
];

function Swatch({
  hex,
  label,
  border,
}: {
  hex: string;
  label: string;
  border?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-16 rounded-md w-full"
        style={{
          backgroundColor: hex,
          border: border ? "1px solid rgba(0,0,0,0.12)" : undefined,
        }}
      />
      <div>
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-ms-ink">
          {hex}
        </p>
        <p className="font-sans text-xs text-charcoal-700 leading-snug">{label}</p>
      </div>
    </div>
  );
}

export default function FoundationPage() {
  return (
    <div className="min-h-screen bg-ms-paper text-ms-ink font-sans">
      {/* ─── Page header ─── */}
      <div className="ms-container py-12 border-b border-[rgba(0,31,101,0.1)]">
        <p className="eyebrow text-ms-navy mb-3">M&S Consulting · Internal</p>
        <h1 className="font-serif text-4xl font-medium text-ms-navy mb-2">
          Design Foundation Verification
        </h1>
        <p className="technical-meta text-charcoal-700">
          MRGNTWN.WV · FOUNDATION LAYER · NOT INDEXED · {new Date().toISOString().split("T")[0]}
        </p>
      </div>

      {/* ═══════════════════════════════════════════
          SECTION A — COLOR PALETTE
      ═══════════════════════════════════════════ */}
      <section className="ms-section ms-container">
        <p className="section-marker text-ms-navy mb-6">01 / COLOR PALETTE</p>

        <div className="mb-10">
          <h2 className="font-sans text-lg font-600 text-ms-ink mb-4">Primary Brand Colors</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {brandColors.map((c) => (
              <Swatch key={c.hex} {...c} />
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="font-sans text-lg font-600 text-ms-ink mb-4">Dark Mode Tokens</h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {darkColors.map((c) => (
              <Swatch key={c.hex} {...c} />
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="font-sans text-lg font-600 text-ms-ink mb-4">Technical Accents</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {technicalColors.map((c) => (
              <Swatch key={c.hex} {...c} />
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="font-sans text-lg font-600 text-ms-ink mb-4">Secondary Palette</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {secondaryColors.map((c) => (
              <Swatch key={c.hex} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION B — TYPOGRAPHY
      ═══════════════════════════════════════════ */}
      <section
        className="ms-section-editorial border-t border-[rgba(0,31,101,0.1)]"
        style={{ backgroundColor: "#EFEADB" }}
      >
        <div className="ms-container">
          <p className="section-marker text-ms-navy mb-10">02 / TYPE SCALE</p>

          <div className="space-y-12">
            {/* Serif */}
            <div>
              <p className="eyebrow text-ms-navy mb-6">
                FONT-SERIF · Source Serif 4 (variable 300–700)
              </p>
              <div className="space-y-4">
                <div>
                  <p className="eyebrow text-charcoal-700 mb-1">H1 · Serif · 5xl–7xl · weight 500</p>
                  <h1 className="font-serif text-ms-navy" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", fontWeight: 500, letterSpacing: "-0.02em" }}>
                    Twenty Years of Delivery
                  </h1>
                </div>
                <div>
                  <p className="eyebrow text-charcoal-700 mb-1">H2 · Serif · 3xl–5xl · weight 500</p>
                  <h2 className="font-serif text-ms-navy" style={{ fontSize: "clamp(1.875rem,4vw,3rem)", fontWeight: 500, letterSpacing: "-0.02em" }}>
                    Practice Areas and Capabilities
                  </h2>
                </div>
                <div>
                  <p className="eyebrow text-charcoal-700 mb-1">Pull Quote · Serif · Light</p>
                  <p className="font-serif text-2xl font-light text-ms-ink italic leading-snug">
                    "The firms that will lead in AI are the ones that know how to deliver, not just theorize."
                  </p>
                </div>
              </div>
            </div>

            {/* Sans */}
            <div>
              <p className="eyebrow text-ms-navy mb-6">
                FONT-SANS · Figtree (300–700)
              </p>
              <div className="space-y-4">
                <div>
                  <p className="eyebrow text-charcoal-700 mb-1">H3 · Sans · xl–2xl · weight 600</p>
                  <h3 className="font-sans text-ms-ink text-2xl font-semibold">AI Transformation Strategy</h3>
                </div>
                <div>
                  <p className="eyebrow text-charcoal-700 mb-1">H4 · Sans · lg · weight 600</p>
                  <h4 className="font-sans text-ms-ink text-lg font-semibold">Program Management & Delivery</h4>
                </div>
                <div>
                  <p className="eyebrow text-charcoal-700 mb-1">Body · Sans · base · weight 400 · leading-relaxed</p>
                  <p className="font-sans text-base text-ms-ink leading-relaxed max-w-2xl">
                    M&S Consulting has delivered enterprise transformation programs for federal agencies,
                    healthcare systems, and private sector clients for over two decades. Where others advise,
                    we implement — embedded teams, accountable outcomes, real change.
                  </p>
                </div>
                <div>
                  <p className="eyebrow text-charcoal-700 mb-1">UI / Button · Sans · sm · weight 600</p>
                  <button className="font-sans text-sm font-semibold tracking-wide bg-ms-navy text-ms-paper px-6 py-2.5 rounded-md">
                    Start a Conversation
                  </button>
                </div>
              </div>
            </div>

            {/* Mono */}
            <div>
              <p className="eyebrow text-ms-navy mb-6">
                FONT-MONO · JetBrains Mono (400–600) · Technical accents only
              </p>
              <div className="space-y-4">
                <div>
                  <p className="eyebrow text-charcoal-700 mb-1">Eyebrow / Kicker · mono · xs · uppercase · tracking-wider</p>
                  <p className="eyebrow text-ms-navy">WHAT WE DO · PRACTICE AREAS</p>
                </div>
                <div>
                  <p className="eyebrow text-charcoal-700 mb-1">Technical Meta · mono · xs · uppercase · tracking-wider</p>
                  <p className="technical-meta text-charcoal-700">
                    GS-35F-0231S · ISO 9001:2015 · ESTABLISHED 2002 · 250+ CONSULTANTS
                  </p>
                </div>
                <div>
                  <p className="eyebrow text-charcoal-700 mb-1">Stat Large · mono · 5xl–7xl · tabular-nums</p>
                  <p className="stat-large text-ms-navy">47%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION C — TECHNICAL ELEMENTS (light)
      ═══════════════════════════════════════════ */}
      <section className="ms-section border-t border-[rgba(0,31,101,0.1)]">
        <div className="ms-container">
          <p className="section-marker text-ms-navy mb-10">03 / TECHNICAL ELEMENTS · LIGHT GROUND</p>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Numbered Section Marker */}
            <div>
              <p className="eyebrow text-charcoal-700 mb-4">Numbered Section Marker</p>
              <div className="space-y-2">
                <p className="section-marker text-ms-navy">01 / WHAT WE DO</p>
                <p className="section-marker text-ms-navy">02 / PRACTICE AREAS</p>
                <p className="section-marker text-ms-navy">03 / CAPABILITIES</p>
                <p className="section-marker text-ms-navy">04 / CLIENT WORK</p>
              </div>
            </div>

            {/* Metadata Strip */}
            <div>
              <p className="eyebrow text-charcoal-700 mb-4">Metadata Strip</p>
              <div className="space-y-3">
                <div className="py-2.5 px-4 border border-[rgba(0,31,101,0.1)] rounded-xs">
                  <p className="technical-meta text-charcoal-700">
                    GS-35F-0231S · ISO 9001:2015 · ESTABLISHED 2002 · 250+ CONSULTANTS
                  </p>
                </div>
                <div className="py-2.5 px-4 border border-[rgba(0,31,101,0.1)] rounded-xs">
                  <p className="technical-meta text-charcoal-700">
                    DELIVERY · 2024–PRESENT · LEGAL VERTICAL · CONFIDENTIAL
                  </p>
                </div>
              </div>
            </div>

            {/* Stat Callout */}
            <div>
              <p className="eyebrow text-charcoal-700 mb-4">Stat Callout</p>
              <div className="space-y-6">
                <div>
                  <p className="stat-large text-ms-navy">100K</p>
                  <p className="stat-label text-charcoal-700 mt-1">HOURS SAVED ANNUALLY · HORTICULTURE CLIENT</p>
                </div>
                <div>
                  <p className="stat-large text-ms-navy">40%</p>
                  <p className="stat-label text-charcoal-700 mt-1">FASTER CONTRACT REVIEW · LEGAL CLIENT</p>
                </div>
              </div>
            </div>
          </div>

          {/* Live Status Indicator */}
          <div className="mt-12 pt-8 border-t border-[rgba(0,31,101,0.1)]">
            <p className="eyebrow text-charcoal-700 mb-4">Live Status Indicators</p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <span className="status-dot bg-sun-500" />
                <span className="technical-meta text-ms-ink">AVAILABLE FOR Q3 2026 ENGAGEMENTS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="status-dot bg-tech-accent" />
                <span className="technical-meta text-ms-ink">STATUS: ACTIVE PARTNER</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="status-dot bg-forest-500" />
                <span className="technical-meta text-ms-ink">CLEARED · FEDERAL PRACTICE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION D — DARK SECTION
      ═══════════════════════════════════════════ */}
      <section
        className="ms-section-dark relative overflow-hidden"
        style={{ backgroundColor: "#0A0E1A" }}
      >
        {/* Tech grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(31,36,56,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(31,36,56,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />

        <div className="ms-container relative z-10">
          <p className="section-marker mb-10" style={{ color: "#5CA7F3" }}>
            04 / DARK SECTION · NAVY UNDERTONE BASE
          </p>

          <div className="grid gap-12 lg:grid-cols-2 mb-12">
            {/* Dark technical elements */}
            <div className="space-y-8">
              <div>
                <p className="eyebrow mb-4" style={{ color: "#8B92A8" }}>
                  Section Markers on Dark
                </p>
                <div className="space-y-2">
                  <p className="section-marker" style={{ color: "#5CA7F3" }}>01 / AI PRACTICE</p>
                  <p className="section-marker" style={{ color: "#5CA7F3" }}>02 / DATA ENGINEERING</p>
                  <p className="section-marker" style={{ color: "#5CA7F3" }}>03 / CLOUD MODERNIZATION</p>
                </div>
              </div>

              <div>
                <p className="eyebrow mb-4" style={{ color: "#8B92A8" }}>Metadata Strip on Dark</p>
                <div
                  className="py-2.5 px-4 rounded-xs"
                  style={{ border: "1px solid #1F2438" }}
                >
                  <p className="technical-meta" style={{ color: "#8B92A8" }}>
                    DELIVERY · 2024–PRESENT · LEGAL VERTICAL · CONFIDENTIAL
                  </p>
                </div>
              </div>

              <div>
                <p className="eyebrow mb-3" style={{ color: "#8B92A8" }}>Live Status on Dark</p>
                <div className="flex items-center gap-2">
                  <span
                    className="status-dot"
                    style={{ backgroundColor: "#5CA7F3" }}
                  />
                  <span className="technical-meta" style={{ color: "#E8EAED" }}>
                    STATUS: ACTIVE PARTNER
                  </span>
                </div>
              </div>
            </div>

            {/* Dark stat callouts */}
            <div className="space-y-8">
              <div>
                <p className="eyebrow mb-6" style={{ color: "#8B92A8" }}>
                  Stat Callouts on Dark
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="stat-large" style={{ color: "#E8EAED" }}>250+</p>
                    <p className="stat-label mt-1" style={{ color: "#8B92A8" }}>CONSULTANTS DEPLOYED</p>
                  </div>
                  <div>
                    <p className="stat-large" style={{ color: "#E8EAED" }}>20</p>
                    <p className="stat-label mt-1" style={{ color: "#8B92A8" }}>YEARS OF DELIVERY</p>
                  </div>
                </div>
              </div>

              <div
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: "#131829",
                  border: "1px solid #1F2438",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.40)",
                }}
              >
                <p className="eyebrow mb-2" style={{ color: "#5CA7F3" }}>
                  ELEVATED CARD · DARK
                </p>
                <h3 className="font-sans text-xl font-semibold mb-2" style={{ color: "#E8EAED" }}>
                  AI Enablement for Federal Agencies
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "#8B92A8" }}>
                  Structured delivery framework for responsible AI adoption across
                  government programs. Compliant, auditable, and built to last.
                </p>
              </div>
            </div>
          </div>

          {/* Dark color reference */}
          <div className="pt-8" style={{ borderTop: "1px solid #1F2438" }}>
            <p className="eyebrow mb-4" style={{ color: "#8B92A8" }}>Dark Token Reference</p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {darkColors.map((c) => (
                <div key={c.hex} className="flex flex-col gap-2">
                  <div
                    className="h-12 rounded-md"
                    style={{
                      backgroundColor: c.hex,
                      border: "1px solid #1F2438",
                    }}
                  />
                  <div>
                    <p className="font-mono text-xs font-medium" style={{ color: "#5CA7F3" }}>
                      {c.hex}
                    </p>
                    <p className="font-sans text-xs" style={{ color: "#8B92A8" }}>
                      {c.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="ms-section py-8 border-t border-[rgba(0,31,101,0.1)]">
        <div className="ms-container flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="technical-meta text-charcoal-700">
            MRGNTWN.WV · BRSL · IND
          </p>
          <p className="technical-meta text-charcoal-700">
            M&S CONSULTING · DESIGN FOUNDATION · NOT FOR DISTRIBUTION
          </p>
        </div>
      </footer>
    </div>
  );
}

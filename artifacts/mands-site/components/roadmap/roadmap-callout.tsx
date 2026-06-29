import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Gauge, ListOrdered, MapPin, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

const DELIVERABLES = [
  {
    icon: Gauge,
    title: "Readiness score",
    body: "A 0–100 score and maturity tier based on your answers.",
  },
  {
    icon: MapPin,
    title: "Where to start",
    body: "The roadmap step we recommend tackling first.",
  },
  {
    icon: ListOrdered,
    title: "Top priorities",
    body: "The three dimensions that need the most attention.",
  },
  {
    icon: BookOpen,
    title: "Full guide",
    body: "The complete 8-step AI Roadmap, ready to download.",
  },
] as const;

/**
 * Reusable dark roadmap promo banner. Threaded into the homepage (bottom) and
 * the AI practice page to surface the AI Roadmap as the lead-gen resource it is.
 */
export function RoadmapCallout() {
  return (
    <section style={{ backgroundColor: "#0A0E1A" }}>
      <div className="ms-container py-20 lg:py-24">
        <FadeIn>
          <div
            className="relative overflow-hidden rounded-3xl px-8 py-12 sm:px-12 lg:px-16 lg:py-16"
            style={{
              background: "linear-gradient(135deg, #0F1424 0%, #1A1230 60%, #2C1A4A 100%)",
              border: "1px solid rgba(184,164,232,0.2)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-30 blur-2xl"
              style={{ background: "radial-gradient(circle, #F4A8C0, transparent 70%)" }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full opacity-25 blur-2xl"
              style={{ background: "radial-gradient(circle, #8FD3E8, transparent 70%)" }}
            />

            <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
              {/* ── Left: the pitch ── */}
              <div>
                <div
                  className="mb-5 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5"
                  style={{ border: "1px solid rgba(184,164,232,0.3)" }}
                >
                  <Sparkles size={13} color="#F4A8C0" />
                  <span
                    className="font-sans uppercase"
                    style={{ fontSize: "0.68rem", letterSpacing: "0.16em", color: "#B8A4E8", fontWeight: 600 }}
                  >
                    Free interactive resource
                  </span>
                </div>

                <h2
                  className="font-serif font-medium text-white"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", lineHeight: 1.12 }}
                >
                  How ready is your organization for AI?
                </h2>

                <p
                  className="mt-4 max-w-xl font-sans"
                  style={{ fontSize: "1.05rem", lineHeight: 1.65, color: "rgba(233,226,245,0.78)" }}
                >
                  Answer eight quick questions — about two minutes — and see where you stand across strategy,
                  data, platform, automation, and more.
                </p>

                <p
                  className="mt-3 max-w-xl font-sans"
                  style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "rgba(233,226,245,0.58)" }}
                >
                  No sales call required. Enter your email to unlock your personalized results and the full guide.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link
                    href="/ai-roadmap"
                    className="font-sans inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-transform duration-200 hover:scale-[1.02]"
                    style={{
                      background: "linear-gradient(90deg, #8FB8F0, #B8A4E8 55%, #F4A8C0)",
                      color: "#0A0E1A",
                      fontSize: "0.9rem",
                    }}
                  >
                    Take the assessment <ArrowRight size={16} />
                  </Link>
                  <span className="font-sans" style={{ fontSize: "0.82rem", color: "rgba(233,226,245,0.5)" }}>
                    8 steps · ~2 minutes · instant results
                  </span>
                </div>
              </div>

              {/* ── Right: what you actually get (not a fake score) ── */}
              <div
                className="overflow-hidden rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(184,164,232,0.18)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
                }}
              >
                <div className="relative h-36 w-full sm:h-40">
                  <Image
                    src="/media/ai-assessment-featured.jpg"
                    alt=""
                    aria-hidden
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 20%, rgba(15,20,36,0.85) 85%, rgba(15,20,36,0.98) 100%)",
                    }}
                  />
                </div>

                <div className="px-6 pb-6 pt-2 sm:px-7 sm:pb-7">
                  <p
                    className="mb-4 font-sans uppercase"
                    style={{ fontSize: "0.68rem", letterSpacing: "0.18em", color: "#8FB8F0", fontWeight: 600 }}
                  >
                    What you&rsquo;ll get
                  </p>
                  <ul className="flex flex-col gap-3.5">
                    {DELIVERABLES.map(({ icon: Icon, title, body }) => (
                      <li key={title} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                          style={{ background: "rgba(184,164,232,0.12)", border: "1px solid rgba(184,164,232,0.22)" }}
                        >
                          <Icon size={15} color="#C9BAF0" strokeWidth={1.8} />
                        </span>
                        <div>
                          <p className="font-sans font-semibold text-white" style={{ fontSize: "0.88rem", lineHeight: 1.3 }}>
                            {title}
                          </p>
                          <p className="font-sans" style={{ fontSize: "0.8rem", lineHeight: 1.5, color: "rgba(233,226,245,0.62)" }}>
                            {body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

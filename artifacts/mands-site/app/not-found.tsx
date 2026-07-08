import Link from "next/link";
import { ClientHeader } from "@/components/layout/client-header";
import { Footer } from "@/components/layout/footer";

const HELPFUL_LINKS = [
  { label: "What We Do", href: "/service-lines" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
];

export default function NotFound() {
  return (
    <>
      <ClientHeader />
      <main className="overflow-hidden bg-ms-paper">
        <section className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(120deg,rgba(239,234,219,0.95)_0%,rgba(255,255,255,1)_46%,rgba(201,229,255,0.45)_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,31,101,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,31,101,0.07) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          <div className="ms-container relative grid min-h-[68vh] items-center gap-12 py-20 md:py-28 lg:grid-cols-[minmax(0,1fr)_420px] lg:py-32">
            <div className="max-w-3xl">
              <p className="eyebrow mb-5 text-[#5CA7F3]">404 / Strategic Detour</p>
              <h1 className="mb-6 text-ms-navy">This page took an unscheduled offsite.</h1>
              <p className="marketing-copy mb-8 max-w-2xl text-[#475569]">
                We checked the roadmap, the backlog, and the snack drawer. This URL is
                not where it said it would be. Let&rsquo;s get you back to something useful.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-ms-navy px-8 font-sans text-base font-semibold tracking-wide text-ms-paper transition-colors duration-200 hover:bg-[#00185A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy focus-visible:ring-offset-2"
                >
                  Back to Home
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-ms-navy bg-transparent px-8 font-sans text-base font-semibold tracking-wide text-ms-navy transition-colors duration-200 hover:bg-ms-navy hover:text-ms-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy focus-visible:ring-offset-2"
                >
                  Ask a Human
                </Link>
              </div>
            </div>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] bg-[#5CA7F3]/15 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[1.5rem] border border-[#001F65]/10 bg-white/90 p-6 shadow-[0_24px_80px_rgba(0,31,101,0.12)] backdrop-blur">
                <div className="mb-6 flex items-center justify-between gap-4 border-b border-[#001F65]/10 pb-5">
                  <div>
                    <p className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-[#5CA7F3]">
                      Lost Signal
                    </p>
                    <p className="mt-1 font-serif text-6xl font-semibold leading-none text-ms-navy">
                      404
                    </p>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ms-cream font-sans text-2xl font-bold text-ms-navy">
                    ?
                  </div>
                </div>

                <p className="mb-5 font-sans text-sm font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                  Recalculate route
                </p>
                <div className="grid gap-2">
                  {HELPFUL_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group flex items-center justify-between rounded-lg border border-[#001F65]/10 bg-[#F8FAFC] px-4 py-3 font-sans text-sm font-semibold text-ms-navy transition-all duration-200 hover:border-[#001F65]/25 hover:bg-ms-cream/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy"
                    >
                      {link.label}
                      <span
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      >
                        -&gt;
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

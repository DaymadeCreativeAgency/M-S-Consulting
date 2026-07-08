"use client";

import Link from "next/link";
import { Header } from "@/components/layout/header";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <Header alwaysSolid />
      <main className="bg-ms-paper">
        <section className="ms-container flex min-h-[62vh] items-center py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="eyebrow mb-5 text-[#C82F07]">Something went wrong</p>
            <h1 className="mb-6 text-ms-navy">We hit a temporary snag.</h1>
            <p className="marketing-copy mb-8 max-w-2xl text-[#475569]">
              The page did not load as expected. Try again, or return home and keep
              browsing from there.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={reset}
                className="inline-flex h-12 items-center justify-center rounded-md bg-ms-navy px-8 font-sans text-base font-semibold tracking-wide text-ms-paper transition-colors duration-200 hover:bg-[#00185A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy focus-visible:ring-offset-2"
              >
                Try Again
              </button>
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-md border border-ms-navy bg-transparent px-8 font-sans text-base font-semibold tracking-wide text-ms-navy transition-colors duration-200 hover:bg-ms-navy hover:text-ms-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ms-navy focus-visible:ring-offset-2"
              >
                Back to Home
              </Link>
            </div>
            {error.digest ? (
              <p className="mt-8 font-sans text-sm text-[#64748B]">Error reference: {error.digest}</p>
            ) : null}
          </div>
        </section>
      </main>
      <footer className="bg-[#101510] px-6 py-8 text-center font-sans text-sm font-medium text-white">
        M&amp;S Consulting
      </footer>
    </>
  );
}

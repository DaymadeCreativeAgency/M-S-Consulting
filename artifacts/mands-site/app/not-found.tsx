import Link from "next/link";
import { ClientHeader } from "@/components/layout/client-header";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <>
      <ClientHeader />
      <main className="bg-ms-paper">
        <section className="ms-container flex min-h-[62vh] items-center py-24 md:py-32">
          <div className="max-w-3xl">
            <p className="eyebrow mb-5 text-[#5CA7F3]">404</p>
            <h1 className="mb-6 text-ms-navy">This page has moved out of range.</h1>
            <p className="marketing-copy mb-8 max-w-2xl text-[#475569]">
              The link may be outdated, or the page may no longer exist. You can head
              back home or use the navigation to find the M&amp;S Consulting resource
              you need.
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
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

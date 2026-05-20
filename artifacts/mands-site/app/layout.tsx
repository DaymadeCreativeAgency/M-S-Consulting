import type { Metadata } from "next";
import { Source_Serif_4, Figtree } from "next/font/google";
import "./globals.css";

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://mandsconsulting.com/#organization",
      name: "M&S Consulting",
      alternateName: "Management & Solutions Consulting",
      url: "https://mandsconsulting.com",
      logo: {
        "@type": "ImageObject",
        url: "https://mandsconsulting.com/media/logos/logo-h-blue.png",
        width: 200,
        height: 60,
      },
      description:
        "Enterprise digital transformation consulting firm with 20+ years of delivery experience in AI, cloud, and systems modernization.",
      foundingDate: "2002",
      numberOfEmployees: { "@type": "QuantitativeValue", value: 250 },
      areaServed: "United States",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Morgantown",
        addressRegion: "WV",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: "https://mandsconsulting.com/contact",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://mandsconsulting.com/#website",
      url: "https://mandsconsulting.com",
      name: "M&S Consulting",
      description: "Enterprise digital transformation consulting.",
      publisher: { "@id": "https://mandsconsulting.com/#organization" },
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "M&S Consulting",
    template: "%s | M&S Consulting",
  },
  description:
    "M&S Consulting — enterprise digital transformation consulting in Morgantown, WV. Twenty years of delivery experience in AI, cloud, and systems modernization.",
  metadataBase: new URL("https://mandsconsulting.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mandsconsulting.com",
    siteName: "M&S Consulting",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1280,
        height: 720,
        alt: "M&S Consulting — Enterprise Digital Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mandsconsulting",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sourceSerif4.variable} ${figtree.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

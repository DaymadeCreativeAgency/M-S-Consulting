import type { Metadata } from "next";
import { Source_Serif_4, Figtree, JetBrains_Mono } from "next/font/google";
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

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

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
      className={`${sourceSerif4.variable} ${figtree.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

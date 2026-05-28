import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/blog/:slug(human-coded-.*)",
        destination: "/podcast/:slug",
        permanent: true,
      },
      {
        source: "/blog/ai-in-2024",
        destination: "/podcast/ai-in-2024",
        permanent: true,
      },
    ];
  },
  experimental: {
    mdxRs: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "logo.clearbit.com" },
    ],
  },
};

export default withMDX(nextConfig);

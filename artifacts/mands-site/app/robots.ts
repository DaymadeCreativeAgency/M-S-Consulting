import type { MetadataRoute } from "next";

const BASE_URL = "https://www.mandsconsulting.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/search"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}

import type { MetadataRoute } from "next";
import { SITE_OFFLINE } from "@/lib/site-status";

export default function robots(): MetadataRoute.Robots {
  if (SITE_OFFLINE) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://schemasync.ai/sitemap.xml",
  };
}

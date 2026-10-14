import type { MetadataRoute } from "next";
import { obtenirUrlSite } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  const base = obtenirUrlSite();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}

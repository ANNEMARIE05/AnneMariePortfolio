import type { MetadataRoute } from "next";
import { SLUGS_ETUDES_CAS } from "@/data/etudes-cas";
import { obtenirUrlSite } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = obtenirUrlSite();
  const maintenant = new Date();

  const pagesProjets = SLUGS_ETUDES_CAS.map((slug) => ({
    url: `${base}/projets/${slug}`,
    lastModified: maintenant,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: base,
      lastModified: maintenant,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...pagesProjets,
  ];
}

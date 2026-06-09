import type { MetadataRoute } from "next";
import { AMSTERDAM_STADSDELEN } from "@/data/amsterdam-stadsdelen";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL;
  const lastModified = new Date();

  const stadsdeelPages: MetadataRoute.Sitemap = AMSTERDAM_STADSDELEN.map((s) => ({
    url: `${base}/lachgas-bestellen/${s.slug}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [
    { url: base, lastModified, changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/faq`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/voorwaarden`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    ...stadsdeelPages,
  ];
}

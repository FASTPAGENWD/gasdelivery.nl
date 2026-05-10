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
    priority: 0.75,
  }));

  return [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/faq`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.4 },
    { url: `${base}/voorwaarden`, lastModified, changeFrequency: "yearly", priority: 0.4 },
    ...stadsdeelPages,
  ];
}

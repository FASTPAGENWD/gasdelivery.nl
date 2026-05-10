/** Canoniek: apex (zonder www). Op Vercel: NEXT_PUBLIC_SITE_URL=https://gasdelivery.nl */
const rawSiteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://gasdelivery.nl").replace(/\/$/, "");

/** www → apex zodat sitemap/OG/JSON-LD overal hetzelfde zijn */
export const SITE_URL = rawSiteUrl.replace(/^https:\/\/www\.gasdelivery\.nl$/i, "https://gasdelivery.nl");

export const SITE_NAME = "Gasdelivery.nl";

export const SITE_DESCRIPTION =
  "Lachgas bestellen Amsterdam? 24/7 bereikbaar via WhatsApp en telefoon. Transparante prijs, snelle levering en persoonlijke service.";

export const SITE_KEYWORDS = [
  "lachgas",
  "lachgas Amsterdam",
  "lachgas kopen Amsterdam",
  "lachgas bestellen Amsterdam",
  "lachgas bezorgen Amsterdam",
  "lachgas aan huis",
  "lachgas levering Amsterdam",
  "lachgas tank Amsterdam",
  "Gasdelivery",
  "Amsterdam",
  "lachgas bestellen",
  "24/7 lachgas",
  "lachgas tank",
  "lachgas 2kg",
  "snelle lachgas bezorging",
];

export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

/** Standaard share-afbeelding (Next.js file convention `opengraph-image.tsx`). */
export const DEFAULT_OG_IMAGE_PATH = "/opengraph-image" as const;

export function defaultOgImageUrl(): string {
  return absoluteUrl(DEFAULT_OG_IMAGE_PATH);
}

/** Canoniek: apex (zonder www). Op Vercel: NEXT_PUBLIC_SITE_URL=https://gasdelivery.nl */
const rawSiteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://gasdelivery.nl").replace(/\/$/, "");

/** www → apex zodat sitemap/OG/JSON-LD overal hetzelfde zijn */
export const SITE_URL = rawSiteUrl.replace(/^https:\/\/www\.gasdelivery\.nl$/i, "https://gasdelivery.nl");

export const SITE_NAME = "Gasdelivery.nl";

export const SITE_DESCRIPTION =
  "Lachgas Amsterdam — Gasdelivery.nl bezorgt lachgas aan huis in alle Amsterdamse stadsdelen. 24/7 bereikbaar via WhatsApp, vaste prijs, snelle levering. Lachgas bestellen Amsterdam was nog nooit zo makkelijk.";

export const SITE_KEYWORDS = [
  // Primaire zoekwoorden — lachgas amsterdam eerst
  "lachgas amsterdam",
  "lachgas bestellen amsterdam",
  "lachgas bezorgen amsterdam",
  "lachgas kopen amsterdam",
  "lachgas levering amsterdam",
  "lachgas amsterdam bezorging",
  "lachgas amsterdam 24/7",
  "lachgas amsterdam aan huis",
  "lachgas amsterdam bestellen",
  "lachgas",
  "lachgas bestellen",
  "lachgas bezorging",
  "lachgas aan huis",
  "lachgas tank amsterdam",
  // Longtail productgericht
  "lachgas tank 2kg amsterdam",
  "lachgas tank bestellen",
  "lachgas cilinder bestellen",
  "lachgas tank thuisbezorgd",
  "lachgas tank kopen",
  "lachgas bestellen thuis",
  "lachgas aan huis bestellen",
  "lachgas aan huis amsterdam",
  "lachgas levering aan huis",
  "lachgas amsterdam thuisbezorgd",
  // Service & timing
  "24/7 lachgas amsterdam",
  "snelle lachgas bezorging amsterdam",
  "lachgas zelfde dag bezorgd amsterdam",
  "lachgas spoed levering amsterdam",
  "lachgas avond bezorging amsterdam",
  "lachgas nacht bezorging amsterdam",
  "lachgas snel bestellen amsterdam",
  // Stadsdeelspecifiek
  "lachgas centrum amsterdam",
  "lachgas noord amsterdam",
  "lachgas zuid amsterdam",
  "lachgas oost amsterdam",
  "lachgas west amsterdam",
  "lachgas zuidoost amsterdam",
  "lachgas nieuw-west amsterdam",
  "lachgas de pijp amsterdam",
  "lachgas jordaan amsterdam",
  "lachgas bijlmer amsterdam",
  // Merk & bedrijf
  "Gasdelivery",
  "Gasdelivery.nl",
  "gasdelivery amsterdam",
  "lachgas bezorger amsterdam",
  // Intent-gericht
  "waar kan ik lachgas kopen amsterdam",
  "lachgas bestellen via whatsapp amsterdam",
  "lachgas prijs amsterdam",
  "goedkoop lachgas amsterdam",
  "betrouwbare lachgas levering amsterdam",
  "lachgas kwaliteit amsterdam",
  "lachgas dealer amsterdam",
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

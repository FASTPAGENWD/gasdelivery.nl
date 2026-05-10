import type { MetadataRoute } from "next";

import { SITE_NAME, SITE_URL } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Gasdelivery",
    description:
      "Lachgas bestellen Amsterdam. 24/7 bereikbaar via WhatsApp en telefoon. Snelle levering en transparante prijs.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3f3f46",
    lang: "nl",
    id: SITE_URL,
  };
}

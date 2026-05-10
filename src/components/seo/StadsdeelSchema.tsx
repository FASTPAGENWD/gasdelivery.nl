import { JsonLd } from "./JsonLd";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";
import { PHONE_E164 } from "@/lib/contact";
import type { StadsdeelContent } from "@/data/amsterdam-stadsdelen";

/** Service + lokale landingspagina voor Google (indexeerbaar). */
export function StadsdeelSchema({ stadsdeel }: { stadsdeel: StadsdeelContent }) {
  const pageUrl = absoluteUrl(`/lachgas-bestellen/${stadsdeel.slug}`);
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: `Lachgas bestellen ${stadsdeel.h1Name}`,
    description: stadsdeel.metaDescription,
    url: pageUrl,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Place",
      name: stadsdeel.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: stadsdeel.slug === "weesp" ? "Weesp" : "Amsterdam",
        addressCountry: "NL",
      },
    },
    serviceType: "Lachgas levering",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: pageUrl,
      servicePhone: PHONE_E164,
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `Lachgas bestellen ${stadsdeel.h1Name}`,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <JsonLd data={service} />
      <JsonLd data={breadcrumb} />
    </>
  );
}

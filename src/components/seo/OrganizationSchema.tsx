import { PHONE_TEL } from "@/lib/contact";
import { getShowcaseImageSrc } from "@/lib/showcase-image";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  defaultOgImageUrl,
} from "@/lib/site";
import { JsonLd } from "./JsonLd";

const telE164 = PHONE_TEL.replace("tel:", "");

export function OrganizationSchema() {
  const showcase = getShowcaseImageSrc();
  const images = showcase ? [absoluteUrl(showcase), defaultOgImageUrl()] : [defaultOgImageUrl()];

  const org = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: ["Gasdelivery", "Gas Delivery Amsterdam", "Lachgas Amsterdam"],
    description: SITE_DESCRIPTION,
    slogan: "Lachgas Amsterdam — snel aan huis bezorgd, 24/7 bereikbaar",
    url: SITE_URL,
    telephone: telE164,
    email: "info@gasdelivery.nl",
    logo: { "@type": "ImageObject", url: absoluteUrl("/icon") },
    image: images,
    priceRange: "€€",
    serviceType: "Lachgas levering en bezorging",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Bank transfer, iDEAL",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Amsterdam",
      addressRegion: "Noord-Holland",
      postalCode: "1000",
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.3676,
      longitude: 4.9041,
    },
    hasMap: "https://maps.google.com/?q=Amsterdam,+Noord-Holland,+NL",
    areaServed: [
      { "@type": "City", name: "Amsterdam" },
      { "@type": "AdministrativeArea", name: "Amsterdam Centrum" },
      { "@type": "AdministrativeArea", name: "Amsterdam Noord" },
      { "@type": "AdministrativeArea", name: "Amsterdam Zuid" },
      { "@type": "AdministrativeArea", name: "Amsterdam Oost" },
      { "@type": "AdministrativeArea", name: "Amsterdam West" },
      { "@type": "AdministrativeArea", name: "Amsterdam Zuidoost" },
      { "@type": "AdministrativeArea", name: "Amsterdam Nieuw-West" },
      { "@type": "AdministrativeArea", name: "Weesp" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: telE164,
      contactType: "customer service",
      contactOption: "TollFree",
      availableLanguage: ["Dutch", "nl"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Lachgas tanks Amsterdam",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Lachgas tank 2 kg",
            description: "Lachgas cilinder 2 kg — thuisbezorgd in Amsterdam en omgeving",
          },
          availability: "https://schema.org/InStock",
          areaServed: { "@type": "City", name: "Amsterdam" },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Lachgas tank 5 kg",
            description: "Lachgas cilinder 5 kg — thuisbezorgd in Amsterdam en omgeving",
          },
          availability: "https://schema.org/InStock",
          areaServed: { "@type": "City", name: "Amsterdam" },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Lachgas tank 10 kg",
            description: "Lachgas cilinder 10 kg — thuisbezorgd in Amsterdam en omgeving",
          },
          availability: "https://schema.org/InStock",
          areaServed: { "@type": "City", name: "Amsterdam" },
        },
      ],
    },
    knowsAbout: [
      "Lachgas levering",
      "Lachgas tanks",
      "Lachgas bezorging Amsterdam",
      "Lachgas aan huis",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "nl-NL",
  };

  return (
    <>
      <JsonLd data={org} />
      <JsonLd data={website} />
    </>
  );
}

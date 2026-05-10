import { PHONE_LABEL } from "@/lib/contact";

/** Platte tekst voor SEO (FAQ-schema) en rendering op /faq */
export const faqItems: { question: string; answer: string }[] = [
  {
    question: "Wat levert Gasdelivery.nl?",
    answer:
      "Wij leveren lachgas tanks van de beste kwaliteit aan huis of op een afgesproken locatie in Amsterdam en omgeving, met nadruk op snelle service, duidelijke communicatie en een transparante prijs — zoals op de homepage beschreven.",
  },
  {
    question: "Hoe kan ik bestellen?",
    answer:
      "Je kunt ons bereiken via de app, telefonisch of WhatsApp. Je geeft je gewenste hoeveelheid door; daarna ontvang je een bevestiging met levermoment en totaalbedrag. Vervolgens bezorgen we op het afgesproken adres. Zie ook de sectie “Zo werkt het” op de homepage.",
  },
  {
    question: "Zijn jullie 24/7 bereikbaar?",
    answer:
      "Ja — op de website vermelden wij dat we 24/7 bereikbaar zijn voor contact en planning. Concrete levertijden stemmen we altijd met je af in de bevestiging.",
  },
  {
    question: "In welk gebied leveren jullie?",
    answer:
      "Ons werkgebied is Amsterdam en omgeving. Twijfel je of jouw adres binnen de regio valt? Neem gerust contact op via WhatsApp of telefoon.",
  },
  {
    question: "Hoe zit het met de prijs?",
    answer:
      "Wij werken met één duidelijke prijs: wat je bij de bevestiging ziet, is wat je betaalt — inclusief levering, zonder verborgen kosten op de bon (zoals op de site uitgelegd).",
  },
  {
    question: "Hoe neem ik contact op?",
    answer: `Je kunt WhatsApp gebruiken, bellen (${PHONE_LABEL}) of mailen naar info@gasdelivery.nl. Knoppen vind je in de header en onderaan de homepage.`,
  },
  {
    question: "Is lachgas veilig bij levering?",
    answer:
      "Onze bezorgers werken volgens vaste veiligheidsrichtlijnen en wij leveren kwalitatief lachgas. Bij overdracht helpen we zodat dit veilig verloopt. Gebruik het product altijd verantwoord en volgens de wet- en regelgeving.",
  },
];

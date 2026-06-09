import Image from "next/image";
import { getShowcaseImageSrc } from "@/lib/showcase-image";

const showcaseAlt = "Lachgas bezorging Amsterdam — Gasdelivery.nl showcase";
const productAlt = "Lachgas Amsterdam — FASTGAS cilinder 2 kg, thuisbezorgd door Gasdelivery.nl";

const features = [
  {
    title: "Flexibele levering",
    description:
      "Kies een moment dat past bij jouw schema. We zijn 24/7 beschikbaar en we houden je op de hoogte van de route en aankomst.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Veilig & gecontroleerd",
    description:
      "Wij leveren lachgas van de beste kwaliteit. Onze bezorgers werken volgens vaste veiligheidsrichtlijnen. Jij weet wat je krijgt.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Eén duidelijke prijs",
    description:
      "Geen verborgen kosten op de bon. Wat je ziet bij het bestellen, betaal je — inclusief levering.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
      </svg>
    ),
  },
  {
    title: "Persoonlijk contact",
    description:
      "Vragen over je bestelling of Lachgas? Je bereikt ons direct — geen wachtrijen of anonieme chatbots.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
  },
];

export function FeatureGrid() {
  const showcaseSrc = getShowcaseImageSrc();

  return (
    <section id="voordelen" className="scroll-mt-20 px-4 pb-6 pt-20 sm:px-6 sm:pb-8 sm:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Waarom kiezen voor lachgas Amsterdam via Gasdelivery</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Lachgas Amsterdam bezorgen doen wij anders: minder bellen, minder wachten en meer zekerheid bij elke bestelling. Wij leveren lachgas van de beste kwaliteit in heel Amsterdam — duidelijke afspraken, heldere prijs, snelle en betrouwbare bezorging in alle stadsdelen.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {features.map((f) => (
            <li
              key={f.title}
              className="group rounded-2xl border border-[var(--border)] bg-surface p-6 transition hover:border-accent/25 hover:bg-surface-elevated sm:p-7"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-subtle text-accent transition group-hover:ring-1 group-hover:ring-[var(--ring)]">
                {f.icon}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.description}</p>
            </li>
          ))}
        </ul>

        {showcaseSrc && (
          <figure className="mt-16 sm:mt-20">
            <div className="mx-auto grid w-full max-w-4xl items-center gap-8 sm:grid-cols-[1fr_auto]">
              <Image
                src={showcaseSrc}
                alt={showcaseAlt}
                width={700}
                height={440}
                quality={92}
                className="w-full rounded-2xl object-cover sm:rounded-3xl"
              />
              <Image
                src="/gasdelivery-product.png"
                alt={productAlt}
                width={220}
                height={220}
                quality={92}
                className="mx-auto hidden object-contain drop-shadow-xl sm:block"
              />
            </div>
          </figure>
        )}
      </div>
    </section>
  );
}

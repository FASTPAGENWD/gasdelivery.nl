import Image from "next/image";
import Link from "next/link";
import { PHONE_LABEL, PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

const productAlt =
  "Lachgas Amsterdam — FASTGAS cilinder bezorgd aan huis door Gasdelivery.nl";

export function Hero() {
  return (
    <section className="hero-section-bg relative overflow-hidden">
      <div className="hero-grid-overlay pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_min(44%,480px)] lg:gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              #1 Lachgas Amsterdam
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl sm:leading-[1.06] lg:text-6xl">
              Lachgas Amsterdam —{" "}
              <span className="text-muted">snel aan huis bezorgd, 24/7 bereikbaar.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Lachgas bestellen in Amsterdam? Wij bezorgen kwaliteitstanks in alle Amsterdamse stadsdelen —
              helder tarief, vriendelijke service, altijd persoonlijk contact.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-accent-hover sm:w-auto"
              >
                WhatsApp · direct contact
              </a>
              <a
                href={PHONE_TEL}
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border-2 border-[var(--border)] bg-surface-elevated px-8 py-3.5 text-base font-semibold text-foreground transition hover:border-accent/35 sm:w-auto"
              >
                Bellen · {PHONE_LABEL}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
                24/7 bereikbaar in Amsterdam
              </span>
              <Link href="#werkwijze" className="font-medium text-accent underline-offset-4 hover:underline">
                Zo werkt bestellen →
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <Image
              src="/gasdelivery-product-angle.png"
              alt={productAlt}
              width={480}
              height={540}
              priority
              quality={92}
              className="w-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 border-t border-[var(--border)] pt-12 sm:grid-cols-3 sm:gap-8">
          {[
            { value: "24/7", label: "Bereikbaar wanneer jij nodig hebt" },
            { value: "Helder", label: "Prijs en afspraak vooraf duidelijk" },
            { value: "Amsterdam", label: "Lokaal werkgebied & snelle rit" },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm leading-snug text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

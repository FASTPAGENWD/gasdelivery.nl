import { PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

export function FinalCTA() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-surface-elevated px-6 py-14 text-center sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 70% 80% at 50% 100%, var(--glow), transparent)",
            }}
          />
          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Lachgas Amsterdam bestellen?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted sm:text-base">
              WhatsApp ons of bel direct — wij bezorgen lachgas 24/7 in heel Amsterdam en omgeving.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-accent-hover"
              >
                WhatsApp
              </a>
              <a
                href={PHONE_TEL}
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[var(--border)] px-8 py-3.5 text-base font-medium text-foreground transition hover:border-accent/35"
              >
                Bellen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

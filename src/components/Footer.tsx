import Link from "next/link";
import { PHONE_LABEL, PHONE_TEL } from "@/lib/contact";
import { AMSTERDAM_STADSDELEN } from "@/data/amsterdam-stadsdelen";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-[var(--border)] bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Gasdelivery<span className="text-accent">.nl</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Betrouwbare lachgas levering in Amsterdam aan huis of op locatie. Snel, duidelijk en persoonlijk contact.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="mailto:info@gasdelivery.nl" className="text-foreground/90 hover:text-accent">
                  info@gasdelivery.nl
                </a>
              </li>
              <li>
                <a href={PHONE_TEL} className="text-foreground/90 hover:text-accent">
                  {PHONE_LABEL}
                </a>
              </li>
              <li className="text-muted">Openingstijden: 24/7</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Juridisch</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/voorwaarden" className="text-muted hover:text-foreground">
                  Voorwaarden
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted hover:text-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--border)] pt-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Bezorggebieden en info</p>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Per gebied in de gemeente Amsterdam: waar we leveren, praktische tips en wat je kunt verwachten. Kies hieronder je stadsdeel voor meer uitleg.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {AMSTERDAM_STADSDELEN.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/lachgas-bestellen/${s.slug}`}
                  className="text-sm text-muted underline-offset-2 hover:text-foreground hover:underline"
                >
                  Lachgas bestellen {s.h1Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[var(--border)] pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Gasdelivery.nl</span>
        </div>
      </div>
    </footer>
  );
}

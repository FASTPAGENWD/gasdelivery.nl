import Link from "next/link";
import { PHONE_LABEL, PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

const nav = [
  { href: "#voordelen", label: "Voordelen" },
  { href: "#werkwijze", label: "Werkwijze" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground transition hover:text-accent"
        >
          Gasdelivery<span className="text-accent">.nl</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Hoofdmenu">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={PHONE_TEL}
            className="hidden rounded-full border border-[var(--border)] bg-surface-elevated px-4 py-2 text-sm font-medium text-foreground transition hover:border-accent/40 hover:bg-surface sm:inline-flex"
          >
            Bellen · {PHONE_LABEL}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-hover"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

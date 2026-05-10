import type { ReactNode } from "react";
import Link from "next/link";

export function LegalShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <p className="text-sm text-muted">
        <Link href="/" className="text-accent hover:text-accent-hover">
          ← Terug naar home
        </Link>
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h1>
      <div className="prose-custom mt-10">{children}</div>
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AMSTERDAM_STADSDELEN,
  type StadsdeelSlug,
  getStadsdeel,
} from "@/data/amsterdam-stadsdelen";
import { PHONE_LABEL, PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";
import { SITE_NAME, absoluteUrl } from "@/lib/site";
import { StadsdeelSchema } from "@/components/seo/StadsdeelSchema";

export const dynamicParams = false;

export function generateStaticParams(): { slug: StadsdeelSlug }[] {
  return AMSTERDAM_STADSDELEN.map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getStadsdeel(slug);
  if (!s) return {};

  const path = `/lachgas-bestellen/${s.slug}`;
  const url = absoluteUrl(path);
  const title = `Lachgas bestellen ${s.h1Name}`;

  return {
    title,
    description: s.metaDescription,
    keywords: [...s.keywords, "Gasdelivery", "lachgas Amsterdam"],
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      type: "website",
      locale: "nl_NL",
      url,
      siteName: SITE_NAME,
      title: `${title} | ${SITE_NAME}`,
      description: s.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description: s.metaDescription,
    },
  };
}

export default async function LachgasBestellenStadsdeelPage({ params }: Props) {
  const { slug } = await params;
  const stadsdeel = getStadsdeel(slug);
  if (!stadsdeel) notFound();

  return (
    <>
      <StadsdeelSchema stadsdeel={stadsdeel} />
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-sm text-muted">
          <Link href="/" className="text-accent hover:text-accent-hover">
            ← Terug naar home
          </Link>
        </p>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Lachgas bestellen {stadsdeel.h1Name}
        </h1>

        <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{stadsdeel.intro}</p>

        <div className="prose-custom mt-10">
          {stadsdeel.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={`${section.heading}-${i}`}>{p}</p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[var(--border)] bg-surface p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted">Direct bestellen</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Bel of WhatsApp ons voor lachgas in {stadsdeel.name}. Wij bevestigen beschikbaarheid en prijs.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-hover"
            >
              WhatsApp
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex flex-1 items-center justify-center rounded-full border border-[var(--border)] bg-surface-elevated px-6 py-3 text-sm font-medium text-foreground transition hover:border-foreground/20"
            >
              Bellen · {PHONE_LABEL}
            </a>
          </div>
        </div>
      </article>
    </>
  );
}

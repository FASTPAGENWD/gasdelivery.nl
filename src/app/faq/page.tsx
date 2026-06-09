import Link from "next/link";
import { FaqSchema } from "@/components/seo/FaqSchema";
import { LegalShell } from "@/components/LegalShell";
import { faqItems } from "@/data/faq";
import { legalPageMetadata } from "@/lib/seo-metadata";
import { PHONE_TEL, WHATSAPP_URL } from "@/lib/contact";

export const metadata = legalPageMetadata({
  title: "Veelgestelde vragen over lachgas bestellen Amsterdam",
  description:
    "Alles over lachgas bestellen in Amsterdam: bezorging, prijzen, levergebied, stadsdelen, 24/7 bereikbaarheid en contact met Gasdelivery.nl. Antwoord op de meest gestelde vragen.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <FaqSchema />
      <LegalShell title="Veelgestelde vragen">
        <p>
          Antwoorden gebaseerd op de informatie op deze website. Staat je vraag er niet tussen?{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          ,{" "}
          <a href={PHONE_TEL}>bellen</a> of{" "}
          <a href="mailto:info@gasdelivery.nl">mail</a> — we helpen je graag.
        </p>

        <dl className="mt-10 space-y-10">
          {faqItems.map((item) => (
            <div key={item.question}>
              <dt className="text-base font-semibold text-foreground">{item.question}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-12 text-sm text-muted">
          Meer juridische informatie:{" "}
          <Link href="/privacy" className="text-accent underline hover:text-accent-hover">
            Privacy
          </Link>
          {" · "}
          <Link href="/voorwaarden" className="text-accent underline hover:text-accent-hover">
            Voorwaarden
          </Link>
          .
        </p>
      </LegalShell>
    </>
  );
}

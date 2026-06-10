import { LegalShell } from "@/components/LegalShell";
import { legalPageMetadata } from "@/lib/seo-metadata";

export const metadata = legalPageMetadata({
  title: "Privacyverklaring",
  description:
    "Privacyverklaring van Gasdelivery.nl — lachgaslevering in Amsterdam, 24/7 bereikbaar via WhatsApp en telefoon.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacyverklaring">
      <p>
        Deze pagina beschrijft hoe Gasdelivery.nl omgaat met persoonsgegevens in lijn met hoe wij onze
        dienst aanbieden: <strong>lachgaslevering in Amsterdam en omgeving</strong>, bereikbaar via
        WhatsApp, telefoon en e-mail, met <strong>24/7 beschikbaarheid</strong> zoals op de website
        vermeld.
      </p>

      <h2>Verwerkingsverantwoordelijke</h2>
      <p>
        Gasdelivery.nl (hierna: &quot;wij&quot;). Voor vragen over privacy:{" "}
        <a href="mailto:info@gasdelivery.nl">info@gasdelivery.nl</a> of het telefoonnummer op de
        website.
      </p>

      <h2>Welke gegevens verwerken wij?</h2>
      <p>Afhankelijk van hoe je contact met ons opneemt of een bestelling plaatst, kan dat zijn:</p>
      <ul>
        <li>Naam en contactgegevens (telefoonnummer, e-mailadres, WhatsApp)</li>
        <li>Adres- en levergegevens (bezorgadres in Amsterdam of omgeving)</li>
        <li>Inhoud van berichten die je naar ons stuurt</li>
        <li>Technische gegevens bij bezoek aan de website (zoals IP-adres, browsertype), voor zover
          standaard server- of hostinglogs dat met zich meebrengen</li>
      </ul>

      <h2>Doeleinden</h2>
      <ul>
        <li>Het aannemen en uitvoeren van bestellingen en leveringen</li>
        <li>Contact over je bestelling, planning en bevestiging (zoals beschreven bij &quot;Zo werkt het&quot;)</li>
        <li>Beantwoorden van vragen en klantenservice</li>
        <li>Handhaving van onze overeenkomst en wettelijke verplichtingen</li>
      </ul>

      <h2>Grondslag</h2>
      <p>
        Verwerking geschiedt op basis van uitvoering van een overeenkomst, gerechtvaardigd belang
        (bijv. bereikbaarheid van de dienst) of — waar van toepassing — toestemming.
      </p>

      <h2>Bewaartermijn</h2>
      <p>
        Wij bewaren gegevens niet langer dan nodig voor de genoemde doeleinden, tenzij een langere
        bewaartermijn wettelijk verplicht is (bijv. administratie/fiscaal).
      </p>

      <h2>Delen met derden</h2>
      <p>
        Gegevens worden alleen gedeeld als dat nodig is voor de levering (bijv. bezorger) of als de
        wet dat vereist. Hosting van de website kan plaatsvinden bij een processor daarbij gelden passende afspraken waar van toepassing.
      </p>

      <h2>Jouw rechten</h2>
      <p>
        Onder de AVG heb je rechten op inzage, correctie, verwijdering, beperking, dataportabiliteit
        en bezwaar waar relevant. Neem contact op via het e-mailadres hierboven. Je kunt ook een
        klacht indienen bij de Autoriteit Persoonsgegevens.
      </p>

      <h2>Cookies</h2>
      <p>
        Deze site is opgezet als informatieve/landingpagina. Er worden geen marketingcookies
        geplaatst door ons; je provider of browser kan technische cookies of lokale opslag gebruiken
        voor de werking van de site.
      </p>

      <h2>Wijzigingen</h2>
      <p>
        Wij kunnen deze verklaring aanpassen. De datum op de site geldt als de actuele versie; bij
        grote wijzigingen vermelden we dat indien nodig op de website.
      </p>
    </LegalShell>
  );
}

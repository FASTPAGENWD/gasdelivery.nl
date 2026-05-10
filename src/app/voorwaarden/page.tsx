import { LegalShell } from "@/components/LegalShell";
import { legalPageMetadata } from "@/lib/seo-metadata";

export const metadata = legalPageMetadata({
  title: "Algemene voorwaarden",
  description:
    "Algemene voorwaarden voor lachgas-bestelling en levering in Amsterdam en omgeving via Gasdelivery.nl.",
  path: "/voorwaarden",
});

export default function VoorwaardenPage() {
  return (
    <LegalShell title="Algemene voorwaarden">
      <p>
        Deze algemene voorwaarden zijn van toepassing op aanvragen, bestellingen en leveringen van{" "}
        <strong>lachgas</strong> via Gasdelivery.nl, met levering in <strong>Amsterdam en omgeving</strong>
        , zoals op de website beschreven. Door een bestelling te plaatsen ga je akkoord met deze
        voorwaarden.
      </p>
      <p>
        <strong>Let op:</strong> dit is een praktische websitetekst. Laat juridische teksten door een
        adviseur controleren op volledigheid (consumentenkoop, productaansprakelijkheid, lokale regels
        rond lachgas).
      </p>

      <h2>1. Dienst</h2>
      <p>
        Wij leveren lachgas aan huis of op een afgesproken locatie, volgens de stappen op de website:
        contact (app/bellen/WhatsApp), bevestiging met levermoment en bedrag, en bezorging met veilige
        overdracht.
      </p>

      <h2>2. Werkgebied en beschikbaarheid</h2>
      <p>
        Levering vindt plaats in het gebied dat wij op de website hanteren (Amsterdam en omgeving).
        Onze communicatie vermeldt <strong>24/7 bereikbaarheid</strong>; concrete levertijden en
        planning stemmen wij in overleg met jou af en bevestigen wij schriftelijk of per bericht.
      </p>

      <h2>3. Bestelling en totstandkoming overeenkomst</h2>
      <p>
        Een overeenkomst komt tot stand na bevestiging door ons (bijv. via WhatsApp, telefoon of
        e-mail), inclusief de voor jou relevante voorwaarden zoals prijs, hoeveelheid, leveradres en
        moment.
      </p>

      <h2>4. Prijzen en betaling</h2>
      <p>
        Wij hanteren een <strong>transparante prijs</strong> zoals bij de bestelling bevestigd. Eventuele
        kosten (inclusief levering) worden vooraf duidelijk gecommuniceerd. Betalingsafspraken (moment
        en wijze) volgen uit de bevestiging, tenzij anders overeengekomen.
      </p>

      <h2>5. Levering en veiligheid</h2>
      <p>
        Levering geschiedt volgens de gemaakte afspraken. Jij zorgt voor een bereikbaar leveradres en
        medewerking voor een <strong>veilige overdracht</strong>. Wij verwachten dat je producten
        verantwoordelijk gebruikt en de geldende wet- en regelgeving respecteert.
      </p>

      <h2>6. Annulering en wijziging</h2>
      <p>
        Annulering of wijziging van een bestelling is mogelijk volgens de afspraken in de
        bevestiging. Redelijke kosten kunnen in rekening worden gebracht als de levering al is
        voorbereid of onderweg is.
      </p>

      <h2>7. Klachten</h2>
      <p>
        Klachten kun je melden via{" "}
        <a href="mailto:info@gasdelivery.nl">info@gasdelivery.nl</a> of telefonisch/WhatsApp. Wij
        streven naar een snelle en nette oplossing.
      </p>

      <h2>8. Aansprakelijkheid</h2>
      <p>
        Onze aansprakelijkheid is beperkt tot hetgeen wettelijk verplicht is en tot directe schade,
        met uitzondering van opzet of grove schuld. Wij zijn niet aansprakelijk voor gevolgschade,
        tenzij dwingend recht anders bepaalt.
      </p>

      <h2>9. Toepasselijk recht</h2>
      <p>
        Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de
        bevoegde rechter in Nederland.
      </p>
    </LegalShell>
  );
}

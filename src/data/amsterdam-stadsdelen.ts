/**
 * Officiële stadsdelen van de gemeente Amsterdam (inclusief Weesp).
 * Gebruikt voor landingspagina's /lachgas-bestellen/[slug]
 */

export type StadsdeelSlug =
  | "centrum"
  | "noord"
  | "nieuw-west"
  | "oost"
  | "west"
  | "weesp"
  | "zuid"
  | "zuidoost";

export type StadsdeelContent = {
  slug: StadsdeelSlug;
  /** Voor H1: "Lachgas bestellen {h1Name}" */
  h1Name: string;
  /** Korte naam in zinnen */
  name: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const AMSTERDAM_STADSDELEN: StadsdeelContent[] = [
  {
    slug: "centrum",
    h1Name: "Centrum",
    name: "Amsterdam Centrum",
    metaDescription:
      "Lachgas bestellen in Amsterdam Centrum: snelle levering, duidelijke prijs en 24/7 contact. Wij bezorgen in de Jordaan, Grachtengordel, Wallen en omgeving.",
    keywords: [
      "lachgas bestellen centrum amsterdam",
      "lachgas centrum",
      "lachgas jordaan",
      "lachgas grachtengordel",
      "lachgas bezorgen centrum",
      "lachgas levering amsterdam centrum",
    ],
    intro:
      "In Amsterdam Centrum — van de Jordaan en de Negen Straatjes tot de Grachtengordel, Nieuwmarkt en de Wallen — regelen wij lachgas levering met vaste afspraken en persoonlijk contact. De binnenstad kent smalle straten, druk verkeer en horeca; onze koeriers zijn gewend om snel en netjes te leveren op het adres dat jij doorgeeft, of dat nu een hotel, woning of bedrijf is.",
    sections: [
      {
        heading: "Waarom in Centrum vaak snelle levering mogelijk is",
        paragraphs: [
          "Centrum is dichtbevolkt en er rijden veel ritten. Daardoor kunnen we routes efficiënt combineren en vaak korte aankomsttijden realiseren, afhankelijk van het moment van de dag en drukte op de weg. Wij plannen altijd in overleg met jou: je geeft je locatie en gewenste tijd door via WhatsApp of telefoon, en wij bevestigen wat haalbaar is.",
          "Woon je op een plek met beperkte bereikbaarheid of laad- en loszones, geef dat dan bij de bestelling door. Dan kunnen we afstemmen op de meest praktische plek om af te leveren — bijvoorbeeld dichtbij de hoofdingang of een afgesproken punt in de buurt.",
        ],
      },
      {
        heading: "Wijken en gebieden in Stadsdeel Centrum",
        paragraphs: [
          "Onder Centrum vallen onder andere de Jordaan, Grachtengordel, Negen Straatjes, Nieuwmarkt en Lastage, De Wallen, Oostelijke Eilanden (Scheepvaartbuurt, Czaar Peterbuurt en omgeving) en delen rond de Plantage. We leveren door heel dit stadsdeel; als je een specifieke buurt of straat noemt, houden we daar rekening mee.",
          "Voor feesten, evenementen of zakelijke afspraken in het centrum kun je vooraf het aantal tanks en het tijdstip afstemmen. Zo weet je waar je aan toe bent en voorkom je onduidelijkheid op de avond zelf.",
        ],
      },
      {
        heading: "Werkwijze en contact",
        paragraphs: [
          "Je bestelt door te bellen of te WhatsAppen. Wij bevestigen beschikbaarheid, een helder tarief en de levering in Centrum. Betaling en details spreken we netjes af volgens onze voorwaarden op de website.",
          "Heb je vragen over levering in een specifiek gebied, parkeerbeleid of tijden? Stuur gerust een bericht. Wij helpen je graag met een duidelijk antwoord.",
        ],
      },
    ],
  },
  {
    slug: "noord",
    h1Name: "Noord",
    name: "Amsterdam Noord",
    metaDescription:
      "Lachgas bestellen in Amsterdam Noord: bezorging in NDSM, Noorderpark, Vogelbuurt en Noord. 24/7 bereikbaar, transparante prijs en persoonlijke service.",
    keywords: [
      "lachgas bestellen noord",
      "lachgas amsterdam noord",
      "lachgas ndsm",
      "lachgas bezorgen noord",
      "lachgas levering noord",
    ],
    intro:
      "Amsterdam Noord groeit snel: van NDSM en het water tot wijken als de Vogelbuurt, Van der Pek en Noord over het IJ. Wij leveren lachgas in heel Stadsdeel Noord — van nieuwbouw en appartementen tot bedrijfsruimtes en feestlocaties. Geen gedoe: je stuur je adres en wensen door, wij bevestigen de levering.",
    sections: [
      {
        heading: "Levering in Noord: praktisch en afgestemd",
        paragraphs: [
          "Noord heeft een mix van brede wegen, nieuwe woonwijken en plekken met veel fiets- en voetgangersverkeer. Onze koeriers kiezen de route die past bij jouw locatie en het tijdstip. Bij grote evenementen of drukte rond het IJ kan het even extra tijd kosten; dat communiceren we vooraf.",
          "Als je in een gebied woont met een specifieke ingang of een pincode voor de deur, geef dat door bij het bestellen. Dan verloopt de aflevering soepeler.",
        ],
      },
      {
        heading: "Wijken en gebieden in Noord",
        paragraphs: [
          "We leveren onder andere in en rond NDSM, Tuindorp Oostzaan, Noord over het IJ, Volewijck, de Vogelbuurt, Van der Pekbuurt, Molenwijk en andere buurten binnen het stadsdeel. Ook voor locaties nabij de ponten en het station is levering in overleg mogelijk.",
        ],
      },
      {
        heading: "Contact en bestellen",
        paragraphs: [
          "Bel of WhatsApp ons voor een bestelling in Noord. Wij bevestigen prijs, tijd en leveradres. Voor terugkerende leveringen of grotere aantallen kun je vooraf extra afspraken maken.",
        ],
      },
    ],
  },
  {
    slug: "nieuw-west",
    h1Name: "Nieuw-West",
    name: "Amsterdam Nieuw-West",
    metaDescription:
      "Lachgas bestellen in Amsterdam Nieuw-West: Sloterdijk, Osdorp, Geuzenveld en omgeving. Snelle levering, 24/7 bereikbaar en transparante prijzen.",
    keywords: [
      "lachgas bestellen nieuw-west",
      "lachgas sloterdijk",
      "lachgas osdorp",
      "lachgas amsterdam nieuw-west",
      "lachgas bezorgen nieuw-west",
    ],
    intro:
      "Nieuw-West is een van de grootste stadsdelen van Amsterdam, met wijken als Osdorp, Slotermeer, Geuzenveld en het gebied rond Sloterdijk. Wij leveren lachgas in heel Nieuw-West: van rijtjeshuizen en flats tot bedrijventerreinen. Je krijgt een duidelijke prijs en een bevestiging voordat we onderweg gaan.",
    sections: [
      {
        heading: "Bezorging door heel Nieuw-West",
        paragraphs: [
          "Door de breedte van het stadsdeel plannen we leveringen efficiënt. Wij vragen naar je postcode en straat, zodat we de juiste aankomsttijd kunnen inschatten. In spitsuren kan het iets langer duren; dat bespreken we altijd eerlijk.",
          "Woon je in een flat met lift of een portiek met meerdere toegangen? Dan is het handig om de juiste ingang of instructies te delen, zodat de koerier direct op de goede plek is.",
        ],
      },
      {
        heading: "Wijken en voorbeelden",
        paragraphs: [
          "We leveren onder andere in Sloterdijk, Osdorp, Geuzenveld, Slotermeer, Slotervaart, Overtoomse Veld en omliggende buurten. Ook voor locaties nabij recreatiegebieden of grotere wegen stemmen we de route af op jouw adres.",
        ],
      },
      {
        heading: "Bestellen",
        paragraphs: [
          "Neem contact op via WhatsApp of telefoon. Wij bevestigen de bestelling voor Nieuw-West en spreken af hoe we leveren. Bekijk ook onze FAQ voor veelgestelde vragen.",
        ],
      },
    ],
  },
  {
    slug: "oost",
    h1Name: "Oost",
    name: "Amsterdam Oost",
    metaDescription:
      "Lachgas bestellen in Amsterdam Oost: Indische Buurt, Watergraafsmeer, Oud-Oost en omgeving. Discrete levering, 24/7 bereikbaar en transparante prijs.",
    keywords: [
      "lachgas bestellen oost",
      "lachgas indische buurt",
      "lachgas watergraafsmeer",
      "lachgas amsterdam oost",
      "lachgas bezorgen oost",
    ],
    intro:
      "Amsterdam Oost combineert levendige wijken zoals de Indische Buurt en Watergraafsmeer met Oud-Oost en het Science Park. Wij leveren lachgas in heel Stadsdeel Oost — voor thuis, feesten of kleine evenementen. Je krijgt persoonlijk contact en een duidelijke planning.",
    sections: [
      {
        heading: "Levering in Oost",
        paragraphs: [
          "Oost kent een mix van smalle straatjes, grachten en bredere boulevards. Wij stemmen de levering af op jouw adres en het tijdstip. In drukke weekenden of bij evenementen in het park kan het even drukker zijn; wij geven een realistische indicatie.",
          "Voor leveringen op een specifieke verdieping of met een beperkte parkeerplek in de buurt: geef dat door, dan houden we rekening met de kortste looproute.",
        ],
      },
      {
        heading: "Wijken en gebieden",
        paragraphs: [
          "We leveren onder andere in de Indische Buurt, Watergraafsmeer, Oud-Oost, Dapperbuurt, Science Park en omgeving Amstel Station. Twijfel je of je adres binnen Oost valt? Stuur je postcode en wij bevestigen het.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "Bestellen via WhatsApp of bellen. Wij bevestigen je bestelling in Amsterdam Oost en de voorwaarden. Voor vragen over tijden of levering: we staan 24/7 voor je klaar.",
        ],
      },
    ],
  },
  {
    slug: "west",
    h1Name: "West",
    name: "Amsterdam West",
    metaDescription:
      "Lachgas bestellen in Amsterdam West: De Baarsjes, Oud-West, Bos en Lommer, Westerpark en omgeving. Snelle levering, 24/7 contact en heldere prijs.",
    keywords: [
      "lachgas bestellen west",
      "lachgas de baarsjes",
      "lachgas oud-west",
      "lachgas bos en lommer",
      "lachgas amsterdam west",
    ],
    intro:
      "In Amsterdam West leveren wij in wijken als De Baarsjes, Oud-West, Bos en Lommer, Kinkerbuurt en Westerpark. Van grachtenpanden tot moderne appartementen: wij regelen lachgas bezorging met dezelfde aandacht voor duidelijkheid en service. Je krijgt een bevestiging voordat we onderweg gaan.",
    sections: [
      {
        heading: "Bezorging door West",
        paragraphs: [
          "West heeft een mix van drukke uitgaansgebieden en rustige woonstraten. Wij plannen per adres en tijdstip. Bij grote evenementen rond Westerpark of drukte rond de Kinkerstraat kan het iets langer duren; dat bespreken we vooraf.",
          "Als je in een gebied woont met blauwe zone of parkeerregels, kan dat invloed hebben op waar de koerier het beste kan stoppen. Geef dat door, dan stemmen we af op de meest praktische plek.",
        ],
      },
      {
        heading: "Wijken en voorbeelden",
        paragraphs: [
          "We leveren onder andere in Oud-West, De Baarsjes, Bos en Lommer, Mercatorplein, Kinkerbuurt, Staatsliedenbuurt, Westerpark en omgeving. Ook voor locaties nabij de ring of stationen is levering in overleg mogelijk.",
        ],
      },
      {
        heading: "Bestellen",
        paragraphs: [
          "Neem contact op via WhatsApp of telefoon. Wij bevestigen de bestelling voor West en het tarief. Voor meer informatie over onze werkwijze, zie de homepage.",
        ],
      },
    ],
  },
  {
    slug: "weesp",
    h1Name: "Weesp",
    name: "Weesp",
    metaDescription:
      "Lachgas bestellen in Weesp: levering in de gemeente Weesp met duidelijke prijs en 24/7 contact. Snelle levering, afhankelijk van route en tijdstip.",
    keywords: [
      "lachgas bestellen weesp",
      "lachgas weesp",
      "lachgas bezorgen weesp",
      "lachgas levering weesp",
    ],
    intro:
      "Weesp hoort bij de gemeente Amsterdam en heeft een eigen dorps karakter met een compact centrum en woonwijken eromheen. Wij leveren lachgas in Weesp en stemmen de levering af op jouw adres en het tijdstip. Afhankelijk van drukte en route geven we een realistische aankomsttijd.",
    sections: [
      {
        heading: "Levering in Weesp",
        paragraphs: [
          "Weesp ligt buiten de ring van Amsterdam; reistijd wordt meegenomen in de planning. Bij het bestellen geef je je straat en postcode door, zodat we de route kunnen inschatten. In spitsuren kan het iets langer duren.",
          "Voor leveringen aan huis of op een afgesproken locatie in Weesp gelden dezelfde duidelijke afspraken als elders: bevestiging vooraf, helder tarief en persoonlijk contact.",
        ],
      },
      {
        heading: "Gebieden",
        paragraphs: [
          "We leveren in het centrum van Weesp en in de omliggende woonwijken. Woon je net buiten de kern, geef dan je exacte adres door zodat we kunnen bevestigen of levering mogelijk is.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "Bel of WhatsApp voor een bestelling in Weesp. Wij bevestigen of we kunnen leveren, het tarief en de indicatie voor aankomst.",
        ],
      },
    ],
  },
  {
    slug: "zuid",
    h1Name: "Zuid",
    name: "Amsterdam Zuid",
    metaDescription:
      "Lachgas bestellen in Amsterdam Zuid: Zuidas, De Pijp, Oud-Zuid, Rivierenbuurt en omgeving. 24/7 bereikbaar, transparante prijs en persoonlijke service.",
    keywords: [
      "lachgas bestellen zuid",
      "lachgas zuidas",
      "lachgas de pijp",
      "lachgas oud-zuid",
      "lachgas amsterdam zuid",
    ],
    intro:
      "Amsterdam Zuid omvat onder andere de Zuidas, De Pijp, Oud-Zuid, Rivierenbuurt en Apollolaan. Wij leveren lachgas in heel Stadsdeel Zuid — van zakelijke adressen tot woningen en feestlocaties. Je krijgt een professionele bevestiging en duidelijke afspraken over tijd en levering.",
    sections: [
      {
        heading: "Levering in Zuid",
        paragraphs: [
          "Zuid kent drukke winkelstraten, kantoren en dichte bebouwing. Wij plannen per adres en stemmen af op de bereikbaarheid van je locatie. Bij de Zuidas of grote kantoorpanden is het handig om de juiste ingang of receptie te noemen.",
          "In wijken met veel parkeerregels stemmen we af op de beste plek om af te leveren. Geef bijzonderheden door bij het bestellen.",
        ],
      },
      {
        heading: "Wijken en gebieden",
        paragraphs: [
          "We leveren onder andere in de Rivierenbuurt, De Pijp, Oud-Zuid, Museumkwartier, Zuidas, Beethovenstraat, Apollolaan en omgeving. Ook voor locaties nabij het Amstel Station of langs de Amstel is levering in overleg mogelijk.",
        ],
      },
      {
        heading: "Bestellen",
        paragraphs: [
          "Neem contact op via WhatsApp of telefoon. Wij bevestigen je bestelling in Amsterdam Zuid en de voorwaarden. Voor vragen over tijden of levering: we helpen je graag.",
        ],
      },
    ],
  },
  {
    slug: "zuidoost",
    h1Name: "Zuidoost",
    name: "Amsterdam Zuidoost",
    metaDescription:
      "Lachgas bestellen in Amsterdam Zuidoost: Bijlmer, Gaasperdam, Driemond en omgeving. Snelle levering, 24/7 bereikbaar en transparante prijzen.",
    keywords: [
      "lachgas bestellen zuidoost",
      "lachgas bijlmer",
      "lachgas amsterdam zuidoost",
      "lachgas gaasperdam",
      "lachgas bezorgen zuidoost",
    ],
    intro:
      "Amsterdam Zuidoost beslaat de Bijlmer, Gaasperdam, Driemond en omliggende wijken. Wij leveren lachgas in heel Stadsdeel Zuidoost — van flats en eengezinswoningen tot bedrijfsadressen. Wij werken met vaste communicatie: je weet wat je krijgt en wanneer we langskomen.",
    sections: [
      {
        heading: "Bezorging in Zuidoost",
        paragraphs: [
          "Zuidoost heeft brede wegen, veel groen en duidelijke wijkindeling. Wij plannen leveringen op basis van jouw adres en het tijdstip. Bij grote evenementen of drukte rond stations kan het iets langer duren; dat bespreken we vooraf.",
          "Woon je in een flat met meerdere toegangen of een specifieke lift? Geef dat door bij het bestellen. Dan verloopt de aflevering soepeler.",
        ],
      },
      {
        heading: "Wijken en gebieden",
        paragraphs: [
          "We leveren onder andere in Bijlmer-Centrum, Bijlmer-Oost, Gaasperdam, Driemond en omgeving Holendrecht en Bullewijk. Twijfel je over je adres? Stuur je postcode en wij bevestigen of we in jouw gebied leveren.",
        ],
      },
      {
        heading: "Contact en bestellen",
        paragraphs: [
          "Bel of WhatsApp ons voor een bestelling in Zuidoost. Wij bevestigen beschikbaarheid, prijs en levering. Onze algemene voorwaarden en privacy vind je op deze website.",
        ],
      },
    ],
  },
];

export const STADSDEL_BY_SLUG: Record<StadsdeelSlug, StadsdeelContent> = Object.fromEntries(
  AMSTERDAM_STADSDELEN.map((s) => [s.slug, s]),
) as Record<StadsdeelSlug, StadsdeelContent>;

export function getStadsdeel(slug: string): StadsdeelContent | undefined {
  return STADSDEL_BY_SLUG[slug as StadsdeelSlug];
}

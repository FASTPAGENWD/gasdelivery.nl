const steps = [
  {
    step: "1",
    title: "Bestel online",
    text: "App of bel direct en geef ons je gewenste hoeveelheid lachgas aan — duurt maar een paar minuten.",
  },
  {
    step: "2",
    title: "Bevestiging",
    text: "Je ontvangt een bevestiging met levermoment en totaalbedrag.",
  },
  {
    step: "3",
    title: "Bezorging",
    text: "We leveren op het afgesproken adres en helpen bij een veilige overdracht.",
  },
];

export function Steps() {
  return (
    <section
      id="werkwijze"
      className="scroll-mt-20 mt-14 border-y border-[var(--border)] bg-surface/50 px-4 py-20 sm:mt-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Zo werkt het</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Drie eenvoudige stappen van bestelling tot lachgas tanks bij de deur.
          </p>
        </div>
        <ol className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {steps.map((s) => (
            <li key={s.step} className="relative text-center sm:pt-2">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-base font-bold text-white">
                {s.step}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

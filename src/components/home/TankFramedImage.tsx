import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  /** Hero = hogere kaart links/rechts; feature = breed blok onder voordelen */
  variant: "hero" | "feature";
  priority?: boolean;
};

/**
 * Lachgastank als product-shot: object-contain (geen harde crop), zachte studio-achtergrond, schaduw.
 */
export function TankFramedImage({ src, alt, variant, priority = false }: Props) {
  const isHero = variant === "hero";

  return (
    <div className={isHero ? "mx-auto w-full max-w-[420px]" : "w-full"}>
      <div
        className={[
          "relative overflow-hidden rounded-2xl border border-[var(--border)] shadow-[0_24px_64px_-24px_rgba(24,24,27,0.45)] ring-1 ring-zinc-950/[0.04] sm:rounded-3xl",
          "bg-[linear-gradient(165deg,#fafafa_0%,#ffffff_42%,#f4f4f5_100%)]",
        ].join(" ")}
      >
        {/* Zachte spotlight onder het product */}
        <div
          className="pointer-events-none absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(ellipse 75% 45% at 50% 92%, rgba(63,63,70,0.11), transparent 58%)",
          }}
          aria-hidden
        />

        <div
          className={
            isHero
              ? "relative aspect-[3/4] w-full max-h-[min(528px,75vh)] sm:aspect-[4/5] sm:max-h-[548px]"
              : "relative aspect-[16/10] min-h-[240px] w-full sm:min-h-[320px] sm:aspect-[2/1]"
          }
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            quality={92}
            sizes={
              isHero
                ? "(max-width: 1024px) min(92vw, 420px), 420px"
                : "(max-width: 896px) 100vw, min(896px, 90vw)"
            }
            className="object-contain object-center p-6 drop-shadow-[0_12px_32px_rgba(24,24,27,0.18)] sm:p-8 md:p-10"
          />
        </div>

        <div
          className="pointer-events-none h-2.5 bg-gradient-to-t from-zinc-300/25 to-transparent sm:h-3.5"
          aria-hidden
        />
      </div>
    </div>
  );
}

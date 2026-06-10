type Props = { className?: string; "aria-hidden"?: boolean };

/** SVG-illustratie (geen extern bestand nodig): cilinder + route, leest als echte 'afbeelding' op de pagina. */
export function HeroIllustration({ className, ...rest }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 520 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...rest}
    >
      <title>Lachgas levering Amsterdam — illustratie</title>
      <defs>
        <linearGradient id="hero-cyl" x1="120" y1="60" x2="260" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3f3f46" />
          <stop offset="1" stopColor="#18181b" />
        </linearGradient>
        <linearGradient id="hero-glow" x1="0" y1="0" x2="520" y2="400" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a1a1aa" stopOpacity="0.35" />
          <stop offset="1" stopColor="#d4d4d8" stopOpacity="0.08" />
        </linearGradient>
        <filter id="hero-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <ellipse cx="390" cy="320" rx="140" ry="32" fill="url(#hero-glow)" filter="url(#hero-soft)" opacity="0.9" />
      <path
        d="M72 288c40-52 88-96 168-120 96-28 176 8 232 72"
        stroke="#a1a1aa"
        strokeWidth="3"
        strokeDasharray="10 14"
        strokeLinecap="round"
        opacity="0.55"
      />
      <g transform="translate(180 48)">
        <rect x="48" y="40" width="112" height="232" rx="28" fill="url(#hero-cyl)" />
        <rect x="88" y="12" width="32" height="36" rx="8" fill="#27272a" />
        <ellipse cx="104" cy="40" rx="36" ry="14" fill="#52525b" />
        <path d="M68 108h72M68 158h72M68 208h52" stroke="#71717a" strokeWidth="4" strokeLinecap="round" opacity="0.85" />
        <rect x="76" y="252" width="96" height="20" rx="6" fill="#27272a" />
      </g>
      <g transform="translate(40 200)">
        <rect width="112" height="88" rx="20" fill="#ffffff" stroke="rgba(24,24,27,0.12)" strokeWidth="2" />
        <path
          d="M56 28L36 48h16v32h8V48h16L56 28z"
          fill="#3f3f46"
          transform="translate(8 8)"
        />
        <text x="56" y="78" textAnchor="middle" fill="#52525b" fontSize="13" fontFamily="system-ui, sans-serif" fontWeight="600">
          Amsterdam
        </text>
      </g>
      <circle cx="428" cy="108" r="36" fill="#3f3f46" opacity="0.95" />
      <path
        d="M428 92v32M412 108h32"
        stroke="#fafafa"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

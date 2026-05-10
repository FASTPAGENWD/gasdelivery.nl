type Props = { className?: string; "aria-hidden"?: boolean };

/** Tweede compositie voor het showcase-blok onder de voordelen. */
export function ShowcaseIllustration({ className, ...rest }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      {...rest}
    >
      <title>Lachgas tanks — kwaliteit en levering</title>
      <rect width="640" height="360" rx="24" fill="#fafafa" />
      <defs>
        <linearGradient id="show-v" x1="0" y1="0" x2="640" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f4f4f5" />
          <stop offset="1" stopColor="#e4e4e7" />
        </linearGradient>
        <linearGradient id="show-met" x1="180" y1="40" x2="320" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#52525b" />
          <stop offset="1" stopColor="#27272a" />
        </linearGradient>
      </defs>
      <rect width="640" height="360" rx="24" fill="url(#show-v)" />
      <circle cx="520" cy="72" r="120" fill="#3f3f46" opacity="0.06" />
      <circle cx="96" cy="280" r="90" fill="#3f3f46" opacity="0.05" />
      <g transform="translate(160 52)">
        <rect x="0" y="24" width="96" height="200" rx="22" fill="url(#show-met)" />
        <rect x="32" y="0" width="32" height="32" rx="7" fill="#3f3f46" />
        <path d="M16 112h64M16 152h48" stroke="#a1a1aa" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g transform="translate(296 72)">
        <rect x="0" y="24" width="96" height="200" rx="22" fill="#3f3f46" opacity="0.92" />
        <rect x="32" y="0" width="32" height="32" rx="7" fill="#18181b" />
        <path d="M16 112h64M16 152h48" stroke="#d4d4d8" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      </g>
      <g transform="translate(448 108)">
        <rect x="0" y="0" width="128" height="128" rx="28" fill="#ffffff" stroke="rgba(24,24,27,0.1)" strokeWidth="2" />
        <path
          d="M64 36l-8 16h10v40h12V52h10L64 36z"
          fill="#3f3f46"
        />
        <path
          d="M40 108c12-18 28-28 48-28s36 10 48 28"
          stroke="#a1a1aa"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <text x="64" y="122" textAnchor="middle" fill="#71717a" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="600">
          24/7
        </text>
      </g>
    </svg>
  );
}

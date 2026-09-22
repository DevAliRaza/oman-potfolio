export default function PCBCardOverlay() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="none"
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Traces */}
      <g stroke="var(--c-accent)" strokeWidth="0.8" opacity="0.12" strokeLinecap="round">
        <path d="M0 60 L80 60 L110 90 L180 90" />
        <path d="M0 120 L50 120 L70 140 L130 140 L150 120 L220 120" />
        <path d="M420 0 L420 50 L450 80 L450 150" />
        <path d="M500 0 L500 70 L530 100 L600 100" />
        <path d="M380 350 L380 400" />
        <path d="M200 380 L200 340 L230 310 L300 310 L330 340 L330 400" />
        <path d="M0 300 L60 300 L80 280 L140 280" />
        <path d="M460 300 L460 250 L490 220 L600 220" />
        <path d="M550 350 L550 280 L580 250 L600 250" />
        <path d="M0 200 L40 200 L60 220 L100 220" />
      </g>

      {/* Parallel differential pairs */}
      <g stroke="var(--c-accent)" strokeWidth="0.5" opacity="0.08">
        <path d="M0 65 L75 65 L105 95 L175 95" />
        <path d="M425 0 L425 45 L455 75 L455 145" />
        <path d="M505 0 L505 65 L535 95 L600 95" />
      </g>

      {/* IC footprint - top right area */}
      <g stroke="var(--c-accent)" strokeWidth="0.7" opacity="0.15">
        <rect x="470" y="30" width="45" height="45" rx="1" />
        <rect x="477" y="37" width="31" height="31" rx="1" />
        {/* IC pins */}
        <line x1="480" y1="30" x2="480" y2="24" />
        <line x1="490" y1="30" x2="490" y2="24" />
        <line x1="500" y1="30" x2="500" y2="24" />
        <line x1="480" y1="75" x2="480" y2="81" />
        <line x1="490" y1="75" x2="490" y2="81" />
        <line x1="500" y1="75" x2="500" y2="81" />
        <line x1="470" y1="43" x2="464" y2="43" />
        <line x1="470" y1="53" x2="464" y2="53" />
        <line x1="470" y1="63" x2="464" y2="63" />
        <line x1="515" y1="43" x2="521" y2="43" />
        <line x1="515" y1="53" x2="521" y2="53" />
        <line x1="515" y1="63" x2="521" y2="63" />
      </g>

      {/* IC footprint - bottom left */}
      <g stroke="var(--c-accent)" strokeWidth="0.7" opacity="0.12">
        <rect x="50" y="300" width="35" height="35" rx="1" />
        <rect x="56" y="306" width="23" height="23" rx="1" />
        <line x1="58" y1="300" x2="58" y2="295" />
        <line x1="68" y1="300" x2="68" y2="295" />
        <line x1="78" y1="300" x2="78" y2="295" />
        <line x1="58" y1="335" x2="58" y2="340" />
        <line x1="68" y1="335" x2="68" y2="340" />
        <line x1="78" y1="335" x2="78" y2="340" />
      </g>

      {/* Vias */}
      <g>
        {[
          [110, 90], [150, 120], [450, 80], [530, 100],
          [80, 280], [230, 310], [490, 220], [580, 250],
          [180, 90], [60, 220], [330, 340], [380, 350],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="4" stroke="var(--c-accent)" strokeWidth="0.8" fill="none" opacity="0.18" />
            <circle cx={cx} cy={cy} r="1.5" fill="var(--c-accent)" opacity="0.2" />
          </g>
        ))}
      </g>

      {/* SMD pads */}
      <g fill="var(--c-accent)" opacity="0.1">
        <rect x="300" y="30" width="10" height="4" rx="0.5" />
        <rect x="315" y="30" width="10" height="4" rx="0.5" />
        <rect x="300" y="38" width="10" height="4" rx="0.5" />
        <rect x="315" y="38" width="10" height="4" rx="0.5" />
        <rect x="160" y="350" width="10" height="4" rx="0.5" />
        <rect x="175" y="350" width="10" height="4" rx="0.5" />
        <rect x="160" y="358" width="10" height="4" rx="0.5" />
        <rect x="175" y="358" width="10" height="4" rx="0.5" />
      </g>

      {/* Corner drill holes */}
      <circle cx="15" cy="15" r="5" stroke="var(--c-accent)" strokeWidth="0.6" fill="none" opacity="0.1" />
      <circle cx="585" cy="15" r="5" stroke="var(--c-accent)" strokeWidth="0.6" fill="none" opacity="0.1" />
      <circle cx="15" cy="385" r="5" stroke="var(--c-accent)" strokeWidth="0.6" fill="none" opacity="0.1" />
      <circle cx="585" cy="385" r="5" stroke="var(--c-accent)" strokeWidth="0.6" fill="none" opacity="0.1" />
    </svg>
  );
}

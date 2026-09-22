export default function PCBCardOverlay() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="none"
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main traces — bold visible lines */}
      <g stroke="var(--c-accent)" strokeLinecap="round">
        {/* Top-left horizontal traces */}
        <path d="M0 50 L60 50 L90 80 L160 80" strokeWidth="1.2" opacity="0.25" />
        <path d="M0 55 L55 55 L85 85 L155 85" strokeWidth="0.6" opacity="0.15" />
        <path d="M0 110 L40 110 L65 135 L120 135 L145 110 L200 110" strokeWidth="1.2" opacity="0.25" />

        {/* Top-right vertical traces */}
        <path d="M420 0 L420 40 L450 70 L450 130" strokeWidth="1.2" opacity="0.25" />
        <path d="M425 0 L425 35 L455 65 L455 125" strokeWidth="0.6" opacity="0.15" />
        <path d="M500 0 L500 60 L530 90 L600 90" strokeWidth="1.2" opacity="0.25" />
        <path d="M550 0 L550 30 L570 50 L600 50" strokeWidth="1" opacity="0.2" />

        {/* Bottom traces */}
        <path d="M0 300 L50 300 L75 275 L140 275" strokeWidth="1.2" opacity="0.25" />
        <path d="M0 310 L45 310 L70 285 L135 285" strokeWidth="0.6" opacity="0.15" />
        <path d="M200 370 L200 330 L230 300 L310 300 L340 330 L340 400" strokeWidth="1.2" opacity="0.25" />
        <path d="M460 290 L460 240 L490 210 L600 210" strokeWidth="1.2" opacity="0.25" />
        <path d="M550 340 L550 270 L575 245 L600 245" strokeWidth="1" opacity="0.2" />
        <path d="M380 340 L380 400" strokeWidth="1" opacity="0.2" />

        {/* Cross traces */}
        <path d="M0 200 L35 200 L55 220 L95 220" strokeWidth="1" opacity="0.2" />
        <path d="M250 0 L250 30 L270 50 L330 50 L350 30 L350 0" strokeWidth="0.8" opacity="0.18" />
      </g>

      {/* IC footprint — top right QFP chip */}
      <g stroke="var(--c-accent)" opacity="0.3">
        <rect x="460" y="25" width="55" height="55" rx="2" strokeWidth="1.2" />
        <rect x="469" y="34" width="37" height="37" rx="1" strokeWidth="0.8" />
        {/* Pin 1 dot */}
        <circle cx="474" cy="39" r="2" fill="var(--c-accent)" opacity="0.4" />
        {/* Top pins */}
        <line x1="473" y1="25" x2="473" y2="17" strokeWidth="1.2" />
        <line x1="483" y1="25" x2="483" y2="17" strokeWidth="1.2" />
        <line x1="493" y1="25" x2="493" y2="17" strokeWidth="1.2" />
        <line x1="503" y1="25" x2="503" y2="17" strokeWidth="1.2" />
        {/* Bottom pins */}
        <line x1="473" y1="80" x2="473" y2="88" strokeWidth="1.2" />
        <line x1="483" y1="80" x2="483" y2="88" strokeWidth="1.2" />
        <line x1="493" y1="80" x2="493" y2="88" strokeWidth="1.2" />
        <line x1="503" y1="80" x2="503" y2="88" strokeWidth="1.2" />
        {/* Left pins */}
        <line x1="460" y1="38" x2="452" y2="38" strokeWidth="1.2" />
        <line x1="460" y1="48" x2="452" y2="48" strokeWidth="1.2" />
        <line x1="460" y1="58" x2="452" y2="58" strokeWidth="1.2" />
        <line x1="460" y1="68" x2="452" y2="68" strokeWidth="1.2" />
        {/* Right pins */}
        <line x1="515" y1="38" x2="523" y2="38" strokeWidth="1.2" />
        <line x1="515" y1="48" x2="523" y2="48" strokeWidth="1.2" />
        <line x1="515" y1="58" x2="523" y2="58" strokeWidth="1.2" />
        <line x1="515" y1="68" x2="523" y2="68" strokeWidth="1.2" />
      </g>

      {/* IC footprint — bottom left smaller chip */}
      <g stroke="var(--c-accent)" opacity="0.25">
        <rect x="40" y="295" width="42" height="42" rx="2" strokeWidth="1" />
        <rect x="48" y="303" width="26" height="26" rx="1" strokeWidth="0.7" />
        <circle cx="53" cy="308" r="1.5" fill="var(--c-accent)" opacity="0.3" />
        {/* Top pins */}
        <line x1="52" y1="295" x2="52" y2="289" strokeWidth="1" />
        <line x1="62" y1="295" x2="62" y2="289" strokeWidth="1" />
        <line x1="72" y1="295" x2="72" y2="289" strokeWidth="1" />
        {/* Bottom pins */}
        <line x1="52" y1="337" x2="52" y2="343" strokeWidth="1" />
        <line x1="62" y1="337" x2="62" y2="343" strokeWidth="1" />
        <line x1="72" y1="337" x2="72" y2="343" strokeWidth="1" />
        {/* Left pins */}
        <line x1="40" y1="308" x2="34" y2="308" strokeWidth="1" />
        <line x1="40" y1="318" x2="34" y2="318" strokeWidth="1" />
        <line x1="40" y1="328" x2="34" y2="328" strokeWidth="1" />
        {/* Right pins */}
        <line x1="82" y1="308" x2="88" y2="308" strokeWidth="1" />
        <line x1="82" y1="318" x2="88" y2="318" strokeWidth="1" />
        <line x1="82" y1="328" x2="88" y2="328" strokeWidth="1" />
      </g>

      {/* DIP IC — center right */}
      <g stroke="var(--c-accent)" opacity="0.2">
        <rect x="530" y="150" width="20" height="50" rx="1" strokeWidth="0.8" />
        {/* Notch */}
        <path d="M536 150 A4 4 0 0 1 544 150" strokeWidth="0.8" fill="none" />
        {/* Left pins */}
        <line x1="530" y1="160" x2="522" y2="160" strokeWidth="1" />
        <line x1="530" y1="170" x2="522" y2="170" strokeWidth="1" />
        <line x1="530" y1="180" x2="522" y2="180" strokeWidth="1" />
        <line x1="530" y1="190" x2="522" y2="190" strokeWidth="1" />
        {/* Right pins */}
        <line x1="550" y1="160" x2="558" y2="160" strokeWidth="1" />
        <line x1="550" y1="170" x2="558" y2="170" strokeWidth="1" />
        <line x1="550" y1="180" x2="558" y2="180" strokeWidth="1" />
        <line x1="550" y1="190" x2="558" y2="190" strokeWidth="1" />
      </g>

      {/* Vias — larger and more visible */}
      <g>
        {[
          [90, 80], [145, 110], [450, 70], [530, 90],
          [75, 275], [230, 300], [490, 210], [575, 245],
          [160, 80], [55, 220], [340, 330], [380, 340],
          [270, 50], [350, 30], [200, 370], [550, 30],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="5" stroke="var(--c-accent)" strokeWidth="1" fill="none" opacity="0.3" />
            <circle cx={cx} cy={cy} r="2" fill="var(--c-accent)" opacity="0.35" />
          </g>
        ))}
      </g>

      {/* SMD resistor/capacitor pads — paired */}
      <g fill="var(--c-accent)" opacity="0.2">
        {/* Top center cluster */}
        <rect x="290" y="25" width="12" height="5" rx="1" />
        <rect x="290" y="35" width="12" height="5" rx="1" />
        <rect x="310" y="25" width="12" height="5" rx="1" />
        <rect x="310" y="35" width="12" height="5" rx="1" />
        <rect x="330" y="25" width="12" height="5" rx="1" />
        <rect x="330" y="35" width="12" height="5" rx="1" />
        {/* Bottom cluster */}
        <rect x="150" y="350" width="12" height="5" rx="1" />
        <rect x="150" y="360" width="12" height="5" rx="1" />
        <rect x="170" y="350" width="12" height="5" rx="1" />
        <rect x="170" y="360" width="12" height="5" rx="1" />
        {/* Right side cluster */}
        <rect x="570" y="310" width="12" height="5" rx="1" />
        <rect x="570" y="320" width="12" height="5" rx="1" />
      </g>

      {/* Connector pads — edge rows */}
      <g fill="var(--c-accent)" opacity="0.18">
        {/* Left edge */}
        {[60, 80, 100, 150, 170, 190].map((y) => (
          <rect key={`l${y}`} x="0" y={y} width="8" height="4" rx="1" />
        ))}
        {/* Right edge */}
        {[120, 140, 280, 300, 320, 340].map((y) => (
          <rect key={`r${y}`} x="592" y={y} width="8" height="4" rx="1" />
        ))}
      </g>

      {/* Corner mounting holes */}
      <g stroke="var(--c-accent)" strokeWidth="1" fill="none" opacity="0.2">
        <circle cx="16" cy="16" r="7" />
        <circle cx="16" cy="16" r="3" />
        <circle cx="584" cy="16" r="7" />
        <circle cx="584" cy="16" r="3" />
        <circle cx="16" cy="384" r="7" />
        <circle cx="16" cy="384" r="3" />
        <circle cx="584" cy="384" r="7" />
        <circle cx="584" cy="384" r="3" />
      </g>

      {/* Ground plane hatching — subtle */}
      <g stroke="var(--c-accent)" strokeWidth="0.3" opacity="0.06">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 35} x2="600" y2={i * 35} />
        ))}
        {Array.from({ length: 18 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 35} y1="0" x2={i * 35} y2="400" />
        ))}
      </g>
    </svg>
  );
}

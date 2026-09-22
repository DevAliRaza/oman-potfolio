"use client";

import { useEffect, useState } from "react";

export default function CircuitTrace() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className={`absolute right-0 top-0 w-[70%] h-full transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}
        viewBox="0 0 700 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid slice"
      >
        <defs>
          <filter id="traceGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dense PCB traces - 90° and 45° routing */}
        <g stroke="var(--c-accent)" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Main horizontal/vertical bus lines */}
          <path d="M150 50 L150 200 L300 200 L300 350 L450 350" />
          <path d="M250 0 L250 120 L400 120 L400 280" />
          <path d="M500 80 L500 250 L350 250 L350 420 L500 420" />
          <path d="M100 300 L100 500 L250 500 L250 650" />
          <path d="M400 450 L400 600 L550 600 L550 800" />
          <path d="M200 600 L200 750 L350 750 L350 900" />
          <path d="M600 200 L600 400 L500 400" />
          <path d="M450 550 L450 700 L600 700" />
        </g>

        {/* 45-degree diagonal routing */}
        <g stroke="var(--c-accent-cyan)" strokeWidth="1" opacity="0.15" strokeLinecap="round">
          <path d="M300 200 L380 280" />
          <path d="M250 120 L320 190" />
          <path d="M450 350 L520 420" />
          <path d="M100 500 L180 580" />
          <path d="M350 420 L280 490" />
          <path d="M550 600 L480 670" />
          <path d="M250 650 L330 730" />
          <path d="M400 280 L470 350" />
        </g>

        {/* Parallel trace pairs (differential pairs) */}
        <g stroke="var(--c-accent)" strokeWidth="0.8" opacity="0.12">
          <path d="M160 50 L160 195" />
          <path d="M310 205 L310 345" />
          <path d="M510 85 L510 245" />
          <path d="M110 305 L110 495" />
          <path d="M410 455 L410 595" />
        </g>

        {/* IC footprints */}
        <g stroke="var(--c-accent)" strokeWidth="0.8" opacity="0.18">
          {/* IC 1 - large QFP */}
          <rect x="270" y="170" width="60" height="60" rx="1" />
          <rect x="278" y="178" width="44" height="44" rx="1" fill="var(--c-accent)" fillOpacity="0.04" />
          {/* Pin markings */}
          <line x1="280" y1="170" x2="280" y2="163" />
          <line x1="290" y1="170" x2="290" y2="163" />
          <line x1="300" y1="170" x2="300" y2="163" />
          <line x1="310" y1="170" x2="310" y2="163" />
          <line x1="320" y1="170" x2="320" y2="163" />
          <line x1="280" y1="230" x2="280" y2="237" />
          <line x1="290" y1="230" x2="290" y2="237" />
          <line x1="300" y1="230" x2="300" y2="237" />
          <line x1="310" y1="230" x2="310" y2="237" />
          <line x1="320" y1="230" x2="320" y2="237" />
          <line x1="270" y1="180" x2="263" y2="180" />
          <line x1="270" y1="190" x2="263" y2="190" />
          <line x1="270" y1="200" x2="263" y2="200" />
          <line x1="270" y1="210" x2="263" y2="210" />
          <line x1="270" y1="220" x2="263" y2="220" />
          <line x1="330" y1="180" x2="337" y2="180" />
          <line x1="330" y1="190" x2="337" y2="190" />
          <line x1="330" y1="200" x2="337" y2="200" />
          <line x1="330" y1="210" x2="337" y2="210" />
          <line x1="330" y1="220" x2="337" y2="220" />

          {/* IC 2 - smaller */}
          <rect x="430" y="330" width="40" height="40" rx="1" />
          <rect x="436" y="336" width="28" height="28" rx="1" fill="var(--c-accent)" fillOpacity="0.04" />
          <line x1="440" y1="330" x2="440" y2="324" />
          <line x1="450" y1="330" x2="450" y2="324" />
          <line x1="460" y1="330" x2="460" y2="324" />
          <line x1="440" y1="370" x2="440" y2="376" />
          <line x1="450" y1="370" x2="450" y2="376" />
          <line x1="460" y1="370" x2="460" y2="376" />

          {/* IC 3 */}
          <rect x="180" y="470" width="50" height="50" rx="1" />
          <rect x="187" y="477" width="36" height="36" rx="1" fill="var(--c-accent)" fillOpacity="0.04" />
        </g>

        {/* Via pads with annular rings */}
        <g>
          {[
            [150, 200], [300, 200], [300, 350], [450, 350],
            [250, 120], [400, 120], [400, 280],
            [500, 250], [350, 250], [350, 420], [500, 420],
            [100, 500], [250, 500], [250, 650],
            [400, 600], [550, 600],
            [200, 750], [350, 750],
            [600, 400], [450, 700], [600, 700],
            [380, 280], [320, 190], [520, 420],
            [180, 580], [280, 490], [480, 670],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="5" stroke="var(--c-accent)" strokeWidth="1.2" fill="none" opacity="0.25" />
              <circle cx={cx} cy={cy} r="2" fill="var(--c-accent)" opacity="0.35" />
            </g>
          ))}
        </g>

        {/* Small SMD pads */}
        <g fill="var(--c-accent)" opacity="0.12">
          {[
            [200, 100], [220, 100], [200, 110], [220, 110],
            [480, 180], [498, 180], [480, 190], [498, 190],
            [320, 500], [338, 500], [320, 510], [338, 510],
            [560, 500], [578, 500], [560, 510], [578, 510],
          ].map(([x, y], i) => (
            <rect key={i} x={x} y={y} width="12" height="5" rx="0.5" />
          ))}
        </g>

        {/* Animated data pulses */}
        <g filter="url(#traceGlow)">
          <circle r="3" fill="var(--c-accent)" opacity="0.8">
            <animateMotion dur="3.5s" repeatCount="indefinite" path="M150,50 L150,200 L300,200 L300,350 L450,350" />
          </circle>
          <circle r="2.5" fill="var(--c-accent-cyan)" opacity="0.7">
            <animateMotion dur="4s" repeatCount="indefinite" begin="1s" path="M500,80 L500,250 L350,250 L350,420 L500,420" />
          </circle>
          <circle r="2" fill="var(--c-accent)" opacity="0.6">
            <animateMotion dur="5s" repeatCount="indefinite" begin="2.5s" path="M400,450 L400,600 L550,600 L550,800" />
          </circle>
          <circle r="2.5" fill="var(--c-accent-cyan)" opacity="0.7">
            <animateMotion dur="3s" repeatCount="indefinite" begin="0.5s" path="M250,0 L250,120 L400,120 L400,280" />
          </circle>
        </g>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}

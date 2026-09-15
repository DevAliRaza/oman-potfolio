"use client";

import { useEffect, useState } from "react";

export default function CircuitTrace() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className={`absolute right-0 top-0 w-[60%] h-full transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}
        viewBox="0 0 600 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMaxYMid slice"
      >
        <g stroke="var(--c-amber)" strokeWidth="1.5" opacity="0.15">
          <path d="M200 0 L200 200 L350 200 L350 350" />
          <path d="M350 350 L350 500 L500 500" />
          <path d="M100 100 L100 300 L250 300" />
          <path d="M400 0 L400 150 L500 150 L500 400" />
          <path d="M300 400 L300 600 L450 600 L450 800" />
          <path d="M150 500 L150 700 L300 700" />
        </g>

        <g fill="var(--c-amber)" opacity="0.2">
          <circle cx="200" cy="200" r="4" />
          <circle cx="350" cy="200" r="4" />
          <circle cx="350" cy="350" r="4" />
          <circle cx="500" cy="500" r="4" />
          <circle cx="100" cy="300" r="4" />
          <circle cx="250" cy="300" r="4" />
          <circle cx="400" cy="150" r="4" />
          <circle cx="500" cy="150" r="4" />
          <circle cx="300" cy="600" r="4" />
          <circle cx="450" cy="600" r="4" />
          <circle cx="150" cy="700" r="4" />
          <circle cx="300" cy="700" r="4" />
        </g>

        <g stroke="var(--c-amber)" strokeWidth="1" opacity="0.1" fill="none">
          <rect x="330" y="330" width="40" height="40" rx="2" />
          <rect x="480" y="480" width="40" height="40" rx="2" />
          <rect x="230" y="280" width="40" height="40" rx="2" />
        </g>

        <g stroke="var(--c-amber)" strokeWidth="1" opacity="0.12" fill="none">
          <circle cx="200" cy="200" r="8" />
          <circle cx="350" cy="350" r="8" />
          <circle cx="500" cy="500" r="8" />
          <circle cx="300" cy="600" r="8" />
        </g>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
    </div>
  );
}

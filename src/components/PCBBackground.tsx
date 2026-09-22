"use client";

import { useEffect, useRef } from "react";

interface Via {
  x: number;
  y: number;
  r: number;
  innerR: number;
}

interface ICPad {
  x: number;
  y: number;
  w: number;
  h: number;
  pins: { x: number; y: number; side: "t" | "b" | "l" | "r" }[];
}

interface TracePath {
  segments: { x1: number; y1: number; x2: number; y2: number }[];
  width: number;
}

function generatePCB(w: number, h: number, density: number) {
  const vias: Via[] = [];
  const ics: ICPad[] = [];
  const traces: TracePath[] = [];
  const step = 20;

  // Generate IC footprints
  const icCount = Math.floor(8 * density);
  for (let i = 0; i < icCount; i++) {
    const ix = 60 + Math.random() * (w - 120);
    const iy = 60 + Math.random() * (h - 120);
    const iw = 30 + Math.random() * 50;
    const ih = 30 + Math.random() * 50;
    const pins: ICPad["pins"] = [];
    const pinSpacing = 8;

    // Top and bottom pins
    for (let px = ix + 6; px < ix + iw - 6; px += pinSpacing) {
      pins.push({ x: px, y: iy, side: "t" });
      pins.push({ x: px, y: iy + ih, side: "b" });
    }
    // Left and right pins
    for (let py = iy + 6; py < iy + ih - 6; py += pinSpacing) {
      pins.push({ x: ix, y: py, side: "l" });
      pins.push({ x: ix + iw, y: py, side: "r" });
    }

    ics.push({ x: ix, y: iy, w: iw, h: ih, pins });
  }

  // Generate vias scattered around
  const viaCount = Math.floor(60 * density);
  for (let i = 0; i < viaCount; i++) {
    vias.push({
      x: 20 + Math.random() * (w - 40),
      y: 20 + Math.random() * (h - 40),
      r: 3 + Math.random() * 3,
      innerR: 1 + Math.random() * 1.5,
    });
  }

  // Generate traces - PCB routing style (90° and 45° only)
  const traceCount = Math.floor(80 * density);
  for (let i = 0; i < traceCount; i++) {
    const segments: TracePath["segments"] = [];
    let cx = Math.random() * w;
    let cy = Math.random() * h;
    const segCount = 2 + Math.floor(Math.random() * 6);
    const tw = 0.8 + Math.random() * 1.2;

    for (let s = 0; s < segCount; s++) {
      const len = step * (2 + Math.floor(Math.random() * 8));
      const dir = Math.floor(Math.random() * 8); // 0-3: cardinal, 4-7: diagonal
      let nx = cx;
      let ny = cy;

      switch (dir) {
        case 0: ny -= len; break;
        case 1: nx += len; break;
        case 2: ny += len; break;
        case 3: nx -= len; break;
        case 4: nx += len * 0.707; ny -= len * 0.707; break;
        case 5: nx += len * 0.707; ny += len * 0.707; break;
        case 6: nx -= len * 0.707; ny += len * 0.707; break;
        case 7: nx -= len * 0.707; ny -= len * 0.707; break;
      }

      nx = Math.max(5, Math.min(w - 5, nx));
      ny = Math.max(5, Math.min(h - 5, ny));
      segments.push({ x1: cx, y1: cy, x2: nx, y2: ny });
      cx = nx;
      cy = ny;
    }

    traces.push({ segments, width: tw });
  }

  // Generate traces from IC pins outward
  for (const ic of ics) {
    for (const pin of ic.pins) {
      if (Math.random() < 0.4) continue;
      const segments: TracePath["segments"] = [];
      let cx = pin.x;
      let cy = pin.y;
      const ext = 15 + Math.random() * 40;

      if (pin.side === "t") {
        segments.push({ x1: cx, y1: cy, x2: cx, y2: cy - ext });
        cy -= ext;
      } else if (pin.side === "b") {
        segments.push({ x1: cx, y1: cy, x2: cx, y2: cy + ext });
        cy += ext;
      } else if (pin.side === "l") {
        segments.push({ x1: cx, y1: cy, x2: cx - ext, y2: cy });
        cx -= ext;
      } else {
        segments.push({ x1: cx, y1: cy, x2: cx + ext, y2: cy });
        cx += ext;
      }

      // Add a 45° bend
      if (Math.random() < 0.6) {
        const bendLen = 20 + Math.random() * 40;
        const dx = (Math.random() < 0.5 ? 1 : -1) * bendLen * 0.707;
        const dy = (Math.random() < 0.5 ? 1 : -1) * bendLen * 0.707;
        segments.push({ x1: cx, y1: cy, x2: cx + dx, y2: cy + dy });
      }

      traces.push({ segments, width: 0.8 });
    }
  }

  return { vias, ics, traces };
}

export default function PCBBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animRef = useRef<number>(0);
  const dataRef = useRef<ReturnType<typeof generatePCB> | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = w < 768;
    const density = isMobile ? 0.4 : 1;

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      dataRef.current = generatePCB(w, h, density);
    }
    resize();

    // Pulses traveling along traces
    const pulseCount = prefersReduced ? 0 : Math.floor(12 * density);
    const pulses = Array.from({ length: pulseCount }, () => ({
      traceIdx: 0,
      segIdx: 0,
      t: 0,
      speed: 0.008 + Math.random() * 0.015,
      color: Math.random() < 0.6 ? [92, 240, 138] : [32, 200, 216],
    }));
    // Assign random starting traces
    pulses.forEach((p) => {
      const data = dataRef.current!;
      p.traceIdx = Math.floor(Math.random() * data.traces.length);
      p.segIdx = Math.floor(Math.random() * Math.max(1, data.traces[p.traceIdx]?.segments.length || 1));
      p.t = Math.random();
    });

    function handleMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }
    function handleMouseLeave() {
      mouseRef.current = { x: -1000, y: -1000 };
    }

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseleave", handleMouseLeave);
    }

    function distToMouse(x: number, y: number) {
      const dx = x - mouseRef.current.x;
      const dy = y - mouseRef.current.y;
      return Math.sqrt(dx * dx + dy * dy);
    }

    function cursorGlow(x: number, y: number, baseAlpha: number): number {
      const dist = distToMouse(x, y);
      const radius = 200;
      if (dist > radius) return baseAlpha;
      const boost = (1 - dist / radius) * 0.6;
      return Math.min(1, baseAlpha + boost);
    }

    function draw() {
      const data = dataRef.current;
      if (!data) return;
      ctx!.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Cursor glow circle
      if (mx > -500 && my > -500) {
        const cursorGrad = ctx!.createRadialGradient(mx, my, 0, mx, my, 220);
        cursorGrad.addColorStop(0, "rgba(92,240,138,0.06)");
        cursorGrad.addColorStop(0.5, "rgba(32,200,216,0.03)");
        cursorGrad.addColorStop(1, "transparent");
        ctx!.fillStyle = cursorGrad;
        ctx!.fillRect(mx - 220, my - 220, 440, 440);
      }

      // Draw traces
      for (const trace of data.traces) {
        for (const seg of trace.segments) {
          const midX = (seg.x1 + seg.x2) / 2;
          const midY = (seg.y1 + seg.y2) / 2;
          const alpha = cursorGlow(midX, midY, 0.12);
          ctx!.beginPath();
          ctx!.moveTo(seg.x1, seg.y1);
          ctx!.lineTo(seg.x2, seg.y2);
          ctx!.strokeStyle = `rgba(92,240,138,${alpha})`;
          ctx!.lineWidth = trace.width;
          ctx!.lineCap = "round";
          ctx!.stroke();
        }
      }

      // Draw IC pads
      for (const ic of data.ics) {
        const alpha = cursorGlow(ic.x + ic.w / 2, ic.y + ic.h / 2, 0.08);
        ctx!.strokeStyle = `rgba(92,240,138,${alpha})`;
        ctx!.lineWidth = 1;
        ctx!.strokeRect(ic.x, ic.y, ic.w, ic.h);

        // Inner die area
        const inset = 4;
        ctx!.fillStyle = `rgba(92,240,138,${alpha * 0.3})`;
        ctx!.fillRect(ic.x + inset, ic.y + inset, ic.w - inset * 2, ic.h - inset * 2);

        // Pins
        for (const pin of ic.pins) {
          ctx!.beginPath();
          ctx!.arc(pin.x, pin.y, 1.5, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(92,240,138,${alpha * 1.5})`;
          ctx!.fill();
        }
      }

      // Draw vias
      for (const via of data.vias) {
        const alpha = cursorGlow(via.x, via.y, 0.15);
        // Outer annular ring
        ctx!.beginPath();
        ctx!.arc(via.x, via.y, via.r, 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(92,240,138,${alpha})`;
        ctx!.lineWidth = 1.2;
        ctx!.stroke();
        // Inner drill hole
        ctx!.beginPath();
        ctx!.arc(via.x, via.y, via.innerR, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(92,240,138,${alpha * 0.8})`;
        ctx!.fill();
      }

      // Draw pulses
      if (!prefersReduced) {
        for (const pulse of pulses) {
          const trace = data.traces[pulse.traceIdx];
          if (!trace || trace.segments.length === 0) {
            pulse.traceIdx = Math.floor(Math.random() * data.traces.length);
            pulse.segIdx = 0;
            pulse.t = 0;
            continue;
          }

          const seg = trace.segments[pulse.segIdx];
          if (!seg) {
            pulse.segIdx = 0;
            pulse.t = 0;
            continue;
          }

          const px = seg.x1 + (seg.x2 - seg.x1) * pulse.t;
          const py = seg.y1 + (seg.y2 - seg.y1) * pulse.t;

          // Glow
          const glow = ctx!.createRadialGradient(px, py, 0, px, py, 10);
          const [r, g, b] = pulse.color;
          glow.addColorStop(0, `rgba(${r},${g},${b},0.7)`);
          glow.addColorStop(0.4, `rgba(${r},${g},${b},0.2)`);
          glow.addColorStop(1, `rgba(${r},${g},${b},0)`);
          ctx!.fillStyle = glow;
          ctx!.fillRect(px - 10, py - 10, 20, 20);

          // Core
          ctx!.beginPath();
          ctx!.arc(px, py, 2, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${r},${g},${b},0.9)`;
          ctx!.fill();

          pulse.t += pulse.speed;
          if (pulse.t >= 1) {
            pulse.t = 0;
            pulse.segIdx++;
            if (pulse.segIdx >= trace.segments.length) {
              pulse.segIdx = 0;
              pulse.traceIdx = Math.floor(Math.random() * data.traces.length);
            }
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    }

    let paused = false;
    function handleVisibility() {
      if (document.hidden) {
        paused = true;
        cancelAnimationFrame(animRef.current);
      } else if (paused) {
        paused = false;
        draw();
      }
    }

    draw();

    const handleResize = () => { resize(); };
    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

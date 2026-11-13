// Code-drawn animated effects (lighter and crisper than GIFs, and they respect reduced-motion).
import { useMemo } from "react";

/** Glowing embers drifting upward, Lady Cinder's signature. */
export function Embers({ count = 18, className = "", intensity = 1 }) {
  const sparks = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const r = (n) => ((Math.sin(i * 9301 + n * 49297) + 1) / 2) % 1; // stable pseudo-random
        return {
          left: r(1) * 100,
          size: 2 + r(2) * 4,
          dur: 5 + r(3) * 7,
          delay: -r(4) * 12,
          drift: (r(5) - 0.5) * 120,
          hue: r(6) > 0.7 ? "#ffd27a" : r(6) > 0.3 ? "#ff8a2b" : "#e0401f",
        };
      }),
    [count],
  );
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {sparks.map((s, i) => (
        <span
          key={i}
          className="ember"
          style={{
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            background: s.hue,
            boxShadow: `0 0 ${6 * intensity}px ${2 * intensity}px ${s.hue}`,
            animationDuration: `${s.dur}s`,
            animationDelay: `${s.delay}s`,
            "--drift": `${s.drift}px`,
          }}
        />
      ))}
    </div>
  );
}

/** Slow-rolling smoke/fog banks. */
export function Smoke({ className = "", color = "180,170,160", opacity = 0.18 }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="smoke-bank"
          style={{
            top: `${30 + i * 22}%`,
            animationDuration: `${26 + i * 9}s`,
            animationDelay: `${-i * 7}s`,
            background: `radial-gradient(ellipse at center, rgba(${color},${opacity}) 0%, rgba(${color},0) 65%)`,
          }}
        />
      ))}
    </div>
  );
}

/** A flickering pool of lamplight. */
export function LampGlow({ className = "", color = "255,190,110" }) {
  return (
    <div
      className={`absolute pointer-events-none lamp-flicker ${className}`}
      aria-hidden="true"
      style={{ background: `radial-gradient(circle, rgba(${color},.35) 0%, rgba(${color},.08) 40%, rgba(${color},0) 70%)` }}
    />
  );
}

/** Lady Cinder's calling card: scorched edges, still smoldering. */
export function CallingCard({ text = "With compliments.", className = "" }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg viewBox="0 0 240 140" className="w-full h-auto drop-shadow-xl card-smolder" role="img" aria-label="A scorched calling card signed C">
        <defs>
          <filter id="scorch">
            <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="7" />
            <feDisplacementMap in="SourceGraphic" scale="9" />
          </filter>
          <radialGradient id="burn" cx="50%" cy="50%" r="65%">
            <stop offset="55%" stopColor="#f4ead5" />
            <stop offset="80%" stopColor="#b98a4a" />
            <stop offset="93%" stopColor="#3a1a0a" />
            <stop offset="100%" stopColor="#120804" />
          </radialGradient>
        </defs>
        <g filter="url(#scorch)">
          <rect x="10" y="10" width="220" height="120" rx="4" fill="url(#burn)" />
        </g>
        <rect x="26" y="24" width="188" height="92" fill="none" stroke="#7a181c" strokeWidth="1" opacity=".6" />
        <text x="120" y="70" textAnchor="middle" fontFamily="Georgia, serif" fontSize="40" fontStyle="italic" fill="#7a181c">C.</text>
        <text x="120" y="96" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fontStyle="italic" fill="#3d2817">{text}</text>
        <g className="card-glow">
          <path d="M14 118 q20 -6 34 6 M196 14 q12 10 30 4 M222 100 q-8 10 2 26" stroke="#ff8a2b" strokeWidth="2.5" fill="none" opacity=".85" />
        </g>
      </svg>
      <Embers count={8} intensity={0.8} />
    </div>
  );
}

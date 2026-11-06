import { useEffect, useState } from "react";
import { clockParts, formatHour } from "../game/engine.js";

/** Sky colour overlay for a given hour: dawn, day, dusk or night. */
export function skyFor(hour) {
  if (hour >= 6 && hour < 8) return { tint: "rgba(255,150,90,0.22)", mode: "dawn" };
  if (hour >= 8 && hour < 17) return { tint: "rgba(255,240,200,0.0)", mode: "day" };
  if (hour >= 17 && hour < 20) return { tint: "rgba(220,90,40,0.28)", mode: "dusk" };
  return { tint: "rgba(10,20,60,0.55)", mode: "night" };
}

/** Day/night overlay with stars and rain at night. */
export function SkyOverlay({ hour, rain = false }) {
  const sky = skyFor(hour);
  return (
    <div className="absolute inset-0 pointer-events-none transition-colors duration-1000" style={{ background: sky.tint }}>
      {sky.mode === "night" && (
        <>
          {Array.from({ length: 22 }).map((_, i) => (
            <span
              key={i}
              className="absolute w-[2px] h-[2px] rounded-full bg-white"
              style={{ left: `${(i * 37) % 100}%`, top: `${(i * 13) % 40}%`, animation: `twinkle ${2 + (i % 4)}s ease-in-out ${i * 0.3}s infinite` }}
            />
          ))}
          {rain && <div className="absolute inset-0 rain opacity-60" />}
        </>
      )}
    </div>
  );
}

/** Analog clock face with day name; the hand sweeps when time jumps. */
export function Clock({ now, deadline, compact = false }) {
  const { day, hour } = clockParts(now);
  const left = Math.max(0, deadline - now);
  const pct = Math.max(0, Math.min(1, left / Math.max(1, deadline - 9)));
  const angle = (hour % 12) * 30;
  const urgent = left <= 12;
  const night = hour >= 20 || hour < 6;
  return (
    <div className="flex items-center gap-3">
      <svg viewBox="0 0 44 44" className={compact ? "w-9 h-9" : "w-12 h-12"} aria-hidden="true">
        <circle cx="22" cy="22" r="20" fill={night ? "#101622" : "#f4ead5"} stroke="#b08d57" strokeWidth="2" />
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={i} x1="22" y1="4" x2="22" y2={i % 3 === 0 ? 8 : 6} stroke={night ? "#d4ad6b" : "#1a1410"} strokeWidth="1.5" transform={`rotate(${i * 30} 22 22)`} />
        ))}
        <line x1="22" y1="22" x2="22" y2="10" stroke={urgent ? "#c1272d" : night ? "#f4ead5" : "#1a1410"} strokeWidth="2.5" strokeLinecap="round" style={{ transform: `rotate(${angle}deg)`, transformOrigin: "22px 22px", transition: "transform 1.2s cubic-bezier(.4,1.6,.5,1)" }} />
        <circle cx="22" cy="22" r="2" fill="#c1272d" />
        <text x="22" y="34" textAnchor="middle" fontSize="6" fill={night ? "#d4ad6b" : "#7a5d33"} fontFamily="monospace">
          {night ? "☾" : "☀"}
        </text>
      </svg>
      <div className="leading-tight">
        <div className="label text-brass-light" style={{ fontSize: 9 }}>{day}</div>
        <div className="font-mono text-parchment text-sm">{formatHour(hour)}</div>
        <div className="mt-1 h-1 w-20 bg-night-light rounded overflow-hidden" title={`${left} hours left`}>
          <div className={`h-full ${urgent ? "bg-stamp-bright pulse-red" : "bg-brass"}`} style={{ width: `${pct * 100}%`, transition: "width 1s" }} />
        </div>
        <div className={`font-mono ${urgent ? "text-stamp-bright" : "text-brass/70"}`} style={{ fontSize: 9 }}>
          {left}h to deadline
        </div>
      </div>
    </div>
  );
}

/** Rubber stamp for the passport. */
export function Stamp({ city, index, small = false }) {
  const rot = ((index * 47) % 24) - 12;
  const colors = ["#a01f24", "#1d4e89", "#1a3a1a", "#6b2d6b", "#7a5d33"];
  const color = colors[index % colors.length];
  return (
    <div
      className={`stamp-in inline-flex flex-col items-center justify-center rounded-full border-[3px] border-double font-mono uppercase text-center ${small ? "w-16 h-16" : "w-20 h-20"}`}
      style={{ "--r": `${rot}deg`, borderColor: color, color, animationDelay: `${index * 0.05}s` }}
      title={`${city.name}, ${city.country}`}
    >
      <span style={{ fontSize: 7, letterSpacing: ".15em" }}>Arrived</span>
      <span className="font-bold leading-none" style={{ fontSize: city.name.length > 10 ? 8 : 10 }}>{city.name}</span>
      <span style={{ fontSize: 7 }}>{city.country.slice(0, 14)}</span>
    </div>
  );
}

/** Text that types itself out, for witness statements. */
export function Typewriter({ text, speed = 14, className = "" }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    setN(0);
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(text.length);
      return;
    }
    const id = setInterval(() => setN((v) => (v >= text.length ? (clearInterval(id), v) : v + 2)), speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return (
    <span className={className} onClick={() => setN(text.length)}>
      {text.slice(0, n)}
      {n < text.length && <span className="caret" />}
    </span>
  );
}

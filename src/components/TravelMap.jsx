import { useEffect, useRef, useState } from "react";
import { project } from "../game/geo.js";
import { SCENE_IMG } from "../assets/index.js";
import { CITY_BY_ID, formatClock } from "../game/engine.js";

const W = 1100;
const H = 703;
const pt = (c) => {
  const p = project(c.lat, c.lon);
  return { x: (p.x / 100) * W, y: (p.y / 100) * H };
};

function arc(a, b) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dist = Math.hypot(b.x - a.x, b.y - a.y);
  return { a, b, c: { x: mx, y: my - Math.min(160, dist * 0.35) } };
}
const bez = ({ a, b, c }, t) => ({
  x: (1 - t) ** 2 * a.x + 2 * (1 - t) * t * c.x + t ** 2 * b.x,
  y: (1 - t) ** 2 * a.y + 2 * (1 - t) * t * c.y + t ** 2 * b.y,
});

/**
 * Departure board + vintage map. Picking a destination animates the flight,
 * then calls onFly(cityId).
 */
export default function TravelMap({ from, options, route, now, onFly, onCancel }) {
  const [hover, setHover] = useState(null);
  const [flying, setFlying] = useState(null); // { to, t }
  const raf = useRef(0);
  const here = pt(from);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  function fly(opt) {
    if (flying) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const dur = reduce ? 1 : 1400 + opt.hours * 120;
    const t0 = performance.now();
    const step = (ts) => {
      const t = Math.min(1, (ts - t0) / dur);
      setFlying({ to: opt, t });
      if (t < 1) raf.current = requestAnimationFrame(step);
      else setTimeout(() => onFly(opt.id), 350);
    };
    raf.current = requestAnimationFrame(step);
  }

  const active = flying?.to || hover;
  const path = active ? arc(here, pt(active)) : null;
  const ease = flying ? 0.5 - Math.cos(Math.PI * flying.t) / 2 : 0;
  const plane = flying ? bez(path, ease) : null;
  const ahead = flying ? bez(path, Math.min(1, ease + 0.02)) : null;
  const heading = plane ? (Math.atan2(ahead.y - plane.y, ahead.x - plane.x) * 180) / Math.PI : 0;

  return (
    <div className="min-h-screen bg-night text-parchment flex flex-col">
      <div className="px-4 pt-4 pb-2 flex items-center justify-between max-w-5xl w-full mx-auto">
        <div>
          <div className="label text-brass">Departures · {from.name}</div>
          <div className="font-serif text-xl">Where did they go?</div>
        </div>
        {!flying && (
          <button className="btn px-3 py-2 text-[10px]" onClick={onCancel}>
            ◂ Stay
          </button>
        )}
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-2">
        <div className="relative w-full overflow-hidden border border-brass/40 shadow-2xl" style={{ aspectRatio: `${W}/${H}` }}>
          <img src={SCENE_IMG.map} alt="World map" className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 55%, rgba(10,13,20,.55))" }} />
          <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 w-full h-full">
            {/* route travelled so far this case */}
            {route.slice(1).map((id, i) => {
              const p = arc(pt(CITY_BY_ID[route[i]]), pt(CITY_BY_ID[id]));
              return <path key={i} d={`M${p.a.x},${p.a.y} Q${p.c.x},${p.c.y} ${p.b.x},${p.b.y}`} stroke="#7a5d33" strokeWidth="2" fill="none" strokeDasharray="2 6" opacity=".8" />;
            })}
            {path && (
              <path
                d={`M${path.a.x},${path.a.y} Q${path.c.x},${path.c.y} ${path.b.x},${path.b.y}`}
                stroke="#c1272d"
                strokeWidth="3.5"
                fill="none"
                strokeDasharray="10 8"
                style={{ filter: "drop-shadow(0 0 3px rgba(193,39,45,.6))" }}
              />
            )}
            {options.map((o) => {
              const p = pt(o);
              const on = active?.id === o.id;
              return (
                <g key={o.id} style={{ cursor: "pointer" }} onClick={() => fly(o)} onMouseEnter={() => !flying && setHover(o)} onMouseLeave={() => !flying && setHover(null)}>
                  <circle cx={p.x} cy={p.y} r="14" fill="#c1272d" opacity=".35" className="ping-slow" style={{ transformOrigin: `${p.x}px ${p.y}px` }} />
                  <circle cx={p.x} cy={p.y} r={on ? 9 : 7} fill={on ? "#c1272d" : "#1a1410"} stroke="#f4ead5" strokeWidth="2.5" />
                  <rect x={p.x + 12} y={p.y - 13} width={o.name.length * 9.5 + 14} height="24" fill="rgba(26,20,16,.85)" rx="2" />
                  <text x={p.x + 19} y={p.y + 4} fill="#f4ead5" fontSize="16" fontFamily="Georgia, serif">
                    {o.name}
                  </text>
                </g>
              );
            })}
            <g>
              <circle cx={here.x} cy={here.y} r="10" fill="#d4ad6b" stroke="#1a1410" strokeWidth="3" />
              <text x={here.x} y={here.y + 30} textAnchor="middle" fill="#1a1410" fontSize="15" fontWeight="bold" fontFamily="monospace" style={{ paintOrder: "stroke", stroke: "#f4ead5", strokeWidth: 4 }}>
                YOU · {from.name.toUpperCase()}
              </text>
            </g>
            {plane && (
              <g transform={`translate(${plane.x} ${plane.y}) rotate(${heading}) scale(1.6)`}>
                <path d="M12 0 L-6 -3 L-10 -12 L-13 -12 L-11 -2 L-16 -1 L-18 -6 L-20 -6 L-19 0 L-20 6 L-18 6 L-16 1 L-11 2 L-13 12 L-10 12 L-6 3 Z" fill="#f4ead5" stroke="#1a1410" strokeWidth="1.5" />
              </g>
            )}
          </svg>
          {flying && (
            <div className="absolute left-3 bottom-3 bg-ink/90 border border-brass/50 px-3 py-2 font-mono text-xs fade-in">
              <div className="label text-brass" style={{ fontSize: 8 }}>In flight → {flying.to.name}</div>
              <div className="text-parchment">{formatClock(now + Math.round(flying.to.hours * ease))}</div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-5xl w-full mx-auto px-4 py-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((o) => (
          <button
            key={o.id}
            disabled={!!flying}
            onClick={() => fly(o)}
            onMouseEnter={() => setHover(o)}
            onMouseLeave={() => setHover(null)}
            className={`btn text-left px-4 py-3 flex items-center justify-between ${active?.id === o.id ? "border-stamp-bright bg-stamp/20" : ""}`}
          >
            <span>
              <span className="font-serif normal-case tracking-normal text-parchment text-base">{o.name}</span>
              <span className="block text-[10px] text-brass/70">{o.country}</span>
            </span>
            <span className="text-[11px] text-brass-light">✈ {o.hours}h</span>
          </button>
        ))}
      </div>
    </div>
  );
}

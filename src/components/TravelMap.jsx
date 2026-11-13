import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { project } from "../game/geo.js";
import { SCENE_IMG } from "../assets/index.js";
import { CITY_BY_ID, formatClock } from "../game/engine.js";
import { buzz, isTouch } from "../game/haptics.js";
import { preloadPosters } from "./Poster.jsx";

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

/** Crop of the map that fits every point (plus the arcs between them), keeping the box's aspect ratio. */
function fitBox(points, aspect) {
  const pad = 70;
  let x0 = Math.min(...points.map((p) => p.x)) - pad;
  let x1 = Math.max(...points.map((p) => p.x)) + pad * 2.2; // room for labels on the right
  let y0 = Math.min(...points.map((p) => p.y)) - pad * 1.8; // room for arcs bowing upward
  let y1 = Math.max(...points.map((p) => p.y)) + pad;
  let w = Math.max(x1 - x0, 320);
  let h = Math.max(y1 - y0, 320 / aspect);
  if (w / h > aspect) h = w / aspect;
  else w = h * aspect;
  w = Math.min(w, W);
  h = Math.min(h, H);
  const cx = (x0 + x1) / 2;
  const cy = (y0 + y1) / 2;
  const x = Math.min(Math.max(cx - w / 2, 0), W - w);
  const y = Math.min(Math.max(cy - h / 2, 0), H - h);
  return { x, y, w, h };
}


/**
 * Departure board + vintage map. On touch screens a tap selects a destination and
 * previews the route; "Fly" confirms. With a mouse, a click flies straight away.
 */
export default function TravelMap({ from, options, route, now, onFly, onCancel }) {
  const [hover, setHover] = useState(null);
  const [selected, setSelected] = useState(null);
  const [flying, setFlying] = useState(null); // { to, t }
  const [boxPx, setBoxPx] = useState(360);
  const raf = useRef(0);
  const wrap = useRef(null);
  const here = pt(from);
  const touch = useMemo(isTouch, []);

  useEffect(() => () => cancelAnimationFrame(raf.current), []);
  // Start fetching the destination posters while the player decides.
  useEffect(() => {
    preloadPosters(options.map((o) => o.id));
  }, [options.map((o) => o.id).join()]);
  useLayoutEffect(() => {
    const el = wrap.current;
    if (!el) return undefined;
    const ro = new ResizeObserver(([e]) => setBoxPx(e.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Phones get a taller crop so the zoomed region fills the screen width.
  const aspect = boxPx < 640 ? 1.25 : W / H;
  const view = useMemo(() => fitBox([here, ...options.map(pt)], aspect), [from.id, options.map((o) => o.id).join(), aspect]);
  const u = view.w / boxPx; // map units per screen pixel: keeps pins and labels a constant on-screen size

  function fly(opt) {
    if (flying) return;
    buzz(15);
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
  function choose(opt) {
    if (flying) return;
    if (touch && selected?.id !== opt.id) {
      buzz(8);
      setSelected(opt);
    } else fly(opt);
  }

  const active = flying?.to || selected || hover;
  const path = active ? arc(here, pt(active)) : null;
  const ease = flying ? 0.5 - Math.cos(Math.PI * flying.t) / 2 : 0;
  const plane = flying ? bez(path, ease) : null;
  const ahead = flying ? bez(path, Math.min(1, ease + 0.02)) : null;
  const heading = plane ? (Math.atan2(ahead.y - plane.y, ahead.x - plane.x) * 180) / Math.PI : 0;
  const font = 14 * u;

  return (
    <div className="min-h-screen bg-night text-parchment flex flex-col safe-top" style={{ paddingBottom: touch ? "calc(88px + env(safe-area-inset-bottom))" : 0 }}>
      <div className="px-4 pt-3 pb-2 flex items-center justify-between max-w-5xl w-full mx-auto">
        <div>
          <div className="label text-brass">Departures · {from.name}</div>
          <div className="font-serif text-xl">Where did they go?</div>
        </div>
        {!flying && (
          <button className="btn px-4 min-h-[44px] text-[11px]" onClick={onCancel}>
            ◂ Stay
          </button>
        )}
      </div>

      <div className="relative w-full max-w-5xl mx-auto sm:px-2">
        <div ref={wrap} className="relative w-full overflow-hidden sm:border border-y border-brass/40 shadow-2xl" style={{ aspectRatio: `${aspect}` }}>
          <svg viewBox={`${view.x} ${view.y} ${view.w} ${view.h}`} className="absolute inset-0 w-full h-full" style={{ transition: "all .4s" }}>
            <image href={SCENE_IMG.map} x="0" y="0" width={W} height={H} />
            <rect x={view.x} y={view.y} width={view.w} height={view.h} fill="url(#vignette)" />
            <defs>
              <radialGradient id="vignette">
                <stop offset=".6" stopColor="#0a0d14" stopOpacity="0" />
                <stop offset="1" stopColor="#0a0d14" stopOpacity=".5" />
              </radialGradient>
            </defs>
            {route.slice(1).map((id, i) => {
              const p = arc(pt(CITY_BY_ID[route[i]]), pt(CITY_BY_ID[id]));
              return <path key={i} d={`M${p.a.x},${p.a.y} Q${p.c.x},${p.c.y} ${p.b.x},${p.b.y}`} stroke="#7a5d33" strokeWidth={2 * u} fill="none" strokeDasharray={`${2 * u} ${6 * u}`} opacity=".8" />;
            })}
            {path && (
              <path
                d={`M${path.a.x},${path.a.y} Q${path.c.x},${path.c.y} ${path.b.x},${path.b.y}`}
                stroke="#c1272d"
                strokeWidth={3.5 * u}
                fill="none"
                strokeDasharray={`${10 * u} ${8 * u}`}
              />
            )}
            {options.map((o) => {
              const p = pt(o);
              const on = active?.id === o.id;
              const labelW = (o.name.length * 8.2 + 16) * u;
              return (
                <g key={o.id} style={{ cursor: "pointer" }} onClick={() => choose(o)} onMouseEnter={() => !touch && !flying && setHover(o)} onMouseLeave={() => !touch && !flying && setHover(null)}>
                  {/* generous invisible hit area for fingers */}
                  <rect x={p.x - 22 * u} y={p.y - 22 * u} width={labelW + 34 * u} height={44 * u} fill="transparent" />
                  <circle cx={p.x} cy={p.y} r={14 * u} fill="#c1272d" opacity=".35" className="ping-slow" style={{ transformOrigin: `${p.x}px ${p.y}px` }} />
                  <circle cx={p.x} cy={p.y} r={(on ? 8 : 6) * u} fill={on ? "#c1272d" : "#1a1410"} stroke="#f4ead5" strokeWidth={2.5 * u} />
                  <rect x={p.x + 11 * u} y={p.y - 12 * u} width={labelW} height={24 * u} fill={on ? "#a01f24" : "rgba(26,20,16,.88)"} rx={2 * u} />
                  <text x={p.x + 19 * u} y={p.y + 5 * u} fill="#f4ead5" fontSize={font} fontFamily="Georgia, serif">
                    {o.name}
                  </text>
                </g>
              );
            })}
            <g>
              <circle cx={here.x} cy={here.y} r={9 * u} fill="#d4ad6b" stroke="#1a1410" strokeWidth={3 * u} />
              <text
                x={Math.min(Math.max(here.x, view.x + 70 * u), view.x + view.w - 70 * u)}
                y={here.y + 26 * u}
                textAnchor="middle" fill="#1a1410" fontSize={12 * u} fontWeight="bold" fontFamily="monospace" style={{ paintOrder: "stroke", stroke: "#f4ead5", strokeWidth: 4 * u }}>
                YOU · {from.name.toUpperCase()}
              </text>
            </g>
            {plane && (
              <g transform={`translate(${plane.x} ${plane.y}) rotate(${heading}) scale(${1.3 * u})`}>
                <path d="M12 0 L-6 -3 L-10 -12 L-13 -12 L-11 -2 L-16 -1 L-18 -6 L-20 -6 L-19 0 L-20 6 L-18 6 L-16 1 L-11 2 L-13 12 L-10 12 L-6 3 Z" fill="#f4ead5" stroke="#1a1410" strokeWidth="1.5" />
              </g>
            )}
          </svg>
          {flying && (
            <div className="absolute left-2 top-2 bg-ink/90 border border-brass/50 px-3 py-2 font-mono text-xs fade-in">
              <div className="label text-brass" style={{ fontSize: 8 }}>In flight → {flying.to.name}</div>
              <div className="text-parchment">{formatClock(now + Math.round(flying.to.hours * ease))}</div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-5xl w-full mx-auto px-4 py-3 grid grid-cols-2 gap-2">
        {options.map((o) => (
          <button
            key={o.id}
            disabled={!!flying}
            onClick={() => choose(o)}
            onMouseEnter={() => !touch && setHover(o)}
            onMouseLeave={() => !touch && setHover(null)}
            aria-pressed={active?.id === o.id}
            className={`btn text-left px-3 py-2 min-h-[56px] flex items-center justify-between gap-2 ${active?.id === o.id ? "!border-stamp-bright !bg-stamp/25" : ""}`}
          >
            <span className="min-w-0">
              <span className="font-serif normal-case tracking-normal text-parchment text-[15px] block leading-tight">{o.name}</span>
              <span className="block text-[9px] text-brass/70 tracking-[.12em] leading-tight mt-0.5">{o.country}</span>
            </span>
            <span className="text-[11px] text-brass-light whitespace-nowrap tracking-normal">{o.hours}h</span>
          </button>
        ))}
      </div>

      {touch && !flying && (
        <div className="fixed bottom-0 inset-x-0 z-30 bg-ink/95 border-t border-brass/30 backdrop-blur safe-bottom">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <button className="btn btn-red w-full min-h-[52px] text-sm" disabled={!selected} onClick={() => selected && fly(selected)}>
              {selected ? `✈ Fly to ${selected.name} · ${selected.hours}h` : "Tap a destination"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

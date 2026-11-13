import { useEffect, useState } from "react";
import { TRAITS, TRAIT_LABELS, TRAIT_VALUES, matchingSuspects, DOSSIERS, formatClock } from "../game/engine.js";
import { portraitFor, SCENE_IMG } from "../assets/index.js";
import { Typewriter } from "./Widgets.jsx";
import { Smoke, Embers } from "./Effects.jsx";

function Backdrop({ children, onClose, wide = false }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-40 bg-night/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-3 fade-in" style={{ paddingTop: "calc(env(safe-area-inset-top) + 12px)" }} onClick={onClose}>
      <div className={`w-full ${wide ? "max-w-3xl" : "max-w-lg"} max-h-[92vh] overflow-y-auto fade-up`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export function WitnessModal({ w, repeat, onClose }) {
  if (!w) return null;
  let tag = "WITNESS STATEMENT";
  let tagClass = "text-gold";
  let body;
  if (w.kind === "deadend") {
    tag = "TRAIL GONE COLD";
    tagClass = "text-stamp-bright";
    body = (
      <>
        <p className="italic text-lg leading-relaxed">“<Typewriter text={w.text} />”</p>
        <p className="mt-3 font-mono text-xs text-sepia">— {w.witness}</p>
        <div className="mt-4 border-l-4 border-stamp-bright pl-3 text-sm">
          Nobody here has seen your suspect. This is the wrong city — fly back and try another lead.
        </div>
      </>
    );
  } else if (w.kind === "near") {
    tag = "SUSPECT SIGHTED";
    tagClass = "text-stamp-bright";
    body = (
      <>
        <p className="text-lg leading-relaxed font-semibold"><Typewriter text={w.text} /></p>
        <div className="mt-4 border-l-4 border-stamp-bright pl-3 text-sm">
          This is the end of the line. Make sure your warrant is ready before you search the last places.
        </div>
      </>
    );
  } else {
    const c = w.clue;
    body = (
      <>
        {w.sighting && (
          <div className="mb-4 bg-ink text-parchment p-3 text-sm flex gap-3 items-start">
            <span className="text-stamp-bright text-xl leading-none">☠</span>
            <span>{w.sighting}</span>
          </div>
        )}
        <p className="italic text-lg leading-relaxed">“<Typewriter text={c.text} />”</p>
        <p className="mt-3 font-mono text-xs text-sepia">— {c.witness}</p>
        {c.type === "trait" ? (
          <div className="mt-4 inline-block border-2 border-stamp-bright text-stamp-bright font-mono text-xs px-2 py-1 stamp-in" style={{ "--r": "-3deg" }}>
            EVIDENCE FILED · {TRAIT_LABELS[c.trait]}: {TRAIT_VALUES[c.trait][c.value]}
          </div>
        ) : (
          <div className="mt-4 font-mono text-[11px] text-sepia">
            Lead noted in your dossier.{" "}
            {c.tier === "hard" ? "A tough one — check the Field Atlas." : c.tier === "medium" ? "Think: where would that be?" : ""}
          </div>
        )}
      </>
    );
  }
  return (
    <Backdrop onClose={onClose}>
      <div className="paper relative p-6 border-l-8 border-gold shadow-2xl">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className={`label ${tagClass}`}>{tag}{repeat ? " · (reread)" : ""}</div>
            <div className="font-serif text-xl mt-1">{w.spotName}</div>
            <div className="font-mono text-[10px] text-sepia">{w.cityName}</div>
          </div>
          <button className="font-mono text-xs text-sepia hover:text-ink" onClick={onClose} aria-label="Close">✕</button>
        </div>
        {body}
        <button className="btn btn-red w-full mt-6 py-3 text-xs" onClick={onClose} autoFocus>
          Continue ▸
        </button>
      </div>
    </Backdrop>
  );
}

export function MishapModal({ m, onClose }) {
  return (
    <Backdrop onClose={onClose}>
      <div className="relative bg-ink border-2 border-stamp-bright p-6 shake overflow-hidden">
        <div className="absolute inset-0 rain opacity-40" />
        <Smoke opacity={0.2} />
        <div className="relative">
          <div className="label text-stamp-bright pulse-red">⚠ {m.headline}</div>
          <p className="mt-3 text-parchment leading-relaxed">{m.text}</p>
          <div className="mt-4 font-mono text-stamp-bright text-sm">−{m.hours} hours</div>
          <button className="btn w-full mt-5 py-3 text-xs" onClick={onClose} autoFocus>
            Shake it off ▸
          </button>
        </div>
      </div>
    </Backdrop>
  );
}

export function SleepOverlay({ slept, city, onDone }) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const a = setTimeout(() => setPhase(1), 900);
    return () => clearTimeout(a);
  }, []);
  const hours = slept.until - slept.from;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 fade-in cursor-pointer" onClick={onDone}
      style={{ background: phase ? "linear-gradient(#f0a868, #6b4a7a 60%, #101622)" : "linear-gradient(#0a0d14, #101622)", transition: "background 1.6s" }}>
      <div className="text-center max-w-sm">
        <div className="text-6xl mb-4" style={{ transition: "transform 1.6s", transform: phase ? "translateY(-10px)" : "none" }}>{phase ? "☀" : "☾"}</div>
        <div className="label text-brass-light">Lights out</div>
        <p className="font-serif text-xl mt-2 text-parchment">
          Even detectives sleep. You check into a cheap hotel in {city.name} and get {hours} hours of rest.
        </p>
        {slept.taunt && (
          <div className="mt-5 relative bg-ink/80 border border-stamp-bright/70 p-4 text-left overflow-hidden fade-up" style={{ animationDelay: ".6s" }}>
            <Embers count={8} intensity={0.7} />
            <div className="label text-stamp-bright pulse-red" style={{ fontSize: 9 }}>☎ In the dead of night · The hotel phone rings</div>
            <p className="mt-2 font-serif italic text-parchment">A woman's voice, low and amused: “{slept.taunt}”</p>
            <p className="mt-1 font-mono text-[10px] text-parchment/50">Click. The line goes dead.</p>
          </div>
        )}
        <p className="font-mono text-sm mt-3 text-parchment/80">You wake at {formatClock(slept.until)}.</p>
        <button className="btn mt-6 px-6 py-3 text-xs" onClick={onDone} autoFocus>
          Back on the case ▸
        </button>
      </div>
    </div>
  );
}

export function DossierModal({ suspects, evidence, notes, warrant, onEvidence, onWarrant, onClose }) {
  const [tab, setTab] = useState("evidence");
  const matches = matchingSuspects(evidence, suspects.some((s) => s.isMastermind));
  const one = matches.length === 1 ? matches[0] : null;
  const warrantFor = suspects.find((s) => s.id === warrant);

  return (
    <Backdrop onClose={onClose} wide>
      <div className="bg-night-deep border border-brass/50 text-parchment shadow-2xl">
        <div className="flex items-center justify-between px-5 py-3 border-b border-brass/30 bg-ink">
          <div className="label text-brass-light">▸ Dossier terminal ◂</div>
          <button className="font-mono text-xs text-brass hover:text-parchment" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className="flex border-b border-brass/30">
          {[["evidence", "Evidence & warrant"], ["notes", `Leads (${notes.length})`], ["files", "Suspect files"]].map(([k, l]) => (
            <button key={k} onClick={() => setTab(k)} className={`flex-1 py-2 label ${tab === k ? "bg-brass/20 text-parchment" : "text-brass/60"}`}>
              {l}
            </button>
          ))}
        </div>

        {tab === "evidence" && (
          <div className="p-5">
            <p className="text-sm text-parchment/70 mb-4">
              Witnesses fill these in automatically. You can also set them yourself. A warrant needs the list narrowed to exactly one suspect.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {TRAITS.map((t) => (
                <label key={t} className="block">
                  <span className="label text-brass" style={{ fontSize: 9 }}>{TRAIT_LABELS[t]}</span>
                  <select
                    className="mt-1 w-full bg-night-mid border border-brass/40 px-2 py-2 font-mono text-sm text-parchment"
                    value={evidence[t] || ""}
                    onChange={(e) => onEvidence({ ...evidence, [t]: e.target.value || undefined })}
                  >
                    <option value="">— unknown —</option>
                    {Object.entries(TRAIT_VALUES[t]).map(([v, l]) => (
                      <option key={v} value={v}>{l}</option>
                    ))}
                  </select>
                </label>
              ))}
            </div>
            <div className="mt-5 label text-brass" style={{ fontSize: 9 }}>Matching suspects: {matches.length}</div>
            <div className="mt-2 grid grid-cols-4 sm:grid-cols-9 gap-2">
              {suspects.map((s) => {
                const on = matches.includes(s);
                return (
                  <div key={s.id} className={`relative transition ${on ? "" : "opacity-20 grayscale"}`} title={s.name}>
                    <img src={portraitFor(s)} alt={s.name} className="w-full aspect-square object-cover border border-brass/40" />
                    <div className="font-mono text-[8px] text-center mt-0.5 truncate">{s.name}</div>
                    {warrant === s.id && <div className="absolute inset-0 border-2 border-stamp-bright" />}
                  </div>
                );
              })}
            </div>
            <div className="mt-5">
              {warrantFor ? (
                <div className="border-2 border-stamp-bright p-3 flex items-center gap-3">
                  <span className="stamp-in font-mono text-stamp-bright font-bold border-2 border-stamp-bright px-2 py-1" style={{ "--r": "-6deg" }}>WARRANT ISSUED</span>
                  <span className="text-sm">for <b>{warrantFor.name}</b>. Track them to the final city and search until you corner them.</span>
                </div>
              ) : (
                <button className="btn btn-red w-full py-3 text-xs" disabled={!one} onClick={() => onWarrant(one.id)}>
                  {one ? `Issue warrant for ${one.name}` : matches.length === 0 ? "No suspect matches — recheck your evidence" : `Narrow it down to one (${matches.length} left)`}
                </button>
              )}
              {warrantFor && one && one.id !== warrantFor.id && (
                <button className="btn w-full mt-2 py-2 text-[10px]" onClick={() => onWarrant(one.id)}>
                  Re-issue for {one.name}
                </button>
              )}
            </div>
          </div>
        )}

        {tab === "notes" && (
          <div className="p-5 space-y-3">
            {notes.length === 0 && <p className="text-parchment/60 text-sm">No leads yet. Question witnesses.</p>}
            {notes.map((n, i) => (
              <div key={i} className="border-l-2 border-brass/50 pl-3">
                <div className="label text-brass/70" style={{ fontSize: 8 }}>{n.city}</div>
                <div className="italic text-sm">“{n.text}”</div>
              </div>
            ))}
          </div>
        )}

        {tab === "files" && (
          <div className="p-5 grid sm:grid-cols-2 gap-4">
            {suspects.map((s) => {
              const d = DOSSIERS[s.id] || {};
              return (
                <div key={s.id} className="flex gap-3 bg-night-mid p-3 border border-brass/20">
                  <img src={portraitFor(s)} alt="" className="w-16 h-16 object-cover flex-shrink-0" />
                  <div className="text-xs">
                    <div className="font-serif text-base text-parchment">{s.name}</div>
                    <div className="label text-stamp-bright" style={{ fontSize: 8 }}>{d.alias}</div>
                    <div className="mt-1 font-mono text-[10px] text-brass-light">
                      {TRAITS.map((t) => TRAIT_VALUES[t][s[t]]).join(" · ")}
                    </div>
                    {d.tell && <div className="mt-1 text-parchment/70 italic">{d.tell}</div>}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Backdrop>
  );
}

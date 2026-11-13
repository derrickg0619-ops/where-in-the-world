import { useMemo, useState } from "react";
import {
  CITIES,
  CITY_BY_ID,
  PACES,
  RANKS,
  SUSPECTS,
  MASTERMIND,
  TRAITS,
  TRAIT_LABELS,
  TRAIT_VALUES,
  DOSSIERS,
  LOOT_FACTS,
  clockParts,
  formatClock,
  investigateCost,
  rankFor,
} from "../game/engine.js";
import { project } from "../game/geo.js";
import { SCENE_IMG, SUSPECT_IMG, portraitFor } from "../assets/index.js";
import Poster from "./Poster.jsx";
import { isTouch } from "../game/haptics.js";
import { Clock, SkyOverlay, Stamp } from "./Widgets.jsx";

const AGENCY = "Meridian";

/* ============================== TITLE ============================== */
export function Title({ profile, onUpdate, onStart, onFinal, onAtlas }) {
  const rank = rankFor(profile.solved);
  const allCaught = SUSPECTS.every((s) => profile.caught.includes(s.id));
  const [showHistory, setShowHistory] = useState(false);
  const canStart = profile.agentName.trim().length > 0;
  const toNext = rank.next ? rank.next.min - profile.solved : 0;

  return (
    <div className="min-h-screen relative overflow-hidden text-parchment grain">
      <img src={SCENE_IMG.title} alt="" className="absolute inset-0 w-full h-full object-cover object-right opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-night via-night/90 to-night/40" />
      <img src={SCENE_IMG.fog} alt="" className="absolute -bottom-10 left-0 w-[140%] max-w-none opacity-20 fog pointer-events-none" />

      <div className="relative max-w-md mx-auto px-4 py-8 sm:py-12">
        <div className="text-center fade-up">
          <div className="inline-block border-2 border-stamp-bright text-stamp-bright px-4 py-1 font-mono text-[10px] tracking-[.3em] stamp-in" style={{ "--r": "-6deg" }}>
            CONFIDENTIAL · FIELD AGENTS ONLY
          </div>
          <div className="label text-brass mt-6">— Established 1971 —</div>
          <h1 className="font-serif text-5xl font-bold mt-2 tracking-wide">{AGENCY.toUpperCase()}</h1>
          <div className="font-serif text-lg tracking-[.3em] mt-1">DETECTIVE AGENCY</div>
          <div className="text-brass/80 italic text-sm mt-3">Where in the world is the stolen loot?</div>
        </div>

        <div className="paper mt-8 p-4 border-l-8 border-gold fade-up" style={{ animationDelay: ".1s" }}>
          <div className="label text-gold" style={{ fontSize: 9 }}>Agent registration</div>
          <label className="block font-serif italic mt-2" htmlFor="agent">Enter your agent name:</label>
          <input
            id="agent"
            className="mt-2 w-full border-2 border-brass bg-parchment px-3 py-2 font-serif text-lg text-ink placeholder:text-sepia/50 focus:outline-none focus:border-stamp-bright"
            placeholder="Sam Spade"
            maxLength={24}
            value={profile.agentName}
            onChange={(e) => onUpdate({ agentName: e.target.value })}
          />
          <div className="mt-3 flex items-center justify-between font-mono text-[11px]">
            <span>
              Rank: <b className="text-stamp">{rank.name}</b> · {profile.solved} solved
            </span>
            {rank.next && <span className="text-sepia">{toNext} more to {rank.next.name}</span>}
          </div>
          <div className="mt-1 h-1.5 bg-brass/30">
            <div className="h-full bg-stamp" style={{ width: `${rank.next ? ((profile.solved - rank.min) / (rank.next.min - rank.min)) * 100 : 100}%` }} />
          </div>
          <div className="font-mono text-[10px] text-sepia mt-1">
            Cases at this rank: {rank.cities}-city trail · clues get harder as you rise
          </div>
        </div>

        <div className="mt-4 bg-night-deep/90 border border-brass/30 p-4 fade-up" style={{ animationDelay: ".2s" }}>
          <div className="label text-brass text-center" style={{ fontSize: 9 }}>— Pace —</div>
          <div className="grid grid-cols-3 gap-2 mt-3">
            {Object.values(PACES).map((p) => (
              <button
                key={p.id}
                onClick={() => onUpdate({ pace: p.id })}
                aria-pressed={profile.pace === p.id}
                className={`py-2 font-mono text-[11px] tracking-widest border ${profile.pace === p.id ? "bg-stamp-bright border-stamp-bright text-parchment" : "border-brass/40 text-brass"}`}
              >
                {p.name.toUpperCase()}
                <span className="block text-[9px] opacity-75">{{ rookie: "relaxed", detective: "standard", ace: "tight" }[p.id]} clock</span>
              </button>
            ))}
          </div>
          <p className="text-center italic text-xs text-parchment/70 mt-2">{PACES[profile.pace]?.desc}</p>
          <button
            onClick={() => onUpdate({ atlasMode: !profile.atlasMode })}
            className="mt-4 w-full flex items-center justify-between border border-brass/40 bg-night-mid px-3 py-2 text-left"
            aria-pressed={profile.atlasMode}
          >
            <span>
              <span className="label text-brass-light" style={{ fontSize: 9 }}>Field Atlas mode · {profile.atlasMode ? "on" : "off"}</span>
              <span className="block italic text-[11px] text-parchment/70">Witnesses never name the country. Use the atlas.</span>
            </span>
            <span className={`w-9 h-5 rounded-full relative transition ${profile.atlasMode ? "bg-stamp-bright" : "bg-night-light"}`}>
              <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-parchment transition-all ${profile.atlasMode ? "left-4" : "left-0.5"}`} />
            </span>
          </button>
        </div>

        <div className="mt-4 fade-up" style={{ animationDelay: ".3s" }}>
          <div className="label text-brass text-center" style={{ fontSize: 9 }}>Lady Cinder's lieutenants · {profile.caught.length}/8 behind bars</div>
          <div className="grid grid-cols-8 gap-1 mt-2">
            {SUSPECTS.map((s) => {
              const got = profile.caught.includes(s.id);
              return (
                <div key={s.id} className="relative" title={got ? `${s.name} — caught` : "At large"}>
                  <img src={SUSPECT_IMG[s.id]} alt={got ? s.name : "Unknown"} className={`w-full aspect-square object-cover border ${got ? "border-brass" : "border-night-light grayscale brightness-[.25]"}`} />
                  {got && <span className="absolute inset-x-0 bottom-0 bg-stamp/90 text-[7px] font-mono text-center">CAUGHT</span>}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 space-y-2">
          {allCaught && !profile.mastermindCaught && (
            <button className="btn btn-red w-full py-4 text-sm pulse-red" disabled={!canStart} onClick={onFinal}>
              ☠ The final case: Lady Cinder ☠
            </button>
          )}
          <button className="btn w-full py-4 text-sm" disabled={!canStart} onClick={onStart}>
            ▸ Accept the case ◂
          </button>
          {!canStart && <p className="text-center font-mono text-[10px] text-brass/60">Sign your name to take a case.</p>}
          <div className="grid grid-cols-2 gap-2">
            <button className="btn py-3 text-[10px]" onClick={onAtlas}>🧭 Field Atlas</button>
            <button className="btn py-3 text-[10px]" onClick={() => setShowHistory((v) => !v)}>📁 Case files ({profile.history.length})</button>
          </div>
        </div>

        {profile.mastermindCaught && (
          <div className="mt-4 border-2 border-brass text-center p-3 font-serif text-brass-light">
            ★ Lady Cinder is behind bars. You are a legend of the agency. ★
          </div>
        )}

        {showHistory && (
          <div className="mt-4 bg-night-deep/95 border border-brass/30 p-3 space-y-2 fade-up">
            {profile.history.length === 0 && <p className="text-sm text-parchment/60">No closed cases yet.</p>}
            {profile.history.map((h, i) => (
              <div key={i} className="text-xs border-b border-brass/20 pb-2">
                <span className={`font-mono ${h.result === "win" ? "text-brass-light" : "text-stamp-bright"}`}>
                  {h.result === "win" ? "SOLVED" : h.result === "time" ? "OUT OF TIME" : h.result === "nowarrant" ? "NO WARRANT" : "WRONG ARREST"}
                </span>{" "}
                · {h.villain} · {h.loot}
                <div className="text-parchment/50">{h.route.join(" → ")}</div>
              </div>
            ))}
          </div>
        )}
        <p className="text-center font-mono text-[9px] text-brass/40 mt-8">A whodunit in the classic tradition · progress saves in this browser</p>
      </div>
    </div>
  );
}

/* ============================== BRIEFING ============================== */
export function Briefing({ kase, profile, onGo }) {
  const start = CITY_BY_ID[kase.trail[0]];
  const facts = LOOT_FACTS[kase.loot.id];
  const rank = rankFor(profile.solved);
  const final = kase.isFinalCase;
  return (
    <div className="min-h-screen bg-night text-parchment px-4 py-8 grain relative">
      <div className="max-w-2xl mx-auto">
        <div className="label text-brass text-center">▸ From the desk of the Chief ◂</div>
        <p className="font-serif italic text-lg text-center mt-4 leading-relaxed fade-up">
          {final
            ? `"This is it, ${profile.agentName}. Every lieutenant is behind bars, and Lady Cinder has come out of the shadows herself. She took ${kase.loot.item.replace(/^The /, "the ")}. Nine cities. Hardest clues you've ever seen. Bring her in."`
            : `"Drop whatever you were doing, Agent ${profile.agentName}. Lady Cinder's network just lifted ${kase.loot.item.replace(/^(A|The) /, (m) => m.toLowerCase())}. Last sighting was ${start.name}. Follow the witnesses, and if a city goes quiet — you guessed wrong. Fly back."`}
        </p>

        <div className="paper mt-8 relative p-5 sm:p-6 shadow-2xl fade-up" style={{ animationDelay: ".15s" }}>
          <div className="absolute -top-3 right-4 bg-stamp-bright text-parchment font-mono text-[10px] px-2 py-1 stamp-in" style={{ "--r": "4deg" }}>TOP SECRET</div>
          <div className="label text-gold" style={{ fontSize: 9 }}>Field briefing · case for {rank.name} {profile.agentName}</div>
          <div className="mt-4 grid sm:grid-cols-[1fr_200px] gap-5">
            <div className="space-y-3 text-sm">
              <Row k="The crime">{kase.loot.item}</Row>
              <Row k="Value">{kase.loot.value}</Row>
              <Row k="Last seen">{start.name}, {start.country}</Row>
              <Row k="Suspect">{final ? "LADY CINDER — the mastermind herself." : "One of Lady Cinder's eight lieutenants. Identity unconfirmed."}</Row>
              <Row k="Deadline"><b className="text-stamp-bright">{formatClock(kase.deadline)}</b> ({kase.deadline - kase.start} hours)</Row>
              <Row k="Trail">{kase.trail.length} cities · {final ? "expert" : ["easy", "easy", "mixed", "hard", "expert"][kase.rankIndex]} clues</Row>
            </div>
            <div className="relative">
              <Poster city={start} className="w-full aspect-[800/351] sm:aspect-square border-4 border-parchment shadow-lg" />
              <div className="absolute -bottom-3 -left-3"><Stamp city={start} index={0} small /></div>
            </div>
          </div>
          {facts && <p className="mt-5 text-xs italic text-sepia border-t border-gold/30 pt-3">{facts.history?.slice(0, 260)}…</p>}
          <div className="mt-5 border-t border-gold/30 pt-3 text-xs font-mono text-wood space-y-1">
            <div>▪ Each search costs hours — the more you dig in one city, the longer it takes.</div>
            <div>▪ Work past 11 PM and you'll sleep until 7 AM.</div>
            <div>▪ A city where nobody has seen them is a dead end. Fly back.</div>
            <div>▪ Issue a warrant in the Dossier before you corner them in the final city.</div>
          </div>
        </div>

        <button className="btn btn-red w-full mt-8 py-4 text-sm" onClick={onGo}>
          ✈ Depart for {start.name}
        </button>
      </div>
    </div>
  );
}
function Row({ k, children }) {
  return (
    <div className="flex gap-3">
      <span className="font-mono text-[10px] tracking-widest text-gold w-20 flex-shrink-0 pt-0.5 uppercase">{k}:</span>
      <span>{children}</span>
    </div>
  );
}

/* ============================== CITY ============================== */
const SPOT_ICONS = ["✈", "☕", "🏛"];

export function CityView({ kase, run, city, profile, isFinalCity, onInvestigate, onTravel, onDossier, onAtlas }) {
  const { hour } = clockParts(run.now);
  const visited = run.spots[run.cityId] || [];
  const evidenceCount = TRAITS.filter((t) => run.evidence[t]).length;
  const warrantFor = [...SUSPECTS, MASTERMIND].find((s) => s.id === run.warrant);
  const night = hour >= 20 || hour < 6;

  return (
    <div className="min-h-screen bg-night text-parchment" style={{ paddingBottom: "calc(96px + env(safe-area-inset-bottom))" }}>
      {/* top bar */}
      <div className="sticky top-0 z-30 bg-night/95 backdrop-blur border-b border-brass/20 safe-top">
        <div className="max-w-4xl mx-auto px-4 py-2 flex items-center justify-between gap-3">
          <Clock now={run.now} deadline={kase.deadline} compact />
          <div className="text-right font-mono text-[10px] leading-tight min-w-0">
            <div className="text-brass truncate">{kase.loot.item}</div>
            <div className="text-parchment/60">
              Evidence {evidenceCount}/4 ·{" "}
              {warrantFor ? <span className="text-stamp-bright">Warrant: {warrantFor.name}</span> : "No warrant"}
            </div>
          </div>
        </div>
      </div>

      {/* hero */}
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden">
          <Poster city={city} className="w-full aspect-[800/351] block" />
          <SkyOverlay hour={hour} rain={night && city.id.length % 2 === 0} />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-transparent" />
          <div className="absolute right-3 top-3 scale-75 sm:scale-100 origin-top-right">
            <Stamp city={city} index={run.route.length} />
          </div>
          <div className="absolute left-4 bottom-3 fade-up">
            <div className="label text-brass-light" style={{ fontSize: 9 }}>{city.country} · {city.continent}</div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold drop-shadow-lg leading-none">{city.name}</h2>
          </div>
        </div>

        {isFinalCity && (
          <div className="mx-4 mt-3 border-2 border-stamp-bright bg-stamp/20 px-4 py-2 text-sm flex gap-2 items-center pulse-red">
            <span className="text-stamp-bright">☠</span> The suspect is in this city. {warrantFor ? "Your warrant is ready — search them out." : "You need a warrant before you corner them!"}
          </div>
        )}

        {/* spots */}
        <div className="px-4 mt-4">
          <div className="label text-brass mb-2">Question witnesses</div>
          <div className="grid sm:grid-cols-3 gap-2 sm:gap-3">
            {city.spots.map((s, i) => {
              const done = visited.includes(i);
              return (
                <button
                  key={i}
                  onClick={() => onInvestigate(i)}
                  className={`group text-left px-3 py-3 sm:p-4 min-h-[60px] flex sm:block items-center gap-3 border transition relative overflow-hidden ${done ? "border-brass/20 bg-night-deep" : "border-brass/50 bg-night-mid hover:bg-night-light hover:border-brass-light"}`}
                >
                  <div className="text-2xl opacity-80 w-8 text-center flex-shrink-0 sm:w-auto sm:text-left">{SPOT_ICONS[i]}</div>
                  <div className="min-w-0 flex-1">
                    <div className="font-serif text-[15px] sm:text-base sm:mt-1 leading-snug pr-10 sm:pr-0">{s}</div>
                    <div className={`font-mono text-[10px] mt-1 sm:mt-2 ${done ? "text-brass/50" : "text-brass-light"}`}>
                      {done ? "✓ Questioned · tap to reread" : `Investigate · ${investigateCost(visited.length)}h`}
                    </div>
                  </div>
                  {done && <span className="absolute top-2 right-2 font-mono text-[9px] text-stamp-bright border border-stamp-bright px-1 rotate-6">FILED</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* latest lead, so phone players don't have to open the dossier to remember it */}
        {run.notes.length > 0 && (
          <div className="px-4 mt-4">
            <div className="label text-brass mb-2">Latest lead</div>
            <button onClick={onDossier} className="w-full text-left paper px-4 py-3 border-l-4 border-gold">
              <div className="italic text-[15px] leading-snug">“{run.notes[run.notes.length - 1].text}”</div>
              <div className="font-mono text-[10px] text-sepia mt-1">
                {run.notes[run.notes.length - 1].city} · {run.notes.length > 1 ? `${run.notes.length - 1} more in your dossier ▸` : "tap for dossier ▸"}
              </div>
            </button>
          </div>
        )}

        {/* passport */}
        <div className="px-4 mt-6">
          <div className="label text-brass mb-2">Passport · this case</div>
          <div className="paper p-3 flex gap-2 overflow-x-auto">
            {run.route.map((id, i) => (
              <Stamp key={i} city={CITY_BY_ID[id]} index={i} small />
            ))}
          </div>
        </div>
      </div>

      {/* action bar */}
      <div className="fixed bottom-0 inset-x-0 z-30 bg-ink/95 border-t border-brass/30 backdrop-blur safe-bottom">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-2.5 grid grid-cols-3 gap-2">
          <button className="btn min-h-[52px] text-[11px] relative" onClick={onDossier}>
            🗂 Dossier
            <span className={`absolute -top-2 -right-1 font-mono text-[9px] px-1.5 py-0.5 rounded-full ${run.warrant ? "bg-stamp-bright text-parchment" : "bg-brass text-ink"}`}>
              {run.warrant ? "✓" : `${evidenceCount}/4`}
            </span>
          </button>
          <button className="btn min-h-[52px] text-[11px]" onClick={onAtlas}>
            🧭 Atlas
          </button>
          <button className="btn btn-red min-h-[52px] text-[11px]" onClick={onTravel}>
            ✈ Travel
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================== ENDING ============================== */
export function Ending({ kase, outcome, profile, onAgain }) {
  const v = kase.villain;
  const won = outcome.result === "win";
  const finalCity = CITY_BY_ID[outcome.run.cityId];
  const img = v.isMastermind ? (won ? SCENE_IMG.wanted : SCENE_IMG.rooftop) : SUSPECT_IMG[`${v.id}_${won ? "arrest" : "escape"}`];
  const headline = {
    win: v.isMastermind ? "CINDER IN CHAINS" : `${v.name.toUpperCase()} NABBED`,
    wrong: "WRONG MAN, WRONG WOMAN, WRONG WARRANT",
    nowarrant: "CORNERED — BUT NO WARRANT",
    time: "TRAIL GOES COLD AT DEADLINE",
  }[outcome.result];
  const story = {
    win: `Agent ${profile.agentName} closed in at ${finalCity.name} and served the warrant in person. ${kase.loot.item} was recovered intact.`,
    wrong: `Agent ${profile.agentName} executed a warrant on the wrong suspect. ${v.name} walked out the back door with ${kase.loot.item.replace(/^The /, "the ")}.`,
    nowarrant: `Agent ${profile.agentName} had ${v.name} cornered in ${finalCity.name} — and no warrant to make it stick. The suspect smiled, tipped a hat, and walked.`,
    time: `The clock ran out on Agent ${profile.agentName}. Somewhere, ${v.name} is toasting the night with ${kase.loot.item.replace(/^The /, "the ")}.`,
  }[outcome.result];
  const d = DOSSIERS[v.id] || {};

  return (
    <div className="min-h-screen bg-night px-4 py-8 text-ink">
      <div className="max-w-2xl mx-auto paper shadow-2xl p-5 sm:p-8 fade-up">
        <div className="text-center border-b-4 border-double border-ink pb-2">
          <div className="font-mono text-[10px] tracking-[.3em]">THE EVENING LEDGER · LATE EDITION</div>
          <h1 className="font-serif font-black text-3xl sm:text-4xl mt-2 leading-tight">{headline}</h1>
        </div>
        <div className="relative mt-5">
          <img src={img} alt="" className={`w-full border-2 border-ink ${won ? "" : "grayscale-[.4]"}`} />
          <div className={`absolute top-4 right-4 font-mono font-bold text-xl border-4 px-3 py-1 stamp-in ${won ? "border-forest text-forest bg-parchment/80" : "border-stamp-bright text-stamp-bright bg-parchment/80"}`} style={{ "--r": "-10deg" }}>
            {won ? "CASE CLOSED" : "ESCAPED"}
          </div>
        </div>
        <p className="font-serif text-lg mt-5 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2">{story}</p>
        {won && d.bio && <p className="text-sm italic text-sepia mt-3">Who they were: {d.bio}</p>}
        {!won && (
          <p className="text-sm mt-3">
            The thief was <b>{v.name}</b> ({TRAITS.map((t) => TRAIT_VALUES[t][v[t]]).join(", ")}).
          </p>
        )}
        <div className="mt-5 font-mono text-[11px] text-wood">
          Route: {outcome.run.route.map((id) => CITY_BY_ID[id].name).join(" → ")}
          <br />
          Correct trail: {kase.trail.map((id) => CITY_BY_ID[id].name).join(" → ")}
          <br />
          Time used: {outcome.run.now - kase.start} of {kase.deadline - kase.start} hours
        </div>
        {outcome.promotion && (
          <div className="mt-6 bg-ink text-parchment p-4 text-center stamp-in" style={{ "--r": "0deg" }}>
            <div className="label text-brass-light">Promotion</div>
            <div className="font-serif text-2xl mt-1">You are now {outcome.promotion.name}</div>
            <div className="text-xs text-parchment/70 mt-1">
              {outcome.promotion.desc} Your cases now span {outcome.promotion.cities} cities, with tougher clues.
            </div>
          </div>
        )}
        {won && SUSPECTS.every((s) => profile.caught.includes(s.id)) && !profile.mastermindCaught && (
          <div className="mt-4 border-2 border-stamp-bright text-stamp-bright p-3 text-center font-serif">
            All eight lieutenants are behind bars. Lady Cinder has nowhere left to hide. The final case awaits.
          </div>
        )}
        <button className="btn btn-red w-full mt-8 py-4 text-sm" onClick={onAgain}>
          Back to the agency ▸
        </button>
      </div>
    </div>
  );
}

/* ============================== ATLAS ============================== */
export function Atlas({ profile, onBack, overlay = false }) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(null);
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    const sorted = [...CITIES].sort((a, b) => a.name.localeCompare(b.name));
    if (!s) return sorted;
    return sorted.filter((c) =>
      [c.name, c.country, c.continent, c.currency, c.language, c.food, c.landmark, c.flag, c.facts?.summary].join(" ").toLowerCase().includes(s),
    );
  }, [q]);
  const c = sel ? CITY_BY_ID[sel] : null;

  return (
    <div className={`${overlay ? "fixed inset-0 z-40 overflow-y-auto" : "min-h-screen"} bg-night text-parchment`}>
      <div className="sticky top-0 z-10 bg-night/95 border-b border-brass/30 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-3 flex gap-3 items-center">
          <button className="btn px-3 py-2 text-[10px]" onClick={c ? () => setSel(null) : onBack}>◂ {c ? "All" : "Back"}</button>
          <div className="label text-brass-light flex-1">Field Atlas · {CITIES.length} cities</div>
        </div>
        {!c && (
          <div className="max-w-5xl mx-auto px-4 pb-3">
            <input
              className="w-full bg-night-mid border border-brass/40 px-3 py-2 font-mono text-sm text-parchment placeholder:text-brass/40"
              placeholder="Search anything: rupees, Portuguese, volcano, red and white flag…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              autoFocus={!isTouch()}
              type="search"
              enterKeyHint="search"
            />
          </div>
        )}
      </div>

      {!c && (
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="relative w-full border border-brass/40 mb-4" style={{ aspectRatio: "1100/703" }}>
            <img src={SCENE_IMG.map} alt="World map" className="absolute inset-0 w-full h-full" />
            {list.map((x) => {
              const p = project(x.lat, x.lon);
              return (
                <button
                  key={x.id}
                  onClick={() => setSel(x.id)}
                  title={x.name}
                  className="absolute w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-stamp-bright border-2 border-parchment hover:scale-150 transition"
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                />
              );
            })}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {list.map((x) => (
              <button key={x.id} onClick={() => setSel(x.id)} className="text-left bg-night-mid border border-brass/20 hover:border-brass-light transition">
                <Poster city={x} className="w-full aspect-[800/351] block" />
                <div className="p-2">
                  <div className="font-serif">{x.name}</div>
                  <div className="font-mono text-[10px] text-brass/70">
                    {x.country} {profile.visits[x.id] ? `· visited ${profile.visits[x.id]}×` : ""}
                  </div>
                </div>
              </button>
            ))}
          </div>
          {list.length === 0 && <p className="text-parchment/60 text-sm">Nothing matches “{q}”.</p>}
        </div>
      )}

      {c && (
        <div className="max-w-3xl mx-auto px-4 py-4 fade-up">
          <Poster city={c} className="w-full aspect-[800/351] block border border-brass/40" />
          <h2 className="font-serif text-4xl mt-4">{c.name}</h2>
          <div className="label text-brass-light">{c.country} · {c.continent}</div>
          <p className="mt-4 leading-relaxed">{c.facts?.summary}</p>
          <div className="paper mt-5 p-4 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {[
              ["Currency", c.currency],
              ["Language", c.language],
              ["Flag", c.flag],
              ["Landmark", c.landmark],
              ["Signature dish", c.food],
              ["Time zone", c.facts?.timeZone],
              ["Founded", c.facts?.founded],
              ["Climate", c.facts?.climate],
            ].map(([k, val]) => (
              <div key={k}>
                <span className="font-mono text-[10px] tracking-widest text-gold uppercase">{k}</span>
                <div>{val}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

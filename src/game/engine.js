// Pure game logic: case generation, clue selection, the clock, travel options.
import { CITIES } from "../data/cities.js";
import content from "../data/content.json";
import { flightHours } from "./geo.js";

export const SUSPECTS = content.suspects;
export const MASTERMIND = content.mastermind;
export const TRAITS = ["hair", "feature", "vehicle", "hobby"];
export const TRAIT_LABELS = content.traitLabels;
export const TRAIT_VALUES = content.traitValues;
export const TRAIT_PHRASES = content.traitPhrases;
export const LOOT = content.loot;
export const LOOT_FACTS = content.lootFacts;
export const DOSSIERS = content.dossiers;
export const MISHAPS = content.mishaps;
export const CITY_BY_ID = Object.fromEntries(CITIES.map((c) => [c.id, c]));
export { CITIES };

// ---------- ranks: each promotion lengthens the trail and toughens the clues ----------
export const RANKS = [
  { name: "Rookie", min: 0, cities: 4, tiers: { easy: 0.8, medium: 0.2, hard: 0 }, desc: "Fresh out of training." },
  { name: "Sleuth", min: 2, cities: 5, tiers: { easy: 0.55, medium: 0.4, hard: 0.05 }, desc: "You have a couple wins under your belt." },
  { name: "Private Eye", min: 4, cities: 6, tiers: { easy: 0.3, medium: 0.5, hard: 0.2 }, desc: "They are starting to know your name." },
  { name: "Investigator", min: 7, cities: 7, tiers: { easy: 0.1, medium: 0.5, hard: 0.4 }, desc: "A reputation precedes you." },
  { name: "Ace Detective", min: 10, cities: 8, tiers: { easy: 0, medium: 0.4, hard: 0.6 }, desc: "Lady Cinder has your name on her wall." },
];
export const FINAL_CASE = { cities: 9, tiers: { easy: 0, medium: 0.3, hard: 0.7 } };

export function rankFor(solved) {
  let idx = 0;
  RANKS.forEach((r, i) => {
    if (solved >= r.min) idx = i;
  });
  return { ...RANKS[idx], index: idx, next: RANKS[idx + 1] || null };
}

// ---------- pace (the old difficulty setting): time per leg and mishap odds ----------
export const PACES = {
  rookie: { id: "rookie", name: "Rookie", hoursPerLeg: 34, mishapChance: 0.1, desc: "Generous deadline, fewer mishaps. Good for learning the ropes." },
  detective: { id: "detective", name: "Detective", hoursPerLeg: 28, mishapChance: 1 / 6, desc: "Standard case. The way it is meant to be played." },
  ace: { id: "ace", name: "Ace", hoursPerLeg: 23, mishapChance: 0.25, desc: "Tight deadline, more near-misses. Lady Cinder tests her best." },
};

// ---------- clock ----------
// Time is counted in hours from Monday 00:00. Cases open Monday 09:00.
export const START_HOUR = 9;
export const SLEEP_FROM = 23;
export const WAKE_AT = 7;
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export function clockParts(t) {
  const day = Math.floor(t / 24);
  const hour = Math.floor(t % 24);
  return { day: DAYS[day % 7] + (day >= 7 ? ` (week ${Math.floor(day / 7) + 1})` : ""), dayIndex: day, hour };
}
export function formatClock(t) {
  const { day, hour } = clockParts(t);
  const h12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${day} ${h12}:00 ${hour < 12 ? "AM" : "PM"}`;
}
export function formatHour(hour) {
  const h12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${h12}:00 ${hour < 12 ? "AM" : "PM"}`;
}

/**
 * Advance the clock by `hours` of work. If the work runs past 11 PM, the agent
 * sleeps until 7 AM; the sleep is reported so the UI can show it.
 */
export function advanceClock(now, hours) {
  let t = now + hours;
  let slept = null;
  const hour = t % 24;
  if (hour >= SLEEP_FROM || hour < WAKE_AT) {
    const wake = hour >= SLEEP_FROM ? t - hour + 24 + WAKE_AT : t - hour + WAKE_AT;
    slept = { from: t, until: wake };
    t = wake;
  }
  return { now: t, slept };
}

// ---------- helpers ----------
const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

function pickTier(tiers, atlasMode) {
  const w = atlasMode ? { easy: 0, medium: tiers.medium + tiers.easy * 0.7, hard: tiers.hard + tiers.easy * 0.3 } : tiers;
  let r = Math.random() * (w.easy + w.medium + w.hard);
  for (const k of ["easy", "medium", "hard"]) {
    if ((r -= w[k]) <= 0) return k;
  }
  return "medium";
}

const SPOT_WITNESSES = [
  ["a baggage handler", "the ticket agent", "a customs officer", "a porter", "the departures announcer"],
  ["a shopkeeper", "the bank teller", "a hotel bartender", "a café owner", "the concierge"],
  ["a museum curator", "a librarian", "a tour guide", "a night watchman", "a postcard vendor"],
];

const TRAIT_WITNESS = {
  hair: [
    ["a hairdresser", "You couldn't miss them — {t}, immaculately kept."],
    ["a barber", "Came in for a trim. {T}. Wouldn't let me touch the back."],
    ["a milliner", "They tried on six hats. None of them sat right against {t}."],
  ],
  feature: [
    ["a startled diplomat", "What I noticed first was {t}. Quite distinctive."],
    ["a security guard", "I checked their ID twice because of {t}. They didn't appreciate that."],
    ["a portrait painter", "I offered to sketch them — {t} would have made for a striking subject. They refused."],
  ],
  vehicle: [
    ["the hotel valet", "They tore off in {t}. Tipped me handsomely, I'll say that."],
    ["a parking attendant", "{T} was double-parked for an hour. They came back in a hurry."],
    ["a traffic officer", "I waved them through a checkpoint in {t}. Should have stopped them."],
  ],
  hobby: [
    ["a chambermaid", "In their suite, abandoned on the bed, was {t}."],
    ["a club steward", "They asked whether the city had any decent venues — and they were carrying {t}."],
    ["a customs officer", "In their carry-on, declared as 'personal effects': {t}. I let it through."],
  ],
};

const DEAD_END_LINES = [
  "Never seen anyone like that. Sorry, detective.",
  "Nobody of that description came through here. You've got the wrong town.",
  "I'd remember a face like that. I don't.",
  "Quiet week. No strangers, no trouble. Try somewhere else.",
  "You're chasing smoke, friend. Nobody's been asking around here.",
  "We get tourists. We don't get thieves. Not this week.",
];

const SIGHTING_LINES = [
  "A figure in a long coat ducked out of sight as you arrived. Someone is watching your back — you're close.",
  "A henchman in a turned-up collar was reading the same newspaper for an hour. They left when you did. You're on the right trail.",
  "Someone slipped a matchbook under your hotel door: 'GO HOME, DETECTIVE.' The network knows you're here.",
];

const FINAL_NEAR_LINES = [
  "You catch a glimpse of {t} in the crowd — then it's gone around the corner. They're HERE, in this city.",
  "Footsteps on the fire escape above you. A shadow, {t}, and the slam of a door. They can't run much farther.",
];

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function traitClue(villain, trait) {
  const phrase = TRAIT_PHRASES[trait][villain[trait]];
  const [witness, tpl] = pick(TRAIT_WITNESS[trait]);
  return {
    type: "trait",
    witness,
    text: tpl.replace("{t}", phrase).replace("{T}", capitalize(phrase)),
    trait,
    value: villain[trait],
  };
}

function locationClue(dest, tiers, atlasMode, used, spotIdx) {
  const tier = pickTier(tiers, atlasMode);
  const pool = dest.clues[tier].filter((c) => !used.has(c));
  const fallback = ["medium", "hard", "easy"].flatMap((k) => dest.clues[k]).filter((c) => !used.has(c));
  const text = pick(pool.length ? pool : fallback);
  used.add(text);
  return { type: "location", tier, witness: pick(SPOT_WITNESSES[spotIdx]), text, toCity: dest.id };
}

/**
 * Build a new case.
 * opts: { solved, pace, caught: [suspectIds], finalCase, atlasMode }
 */
export function generateCase({ solved = 0, pace = "detective", caught = [], finalCase = false, atlasMode = false }) {
  const rank = rankFor(solved);
  const plan = finalCase ? FINAL_CASE : rank;
  const paceCfg = PACES[pace] || PACES.detective;
  const pool = SUSPECTS.filter((s) => !caught.includes(s.id));
  const villain = finalCase ? MASTERMIND : pick(pool.length ? pool : SUSPECTS);
  const loot = pick(LOOT);
  const trail = shuffle(CITIES).slice(0, plan.cities);
  const legs = trail.length - 1;

  // Spread trait clues over the first cities: one per city, all four if the trail allows.
  const traitOrder = shuffle(TRAITS).slice(0, Math.min(4, legs));

  const cluesByCity = {};
  for (let i = 0; i < legs; i++) {
    const dest = trail[i + 1];
    const used = new Set();
    const traitSlot = traitOrder[i] ? Math.floor(Math.random() * 3) : -1;
    cluesByCity[trail[i].id] = [0, 1, 2].map((spot) =>
      spot === traitSlot ? traitClue(villain, traitOrder[i]) : locationClue(dest, plan.tiers, atlasMode, used, spot),
    );
  }

  // Each city gets a fixed set of three decoy destinations so revisits look the same.
  const trailIds = new Set(trail.map((c) => c.id));
  const decoysByCity = {};
  for (const c of CITIES) {
    const nextId = trail[trail.findIndex((t) => t.id === c.id) + 1]?.id;
    decoysByCity[c.id] = shuffle(CITIES.filter((o) => o.id !== c.id && o.id !== nextId && !(trailIds.has(o.id) && Math.random() < 0.5)))
      .slice(0, 3)
      .map((o) => o.id);
  }

  const start = START_HOUR;
  return {
    villain,
    loot,
    trail: trail.map((c) => c.id),
    cluesByCity,
    decoysByCity,
    captureSpot: Math.floor(Math.random() * 3),
    start,
    // Deadline = the real flight time along the trail + slack per leg for searching, detours and sleep.
    deadline: start + 10 + trailFlightHours(trail) + legs * paceCfg.hoursPerLeg,
    pace: paceCfg,
    rankIndex: rank.index,
    isFinalCase: finalCase,
  };
}

/**
 * The four flight options from the current city.
 * On the trail: the next city + the way back + decoys. Off the trail: the way back + decoys.
 */
export function travelOptions(kase, cityId, cameFrom, onTrailIndex) {
  const opts = new Set();
  const isLast = onTrailIndex === kase.trail.length - 1;
  if (onTrailIndex >= 0 && !isLast) opts.add(kase.trail[onTrailIndex + 1]);
  if (cameFrom && cameFrom !== cityId) opts.add(cameFrom);
  for (const d of kase.decoysByCity[cityId]) {
    if (opts.size >= 4) break;
    opts.add(d);
  }
  return shuffle([...opts]).map((id) => {
    const c = CITY_BY_ID[id];
    return { ...c, hours: flightHours(CITY_BY_ID[cityId], c) };
  });
}

/** Hours an investigation costs: each spot you've already worked in a city takes longer. */
export const investigateCost = (alreadyVisited) => 2 + alreadyVisited;

/**
 * What a witness says at `spot` in `cityId`.
 * Returns { kind: 'clue'|'deadend'|'near'|'capture', clue?, text?, sighting? }
 */
export function investigate(kase, cityId, spot, trailIndex, visitedSpotsHere) {
  const last = kase.trail.length - 1;
  if (trailIndex < 0) {
    return { kind: "deadend", witness: pick(SPOT_WITNESSES[spot]), text: pick(DEAD_END_LINES) };
  }
  if (trailIndex === last) {
    if (spot === kase.captureSpot || visitedSpotsHere.length >= 2) return { kind: "capture" };
    const trait = pick(TRAITS);
    return {
      kind: "near",
      text: pick(FINAL_NEAR_LINES).replace("{t}", TRAIT_PHRASES[trait][kase.villain[trait]]),
      trait,
      value: kase.villain[trait],
    };
  }
  const clue = kase.cluesByCity[cityId][spot];
  // From the second city on, the first stop you work may turn up a henchman: proof you're on track.
  const sighting = trailIndex > 0 && visitedSpotsHere.length === 0 ? pick(SIGHTING_LINES) : null;
  return { kind: "clue", clue, sighting };
}

export function matchingSuspects(evidence, includeMastermind) {
  const list = includeMastermind ? [...SUSPECTS, MASTERMIND] : SUSPECTS;
  return list.filter((s) => TRAITS.every((t) => !evidence[t] || s[t] === evidence[t]));
}

export function rollMishap(kase) {
  return Math.random() < kase.pace.mishapChance ? pick(MISHAPS) : null;
}

export function trailFlightHours(trail) {
  let h = 0;
  for (let i = 1; i < trail.length; i++) h += flightHours(trail[i - 1], trail[i]);
  return h;
}

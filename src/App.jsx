import { useEffect, useMemo, useState } from "react";
import {
  CITY_BY_ID,
  advanceClock,
  generateCase,
  investigate,
  investigateCost,
  rankFor,
  rollMishap,
  rollTaunt,
  travelOptions,
  SUSPECTS,
  MASTERMIND,
} from "./game/engine.js";
import { flightHours } from "./game/geo.js";
import { loadProfile, saveProfile } from "./game/storage.js";
import { buzz, HAPTIC } from "./game/haptics.js";
import TravelMap from "./components/TravelMap.jsx";
import { Title, Briefing, CityView, Ending, Atlas } from "./components/Screens.jsx";
import { DossierModal, WitnessModal, MishapModal, SleepOverlay } from "./components/Modals.jsx";

export default function App() {
  const [profile, setProfile] = useState(loadProfile);
  const [screen, setScreen] = useState("title");
  const [kase, setKase] = useState(null);
  const [run, setRun] = useState(null);
  const [queue, setQueue] = useState([]); // overlays shown one after another: sleep, witness, mishap
  const [showDossier, setShowDossier] = useState(false);
  const [showAtlas, setShowAtlas] = useState(false);
  const [outcome, setOutcome] = useState(null);
  const [arrivalKey, setArrivalKey] = useState(0);

  useEffect(() => {
    saveProfile(profile);
  }, [profile]);
  // Each new screen (or arrival in a new city) starts at the top.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [screen, arrivalKey]);
  // Test hook: with ?debug in the URL, expose the case so automated playthroughs can follow the trail.
  useEffect(() => {
    if (window.location.search.includes("debug")) window.__witw = { kase, run, screen, names: Object.fromEntries(Object.values(CITY_BY_ID).map((c) => [c.id, c.name])) };
  }, [kase, run, screen]);
  const update = (patch) => setProfile((p) => ({ ...p, ...patch }));

  const city = run ? CITY_BY_ID[run.cityId] : null;
  const trailIndex = useMemo(() => {
    if (!kase || !run) return -1;
    const i = kase.trail.indexOf(run.cityId);
    return i >= 0 && i <= run.reached ? i : -1;
  }, [kase, run]);

  // ---------------- case lifecycle ----------------
  function startCase({ finalCase = false } = {}) {
    const k = generateCase({ solved: profile.solved, pace: profile.pace, caught: profile.caught, finalCase, atlasMode: profile.atlasMode });
    setKase(k);
    setRun({
      now: k.start,
      cityId: k.trail[0],
      cameFrom: null,
      route: [k.trail[0]],
      reached: 0,
      evidence: {},
      notes: [],
      spots: {},
      warrant: null,
      lastWitness: {},
    });
    setQueue([]);
    setOutcome(null);
    setScreen("brief");
  }

  function finish(result, finalRun) {
    const r = finalRun || run;
    const won = result === "win";
    buzz(won ? HAPTIC.win : HAPTIC.lose);
    const before = rankFor(profile.solved);
    const solved = profile.solved + (won ? 1 : 0);
    const after = rankFor(solved);
    const entry = {
      date: new Date().toISOString().slice(0, 10),
      villain: kase.villain.name,
      loot: kase.loot.item,
      route: r.route.map((id) => CITY_BY_ID[id].name),
      result,
      hours: r.now - kase.start,
      final: kase.isFinalCase,
    };
    update({
      solved,
      caught: won && !kase.isFinalCase && !profile.caught.includes(kase.villain.id) ? [...profile.caught, kase.villain.id] : profile.caught,
      mastermindCaught: profile.mastermindCaught || (won && kase.isFinalCase),
      history: [entry, ...profile.history].slice(0, 25),
    });
    setOutcome({ result, promotion: after.index > before.index ? after : null, run: r });
    setQueue([]);
    setShowDossier(false);
    setShowAtlas(false);
    setScreen("end");
  }

  /** Spend time; returns the new run state or null if the deadline passed. */
  function spend(r, hours) {
    const { now, slept } = advanceClock(r.now, hours);
    const next = { ...r, now };
    if (now >= kase.deadline) {
      finish("time", { ...next, now: kase.deadline });
      return { next: null, slept };
    }
    return { next, slept };
  }

  // ---------------- actions ----------------
  function doInvestigate(spot) {
    const visited = run.spots[run.cityId] || [];
    if (visited.includes(spot)) {
      setQueue([{ type: "witness", data: run.lastWitness[`${run.cityId}:${spot}`], repeat: true }]);
      return;
    }
    const { next, slept } = spend(run, investigateCost(visited.length));
    if (!next) return;
    const res = investigate(kase, run.cityId, spot, trailIndex, visited);

    if (res.kind === "capture") {
      const caught = run.warrant === kase.villain.id;
      finish(!run.warrant ? "nowarrant" : caught ? "win" : "wrong", next);
      return;
    }

    const spotName = city.spots[spot];
    const witness = { ...res, spotName, cityName: city.name };
    const r = {
      ...next,
      spots: { ...next.spots, [run.cityId]: [...visited, spot] },
      lastWitness: { ...next.lastWitness, [`${run.cityId}:${spot}`]: witness },
    };
    if (res.kind === "clue" && res.clue.type === "trait") r.evidence = { ...r.evidence, [res.clue.trait]: res.clue.value };
    if (res.kind === "near") r.evidence = { ...r.evidence, [res.trait]: res.value };
    if (res.kind === "clue" && res.clue.type === "location") r.notes = [...r.notes, { city: city.name, text: res.clue.text }];

    buzz(res.kind === "deadend" ? HAPTIC.deadEnd : res.kind === "near" || res.clue?.type === "trait" ? HAPTIC.evidence : HAPTIC.clue);
    const q = [];
    if (slept) q.push({ type: "sleep", data: { ...slept, taunt: rollTaunt(kase) } });
    q.push({ type: "witness", data: witness });
    if (res.kind === "clue" && trailIndex < kase.trail.length - 1) {
      const m = rollMishap(kase);
      if (m) q.push({ type: "mishap", data: m });
    }
    setRun(r);
    setQueue(q);
  }

  function applyMishap(m) {
    buzz(HAPTIC.mishap);
    const { next, slept } = spend(run, m.hours);
    if (!next) return;
    setRun(next);
    if (slept) setQueue((q) => [{ type: "sleep", data: { ...slept, taunt: rollTaunt(kase) } }, ...q]);
  }

  function doFly(destId) {
    const hours = flightHours(city, CITY_BY_ID[destId]);
    const { next, slept } = spend(run, hours);
    if (!next) return;
    const reached = destId === kase.trail[run.reached + 1] && run.cityId === kase.trail[run.reached] ? run.reached + 1 : run.reached;
    setRun({ ...next, cityId: destId, cameFrom: run.cityId, route: [...run.route, destId], reached });
    // Fetch the possible ending scenes as soon as the agent reaches the final city.
    if (destId === kase.trail[kase.trail.length - 1] && !kase.villain.isMastermind) {
      for (const k of ["arrest", "escape"]) new Image().src = `endings/${kase.villain.id}_${k}.jpg`;
    }
    update({ visits: { ...profile.visits, [destId]: (profile.visits[destId] || 0) + 1 } });
    setQueue(slept ? [{ type: "sleep", data: { ...slept, taunt: rollTaunt(kase) } }] : []);
    setArrivalKey((k) => k + 1);
    setScreen("city");
  }

  function setWarrant(id) {
    setRun((r) => ({ ...r, warrant: id }));
  }

  // ---------------- render ----------------
  const overlay = queue[0];
  const popQueue = () => {
    const [head, ...rest] = queue;
    setQueue(rest);
    return head;
  };

  if (screen === "title")
    return (
      <Title
        profile={profile}
        onUpdate={update}
        onStart={() => startCase()}
        onFinal={() => startCase({ finalCase: true })}
        onAtlas={() => setScreen("atlas")}
      />
    );
  if (screen === "atlas") return <Atlas profile={profile} onBack={() => setScreen("title")} />;
  if (screen === "brief") return <Briefing kase={kase} profile={profile} onGo={() => setScreen("city")} />;
  if (screen === "end") return <Ending kase={kase} outcome={outcome} profile={profile} onAgain={() => setScreen("title")} />;

  if (screen === "travel")
    return (
      <TravelMap
        from={city}
        options={travelOptions(kase, run.cityId, run.cameFrom, trailIndex)}
        route={run.route}
        now={run.now}
        onFly={doFly}
        onCancel={() => setScreen("city")}
      />
    );

  const suspects = kase.isFinalCase ? [...SUSPECTS, MASTERMIND] : SUSPECTS;
  return (
    <>
      <CityView
        key={arrivalKey}
        kase={kase}
        run={run}
        city={city}
        profile={profile}
        isFinalCity={trailIndex === kase.trail.length - 1}
        onInvestigate={doInvestigate}
        onTravel={() => setScreen("travel")}
        onDossier={() => setShowDossier(true)}
        onAtlas={() => setShowAtlas(true)}
      />
      {showAtlas && <Atlas profile={profile} overlay onBack={() => setShowAtlas(false)} />}
      {showDossier && (
        <DossierModal
          suspects={suspects}
          evidence={run.evidence}
          notes={run.notes}
          warrant={run.warrant}
          onEvidence={(evidence) => setRun((r) => ({ ...r, evidence }))}
          onWarrant={setWarrant}
          onClose={() => setShowDossier(false)}
        />
      )}
      {overlay?.type === "sleep" && <SleepOverlay slept={overlay.data} city={city} onDone={popQueue} />}
      {overlay?.type === "witness" && <WitnessModal w={overlay.data} repeat={overlay.repeat} onClose={popQueue} />}
      {overlay?.type === "mishap" && (
        <MishapModal
          m={overlay.data}
          onClose={() => {
            const m = popQueue();
            applyMishap(m.data);
          }}
        />
      )}
    </>
  );
}

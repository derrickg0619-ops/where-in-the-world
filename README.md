# Where in the World — A Detective Game

A noir, globe-trotting detective game: chase Lady Cinder's lieutenants across 36 cities
using geography clues, build a dossier, issue a warrant, and make the arrest before the deadline.

## Play locally

```bash
npm install
npm run dev
```

## Build for S3

```bash
npm run build
```

This produces a self-contained `dist/index.html` (all art inlined) plus the home-screen app
files (`manifest.webmanifest` and icons). Upload everything in `dist/` to the
`where-in-world-derrick` bucket:

```bash
aws s3 sync dist/ s3://where-in-world-derrick/ --cache-control "no-cache"
```

## How it plays

- **Trail:** each case is a chain of cities. Witnesses in the right city point to the next one.
- **Dead ends:** fly to the wrong city and nobody has seen the suspect. Fly back.
- **Clock:** cases open Monday 9:00 AM. Searches and flights cost hours; work past 11 PM
  and you sleep until 7 AM. Miss the deadline and the thief escapes.
- **Ranks:** Rookie → Sleuth → Private Eye → Investigator → Ace Detective. Each promotion
  lengthens the trail (4 → 8 cities) and makes clues harder (country names → history riddles).
- **Pace:** Rookie / Detective / Ace sets the deadline per leg and how often mishaps happen.
- **Final case:** catch all eight lieutenants to unlock the chase for Lady Cinder herself.
- Progress saves in the browser (localStorage).

## On phones

- The flight map zooms to your city and the four destinations; tap one to preview the route, then **Fly**.
- Compact witness cards, 44px+ tap targets, room for the notch and home bar, and the latest lead on the city screen.
- Vibration on clues, dead ends, mishaps and arrests (Android; iPhones don't allow it from the web).
- "Add to Home Screen" installs it with its own icon and opens full-screen.

## Code map

- `src/game/engine.js` — case generation, clues, clock, travel options (pure logic)
- `src/game/geo.js` — map projection for the vintage map, flight times
- `src/data/cities.js` — 36 cities with easy/medium/hard clues, atlas facts and poster palettes
- `src/data/content.json` — suspects, dossiers, loot, mishaps
- `src/components/` — screens, modals, travel map, SVG posters

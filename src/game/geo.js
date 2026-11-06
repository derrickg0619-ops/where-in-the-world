// Projection for the bundled Stanford "General Map of the World" (Mercator, 1100x703).
// Calibrated against coastline landmarks (Cape Town, Tokyo, Iceland, Cape Horn...).
const MAP_W = 1100;
const MAP_H = 703;
const PX_PER_DEG = 3.06;
const X_ZERO = 565; // pixel x of the Greenwich meridian
const Y_EQUATOR = 424; // pixel y of the equator

const mercator = (lat) => Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360));

/** Returns {x, y} as percentages of the map image. */
export function project(lat, lon) {
  // Clamp to the printed area: far-east cities (New Zealand) sit at the map's right edge.
  const x = Math.min(MAP_W - 16, Math.max(12, X_ZERO + PX_PER_DEG * lon));
  const y = Y_EQUATOR - ((PX_PER_DEG * 180) / Math.PI) * mercator(lat);
  return { x: (x / MAP_W) * 100, y: (y / MAP_H) * 100 };
}

export const MAP_ASPECT = MAP_W / MAP_H;

/** Great-circle distance in km. */
export function distanceKm(a, b) {
  const R = 6371;
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

/** Flight time in whole hours: ~850 km/h cruise plus an hour on the ground. */
export function flightHours(a, b) {
  return Math.min(16, Math.max(2, Math.round(distanceKm(a, b) / 850) + 1));
}

// Progress is kept in the browser's localStorage, which works on S3 (the old build used
// window.storage, which only exists inside Claude's artifact viewer, so nothing ever saved).
const KEY = "witw_profile_v2";

export const DEFAULT_PROFILE = {
  agentName: "",
  solved: 0,
  caught: [],
  mastermindCaught: false,
  history: [],
  visits: {},
  pace: "rookie",
  atlasMode: false,
};

export function loadProfile() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...DEFAULT_PROFILE, ...JSON.parse(raw) } : { ...DEFAULT_PROFILE };
  } catch {
    return { ...DEFAULT_PROFILE };
  }
}

export function saveProfile(p) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    /* private mode or storage blocked: play on without saving */
  }
}

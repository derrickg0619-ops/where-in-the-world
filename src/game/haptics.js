/** True on phones/tablets: no hover, or a coarse (finger) pointer. */
export function isTouch() {
  try {
    if (window.matchMedia?.("(hover: none)").matches || window.matchMedia?.("(pointer: coarse)").matches) return true;
    // Fallback for browsers that misreport media features: a touch screen smaller than a tablet.
    return navigator.maxTouchPoints > 0 && Math.min(window.innerWidth, window.innerHeight) < 820;
  } catch {
    return false;
  }
}

// Short vibrations on phones that support it (Android Chrome). iOS Safari ignores this silently.
export function buzz(pattern) {
  try {
    if (navigator.vibrate && isTouch()) navigator.vibrate(pattern);
  } catch {
    /* unsupported */
  }
}
export const HAPTIC = { tap: 8, clue: 20, evidence: [20, 60, 30], deadEnd: [60, 40, 60], mishap: [90, 50, 90], win: [30, 50, 30, 50, 120], lose: 300 };

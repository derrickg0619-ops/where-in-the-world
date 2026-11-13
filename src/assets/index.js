const suspectImgs = import.meta.glob("./suspects/*.jpg", { eager: true, import: "default" });
const cityImgs = import.meta.glob("./cities/*.jpg", { eager: true, import: "default" });
const sceneImgs = import.meta.glob("./scenes/*.jpg", { eager: true, import: "default" });

const byName = (map) =>
  Object.fromEntries(Object.entries(map).map(([k, v]) => [k.split("/").pop().replace(".jpg", ""), v]));

export const SUSPECT_IMG = byName(suspectImgs); // s1, s1_arrest, s1_escape, ...
export const CITY_IMG = byName(cityImgs); // cairo, tokyo, ... (only the original 12)
export const SCENE_IMG = byName(sceneImgs); // map, cinder_portrait, cinder_arrest

// Portraits are head-and-shoulders "dossier photo" crops (the game is family-friendly).
export const portraitFor = (s) => (s.isMastermind ? SCENE_IMG.cinder_portrait : SUSPECT_IMG[`${s.id}_face`]);

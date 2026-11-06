export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: { DEFAULT: "#0a0d14", deep: "#101622", mid: "#1d2532", light: "#2a3445" },
        ink: "#1a1410",
        parchment: "#f4ead5",
        brass: { DEFAULT: "#b08d57", light: "#d4ad6b" },
        gold: "#8b6914",
        stamp: { DEFAULT: "#a01f24", bright: "#c1272d" },
        blood: "#7a181c",
        sepia: "#7a5d33",
        forest: "#1a3a1a",
      },
      fontFamily: {
        serif: ["Georgia", "'Times New Roman'", "serif"],
        mono: ["ui-monospace", "'Courier New'", "monospace"],
      },
    },
  },
  plugins: [],
};

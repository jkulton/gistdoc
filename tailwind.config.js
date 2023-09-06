module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "rotate-0-180": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
        "rotate-180-360": {
          "0%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "rotate-0-180": "rotate-0-180 0.5s ease-in-out 1",
        "rotate-180-360": "rotate-180-360 0.5s ease-in-out 1",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

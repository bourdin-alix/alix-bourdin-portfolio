/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        head: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#7c3aed",
          light: "#ede9fe",
          mid: "#c4b5fd",
          dark: "#5b21b6",
        },
        bg: "#fafaf9",
        dark: "#111118",
      },
    },
  },
  plugins: [],
};

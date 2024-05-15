/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    ".backface-visible": {
      "backface-visibility": "visible",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
    },
  });
});

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#F3F4F8",
      light: "#E8E8ED",
      medium: "#CDCED1",
      dark: "#6E6E70",
      black: "#212121",
    },
    fontFamily: {
      display: ["Syncopate", "sans-serif"],
      paragraph: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [backfaceVisibility],
};

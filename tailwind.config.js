/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Color Theme
        primary: "#7979FE",
        background: "#1C1F22",
        onBackground: "#FFFFFF",
        card: "#282B2E",
        cardVariant: "#494848",
      },
      fontFamily: {
        outfit: ['"Outfit"', "sans-serif"],
        comfortaa: ['"Comfortaa"', "cursive"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};

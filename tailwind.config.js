/** @type {import('tailwindcss').Config} */

// Colors flow from restaurant.config.js → here → your components.
// Change restaurant.colors and everything updates.
const { restaurant } = require("./config/restaurant.config");
const { colors, fonts } = restaurant;

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:     colors.primary,
        background:  colors.background,
        surface:     colors.surface,
        "text-main": colors.text,
        "text-muted": colors.muted,
        accent:      colors.accent,
        border:      colors.border,
        "on-primary": colors.onPrimary,
      },
      fontFamily: {
        display: [`"${fonts.display}"`, "Georgia", "serif"],
        sans:    [`"${fonts.body}"`, "system-ui", "sans-serif"],
      },
      // Slightly wider line spacing for the serif display font
      lineHeight: {
        display: "1.15",
      },
    },
  },
  plugins: [],
};

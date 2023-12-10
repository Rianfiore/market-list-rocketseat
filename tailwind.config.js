/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const tailwindTheme = require("./src/styles/theme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: { ...tailwindTheme },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        "text-heading-1": {
          fontSize: theme("fontSize.lg"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.normal"),
        },
        "text-heading-2": {
          fontSize: theme("fontSize.base"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.relaxed"),
        },
        "text-button": {
          fontSize: theme("fontSize.base"),
          fontWeight: theme("fontWeight.semibold"),
          lineHeight: theme("lineHeight.relaxed"),
        },
        "text-tag": {
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.semibold"),
          lineHeight: theme("lineHeight.relaxed"),
        },
        "text-body": {
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.regular"),
          lineHeight: theme("lineHeight.relaxed"),
        },
      });
    }),
  ],
};

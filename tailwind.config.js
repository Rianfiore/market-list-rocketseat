/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      brand: {
        "purple-light": "#A881E6",
        purple: "#7450AC",
        "purple-dark": "#523480",
      },
      neutral: {
        gray100: "#FBF9FE",
        gray200: "#AFABB6",
        grey300: "#252529",
        gray400: "#17171A",
        gray500: "#111112",
        gray600: "#0C0C0D",
      },
      info: {
        "success-light": "#4E995E",
        success: "#2F723D",
      },
      support: {
        pink: "#DB5BBF",
        "pink-dark": "#251622",
        orange: "#E07B67",
        "orange-dark": "#261A17",
        yellow: "#BB9F3A",
        "yellow-dark": "#211E12",
        green: "#8CAD51",
        "green-dark": "#1C2015",
        blue: "#7B94CB",
        "blue-dard": "#1A1D23",
      },
    },
    fontSize: {
      sm: "12px",
      base: "14px",
      lg: "24px",
    },
    fontWeight: {
      regular: "400",
      semibold: "600",
      bold: "700",
    },
    lineHeight: {
      normal: "1",
      relaxed: "1.3",
    },
    extend: {},
  },
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

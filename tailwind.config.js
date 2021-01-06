const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      bluegray: colors.blueGray,
      coolgray: colors.coolGray,
      gray: colors.gray,
      truegray: colors.trueGray,
      warmgray: colors.warmGray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      lightblue: colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
    },
    extend: {
      boxShadow: {
        "offset-black": "2px 2px black",
        "inner-lg": "inset 0 2px 10px 0 rgba(0, 0, 0, 0.125)",
      },
      opacity: {
        15: "0.15",
        35: "0.35",
        80: "0.80",
      },
      colors: {
        interplanetaryblue: {
          50: "#92e2ff",
          100: "#78c4ff",
          200: "#5aa6ff",
          300: "#3c88ff",
          400: "#1e5aff",
          500: "#004cff",
          600: "#002EE1",
          700: "#0010C3",
          800: "#0000A5",
          900: "#000087",
        },
        interplanetaryyellow: {
          50: "#ffff32",
          100: "#ffff28",
          200: "#fff51e",
          300: "#ffeb14",
          400: "#ffe10a",
          500: "#ffd700",
          600: "#f5cd00",
          700: "#ebc300",
          800: "#e1b900",
          900: "#d7af00",
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
  experimental: "all",
  future: {
    purgeLayersByDefault: true,
  },
};

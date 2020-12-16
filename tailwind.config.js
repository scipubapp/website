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
    extend: {
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

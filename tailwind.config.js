const tailwindTypography = require("@tailwindcss/typography");

module.exports = {
  content: ["./src/**/*.{html,liquid,js}"],
  darkMode: "media",
  plugins: [tailwindTypography],
  theme: {
    extend: {},
  },
};

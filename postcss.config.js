const purgecss = require("@fullhuman/postcss-purgecss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const tailwindcss = require("tailwindcss");

const IS_PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    tailwindcss,
    IS_PRODUCTION ? autoprefixer : undefined,
    IS_PRODUCTION ? cssnano({ preset: "default" }) : undefined,

    purgecss({
      content: ["./src/**/*.liquid", "./src/**/*.css"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};

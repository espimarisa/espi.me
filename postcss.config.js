const purgecss = require("@fullhuman/postcss-purgecss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssImport = require("postcss-import");

const IS_PRODUCTION = process.env.NODE_ENV === "production";

// Configures purgeCSS
const purgeCSSConfig = {
  content: ["./src/**/**/*.{liquid,js}"],
  css: ["./_site/css/**/**/*.css"],
  fontFace: true,
  variables: true,
  keyframes: true,
};

module.exports = {
  plugins: [
    // Enables imports from node_modules/
    postcssImport({ from: "./src/assets/css" }),

    // Vendor-specific prefixes
    autoprefixer(),

    // Purges unused CSS
    IS_PRODUCTION ? purgecss(purgeCSSConfig) : undefined,

    // Minifies CSS
    IS_PRODUCTION ? cssnano() : undefined,
  ],
};
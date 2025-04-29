/**
 * @file PostCSS configuration file.
 * @author Espi Marisa <contact@espi.me>
 * @license zlib
 */

/** biome-ignore-all lint/style/noDefaultExport: PostCSS requires a default export. */

export default {
  plugins: {
    "autoprefixer": {},
    "cssnano": {},
    "postcss-css-variables": {},
    "postcss-import": {},
    "postcss-nesting": {},
  },
};

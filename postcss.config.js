/**
 * @file Configuration file for PostCSS.
 * @license Zlib
 */

/** biome-ignore-all lint/style/noDefaultExport: PostCSS requires a default export. */

export default {
  plugins: {
    autoprefixer: {},
    cssnano: {},
    "postcss-css-variables": {},
    "postcss-import": {},
    "postcss-nesting": {},
  },
};

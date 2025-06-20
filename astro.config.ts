/**
 * @file Astro configuration file.
 * @license zlib
 */

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";
import compress from "astro-compress";
import favicons from "astro-favicons";
import icon from "astro-icon";

export default defineConfig({
  compressHTML: true,
  site: "https://espi.me",
  integrations: [
    favicons({
      name: "Espi Marisa",
      short_name: "Espi Marisa",
      themes: ["#421970", "#ffd7f3"],
    }),
    mdx(),
    sitemap(),
    icon(),
    compress(),
  ],
  experimental: {
    fonts: [
      {
        cssVariable: "--font-atkinson-hyperlegible-next",
        name: "Atkinson Hyperlegible Next",
        provider: fontProviders.fontsource(),
        styles: ["normal", "italic"],
        weights: [400, 500, 600, 700],
      },
    ],
  },
});

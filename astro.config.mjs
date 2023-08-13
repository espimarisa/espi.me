import { defineConfig } from "astro/config";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  compressHTML: true,
  site: "https://espi.me",
  integrations: [compress()],
});

import { defineConfig } from "astro/config";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: "https://espimarisa.github.io",
  repo: "https://github.com/espimarisa/espi.me",
  integrations: [compress()],
  server: {
    headers: {
      // allows pubkey.asc to be embedded
      // ugly fix
      "content-type": "text/plain",
      "content-disposition": "inline;filename=pubkey.asc",
    },
  },
});

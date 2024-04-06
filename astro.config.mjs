import { defineConfig } from "astro/config";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  base: "/espi.me/",
  site: "https://espimarisa.github.io/espi.me/",
  repo: "https://github.com/espimarisa/espi.me/",
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

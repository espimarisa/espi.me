import vercel from "@astrojs/vercel/serverless";
import { defineConfig } from "astro/config";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  output: "server",
  site: "https://espi.me",
  integrations: [compress()],
  adapter: vercel(),
  server: {
    headers: {
      // allows pubkey.asc to be embedded
      // ugly fix
      "content-type": "text/plain",
      "content-disposition": "inline;filename=pubkey.asc",
    },
  },
});

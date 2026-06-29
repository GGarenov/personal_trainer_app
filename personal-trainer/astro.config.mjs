// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Update this to your real domain before deploying
const SITE = "https://personaltrainergeorge.netlify.app/";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [react(), sitemap()],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: { limitInputPixels: false },
    },
  },
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ["sharp"],
    },
  },
});

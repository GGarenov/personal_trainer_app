// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Public URL of the site, used for the sitemap and canonical links
const SITE = "https://beantrainingcoach.netlify.app/";

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

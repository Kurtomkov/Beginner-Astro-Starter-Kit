import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  // update me!
  site: "https://www.yourwebsite.com",

  integrations: [sitemap()],

  images: {
    layout: "constrained",
  },

  adapter: cloudflare(),
});
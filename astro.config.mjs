import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://astrotest.tomkurkov.workers.dev",
  output: "server",
  adapter: cloudflare(),
  integrations: [sitemap()],
  images: {
    layout: "constrained",
  },
});

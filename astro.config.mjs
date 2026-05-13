import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://www.lowercaseb2b.com",
  integrations: [icon({ include: { ph: ["*"] } }), sitemap()],
  vite: { plugins: [tailwindcss()] },
  adapter: cloudflare()
});
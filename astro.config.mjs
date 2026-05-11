import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://lowercaseb2b.com",
  integrations: [icon({ include: { ph: ["*"] } }), sitemap()],
  vite: { plugins: [tailwindcss()] },
});

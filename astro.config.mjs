import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
  site: "https://lowercaseb2b.com",
  integrations: [icon({ include: { ph: ["*"] } })],
  vite: { plugins: [tailwindcss()] },
});

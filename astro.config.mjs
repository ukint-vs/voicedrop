import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ukint-vs.github.io",
  base: "/voicedrop",
  trailingSlash: "always",
  output: "static",
  build: {
    format: "directory",
  },
});

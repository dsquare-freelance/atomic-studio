import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 3000,
  },
  resolve: {
    alias: {
      "@assets": "/src/assets",
      "@components": "/src/components",
      "@fragments": "/src/components/fragments",
      "@pages": "/src/pages",
      "@globalStyles": "/src/globalStyles",
    },
  },
  css: {
    transformer: "lightningcss",
    lightningcss: {
      cssModules: true,
    },
  },
  build: {
    cssMinify: "lightningcss",
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
        react(),
    ],
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

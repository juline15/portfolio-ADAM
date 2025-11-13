// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from '@astrojs/node'; // Importer l'adaptateur

export default defineConfig({
    output: 'server', // Passer en mode SSR
    adapter: node({ // Ajouter l'adaptateur Node.js
        mode: 'standalone'
    }),
    vite: {
        plugins: [tailwindcss()],
    },
});

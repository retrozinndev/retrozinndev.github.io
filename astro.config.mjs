import { defineConfig } from 'astro/config';
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
    site: "https://retrozinndev.github.io",
    base: ".",
    integrations: [
        react()
    ],
    vite: {
        server: {
            allowedHosts: [
                "retrozinndev.github.io",
                "*.local",
                "localhost",
                "127.0.0.1"
            ]
        }
    }
});

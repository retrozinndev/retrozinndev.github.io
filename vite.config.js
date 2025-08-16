import { defineConfig } from "vite";

export default defineConfig({
    server: {
        allowedHosts: [
            "*.local",
            "localhost",
            "127.0.0.1"
        ]
    }
});

import { defineConfig } from "vite";

export default defineConfig({
    base: "/finales-echecs/",
    build: {
        outDir: "docs",
        emptyOutDir: true
    }
});
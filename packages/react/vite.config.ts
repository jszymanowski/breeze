import { resolve } from "path";

import { defineConfig, ViteUserConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["lib/**/*"],
      insertTypesEntry: true,
      rollupTypes: true,
    }),
    libInjectCss(),
    tailwindcss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "Breeze Primitives",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
    },
    minify: true,
    sourcemap: true,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./lib"),
      "@root": resolve(__dirname, "./"),
      "@src": resolve(__dirname, "./src"),
      "@tests": resolve(__dirname, "./tests"),
      "@stories": resolve(__dirname, "./stories"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    include: ["tests/**/*.test.ts*"],
    coverage: {
      include: ["lib/**/*"],
      exclude: ["lib/types/*"],
    },
  },
} as ViteUserConfig);

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src/components"],
      insertTypesEntry: true,
    }),
    libInjectCss(),
  ],
  build: {
    lib: {
      // The entry point of your library
      entry: resolve(__dirname, "src/components/index.ts"),
      name: "MyComponentLib",
      // The filename format for the output file
      fileName: (format) => `my-component-lib.${format}.js`,
      // Formats to build
      formats: ["es", "umd"],
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
    // Don't minify for easier debugging
    // Comment this out for production
    minify: false,
    // Enable source maps
    sourcemap: true,
  },
});

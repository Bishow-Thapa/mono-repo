import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "contactTest",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./ContactTest": "./src/components/Contact",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: {
          contact: ["contact"],
        },
      },
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      filename: "remoteEntry.js",
      remotes: {
        contactTest: "http://localhost:9001/assets/remoteEntry.js",
        mailTest: "http://localhost:9003/assets/remoteEntry.js",
        calenderTest: "http://localhost:9002/assets/remoteEntry.js",
      },
      exposes: {},
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});

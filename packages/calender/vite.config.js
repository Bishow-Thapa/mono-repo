import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "calenderTest",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./NepaliCalender": "./src/components/NepaliCalender",
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
          calender: ["calender"],
        },
      },
    },
  },
});

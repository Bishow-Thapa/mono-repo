import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mailTest",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: { "./InternalMail": "./src/components/InternalMail" },
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
          mail: ["mail"],
        },
      },
    },
  },
});

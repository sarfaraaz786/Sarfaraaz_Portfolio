// ===========================
// vite.config.js — Vite configuration for React + SCSS
// ===========================

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Proxy API calls to the backend during development
  // All /api/* calls will be forwarded to Express on port 5000
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For GitHub Pages project sites, set BASE_PATH to "/your-repository-name/".
// For a user/organization site, use "/".
export default defineConfig({
  plugins: [react()],
  base: process.env.BASE_PATH || "/"
});
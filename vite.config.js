import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@atoms": "/src/components/Atoms",
      "@contexts": "/src/Contexts",
      "@molecules": "/src/components/Molecules",
    },
  },
  plugins: [react()],
});

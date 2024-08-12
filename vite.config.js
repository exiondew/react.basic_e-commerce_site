import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react.basic_e-commerce_site",
  plugins: [react()],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import sass from 'sass';

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/search-for-movies/" : "/",
});

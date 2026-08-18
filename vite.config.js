import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from the custom domain root (papatradingbot.com), so base stays "/".
// If you ever move this to the default project pages URL
// (https://<user>.github.io/papa-trading-bot/), change base to "/papa-trading-bot/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});

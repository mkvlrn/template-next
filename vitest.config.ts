import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    conditions: ["default"],
  },

  plugins: [react()],

  test: {
    include: ["src/**/*.test.{ts,tsx}"],
    reporters: ["verbose"],
    watch: false,
    coverage: {
      all: true,
      clean: true,
      cleanOnRerun: true,
      include: ["src"],
      exclude: ["src/**/*.test.{ts,tsx}", "src/main.{ts,tsx}"],
    },
    environment: "jsdom",
    passWithNoTests: true,
    setupFiles: ["./vitest.setup.ts"],
  },
});

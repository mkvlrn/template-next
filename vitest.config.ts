import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  test: {
    include: ["**/**/*.{test,spec}.{ts,tsx}"],
    exclude: ["node_modules"],
    reporters: ["verbose"],
    watch: false,
    coverage: {
      // all: true,
      clean: true,
      cleanOnRerun: true,
      include: ["src"],
      exclude: ["**/*.{test,spec}.{ts,tsx}", "src/main.tsx", "src/generated"],
    },
    // biome-ignore lint/style/useNamingConvention: needed for vitest
    env: { NODE_ENV: "test" },
    environment: "jsdom",
    passWithNoTests: true,
    setupFiles: ["./vitest.setup.ts"],
  },
});

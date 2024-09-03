import * as react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react.default(), tsconfigPaths()],
  test: {
    coverage: {
      reportsDirectory: "coverage",
      reporter: ["lcov", "html", "text"],
      all: true,
      include: ["src"],
    },
    env: { NODE_ENV: "test" },
    environment: "jsdom",
    passWithNoTests: true,
    setupFiles: ["vitest.setup.ts"],
  },
});

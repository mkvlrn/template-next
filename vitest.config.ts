import process from "node:process";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

function getConfig() {
  const testFiles = ["./src/**/*.{test,spec}.{ts,tsx}"];
  if (process.env["E2E"] === "true") {
    testFiles.push("./e2e/**/*.{test,spec}.{ts,tsx}");
  }

  return defineConfig({
    plugins: [react()],

    test: {
      include: testFiles,
      reporters: ["verbose"],
      watch: false,
      coverage: {
        all: true,
        clean: true,
        cleanOnRerun: true,
        include: ["src"],
        exclude: ["**/*.{test,spec}.{ts,tsx}"],
      },
      // biome-ignore lint/style/useNamingConvention: needed for vitest
      env: { NODE_ENV: "test" },
      environment: "jsdom",
      passWithNoTests: true,
      setupFiles: ["./vitest.setup.ts"],
    },
  });
}

export default getConfig();

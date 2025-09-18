import process from "node:process";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

function getConfig() {
  const withIntegration = process.env["INTEGRATION"] === "true";
  const testFiles = withIntegration
    ? ["./src/**/*.{test,spec}.{ts,tsx}"]
    : ["./src/**/*.test.{ts,tsx}"];

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
        exclude: ["src/**/*.{test,spec}.{ts,tsx}", "src/main.{ts,tsx}"],
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

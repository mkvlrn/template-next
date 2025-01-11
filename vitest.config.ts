// biome-ignore lint/correctness/noNodejsModules: cli
import { readdir } from "node:fs/promises";
// biome-ignore lint/correctness/noNodejsModules: cli
import { resolve } from "node:path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

const validTestScripts = ["test", "test:integration", "test:e2e"];

// get npm script that called vitest
// defaults to "test" if no script was called
// (e.g. when running vitest directly or vitest extension in vscode)
let testScript = process.env["npm_lifecycle_event"] ?? "test";
testScript = testScript === "npx" ? "test" : testScript;
if (testScript && !validTestScripts.includes(testScript)) {
  let errorMessage = `Invalid test script "${testScript}".`;
  errorMessage += "\nValid test scripts are: ";
  errorMessage += validTestScripts.join(", ");
  errorMessage += ".";

  throw new Error(errorMessage);
}
testScript = testScript.replace(":", "-");

// resolve setup files array
// must be typescript (*.ts) files in ./test/<test-type>/.setup
const setupFiles: string[] = [];
try {
  const setupDir = resolve(testScript, "_setup");
  const files = await readdir(setupDir, { withFileTypes: true });
  const filteredFiles = files
    .filter((file) => file.isFile())
    .filter((file) => file.name.endsWith(".ts"));
  setupFiles.push(...filteredFiles.map((file) => resolve(setupDir, file.name)));
} catch {
  // ignore
}

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    reporters: ["verbose"],
    coverage: {
      all: true,
      clean: true,
      cleanOnRerun: true,
      reportsDirectory: "coverage",
      reporter: ["lcov", "html", "text"],
      include: ["src"],
    },
    // biome-ignore lint/style/useNamingConvention: needed for vitest
    env: { NODE_ENV: "test" },
    environment: "jsdom",
    passWithNoTests: true,
    setupFiles: ["./vitest.setup.ts"],
  },
});

import type { Configuration } from "lint-staged";

export default {
  "*.{ts,tsx}": [
    "tsc-files css.d.ts next-env.d.ts vitest.setup.ts",
    "biome check --no-errors-on-unmatched",
    "vitest related --bail=1",
  ],
  "*.mjs": ["biome check --no-errors-on-unmatched", "vitest related --bail=1"],
  "*.{json,jsonc}": ["biome check --no-errors-on-unmatched"],
} satisfies Configuration;

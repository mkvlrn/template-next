import { next } from "@mkvlrn/configurations/eslint";

/** @type {import("typescript-eslint").ConfigWithExtends[]} */
export default [
  ...next,
  {
    ignores: ["dist", "node_modules"],
  },
];

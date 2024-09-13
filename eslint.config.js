import { next } from "@mkvlrn/eslint";

/** @type {import("typescript-eslint").ConfigWithExtends[]} */
export default [
  ...next,
  {
    ignores: ["dist", "node_modules"],
  },
];

import { next } from "@mkvlrn/eslint";

export default [
  ...next,
  {
    ignores: ["dist", "node_modules"],
  },
];

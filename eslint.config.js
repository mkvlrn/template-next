import base from "@mkvlrn/config/eslint-next";

export default [
  ...base,

  {
    ignores: ["node_modules", "dist"],
  },
];

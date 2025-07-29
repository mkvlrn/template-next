import type { NextConfig } from "next";

export default {
  distDir: "./build",
  cleanDistDir: true,
  reactStrictMode: true,
  output: "standalone",
} satisfies NextConfig;

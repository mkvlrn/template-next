import type { NextConfig } from "next";

export default {
  distDir: "./build",
  cleanDistDir: true,
  reactStrictMode: true,
  output: "export",
} as NextConfig;

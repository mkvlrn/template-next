import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import RootLayout from "~/app/layout";

vi.mock("next/font/google", () => ({
  // biome-ignore lint/style/useNamingConvention: comes from google fonts
  Geist: () => ({ className: "mocked-geist" }),
  // biome-ignore lint/style/useNamingConvention: comes from google fonts
  Geist_Mono: () => ({ className: "mocked-geist-mono" }),
}));

describe("RootLayout", () => {
  test("RootLayout renders children correctly", () => {
    render(<RootLayout>Test Child</RootLayout>);

    const childElement = screen.getByText("Test Child");
    expect(childElement).toBeInTheDocument();
  });
});

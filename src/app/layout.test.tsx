/** biome-ignore-all lint/style/useNamingConvention: wonky font construct with wonky names */
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import RootLayout from "#/app/layout";

vi.mock("next/font/google", () => ({
  Geist: () => ({ className: "mocked-geist" }),
  Geist_Mono: () => ({ className: "mocked-geist-mono" }),
}));

describe("RootLayout", () => {
  it("RootLayout renders children correctly", () => {
    render(<RootLayout>Test Child</RootLayout>);

    const childElement = screen.getByText("Test Child");
    expect(childElement).toBeInTheDocument();
  });
});

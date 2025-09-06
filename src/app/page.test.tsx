import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page.tsx";

const REGEX_HOME = /get started by editing/i;

describe("Home", () => {
  it("Home component renders correctly", () => {
    render(<Home />);

    const linkElement = screen.getByText(REGEX_HOME);
    expect(linkElement).toBeInTheDocument();
  });
});

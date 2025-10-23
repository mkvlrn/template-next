import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "#/app/page";

const REGEX_HOME = /To get started, edit the page.tsx file/i;

describe("Home", () => {
  it("Home component renders correctly", () => {
    render(<Home />);

    const linkElement = screen.getByText(REGEX_HOME);
    expect(linkElement).toBeInTheDocument();
  });
});

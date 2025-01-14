import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Home from "~/app/page";

const REGEX_HOME = /get started by editing/i;

describe("Home", () => {
  test("Home component renders correctly", () => {
    render(<Home />);

    const linkElement = screen.getByText(REGEX_HOME);
    expect(linkElement).toBeInTheDocument();
  });
});

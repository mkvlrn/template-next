import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Home from "~/app/page";

describe("Home", () => {
  test("Home component renders correctly", () => {
    render(<Home />);

    const linkElement = screen.getByText(/get started by editing/i);
    expect(linkElement).toBeInTheDocument();
  });
});

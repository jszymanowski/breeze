import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Box } from "@/components/Box";
import "@testing-library/jest-dom";

describe("Box", () => {
  it("renders inner content", () => {
    render(<Box>My cat's breath smells like cat food.</Box>);
    expect(
      screen.getByText("My cat's breath smells like cat food.")
    ).toBeInTheDocument();
  });
});

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Box } from "@/components/Box";
import "@testing-library/jest-dom";

describe("Box", () => {
  it("renders inner content", () => {
    render(<Box data-testid="box">My cat's breath smells like cat food.</Box>);
    expect(screen.getByTestId("box")).toHaveTextContent(
      "My cat's breath smells like cat food."
    );
  });

  it("passes through style classes", () => {
    render(
      <Box data-testid="box" className="rad-styles">
        Content
      </Box>
    );
    expect(screen.getByTestId("box")).toHaveClass("rad-styles", {
      exact: true,
    });
  });

  it("is polymorphic", () => {
    render(
      <Box data-testid="box" as="span">
        Content
      </Box>
    );
    expect(screen.getByTestId("box")?.tagName).toBe("SPAN");
  });
});

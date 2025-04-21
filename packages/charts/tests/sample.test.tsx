import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";

import { Text } from "@jszymanowski/breeze-primitives";

describe("Sample", () => {
  test("renders a Text component", async () => {
    render(<Text>Hello</Text>);

    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});

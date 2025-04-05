import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Label } from "@/main";

describe("Label", () => {
  const EXPECTED_BASE_LABEL_CLASSES =
    "flex select-none items-center gap-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 font-display font-normal text-base text-foreground";

  it("renders with default props", () => {
    render(<Label>Some label</Label>);
    const element = screen.getByText("Some label");

    expect(element.tagName).toBe("LABEL");
    expect(element.className).toBe(EXPECTED_BASE_LABEL_CLASSES);
  });

  it("combines custom className with generated classes", () => {
    render(<Label className="custom-class">With custom class</Label>);
    const element = screen.getByText("With custom class");
    expect(element.className).toBe(`${EXPECTED_BASE_LABEL_CLASSES} custom-class`);
  });
});

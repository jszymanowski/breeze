import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { NumberInput } from "@/main";

describe("NumberInput", () => {
  const EXPECTED_BASE_LABEL_CLASSES =
    "flex select-none items-center gap-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 font-display font-normal text-base text-foreground";
  const EXPECTED_BASE_INPUT_CLASSES =
    "flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40";

  it("renders with default props", () => {
    render(<NumberInput name="some_input" />);

    const input = screen.getByRole("spinbutton", { name: "some_input" }) as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe(EXPECTED_BASE_INPUT_CLASSES);
    expect(input.placeholder).toBe("");
    expect(input.type).toBe("number");
    expect(input.step).toBe(".01");
  });

  it("renders with label", () => {
    render(<NumberInput name="some_input" label="Some thing" />);

    const label = screen.getByText("Some thing");
    expect(label.tagName).toBe("LABEL");
    expect(label.className).toBe(EXPECTED_BASE_LABEL_CLASSES);

    const input = screen.getByLabelText("Some thing");
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe(EXPECTED_BASE_INPUT_CLASSES);
  });

  it("renders with left-oriented label", () => {
    render(<NumberInput name="some_input" label="Some thing" labelOrientation="left" />);

    const label = screen.getByText("Some thing");
    expect(label.tagName).toBe("LABEL");
    expect(label.className).toBe(`${EXPECTED_BASE_LABEL_CLASSES} text-nowrap`);

    const input = screen.getByLabelText("Some thing");
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe(EXPECTED_BASE_INPUT_CLASSES);
  });

  it("renders with placeholder", () => {
    render(<NumberInput name="some_input" placeholder="Type here" />);

    const input = screen.getByRole("spinbutton", { name: "some_input" }) as HTMLInputElement;
    expect(input.placeholder).toBe("Type here");
    expect(input.className).toBe(EXPECTED_BASE_INPUT_CLASSES);
  });

  it("renders with note", () => {
    render(<NumberInput name="some_input" note="My cat's breath smells like cat food" />);

    const note = screen.getByText("My cat's breath smells like cat food");
    expect(note.tagName).toBe("P");
    expect(note.className).toBe("text-sm text-muted-foreground font-display");

    const input = screen.getByRole("spinbutton", { name: "some_input" }) as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe(EXPECTED_BASE_INPUT_CLASSES);
  });

  it("renders with custom step", () => {
    render(<NumberInput name="some_input" step="10" />);

    const input = screen.getByRole("spinbutton", { name: "some_input" }) as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe(EXPECTED_BASE_INPUT_CLASSES);
    expect(input.placeholder).toBe("");
    expect(input.type).toBe("number");
    expect(input.step).toBe("10");
  });

  it("combines custom className with generated classes", () => {
    render(<NumberInput name="some_input" className="custom-class" />);

    const input = screen.getByRole("spinbutton", { name: "some_input" }) as HTMLInputElement;
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe(`${EXPECTED_BASE_INPUT_CLASSES} custom-class`);
  });
});

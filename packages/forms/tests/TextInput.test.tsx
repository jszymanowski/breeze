import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { TextInput } from "@/main";

describe("TextInput", () => {
  it("renders with default props", () => {
    render(<TextInput name="some_input" />);
    
    const input = screen.getByRole("textbox", { name: "some_input" });
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe("border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive");
  });
  
  it("renders with label", () => {
    render(<TextInput name="some_input" label="Some thing" />);
    
    const label = screen.getByText("Some thing");
    expect(label.tagName).toBe("LABEL");
    expect(label.className).toBe("flex items-center gap-2 select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 font-display font-normal text-base text-foreground");
    
    const input = screen.getByLabelText("Some thing");
    expect(input.tagName).toBe("INPUT");
    expect(input.className).toBe("border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive");
  });
});

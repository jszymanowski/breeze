import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SelectPicker } from "@/main";

describe("SelectPicker", () => {
  const OPTIONS = [
    {
      icon: "🌎",
      value: "earth",
      label: "Earth",
    },
    {
      icon: "🌪️",
      value: "wind",
      label: "Wind",
    },
    {
      icon: "🔥",
      value: "fire",
      label: "Fire",
    },
    {
      icon: "🌊",
      value: "water",
      label: "Water",
    },
  ];

  const EXPECTED_BASE_BUTTON_CLASSES =
    "inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 justify-between w-full";

  const EXPECTED_BASE_POPOVER_CLASSES =
    "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 origin-(--radix-popover-content-transform-origin) rounded-md border shadow-md outline-hidden w-full p-0";

  class MockResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  global.ResizeObserver = MockResizeObserver;

  const onSelect = vi.fn();

  it("renders with default props", () => {
    render(<SelectPicker options={OPTIONS} onSelect={onSelect} />);

    const trigger = screen.getByRole("combobox") as HTMLButtonElement;
    expect(trigger.tagName).toBe("BUTTON");
    expect(trigger.className).toBe(EXPECTED_BASE_BUTTON_CLASSES);
    expect(trigger).toHaveTextContent("Select a value...");

    expect(trigger.dataset.state).toBe("closed");
    expect(trigger.ariaExpanded).toBe("false");

    fireEvent.click(trigger);

    expect(trigger.dataset.state).toBe("open");
    expect(trigger.ariaExpanded).toBe("true");

    const popover = screen.getByRole("dialog");
    expect(popover.tagName).toBe("DIV");
    expect(popover.className).toBe(EXPECTED_BASE_POPOVER_CLASSES);
    expect(popover).toHaveTextContent("🌎Earth🌪️Wind🔥Fire🌊Water");

    const optionContainer = screen.getByRole("listbox");
    const options = within(optionContainer).getAllByRole("option");
    expect(options).toHaveLength(OPTIONS.length);

    expect(options[0]).toHaveTextContent("🌎Earth");
    expect(options[1]).toHaveTextContent("🌪️Wind");
    expect(options[2]).toHaveTextContent("🔥Fire");
    expect(options[3]).toHaveTextContent("🌊Water");

    fireEvent.click(options[2]);

    expect(trigger.dataset.state).toBe("closed");
    expect(trigger.ariaExpanded).toBe("false");

    expect(onSelect).toHaveBeenCalledWith(OPTIONS[2].value);
  });
});

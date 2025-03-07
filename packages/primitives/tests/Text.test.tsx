import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Text } from "@/components/Text/Text";

describe("Text", () => {
  it("renders with default props", () => {
    render(<Text>Hello world</Text>);
    const element = screen.getByText("Hello world");

    expect(element.tagName).toBe("P");
    expect(element).toHaveClass("text-base");
    expect(element).toHaveClass("font-normal");
    expect(element).toHaveClass("text-foreground");
    expect(element).toHaveClass("leading-normal");
    expect(element).toHaveClass("font-display");
  });

  it("renders with custom element type", () => {
    render(<Text as="span">Hello world</Text>);
    const element = screen.getByText("Hello world");
    expect(element.tagName).toBe("SPAN");
  });

  it("renders with h1-h6 elements", () => {
    const headingLevels = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

    headingLevels.forEach((level) => {
      const { rerender } = render(<Text as={level}>Heading {level}</Text>);
      const element = screen.getByText(`Heading ${level}`);
      expect(element.tagName).toBe(level.toUpperCase());
      rerender(<></>);
    });
  });

  it("applies the correct text size classes", () => {
    const sizes = ["xs", "sm", "base", "lg", "xl"] as const;

    sizes.forEach((size) => {
      const { rerender } = render(<Text size={size}>Text {size}</Text>);
      const element = screen.getByText(`Text ${size}`);
      expect(element).toHaveClass(`text-${size}`);
      rerender(<></>);
    });
  });

  it("applies the correct font weight classes", () => {
    const weights = [
      "thin",
      "extralight",
      "light",
      "normal",
      "medium",
      "semibold",
      "bold",
      "black",
    ] as const;

    weights.forEach((weight) => {
      const { rerender } = render(<Text weight={weight}>Weight {weight}</Text>);
      const element = screen.getByText(`Weight ${weight}`);
      expect(element).toHaveClass(`font-${weight}`);
      rerender(<></>);
    });
  });

  it("applies the correct variant classes", () => {
    const variants = {
      default: "text-foreground",
      muted: "text-muted-foreground",
      accent: "text-primary",
      destructive: "text-destructive",
      highlight: "text-highlight",
      success: "text-green-600 dark:text-green-500",
    } as const;

    Object.entries(variants).forEach(([variant, className]) => {
      const { rerender } = render(
        <Text variant={variant}>Variant {variant}</Text>
      );
      const element = screen.getByText(`Variant ${variant}`);

      // For success variant, we need to check for individual classes
      if (variant === "success") {
        expect(element).toHaveClass("text-green-600");
      } else {
        expect(element).toHaveClass(className);
      }

      rerender(<></>);
    });
  });

  it("applies the correct text alignment classes", () => {
    const alignments = ["left", "center", "right", "justify"] as const;

    alignments.forEach((align) => {
      const { rerender } = render(<Text align={align}>Align {align}</Text>);
      const element = screen.getByText(`Align ${align}`);
      expect(element).toHaveClass(`text-${align}`);
      rerender(<></>);
    });
  });

  it("applies the correct line height classes", () => {
    const leadingOptions = [
      "none",
      "tight",
      "snug",
      "normal",
      "relaxed",
      "loose",
    ] as const;

    leadingOptions.forEach((leading) => {
      const { rerender } = render(
        <Text leading={leading}>Leading {leading}</Text>
      );
      const element = screen.getByText(`Leading ${leading}`);
      expect(element).toHaveClass(`leading-${leading}`);
      rerender(<></>);
    });
  });

  it("applies the correct font family classes", () => {
    const families = ["display", "sans", "serif", "mono"] as const;

    families.forEach((family) => {
      const { rerender } = render(<Text family={family}>Family {family}</Text>);
      const element = screen.getByText(`Family ${family}`);
      expect(element).toHaveClass(`font-${family}`);
      rerender(<></>);
    });
  });

  it("applies truncate class when truncate is true", () => {
    render(<Text truncate>Truncated text</Text>);
    const element = screen.getByText("Truncated text");
    expect(element).toHaveClass("truncate");
  });

  it("does not apply truncate class when truncate is false", () => {
    render(<Text truncate={false}>Non-truncated text</Text>);
    const element = screen.getByText("Non-truncated text");
    expect(element).not.toHaveClass("truncate");
  });

  it("applies tabular-nums class when numeric is true", () => {
    render(<Text numeric>123456</Text>);
    const element = screen.getByText("123456");
    expect(element).toHaveClass("tabular-nums");
  });

  it("does not apply tabular-nums class when numeric is false", () => {
    render(<Text numeric={false}>123456</Text>);
    const element = screen.getByText("123456");
    expect(element).not.toHaveClass("tabular-nums");
  });

  it("passes additional props to the element", () => {
    render(<Text data-testid="text-component">Test text</Text>);
    expect(screen.getByTestId("text-component")).toBeInTheDocument();
  });

  it("combines custom className with generated classes", () => {
    render(<Text className="custom-class">With custom class</Text>);
    const element = screen.getByText("With custom class");
    expect(element).toHaveClass("custom-class");
    expect(element).toHaveClass("text-base"); // Still has default classes
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Text ref={ref}>Ref test</Text>);

    expect(ref.current).not.toBeNull();
    expect(ref.current).toBe(screen.getByText("Ref test"));
  });
});

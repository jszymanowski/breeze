import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Heading } from "@/main";
import { FontWeight, TypographyVariant } from "@/types";

describe("Heading", () => {
  it("renders with default props", () => {
    render(<Heading>Hello world</Heading>);
    const element = screen.getByText("Hello world");

    expect(element.tagName).toBe("H2");
    expect(element.className).toBe(
      "text-3xl font-bold text-foreground tracking-normal font-display scroll-m-20"
    );
  });

  it("renders headings with different levels", () => {
    const levels = ["1", "2", "3", "4", "5", "6"] as const;

    levels.forEach((level) => {
      const { rerender } = render(
        <Heading level={level}>Heading {level}</Heading>
      );
      const element = screen.getByText(`Heading ${level}`);
      expect(element.tagName).toBe(`H${level}`);
      rerender(<></>);
    });
  });

  it("applies default size based on level when size is not specified", () => {
    const levelSizeMap = {
      "1": "text-4xl",
      "2": "text-3xl",
      "3": "text-2xl",
      "4": "text-xl",
      "5": "text-lg",
      "6": "text-base",
    };

    Object.entries(levelSizeMap).forEach(([level, expectedClass]) => {
      const { rerender } = render(
        <Heading level={level as "1" | "2" | "3" | "4" | "5" | "6"}>
          Heading {level}
        </Heading>
      );
      const element = screen.getByText(`Heading ${level}`);
      expect(element.className).toBe(
        `${expectedClass} font-bold text-foreground tracking-normal font-display scroll-m-20`
      );
      rerender(<></>);
    });
  });

  it("applies explicitly specified size regardless of level", () => {
    const sizes = [
      "xs",
      "sm",
      "base",
      "lg",
      "xl",
      "2xl",
      "3xl",
      "4xl",
      "5xl",
    ] as const;

    sizes.forEach((size) => {
      const { rerender } = render(
        <Heading size={size}>Heading {size}</Heading>
      );
      const element = screen.getByText(`Heading ${size}`);
      expect(element.className).toBe(
        `text-${size} font-bold text-foreground tracking-normal font-display scroll-m-20`
      );
      rerender(<></>);
    });
  });

  it("applies the correct font weight classes", () => {
    const weights = [
      "normal",
      "medium",
      "semibold",
      "bold",
      "extrabold",
    ] as const;

    weights.forEach((weight) => {
      const { rerender } = render(
        <Heading weight={weight as FontWeight}>Weight {weight}</Heading>
      );
      const element = screen.getByText(`Weight ${weight}`);
      expect(element.className).toBe(
        `text-3xl font-${weight} text-foreground tracking-normal font-display scroll-m-20`
      );
      rerender(<></>);
    });
  });

  it("applies the correct variant classes", () => {
    const variants = {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary-foreground",
      accent: "text-accent-foreground",
      info: "text-info-foreground",
      destructive: "text-destructive-foreground",
    } as const;

    Object.entries(variants).forEach(([variant, className]) => {
      const { rerender } = render(
        <Heading variant={variant as TypographyVariant}>
          Variant {variant}
        </Heading>
      );
      const element = screen.getByText(`Variant ${variant}`);
      expect(element.className).toBe(
        `text-3xl font-bold ${className} tracking-normal font-display scroll-m-20`
      );
      rerender(<></>);
    });
  });

  it("applies the correct text alignment classes", () => {
    const alignments = ["left", "center", "right"] as const;

    alignments.forEach((align) => {
      const { rerender } = render(
        <Heading align={align}>Align {align}</Heading>
      );
      const element = screen.getByText(`Align ${align}`);
      expect(element.className).toBe(
        `text-3xl font-bold text-foreground text-${align} tracking-normal font-display scroll-m-20`
      );
      rerender(<></>);
    });
  });

  it("applies the correct letter spacing classes", () => {
    const trackingOptions = [
      "tighter",
      "tight",
      "normal",
      "wide",
      "wider",
      "widest",
    ] as const;

    trackingOptions.forEach((tracking) => {
      const { rerender } = render(
        <Heading tracking={tracking}>Tracking {tracking}</Heading>
      );
      const element = screen.getByText(`Tracking ${tracking}`);
      expect(element.className).toBe(
        `text-3xl font-bold text-foreground tracking-${tracking} font-display scroll-m-20`
      );
      rerender(<></>);
    });
  });

  it("applies the correct font family classes", () => {
    const families = ["display", "sans", "serif", "mono"] as const;

    families.forEach((family) => {
      const { rerender } = render(
        <Heading family={family}>Family {family}</Heading>
      );
      const element = screen.getByText(`Family ${family}`);
      expect(element.className).toBe(
        `text-3xl font-bold text-foreground tracking-normal font-${family} scroll-m-20`
      );
      rerender(<></>);
    });
  });

  it("applies tabular-nums class when numeric is true", () => {
    render(<Heading numeric>123456</Heading>);
    const element = screen.getByText("123456");
    expect(element.className).toBe(
      "text-3xl font-bold text-foreground tracking-normal font-display tabular-nums scroll-m-20"
    );
  });

  it("does not apply tabular-nums class when numeric is false", () => {
    render(<Heading numeric={false}>123456</Heading>);
    const element = screen.getByText("123456");
    expect(element).not.toHaveClass("tabular-nums");
  });

  it("passes additional props to the element", () => {
    render(<Heading data-testid="heading-component">Test heading</Heading>);
    expect(screen.getByTestId("heading-component")).toBeInTheDocument();
  });

  it("combines custom className with generated classes", () => {
    render(<Heading className="custom-class">With custom class</Heading>);
    const element = screen.getByText("With custom class");
    expect(element.className).toBe(
      "text-3xl font-bold text-foreground tracking-normal font-display scroll-m-20 custom-class"
    );
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Heading ref={ref}>Ref test</Heading>);

    expect(ref.current).not.toBeNull();
    expect(ref.current).toBe(screen.getByText("Ref test"));
  });

  it("should always add scroll-m-20 class for better anchor navigation", () => {
    render(<Heading>Heading with scroll margin</Heading>);
    const element = screen.getByText("Heading with scroll margin");
    expect(element.className).toBe(
      "text-3xl font-bold text-foreground tracking-normal font-display scroll-m-20"
    );
  });

  it("applies different combinations of props correctly", () => {
    render(
      <Heading
        level="1"
        size="5xl"
        weight="extrabold"
        variant="accent"
        align="center"
        tracking="wide"
        family="serif"
        numeric
      >
        Combined props
      </Heading>
    );

    const element = screen.getByText("Combined props");

    expect(element.tagName).toBe("H1");
    expect(element.className).toBe(
      "text-5xl font-extrabold text-accent-foreground text-center tracking-wide font-serif tabular-nums scroll-m-20"
    );
  });
});

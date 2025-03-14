import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Heading } from "@/main";
import {
  HEADING_LEVELS,
  FONT_FAMILIES,
  FONT_WEIGHTS,
  FONT_SIZES,
  TYPOGRAPHY_VARIANTS,
  TEXT_ALIGNS,
  TEXT_LEADINGS,
  TEXT_TRACKINGS,
  FontWeight,
  TypographyVariant,
} from "@/types";

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
    const levelSizeMap = {
      "1": "text-4xl",
      "2": "text-3xl",
      "3": "text-2xl",
      "4": "text-xl",
      "5": "text-lg",
      "6": "text-base",
    };

    HEADING_LEVELS.forEach((level) => {
      const { rerender } = render(
        <Heading level={level}>Heading {level}</Heading>
      );
      const element = screen.getByText(`Heading ${level}`);
      expect(element.tagName).toBe(`H${level}`);
      expect(element.className).toBe(
        `${levelSizeMap[level]} font-bold text-foreground tracking-normal font-display scroll-m-20`
      );
      rerender(<></>);
    });
  });

  it("applies explicitly specified size regardless of level", () => {
    FONT_SIZES.forEach((size) => {
      const { rerender } = render(
        <Heading level="3" size={size}>
          Heading {size}
        </Heading>
      );
      const element = screen.getByText(`Heading ${size}`);

      const expectedCssClass = size === "md" ? "text-base" : `text-${size}`;
      expect(element.className).toBe(
        `${expectedCssClass} font-bold text-foreground tracking-normal font-display scroll-m-20`
      );
      rerender(<></>);
    });
  });

  it("applies the correct font weight classes", () => {
    FONT_WEIGHTS.forEach((weight) => {
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
    TYPOGRAPHY_VARIANTS.forEach((variant) => {
      const { rerender } = render(
        <Heading variant={variant as TypographyVariant}>
          Variant {variant}
        </Heading>
      );
      const element = screen.getByText(`Variant ${variant}`);

      const expectedCssClass =
        variant === "default"
          ? "text-foreground"
          : `text-${variant}-foreground`;

      expect(element.className).toBe(
        `text-3xl font-bold ${expectedCssClass} tracking-normal font-display scroll-m-20`
      );
      rerender(<></>);
    });
  });

  it("applies the correct text alignment classes", () => {
    TEXT_ALIGNS.forEach((align) => {
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
    TEXT_TRACKINGS.forEach((tracking) => {
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

  it("applies the correct line height classes", () => {
    TEXT_LEADINGS.forEach((leading) => {
      const { rerender } = render(
        <Heading leading={leading}>Leading {leading}</Heading>
      );
      const element = screen.getByText(`Leading ${leading}`);
      expect(element.className).toBe(
        `text-3xl font-bold text-foreground leading-${leading} tracking-normal font-display scroll-m-20`
      );
      rerender(<></>);
    });
  });

  it("applies the correct font family classes", () => {
    FONT_FAMILIES.forEach((family) => {
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

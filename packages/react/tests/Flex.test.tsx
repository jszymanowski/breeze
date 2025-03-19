import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

import { Flex } from "@/main";
import type { FlexDirection } from "@/types/layout";

describe("Flex", () => {
  it("renders with default props", () => {
    render(<Flex data-testid="flex-element">Content</Flex>);
    const element = screen.getByTestId("flex-element");

    expect(element.tagName).toBe("DIV");
    expect(element.className).toBe("flex");
  });

  it("renders with custom element type", () => {
    render(
      <Flex as="section" data-testid="flex-element">
        Content
      </Flex>,
    );
    const element = screen.getByTestId("flex-element");
    expect(element.tagName).toBe("SECTION");
    expect(element.className).toBe("flex");
  });

  it("applies the correct flex direction classes", () => {
    const directions = [
      "row",
      "col",
      "row-reverse",
      "col-reverse",
    ] as FlexDirection[];

    for (const direction of directions) {
      const { rerender } = render(
        <Flex direction={direction} data-testid="flex-element">
          Direction {direction}
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe(`flex flex-${direction}`);
      rerender(<div />);
    }
  });

  it("applies the correct alignment classes", () => {
    const alignments = [
      "start",
      "center",
      "end",
      "stretch",
      "baseline",
    ] as const;

    for (const align of alignments) {
      const { rerender } = render(
        <Flex align={align} data-testid="flex-element">
          Align {align}
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe(`flex items-${align}`);
      rerender(<div />);
    }
  });

  it("applies the correct justify content classes", () => {
    const justifyOptions = [
      "start",
      "center",
      "end",
      "between",
      "around",
      "evenly",
    ] as const;

    for (const justify of justifyOptions) {
      const { rerender } = render(
        <Flex justify={justify} data-testid="flex-element">
          Justify {justify}
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe(`flex justify-${justify}`);
      rerender(<div />);
    }
  });

  it("applies the correct flex wrap classes", () => {
    const wrapOptions = ["nowrap", "wrap", "wrap-reverse"] as const;

    for (const wrap of wrapOptions) {
      const { rerender } = render(
        <Flex wrap={wrap} data-testid="flex-element">
          Wrap {wrap}
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe(`flex flex-${wrap}`);
      rerender(<div />);
    }
  });

  it("applies the correct gap classes", () => {
    const gapOptions = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "8",
      "10",
      "12",
      "16",
    ] as const;

    for (const gap of gapOptions) {
      const { rerender } = render(
        <Flex gap={gap} data-testid="flex-element">
          Gap {gap}
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe(`flex gap-${gap}`);
      rerender(<div />);
    }
  });

  it("applies the correct horizontal gap classes", () => {
    const gapXOptions = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "8",
      "10",
      "12",
      "16",
    ] as const;

    for (const gapX of gapXOptions) {
      const { rerender } = render(
        <Flex gapX={gapX} data-testid="flex-element">
          GapX {gapX}
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe(`flex gap-x-${gapX}`);
      rerender(<div />);
    }
  });

  it("applies the correct vertical gap classes", () => {
    const gapYOptions = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "8",
      "10",
      "12",
      "16",
    ] as const;

    for (const gapY of gapYOptions) {
      const { rerender } = render(
        <Flex gapY={gapY} data-testid="flex-element">
          GapY {gapY}
        </Flex>,
      );
      const element = screen.getByTestId("flex-element");
      expect(element.className).toBe(`flex gap-y-${gapY}`);
      rerender(<div />);
    }
  });

  it("combines gap, gapX, and gapY correctly", () => {
    render(
      <Flex gap="2" gapX="4" gapY="8" data-testid="flex-element">
        Mixed gaps
      </Flex>,
    );

    const element = screen.getByTestId("flex-element");
    expect(element.className).toBe("flex gap-2 gap-x-4 gap-y-8");
  });

  it("passes additional props to the element", () => {
    render(
      <Flex data-testid="flex-component" aria-label="flex container">
        Test flex
      </Flex>,
    );
    const element = screen.getByTestId("flex-component");
    expect(element).toHaveAttribute("aria-label", "flex container");
  });

  it("combines custom className with generated classes", () => {
    render(
      <Flex className="custom-class" data-testid="flex-element">
        With custom class
      </Flex>,
    );
    const element = screen.getByTestId("flex-element");
    expect(element.className).toBe("flex custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(
      <Flex ref={ref} data-testid="flex-element">
        Ref test
      </Flex>,
    );

    expect(ref.current).not.toBeNull();
    expect(ref.current).toBe(screen.getByTestId("flex-element"));
  });

  it("applies different combinations of props correctly", () => {
    render(
      <Flex
        direction="col"
        align="center"
        justify="between"
        wrap="wrap"
        gap="4"
        data-testid="flex-element"
      >
        Combined props
      </Flex>,
    );

    const element = screen.getByTestId("flex-element");

    expect(element.className).toBe(
      "flex flex-col items-center justify-between flex-wrap gap-4",
    );
  });

  it("renders children correctly", () => {
    render(
      <Flex>
        <div data-testid="child-element">Child content</div>
      </Flex>,
    );

    expect(screen.getByTestId("child-element")).toBeInTheDocument();
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });
});

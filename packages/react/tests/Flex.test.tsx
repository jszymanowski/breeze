import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

import { Flex } from "@/main";
import { FlexDirection } from "@/types/layout";

describe("Flex", () => {
  it("renders with default props", () => {
    render(<Flex data-testid="flex-element">Content</Flex>);
    const element = screen.getByTestId("flex-element");

    expect(element.tagName).toBe("DIV");
    expect(element).toHaveClass("flex");
  });

  it("renders with custom element type", () => {
    render(
      <Flex as="section" data-testid="flex-element">
        Content
      </Flex>
    );
    const element = screen.getByTestId("flex-element");
    expect(element.tagName).toBe("SECTION");
    expect(element).toHaveClass("flex");
  });

  it("applies the correct flex direction classes", () => {
    const directions = [
      "row",
      "col",
      "row-reverse",
      "col-reverse",
    ] as FlexDirection[];

    directions.forEach((direction) => {
      const { rerender } = render(
        <Flex direction={direction} data-testid="flex-element">
          Direction {direction}
        </Flex>
      );
      const element = screen.getByTestId("flex-element");
      expect(element).toHaveClass(`flex flex-${direction}`);
      rerender(<></>);
    });
  });

  it("applies the correct alignment classes", () => {
    const alignments = [
      "start",
      "center",
      "end",
      "stretch",
      "baseline",
    ] as const;

    alignments.forEach((align) => {
      const { rerender } = render(
        <Flex align={align} data-testid="flex-element">
          Align {align}
        </Flex>
      );
      const element = screen.getByTestId("flex-element");
      expect(element).toHaveClass(`items-${align}`);
      rerender(<></>);
    });
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

    justifyOptions.forEach((justify) => {
      const { rerender } = render(
        <Flex justify={justify} data-testid="flex-element">
          Justify {justify}
        </Flex>
      );
      const element = screen.getByTestId("flex-element");
      expect(element).toHaveClass(`justify-${justify}`);
      rerender(<></>);
    });
  });

  it("applies the correct flex wrap classes", () => {
    const wrapOptions = ["nowrap", "wrap", "wrap-reverse"] as const;

    wrapOptions.forEach((wrap) => {
      const { rerender } = render(
        <Flex wrap={wrap} data-testid="flex-element">
          Wrap {wrap}
        </Flex>
      );
      const element = screen.getByTestId("flex-element");
      expect(element).toHaveClass(`flex-${wrap}`);
      rerender(<></>);
    });
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

    gapOptions.forEach((gap) => {
      const { rerender } = render(
        <Flex gap={gap} data-testid="flex-element">
          Gap {gap}
        </Flex>
      );
      const element = screen.getByTestId("flex-element");
      expect(element).toHaveClass(`gap-${gap}`);
      rerender(<></>);
    });
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

    gapXOptions.forEach((gapX) => {
      const { rerender } = render(
        <Flex gapX={gapX} data-testid="flex-element">
          GapX {gapX}
        </Flex>
      );
      const element = screen.getByTestId("flex-element");
      expect(element).toHaveClass(`gap-x-${gapX}`);
      rerender(<></>);
    });
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

    gapYOptions.forEach((gapY) => {
      const { rerender } = render(
        <Flex gapY={gapY} data-testid="flex-element">
          GapY {gapY}
        </Flex>
      );
      const element = screen.getByTestId("flex-element");
      expect(element).toHaveClass(`gap-y-${gapY}`);
      rerender(<></>);
    });
  });

  it("combines gap, gapX, and gapY correctly", () => {
    render(
      <Flex gap="2" gapX="4" gapY="8" data-testid="flex-element">
        Mixed gaps
      </Flex>
    );

    const element = screen.getByTestId("flex-element");
    expect(element).toHaveClass("gap-2");
    expect(element).toHaveClass("gap-x-4");
    expect(element).toHaveClass("gap-y-8");
  });

  it("passes additional props to the element", () => {
    render(
      <Flex data-testid="flex-component" aria-label="flex container">
        Test flex
      </Flex>
    );
    const element = screen.getByTestId("flex-component");
    expect(element).toHaveAttribute("aria-label", "flex container");
  });

  it("combines custom className with generated classes", () => {
    render(
      <Flex className="custom-class" data-testid="flex-element">
        With custom class
      </Flex>
    );
    const element = screen.getByTestId("flex-element");
    expect(element).toHaveClass("custom-class");
    expect(element).toHaveClass("flex");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(
      <Flex ref={ref} data-testid="flex-element">
        Ref test
      </Flex>
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
      </Flex>
    );

    const element = screen.getByTestId("flex-element");

    expect(element).toHaveClass("flex");
    expect(element).toHaveClass("flex-col");
    expect(element).toHaveClass("items-center");
    expect(element).toHaveClass("justify-between");
    expect(element).toHaveClass("flex-wrap");
    expect(element).toHaveClass("gap-4");
  });

  it("renders children correctly", () => {
    render(
      <Flex>
        <div data-testid="child-element">Child content</div>
      </Flex>
    );

    expect(screen.getByTestId("child-element")).toBeInTheDocument();
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });
});

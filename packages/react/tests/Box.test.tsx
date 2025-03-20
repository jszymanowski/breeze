import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

import { Box } from "@/main";

describe("Box", () => {
  it("renders with default props", () => {
    render(<Box data-testid="box-element">Content</Box>);
    const element = screen.getByTestId("box-element");

    expect(element.tagName).toBe("DIV");
    expect(element).toBeInTheDocument();
  });

  it("renders with custom element type", () => {
    render(
      <Box as="section" data-testid="box-element">
        Content
      </Box>,
    );
    const element = screen.getByTestId("box-element");
    expect(element.tagName).toBe("SECTION");
  });

  it("applies the correct size classes", () => {
    const sizes = [
      "0",
      "1",
      "6",
      "12",
      "24",
      "48",
      "96",
      "auto",
      "full",
      "min",
      "max",
      "fit",
      "px",
    ] as const;

    for (const size of sizes) {
      const { rerender } = render(
        <Box size={size} data-testid="box-element">
          Size {size}
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.className).toBe(`size-${size}`);
      rerender(<div />);
    }
  });

  it("applies the correct width classes", () => {
    const widths = [
      "0",
      "1",
      "6",
      "12",
      "24",
      "48",
      "96",
      "3xs",
      "2xs",
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "2xl",
      "3xl",
      "4xl",
      "5xl",
      "6xl",
      "7xl",
      "auto",
      "full",
      "screen",
      "min",
      "max",
      "fit",
      "px",
    ] as const;

    for (const width of widths) {
      const { rerender } = render(
        <Box width={width} data-testid="box-element">
          Width {width}
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.className).toBe(`w-${width}`);
      rerender(<div />);
    }
  });

  it("applies the correct height classes", () => {
    const heights = [
      "0",
      "1",
      "6",
      "12",
      "24",
      "48",
      "96",
      "auto",
      "full",
      "screen",
      "min",
      "max",
      "fit",
      "px",
    ] as const;

    for (const height of heights) {
      const { rerender } = render(
        <Box height={height} data-testid="box-element">
          Height {height}
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.className).toBe(`h-${height}`);
      rerender(<div />);
    }
  });

  it("applies the correct box display classes", () => {
    const displays = [
      "block",
      "flex",
      "grid",
      "inline",
      "inline-block",
      "inline-flex",
      "inline-grid",
      "inline-table",
      "list-item",
      "flow-root",
      "contents",
      "table",
      "table-header-group",
      "table-footer-group",
      "table-column-group",
      "table-column",
      "table-row-group",
      "table-row",
      "table-cell",
      "table-caption",
      "hidden",
      "sr-only",
      "not-sr-only",
    ] as const;

    for (const display of displays) {
      const { rerender } = render(
        <Box display={display} data-testid="box-element">
          Display {display}
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.className).toBe(display);
      rerender(<div />);
    }
  });

  it("applies the correct box sizing classes", () => {
    const boxSizings = ["content", "border"] as const;

    for (const sizing of boxSizings) {
      const { rerender } = render(
        <Box sizing={sizing} data-testid="box-element">
          Sizing {sizing}
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.className).toBe(`box-${sizing}`);
      rerender(<div />);
    }
  });

  it("applies the correct position classes", () => {
    const positions = [
      "static",
      "fixed",
      "absolute",
      "relative",
      "sticky",
    ] as const;

    for (const position of positions) {
      const { rerender } = render(
        <Box position={position} data-testid="box-element">
          Position {position}
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.className).toBe(position);
      rerender(<div />);
    }
  });

  it("applies the correct overflow classes", () => {
    const overflows = ["auto", "hidden", "clip", "visible", "scroll"] as const;

    for (const overflow of overflows) {
      const { rerender } = render(
        <Box overflow={overflow} data-testid="box-element">
          Overflow {overflow}
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.className).toBe(`overflow-${overflow}`);
      rerender(<div />);
    }

    for (const overflow of overflows) {
      const { rerender } = render(
        <Box overflowX={overflow} data-testid="box-element">
          OverflowX {overflow}
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.className).toBe(`overflow-x-${overflow}`);
      rerender(<div />);
    }

    for (const overflow of overflows) {
      const { rerender } = render(
        <Box overflowY={overflow} data-testid="box-element">
          OverflowY {overflow}
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.className).toBe(`overflow-y-${overflow}`);
      rerender(<div />);
    }
  });

  describe("rounded corners", () => {
    it("applies the correct rounded corner classes", () => {
      const roundedSizes = [
        "none",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "full",
      ] as const;

      for (const roundedSize of roundedSizes) {
        const { rerender } = render(
          <Box rounded={roundedSize} data-testid="box-element">
            Rounded size {roundedSize}
          </Box>,
        );
        const element = screen.getByTestId("box-element");
        expect(element.className).toBe(`rounded-${roundedSize}`);
        rerender(<div />);
      }
    });

    it("applies default rounding with a true value", () => {
      render(
        <Box rounded data-testid="box-element">
          Default rounded size
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.className).toBe("rounded");
    });

    it("does not rounding with a false value", () => {
      render(
        <Box rounded={false} data-testid="box-element">
          No rounded corners
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.className).toBe("");
    });
  });

  it("applies custom className", () => {
    render(
      <Box className="custom-class" data-testid="box-element">
        With custom class
      </Box>,
    );
    const element = screen.getByTestId("box-element");
    expect(element.className).toBe("custom-class");
  });

  it("can render as different HTML elements", () => {
    const elements = [
      "article",
      "main",
      "aside",
      "header",
      "footer",
      "nav",
    ] as const;

    for (const elementType of elements) {
      const { rerender } = render(
        <Box as={elementType} data-testid="box-element">
          {elementType} box
        </Box>,
      );
      const element = screen.getByTestId("box-element");
      expect(element.tagName).toBe(elementType.toUpperCase());
      rerender(<div />);
    }
  });

  it("passes additional props to the element", () => {
    render(
      <Box
        as="section"
        data-testid="box-component"
        aria-label="box container"
        role="region"
      >
        Test box
      </Box>,
    );
    const element = screen.getByTestId("box-component");
    expect(element).toHaveAttribute("aria-label", "box container");
    expect(element).toHaveAttribute("role", "region");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(
      <Box ref={ref} data-testid="box-element">
        Ref test
      </Box>,
    );

    expect(ref.current).not.toBeNull();
    expect(ref.current).toBe(screen.getByTestId("box-element"));
  });

  it("renders children correctly", () => {
    render(
      <Box>
        <div data-testid="child-element">Child content</div>
      </Box>,
    );

    expect(screen.getByTestId("child-element")).toBeInTheDocument();
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("renders nested children", () => {
    render(
      <Box data-testid="parent-box">
        <Box data-testid="child-box">
          <Box data-testid="grandchild-box">Nested content</Box>
        </Box>
      </Box>,
    );

    expect(screen.getByTestId("parent-box")).toBeInTheDocument();
    expect(screen.getByTestId("child-box")).toBeInTheDocument();
    expect(screen.getByTestId("grandchild-box")).toBeInTheDocument();
    expect(screen.getByText("Nested content")).toBeInTheDocument();
  });

  it("works with multiple classNames", () => {
    render(
      <Box className="class1 class2 class3" data-testid="box-element">
        Multiple classes
      </Box>,
    );

    const element = screen.getByTestId("box-element");
    expect(element.className).toBe("class1 class2 class3");
  });

  it("can be styled with inline styles", () => {
    render(
      <Box style={{ padding: "10px" }} data-testid="box-element">
        Styled box
      </Box>,
    );

    const element = screen.getByTestId("box-element");
    expect(element).toHaveStyle({
      padding: "10px",
    });
  });
});

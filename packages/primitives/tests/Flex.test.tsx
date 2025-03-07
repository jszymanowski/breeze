import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Flex } from "@/components/Flex";
import "@testing-library/jest-dom";

describe("Flex", () => {
  it("renders inner content", () => {
    render(
      <Flex data-testid="flex">My cat's breath smells like cat food.</Flex>
    );
    expect(screen.getByTestId("flex")).toHaveTextContent(
      "My cat's breath smells like cat food."
    );
  });

  it("passes through style classes", () => {
    render(
      <Flex data-testid="flex" className="rad-styles">
        Content
      </Flex>
    );
    expect(screen.getByTestId("flex")).toHaveClass("flex rad-styles", {
      exact: true,
    });
  });

  it("is polymorphic", () => {
    render(
      <Flex data-testid="flex" as="span">
        Content
      </Flex>
    );
    expect(screen.getByTestId("flex")?.tagName).toBe("SPAN");
  });

  it("applies flex direction", () => {
    render(
      <Flex data-testid="flex" direction="col">
        Content
      </Flex>
    );
    expect(screen.getByTestId("flex")).toHaveClass("flex flex-col", {
      exact: true,
    });

    render(
      <Flex data-testid="flex-reverse" direction="row-reverse">
        Content
      </Flex>
    );
    expect(screen.getByTestId("flex-reverse")).toHaveClass(
      "flex flex-row-reverse",
      {
        exact: true,
      }
    );
  });

  it("applies alignment", () => {
    render(
      <Flex data-testid="flex" align="center">
        Content
      </Flex>
    );
    expect(screen.getByTestId("flex")).toHaveClass("flex items-center", {
      exact: true,
    });

    render(
      <Flex data-testid="flex-end" align="end">
        Content
      </Flex>
    );
    expect(screen.getByTestId("flex-end")).toHaveClass("flex items-end", {
      exact: true,
    });
  });

  it("applies justification", () => {
    render(
      <Flex data-testid="flex" justify="between">
        Content
      </Flex>
    );
    expect(screen.getByTestId("flex")).toHaveClass("flex justify-between", {
      exact: true,
    });

    render(
      <Flex data-testid="flex-around" justify="around">
        Content
      </Flex>
    );
    expect(screen.getByTestId("flex-around")).toHaveClass(
      "flex justify-around",
      {
        exact: true,
      }
    );
  });

  it("applies wrap settings", () => {
    render(
      <Flex data-testid="flex" wrap="wrap">
        Content
      </Flex>
    );
    expect(screen.getByTestId("flex")).toHaveClass("flex flex-wrap", {
      exact: true,
    });

    render(
      <Flex data-testid="flex-reverse" wrap="wrap-reverse">
        Content
      </Flex>
    );
    expect(screen.getByTestId("flex-reverse")).toHaveClass(
      "flex flex-wrap-reverse",
      {
        exact: true,
      }
    );
  });

  it("applies gap", () => {
    render(
      <Flex data-testid="flex" gap="2">
        Content
      </Flex>
    );
    expect(screen.getByTestId("flex")).toHaveClass("flex gap-2", {
      exact: true,
    });

    render(
      <Flex data-testid="flex-x" gapX="2">
        Content
      </Flex>
    );
    expect(screen.getByTestId("flex-x")).toHaveClass("flex gap-x-2", {
      exact: true,
    });

    render(
      <Flex data-testid="flex-y" gapY="2">
        Content
      </Flex>
    );
    expect(screen.getByTestId("flex-y")).toHaveClass("flex gap-y-2", {
      exact: true,
    });
  });
});

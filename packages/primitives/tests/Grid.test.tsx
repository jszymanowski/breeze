import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Grid } from "@/components/Grid";
import "@testing-library/jest-dom";

describe("Grid", () => {
  it("renders inner content", () => {
    render(
      <Grid data-testid="grid">My cat's breath smells like cat food.</Grid>
    );
    expect(screen.getByTestId("grid")).toHaveTextContent(
      "My cat's breath smells like cat food."
    );
  });

  it("passes through style classes", () => {
    render(
      <Grid data-testid="grid" className="rad-styles">
        Content
      </Grid>
    );
    expect(screen.getByTestId("grid")).toHaveClass("grid rad-styles", {
      exact: true,
    });
  });

  it("is polymorphic", () => {
    render(
      <Grid data-testid="grid" as="span">
        Content
      </Grid>
    );
    expect(screen.getByTestId("grid")?.tagName).toBe("SPAN");
  });

  it("applies columns", () => {
    render(
      <Grid data-testid="grid" cols="2">
        Content
      </Grid>
    );
    expect(screen.getByTestId("grid")).toHaveClass("grid grid-cols-2", {
      exact: true,
    });

    render(
      <Grid data-testid="grid-ten" cols="10">
        Content
      </Grid>
    );
    expect(screen.getByTestId("grid-ten")).toHaveClass("grid grid-cols-10", {
      exact: true,
    });

    render(
      <Grid data-testid="grid-none" cols="none">
        Content
      </Grid>
    );
    expect(screen.getByTestId("grid-none")).toHaveClass("grid grid-cols-none", {
      exact: true,
    });
  });

  it("applies row", () => {
    render(
      <Grid data-testid="grid" rows="2">
        Content
      </Grid>
    );
    expect(screen.getByTestId("grid")).toHaveClass("grid grid-rows-2", {
      exact: true,
    });

    render(
      <Grid data-testid="grid-ten" rows="10">
        Content
      </Grid>
    );
    expect(screen.getByTestId("grid-ten")).toHaveClass("grid grid-rows-10", {
      exact: true,
    });

    render(
      <Grid data-testid="grid-none" rows="none">
        Content
      </Grid>
    );
    expect(screen.getByTestId("grid-none")).toHaveClass("grid grid-rows-none", {
      exact: true,
    });
  });

  it("applies flow", () => {
    render(
      <Grid data-testid="grid" flow="row">
        Content
      </Grid>
    );
    expect(screen.getByTestId("grid")).toHaveClass("grid grid-flow-row", {
      exact: true,
    });

    render(
      <Grid data-testid="grid-col" flow="col">
        Content
      </Grid>
    );
    expect(screen.getByTestId("grid-col")).toHaveClass("grid grid-flow-col", {
      exact: true,
    });

    render(
      <Grid data-testid="grid-dense" flow="row-dense">
        Content
      </Grid>
    );
    expect(screen.getByTestId("grid-dense")).toHaveClass(
      "grid grid-flow-row-dense",
      {
        exact: true,
      }
    );
  });

  it("applies gap", () => {
    render(
      <Grid data-testid="grid" gap="2">
        Content
      </Grid>
    );
    expect(screen.getByTestId("grid")).toHaveClass("grid gap-2", {
      exact: true,
    });

    render(
      <Grid data-testid="flex-x" gapX="2">
        Content
      </Grid>
    );
    expect(screen.getByTestId("flex-x")).toHaveClass("grid gap-x-2", {
      exact: true,
    });

    render(
      <Grid data-testid="flex-y" gapY="2">
        Content
      </Grid>
    );
    expect(screen.getByTestId("flex-y")).toHaveClass("grid gap-y-2", {
      exact: true,
    });
  });
});

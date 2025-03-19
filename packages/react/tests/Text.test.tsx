import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"

import { Text } from "@/main"
import {
  FONT_FAMILIES,
  FONT_WEIGHTS,
  FONT_SIZES,
  TYPOGRAPHY_VARIANTS,
  TEXT_ALIGNS,
  TEXT_LEADINGS,
  TEXT_TRACKINGS,
} from "@/types"

describe("Text", () => {
  it("renders with default props", () => {
    render(<Text>Hello world</Text>)
    const element = screen.getByText("Hello world")

    expect(element.tagName).toBe("P")
    expect(element.className).toBe(
      "text-base font-normal text-foreground tracking-normal font-display"
    )
  })

  it("renders with custom element type", () => {
    render(<Text as="span">Hello world</Text>)
    const element = screen.getByText("Hello world")
    expect(element.tagName).toBe("SPAN")
  })

  it("renders with h1-h6 elements", () => {
    const headingLevels = ["h1", "h2", "h3", "h4", "h5", "h6"] as const

    for (const level of headingLevels) {
      render(<Text as={level}>Heading {level}</Text>)
      const element = screen.getByText(`Heading ${level}`)
      expect(element.tagName).toBe(level.toUpperCase())
    }
  })

  it("applies the correct text size classes", () => {
    for (const size of FONT_SIZES) {
      render(<Text size={size}>Text {size}</Text>)
      const element = screen.getByText(`Text ${size}`)

      const expectedCssClass = size === "md" ? "text-base" : `text-${size}`
      expect(element.className).toBe(
        `${expectedCssClass} font-normal text-foreground tracking-normal font-display`
      )
    }
  })

  it("applies the correct font weight classes", () => {
    for (const weight of FONT_WEIGHTS) {
      render(<Text weight={weight}>Weight {weight}</Text>)
      const element = screen.getByText(`Weight ${weight}`)
      expect(element.className).toBe(
        `text-base font-${weight} text-foreground tracking-normal font-display`
      )
    }
  })

  it("applies the correct variant classes", () => {
    for (const variant of TYPOGRAPHY_VARIANTS) {
      render(<Text variant={variant}>Variant {variant}</Text>)
      const element = screen.getByText(`Variant ${variant}`)

      const expectedCssClass =
        variant === "default" ? "text-foreground" : `text-${variant}-foreground`

      expect(element.className).toBe(
        `text-base font-normal ${expectedCssClass} tracking-normal font-display`
      )
    }
  })

  it("applies the correct text alignment classes", () => {
    for (const align of TEXT_ALIGNS) {
      render(<Text align={align}>Align {align}</Text>)
      const element = screen.getByText(`Align ${align}`)
      expect(element.className).toBe(
        `text-base font-normal text-foreground text-${align} tracking-normal font-display`
      )
    }
  })

  it("applies the correct letter spacing classes", () => {
    for (const tracking of TEXT_TRACKINGS) {
      render(<Text tracking={tracking}>Tracking {tracking}</Text>)
      const element = screen.getByText(`Tracking ${tracking}`)
      expect(element.className).toBe(
        `text-base font-normal text-foreground tracking-${tracking} font-display`
      )
    }
  })

  it("applies the correct line height classes", () => {
    for (const leading of TEXT_LEADINGS) {
      render(<Text leading={leading}>Leading {leading}</Text>)
      const element = screen.getByText(`Leading ${leading}`)
      expect(element.className).toBe(
        `text-base font-normal text-foreground leading-${leading} tracking-normal font-display`
      )
    }
  })

  it("applies the correct font family classes", () => {
    for (const family of FONT_FAMILIES) {
      render(<Text family={family}>Family {family}</Text>)
      const element = screen.getByText(`Family ${family}`)
      expect(element.className).toBe(
        `text-base font-normal text-foreground tracking-normal font-${family}`
      )
    }
  })

  it("applies truncate class when truncate is true", () => {
    render(<Text truncate>Truncated text</Text>)
    const element = screen.getByText("Truncated text")
    expect(element.className).toBe(
      "text-base font-normal text-foreground tracking-normal font-display truncate"
    )
  })

  it("does not apply truncate class when truncate is false", () => {
    render(<Text truncate={false}>Non-truncated text</Text>)
    const element = screen.getByText("Non-truncated text")
    expect(element).not.toHaveClass("truncate")
  })

  it("applies tabular-nums class when numeric is true", () => {
    render(<Text numeric>123456</Text>)
    const element = screen.getByText("123456")
    expect(element.className).toBe(
      "text-base font-normal text-foreground tracking-normal font-display tabular-nums"
    )
  })

  it("does not apply tabular-nums class when numeric is false", () => {
    render(<Text numeric={false}>123456</Text>)
    const element = screen.getByText("123456")
    expect(element).not.toHaveClass("tabular-nums")
  })

  it("passes additional props to the element", () => {
    render(<Text data-testid="text-component">Test text</Text>)
    expect(screen.getByTestId("text-component")).toBeInTheDocument()
  })

  it("combines custom className with generated classes", () => {
    render(<Text className="custom-class">With custom class</Text>)
    const element = screen.getByText("With custom class")
    expect(element.className).toBe(
      "text-base font-normal text-foreground tracking-normal font-display custom-class"
    )
  })

  it("forwards ref correctly", () => {
    const ref = { current: null }
    render(<Text ref={ref}>Ref test</Text>)

    expect(ref.current).not.toBeNull()
    expect(ref.current).toBe(screen.getByText("Ref test"))
  })
})

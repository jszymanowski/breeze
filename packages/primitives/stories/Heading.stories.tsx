import type { Meta, StoryObj } from "@storybook/react";
import { Heading, Flex, Box, Text } from "@/main";

const meta: Meta<typeof Heading> = {
  title: "Primitives/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6"],
    },
    family: {
      control: "select",
      options: ["display", "serif", "sans", "mono"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
    },
    weight: {
      control: "select",
      options: ["normal", "medium", "semibold", "bold", "extrabold"],
    },
    variant: {
      control: "select",
      options: ["default", "muted", "accent", "highlight", "destructive"],
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
    },
    tracking: {
      control: "select",
      options: ["tighter", "tight", "normal", "wide", "wider", "widest"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

// Base example
export const Default: Story = {
  args: {
    level: "2",
    children: "This is a Heading Component",
    className: "max-w-md",
  },
};

// Heading levels
export const HeadingLevels: Story = {
  render: () => (
    <Flex direction="col" gap="4" className="max-w-2xl">
      <Heading level="1">Heading Level 1 (h1)</Heading>
      <Heading level="2">Heading Level 2 (h2)</Heading>
      <Heading level="3">Heading Level 3 (h3)</Heading>
      <Heading level="4">Heading Level 4 (h4)</Heading>
      <Heading level="5">Heading Level 5 (h5)</Heading>
      <Heading level="6">Heading Level 6 (h6)</Heading>
    </Flex>
  ),
};
// Family variations
export const Families: Story = {
  render: () => (
    <Flex direction="col" gap="4" className="max-w-2xl">
      <Heading size="xs">
        Default (display): Georgia, Cambria, "Times New Roman", Times, serif
      </Heading>
      <Heading family="display">
        Display: Georgia, Cambria, "Times New Roman", Times, serif
      </Heading>
      <Heading family="sans">
        Sans: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto
        Color Emoji"
      </Heading>
      <Heading family="serif">
        Serif: Georgia, Cambria, "Times New Roman", Times, serif
      </Heading>
      <Heading family="mono">
        Mono: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
        "Courier New", monospace
      </Heading>
    </Flex>
  ),
};

// Size variations
export const Sizes: Story = {
  render: () => (
    <Flex direction="col" gap="4" className="max-w-2xl">
      <Heading level="2" size="xs">
        Size: Extra Small (xs)
      </Heading>
      <Heading level="2" size="sm">
        Size: Small (sm)
      </Heading>
      <Heading level="2" size="base">
        Size: Base (base)
      </Heading>
      <Heading level="2" size="lg">
        Size: Large (lg)
      </Heading>
      <Heading level="2" size="xl">
        Size: Extra Large (xl)
      </Heading>
      <Heading level="2" size="2xl">
        Size: 2XL (2xl)
      </Heading>
      <Heading level="2" size="3xl">
        Size: 3XL (3xl)
      </Heading>
      <Heading level="2" size="4xl">
        Size: 4XL (4xl)
      </Heading>
      <Heading level="2" size="5xl">
        Size: 5XL (5xl)
      </Heading>
    </Flex>
  ),
};

// Weight variations
export const Weights: Story = {
  render: () => (
    <Flex direction="col" gap="4" className="max-w-2xl">
      <Heading level="2" weight="normal">
        Weight: Normal
      </Heading>
      <Heading level="2" weight="medium">
        Weight: Medium
      </Heading>
      <Heading level="2" weight="semibold">
        Weight: Semibold
      </Heading>
      <Heading level="2" weight="bold">
        Weight: Bold (default)
      </Heading>
      <Heading level="2" weight="extrabold">
        Weight: Extra Bold
      </Heading>
    </Flex>
  ),
};

// Variant (color) variations
export const Variants: Story = {
  render: () => (
    <Flex direction="col" gap="4" className="max-w-2xl">
      <Heading level="2" variant="default">
        Variant: Default
      </Heading>
      <Heading level="2" variant="muted">
        Variant: Muted
      </Heading>
      <Heading level="2" variant="accent">
        Variant: Accent
      </Heading>
      <Heading level="2" variant="highlight">
        Variant: Highlight
      </Heading>
      <Heading level="2" variant="destructive">
        Variant: Destructive
      </Heading>
    </Flex>
  ),
};

// Alignment variations
export const Alignments: Story = {
  render: () => (
    <Flex direction="col" gap="6" className="max-w-2xl">
      <Box className="rounded-md border p-4">
        <Heading level="3" align="left">
          Left Aligned Heading (default)
        </Heading>
        <Text size="sm" variant="muted" className="mt-2">
          This heading is aligned to the left, which is the default alignment.
        </Text>
      </Box>

      <Box className="rounded-md border p-4">
        <Heading level="3" align="center">
          Center Aligned Heading
        </Heading>
        <Text size="sm" variant="muted" align="center" className="mt-2">
          This heading is aligned to the center of its container.
        </Text>
      </Box>

      <Box className="rounded-md border p-4">
        <Heading level="3" align="right">
          Right Aligned Heading
        </Heading>
        <Text size="sm" variant="muted" align="right" className="mt-2">
          This heading is aligned to the right side of its container.
        </Text>
      </Box>
    </Flex>
  ),
};

// Letter spacing variations
export const LetterSpacing: Story = {
  render: () => (
    <Flex direction="col" gap="4" className="max-w-2xl">
      <Heading level="3" tracking="tighter">
        Letter Spacing: Tighter
      </Heading>
      <Heading level="3" tracking="tight">
        Letter Spacing: Tight
      </Heading>
      <Heading level="3" tracking="normal">
        Letter Spacing: Normal (default)
      </Heading>
      <Heading level="3" tracking="wide">
        Letter Spacing: Wide
      </Heading>
      <Heading level="3" tracking="wider">
        Letter Spacing: Wider
      </Heading>
      <Heading level="3" tracking="widest">
        Letter Spacing: Widest
      </Heading>
    </Flex>
  ),
};

// Combined variations in real-world examples
export const RealWorldExamples: Story = {
  render: () => (
    <Flex direction="col" gap="12" className="max-w-3xl">
      <Box className="space-y-6">
        <Heading level="1" size="5xl" weight="extrabold" tracking="tight">
          Build your next project with our primitives
        </Heading>
        <Text size="lg" variant="muted" leading="relaxed">
          A collection of essential UI components designed for modern web
          applications, built with Tailwind CSS and following shadcn/ui
          patterns.
        </Text>
      </Box>

      <Box className="bg-card space-y-4 rounded-lg p-6 shadow-md">
        <Heading level="2" variant="accent" size="xl">
          Product Features
        </Heading>

        <Flex direction="col" gap="2">
          <Flex direction="row" gap="2" align="center">
            <Box className="bg-primary/10 text-primary flex h-6 w-6 items-center justify-center rounded-full">
              ✓
            </Box>
            <Text>Fully accessible components</Text>
          </Flex>

          <Flex direction="row" gap="2" align="center">
            <Box className="bg-primary/10 text-primary flex h-6 w-6 items-center justify-center rounded-full">
              ✓
            </Box>
            <Text>Built with Tailwind CSS</Text>
          </Flex>

          <Flex direction="row" gap="2" align="center">
            <Box className="bg-primary/10 text-primary flex h-6 w-6 items-center justify-center rounded-full">
              ✓
            </Box>
            <Text>Follows shadcn/ui patterns</Text>
          </Flex>
        </Flex>
      </Box>

      <Box className="bg-muted rounded-lg p-8">
        <Heading
          level="3"
          align="center"
          size="2xl"
          tracking="tight"
          className="mb-6"
        >
          Pricing Plans
        </Heading>

        <Flex direction="row" gap="6" wrap="wrap">
          <Box className="bg-card min-w-64 flex-1 rounded-lg p-6 shadow-sm">
            <Heading level="4" size="lg">
              Basic
            </Heading>
            <Heading level="3" size="3xl" className="mt-2 mb-4">
              $9/mo
            </Heading>
            <Text variant="muted">Perfect for small projects</Text>
          </Box>

          <Box className="bg-primary text-primary-foreground min-w-64 flex-1 rounded-lg p-6 shadow-md">
            <Heading level="4" size="lg">
              Pro
            </Heading>
            <Heading level="3" size="3xl" className="mt-2 mb-4">
              $29/mo
            </Heading>
            <Text>For growing businesses</Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  ),
};

// Typography Hierarchy Example
export const TypographyHierarchy: Story = {
  render: () => (
    <Box className="max-w-3xl space-y-12">
      <Box className="space-y-2">
        <Heading level="1" size="5xl" weight="extrabold" tracking="tight">
          The Complete Guide
        </Heading>
        <Heading level="2" size="xl" variant="muted" weight="normal">
          Everything you need to know about our product
        </Heading>
      </Box>

      <Box className="space-y-6">
        <Heading level="2" size="3xl" tracking="tight">
          Getting Started
        </Heading>

        <Text leading="relaxed">
          Welcome to our comprehensive guide. This document will walk you
          through all the features and capabilities of our platform, helping you
          get the most out of your experience.
        </Text>

        <Box className="space-y-4">
          <Heading level="3" size="xl">
            Installation
          </Heading>

          <Text>
            Installing our product is straightforward. Follow these simple steps
            to get up and running in no time.
          </Text>

          <Box className="ml-4 space-y-2">
            <Heading level="4" size="lg">
              Prerequisites
            </Heading>
            <Text>
              Before you begin, ensure you have the following tools installed on
              your system.
            </Text>

            <Heading level="5" size="base">
              System Requirements
            </Heading>
            <Text>
              - Operating System: Windows 10+, macOS 10.15+, or Linux - Memory:
              4GB RAM minimum, 8GB recommended - Storage: 1GB of available space
            </Text>

            <Heading level="6" size="sm" weight="medium">
              Optional Dependencies
            </Heading>
            <Text>Additional tools that may enhance your experience.</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  ),
};

// Landing page headline examples
export const LandingPageHeadlines: Story = {
  render: () => (
    <Flex direction="col" gap="16" className="max-w-3xl">
      <Box className="space-y-6 text-center">
        <Heading level="1" size="5xl" weight="extrabold" tracking="tight">
          Transform your workflow with AI
        </Heading>
        <Text
          size="xl"
          variant="muted"
          leading="relaxed"
          align="center"
          className="mx-auto max-w-2xl"
        >
          Our platform helps teams streamline processes and boost productivity
          with intelligent automation.
        </Text>
      </Box>

      <Box className="space-y-6">
        <Heading
          level="2"
          size="4xl"
          weight="bold"
          tracking="tight"
          align="center"
        >
          Designed for the modern workforce
        </Heading>
        <Flex direction="row" gap="6" wrap="wrap" justify="center">
          <Box className="max-w-80 min-w-64 flex-1 space-y-2 text-center">
            <Heading level="3" size="xl">
              Intuitive Interface
            </Heading>
            <Text variant="muted">
              User-friendly design that requires minimal training
            </Text>
          </Box>
          <Box className="max-w-80 min-w-64 flex-1 space-y-2 text-center">
            <Heading level="3" size="xl">
              Powerful Integrations
            </Heading>
            <Text variant="muted">
              Connects seamlessly with your existing tools
            </Text>
          </Box>
          <Box className="max-w-80 min-w-64 flex-1 space-y-2 text-center">
            <Heading level="3" size="xl">
              Advanced Analytics
            </Heading>
            <Text variant="muted">
              Gain valuable insights from comprehensive reporting
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box className="bg-muted space-y-6 rounded-lg p-8">
        <Heading level="2" size="3xl" weight="bold" align="center">
          Join thousands of satisfied customers
        </Heading>
        <Text size="lg" align="center" className="mx-auto max-w-2xl">
          "This platform has revolutionized how our team works. We've seen a 40%
          increase in productivity since implementation."
        </Text>
        <Text weight="medium" align="center">
          — Sarah Johnson, CTO at TechCorp
        </Text>
      </Box>
    </Flex>
  ),
};

// Blog article example
export const BlogArticle: Story = {
  render: () => (
    <Box className="max-w-2xl space-y-8">
      <Box className="space-y-2">
        <Heading level="1" size="4xl" weight="bold" tracking="tight">
          The Future of Web Development
        </Heading>
        <Flex direction="row" gap="2" align="center">
          <Text size="sm" variant="muted">
            Published on March 1, 2025
          </Text>
          <Text size="sm" variant="muted">
            •
          </Text>
          <Text size="sm" variant="muted">
            15 min read
          </Text>
        </Flex>
      </Box>

      <Text size="lg" leading="relaxed">
        The web development landscape continues to evolve at a rapid pace. New
        frameworks, tools, and methodologies emerge regularly, reshaping how
        developers approach building for the web.
      </Text>

      <Box className="space-y-4">
        <Heading level="2" size="2xl" tracking="tight">
          The Rise of Component-Based Architecture
        </Heading>
        <Text leading="relaxed">
          Component-based architecture has transformed how developers structure
          applications. By breaking interfaces down into reusable, independent
          pieces, teams can work more efficiently and maintain consistency
          across large projects.
        </Text>

        <Box className="mt-4 space-y-2">
          <Heading level="3" size="xl">
            Benefits of Primitive Components
          </Heading>
          <Text leading="relaxed">
            Primitive components form the foundation of scalable design systems.
            These low-level building blocks provide flexibility while ensuring
            consistency throughout an application.
          </Text>
        </Box>
      </Box>

      <Box className="space-y-4">
        <Heading level="2" size="2xl" tracking="tight">
          Looking Ahead
        </Heading>
        <Text leading="relaxed">
          As we look to the future, several trends are shaping the next
          generation of web development. From AI-assisted coding to enhanced
          accessibility standards, the industry continues to evolve in exciting
          ways.
        </Text>
      </Box>
    </Box>
  ),
};

import { Fragment } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Heading, Flex, Grid, Box, Text } from "@/main";
import {
  HEADING_LEVELS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  FONT_VARIANTS,
  TEXT_ALIGN,
  TEXT_TRACKING,
} from "./options";
import { HeadingSize } from "@/types";

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
      options: HEADING_LEVELS,
    },
    family: {
      control: "select",
      options: FONT_FAMILIES,
    },
    size: {
      control: "select",
      options: FONT_SIZES,
    },
    weight: {
      control: "select",
      options: FONT_WEIGHTS,
    },
    variant: {
      control: "select",
      options: FONT_VARIANTS,
    },
    align: {
      control: "select",
      options: TEXT_ALIGN,
    },
    tracking: {
      control: "select",
      options: TEXT_TRACKING,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: "This is a Heading component",
  },
};

export const HeadingLevels: Story = {
  render: () => (
    <Flex direction="col" gap="4" className="max-w-2xl">
      {HEADING_LEVELS.map((level) => (
        <Heading key={level} level={level as HeadingSize}>
          Heading Level {level} (h{level})
        </Heading>
      ))}
    </Flex>
  ),
};

export const Families: Story = {
  render: () => (
    <Grid cols="6" gap="4" className="w-full max-w-4xl" gapY="6">
      {FONT_FAMILIES.map((family, f) => (
        <Fragment key={f}>
          <div className="col-start-1">
            <Text family={family} weight="medium">
              {family.charAt(0).toUpperCase() + family.slice(1)}
            </Text>
          </div>
          <div className="col-start-2 -col-end-1">
            <Heading level="4" family={family}>
              My cat's breath smells like cat food.
            </Heading>
          </div>
        </Fragment>
      ))}
    </Grid>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <Flex direction="row" gap="4" className="max-w-3xl">
        {FONT_FAMILIES.map((family, f) => (
          <Flex direction="col" gap="4" key={f}>
            <Heading family={family}>
              {family.charAt(0).toUpperCase() + family.slice(1)}
            </Heading>
            {FONT_SIZES.slice(0, 6).map((size, s) => (
              <Heading key={s} family={family} size={size}>
                {size.toUpperCase()}: My cat's breath smells like cat food.
              </Heading>
            ))}
          </Flex>
        ))}
      </Flex>
      <Text variant="muted" className="mt-8">
        Note: Options for{" "}
        <Text as="span" variant="muted" family="mono">
          {FONT_SIZES.slice(6).join(", ")}
        </Text>{" "}
        are not displayed.
      </Text>
    </>
  ),
};

export const Weights: Story = {
  render: () => (
    <>
      <Grid cols="4" gap="8" className="w-full max-w-4xl" gapY="6">
        {FONT_FAMILIES.map((family, f) => (
          <Fragment key={f}>
            <Heading family={family} align="center">
              {family.charAt(0).toUpperCase() + family.slice(1)}
            </Heading>
          </Fragment>
        ))}
        {FONT_WEIGHTS.map((weight, w) =>
          FONT_FAMILIES.map((family, f) => (
            <Fragment key={f}>
              <Heading
                level="4"
                key={w}
                family={family}
                weight={weight}
                align="center"
              >
                {weight.charAt(0).toUpperCase() + weight.slice(1)}
                <br />
                1234567890
              </Heading>
            </Fragment>
          ))
        )}
      </Grid>
      <Text variant="muted" className="mt-8">
        Note: Certain fonts may not support all weights.
      </Text>
    </>
  ),
};

export const Variants: Story = {
  render: () => (
    <Flex direction="row" gap="4" className="max-w-3xl">
      {FONT_FAMILIES.map((family, f) => (
        <Flex direction="col" gap="4" key={f}>
          <Heading family={family}>
            {family.charAt(0).toUpperCase() + family.slice(1)}
          </Heading>
          {FONT_VARIANTS.slice(0, 6).map((variant, v) => (
            <Heading level="4" key={v} family={family} variant={variant}>
              {variant.toUpperCase()}: My cat's breath smells like cat food.
            </Heading>
          ))}
        </Flex>
      ))}
    </Flex>
  ),
};
export const Alignments: Story = {
  render: () => (
    <Grid cols="12" gap="4" className="w-full max-w-4xl" gapY="6">
      {TEXT_ALIGN.map((align, a) => (
        <Fragment key={a}>
          <Box className="col-start-1">
            <Text weight="medium" align="right">
              {align.charAt(0).toUpperCase() + align.slice(1)}
            </Text>
          </Box>
          <Flex
            direction="col"
            gap="2"
            className="col-start-2 -col-end-1 rounded border-1 border-gray-300 p-1"
          >
            <Heading align={align}>Old Man Yells at Cloud</Heading>
            <Text variant="muted" align={align} size="sm">
              Now, to take the ferry cost a nickel, and in those days, nickels
              had pictures of bumblebees on 'em. Gimme five bees for a quarter,
              you'd say. Now where was I... oh yeah. The important thing was
              that I had an onion tied to my belt, which was the style at the
              time. You couldn't get white onions, because of the war. The only
              thing you could get was those big yellow ones.
            </Text>
          </Flex>
        </Fragment>
      ))}
    </Grid>
  ),
};

export const Tracking: Story = {
  render: () => (
    <>
      <Grid cols="5" gap="8" className="w-full max-w-4xl" gapY="6">
        <Box />
        {FONT_FAMILIES.map((family, f) => (
          <Fragment key={f}>
            <Text weight="medium" align="center" variant="accent">
              {family.charAt(0).toUpperCase() + family.slice(1)}
            </Text>
          </Fragment>
        ))}
        {TEXT_TRACKING.map((tracking, w) => (
          <Fragment key={w}>
            <Text
              weight="medium"
              align="right"
              className="col-start-1"
              variant="accent"
            >
              {tracking.charAt(0).toUpperCase() + tracking.slice(1)}
            </Text>
            {FONT_FAMILIES.map((family, f) => (
              <Fragment key={f}>
                <Heading
                  level="4"
                  key={w}
                  family={family}
                  tracking={tracking}
                  align="center"
                >
                  Breeze
                </Heading>
              </Fragment>
            ))}
          </Fragment>
        ))}
      </Grid>
    </>
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

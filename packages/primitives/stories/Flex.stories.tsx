import type { Meta, StoryObj } from "@storybook/react";

import { Box, Flex, Grid, Heading } from "@/main";
import {
  FLEX_DIRECTION_OPTIONS,
  FLEX_ALIGN_OPTIONS,
  FLEX_JUSTIFY_OPTIONS,
  CONTAINER_OPTIONS,
  GAP_OPTIONS,
  FLEX_WRAP_OPTIONS,
} from "@stories/options";

const meta: Meta<typeof Flex> = {
  title: "Primitives/Flex",
  component: Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: FLEX_DIRECTION_OPTIONS,
    },
    align: {
      control: "select",
      options: FLEX_ALIGN_OPTIONS,
    },
    justify: {
      control: "select",
      options: FLEX_JUSTIFY_OPTIONS,
    },
    wrap: {
      control: "select",
      options: FLEX_WRAP_OPTIONS,
    },
    gap: {
      control: "select",
      options: GAP_OPTIONS,
    },
    gapX: {
      control: "select",
      options: GAP_OPTIONS,
    },
    gapY: {
      control: "select",
      options: GAP_OPTIONS,
    },
    as: {
      control: "select",
      options: CONTAINER_OPTIONS,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

const FlexItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <Box
    className={`bg-muted flex-1 rounded-md p-4 text-center font-medium ${className} `}
  >
    {children}
  </Box>
);

export const Default: Story = {
  args: {
    direction: "row",
    gap: "4",
    className: "w-full max-w-lg",
    children: (
      <>
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
      </>
    ),
  },
};

export const Directions: Story = {
  render: () => (
    <Flex direction="col" gap="4" className="w-full max-w-lg">
      <Flex direction="row" gap="4" className="w-full">
        <FlexItem>Row 1</FlexItem>
        <FlexItem>Row 2</FlexItem>
        <FlexItem>Row 3</FlexItem>
      </Flex>

      <Flex direction="col" gap="4" className="w-full">
        <FlexItem>Column 1</FlexItem>
        <FlexItem>Column 2</FlexItem>
        <FlexItem>Column 3</FlexItem>
      </Flex>

      <Flex direction="row-reverse" gap="4" className="w-full">
        <FlexItem>Row-Reverse 1</FlexItem>
        <FlexItem>Row-Reverse 2</FlexItem>
        <FlexItem>Row-Reverse 3</FlexItem>
      </Flex>

      <Flex direction="column-reverse" gap="4" className="w-full">
        <FlexItem>Col-Reverse 1</FlexItem>
        <FlexItem>Col-Reverse 2</FlexItem>
        <FlexItem>Col-Reverse 3</FlexItem>
      </Flex>
    </Flex>
  ),
};

export const Alignments: Story = {
  render: () => (
    <>
      <Heading level="4" className="mt-4 mb-2">
        Row
      </Heading>
      <Grid cols="2" gap="4">
        {FLEX_ALIGN_OPTIONS.map((align, i) => (
          <Flex
            key={i}
            direction="row"
            align={align}
            gap="1"
            className="h-24 w-full min-w-[200px] rounded-md border p-2"
          >
            <Box as="span" className="bg-accent">
              {align}
            </Box>
            <Box as="span" className="bg-accent">
              {align}
            </Box>
          </Flex>
        ))}
      </Grid>
      <Heading level="4" className="mt-4 mb-2">
        Col
      </Heading>
      <Grid cols="2" gap="4">
        {FLEX_ALIGN_OPTIONS.map((align, i) => (
          <Flex
            key={i}
            direction="col"
            align={align}
            gap="1"
            className="h-24 w-full min-w-[200px] rounded-md border p-2"
          >
            <Box as="span" className="bg-accent">
              {align}
            </Box>
            <Box as="span" className="bg-accent">
              {align}
            </Box>
          </Flex>
        ))}
      </Grid>
    </>
  ),
};

// Justify variations
export const Justifications: Story = {
  render: () => (
    <>
      <Heading level="4" className="mb-2">
        Row
      </Heading>
      <Grid cols="2" gap="4">
        {FLEX_JUSTIFY_OPTIONS.map((justify, i) => (
          <Flex
            key={i}
            direction="row"
            justify={justify}
            gap="1"
            className="w-full min-w-[200px] rounded-md border p-2"
          >
            <Box as="span" className="bg-accent">
              {justify}
            </Box>
            <Box as="span" className="bg-accent">
              {justify}
            </Box>
          </Flex>
        ))}
      </Grid>
      <Heading level="4" className="mt-4 mb-2">
        Col
      </Heading>
      <Grid cols="2" gap="4">
        {FLEX_JUSTIFY_OPTIONS.map((justify, i) => (
          <Flex
            key={i}
            direction="col"
            justify={justify}
            gap="1"
            className="h-24 w-full min-w-[200px] rounded-md border p-2"
          >
            <Box as="span" className="bg-accent">
              {justify}
            </Box>
            <Box as="span" className="bg-accent">
              {justify}
            </Box>
          </Flex>
        ))}
      </Grid>
    </>
  ),
};

// Gap variations
export const Gaps: Story = {
  render: () => (
    <Flex direction="col" gap="8" className="w-full max-w-lg">
      <Flex direction="row" gap="2" className="w-full">
        <FlexItem>gap="2"</FlexItem>
        <FlexItem>Two</FlexItem>
        <FlexItem>Three</FlexItem>
      </Flex>

      <Flex direction="row" gap="4" className="w-full">
        <FlexItem>gap="4"</FlexItem>
        <FlexItem>Two</FlexItem>
        <FlexItem>Three</FlexItem>
      </Flex>

      <Flex direction="row" gap="8" className="w-full">
        <FlexItem>gap="8"</FlexItem>
        <FlexItem>Two</FlexItem>
        <FlexItem>Three</FlexItem>
      </Flex>

      <Flex direction="row" gap="12" className="w-full">
        <FlexItem>gap="12"</FlexItem>
        <FlexItem>Two</FlexItem>
        <FlexItem>Three</FlexItem>
      </Flex>
    </Flex>
  ),
};

// Wrap variations
export const Wrapping: Story = {
  render: () => (
    <Flex direction="col" gap="8" className="w-full max-w-lg">
      <Box className="text-muted-foreground mb-2 text-sm">
        wrap="nowrap" (default)
      </Box>
      <Flex
        direction="row"
        wrap="nowrap"
        gap="4"
        className="bg-background w-full overflow-x-auto rounded-md border p-2"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <Box key={i} className="bg-muted rounded-md p-4 whitespace-nowrap">
            Item {i + 1}
          </Box>
        ))}
      </Flex>

      <Box className="text-muted-foreground mb-2 text-sm">wrap="wrap"</Box>
      <Flex
        direction="row"
        wrap="wrap"
        gap="4"
        className="bg-background w-full rounded-md border p-2"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <Box key={i} className="bg-muted rounded-md p-4 whitespace-nowrap">
            Item {i + 1}
          </Box>
        ))}
      </Flex>
    </Flex>
  ),
};

// Real-world example
export const RealWorldExample: Story = {
  render: () => (
    <Flex
      direction="col"
      gap="6"
      className="bg-card w-full max-w-lg rounded-lg p-6 shadow-md"
    >
      <Flex direction="row" align="center" justify="between" className="w-full">
        <Box className="text-xl font-bold">User Profile</Box>
        <Box className="bg-primary/10 text-primary rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </Box>
      </Flex>

      <Box className="bg-border h-px w-full" />

      <Flex direction="row" gap="4" className="w-full">
        <Box className="bg-primary/20 flex h-16 w-16 items-center justify-center rounded-full">
          <Box className="text-primary text-2xl font-bold">JD</Box>
        </Box>

        <Flex direction="col" justify="center" gap="1">
          <Box className="font-semibold">Jane Doe</Box>
          <Box className="text-muted-foreground text-sm">Product Designer</Box>
        </Flex>
      </Flex>

      <Flex direction="row" gap="4" wrap="wrap" className="w-full">
        <Flex direction="col" gap="1" className="min-w-[120px] flex-1">
          <Box className="text-muted-foreground text-sm">Email</Box>
          <Box className="font-medium">jane@example.com</Box>
        </Flex>

        <Flex direction="col" gap="1" className="min-w-[120px] flex-1">
          <Box className="text-muted-foreground text-sm">Phone</Box>
          <Box className="font-medium">+1 (555) 123-4567</Box>
        </Flex>
      </Flex>

      <Flex direction="row" gap="4" justify="end" className="w-full">
        <button className="bg-muted text-muted-foreground rounded-md px-4 py-2">
          Cancel
        </button>
        <button className="bg-primary text-primary-foreground rounded-md px-4 py-2">
          Edit Profile
        </button>
      </Flex>
    </Flex>
  ),
};

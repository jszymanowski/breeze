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

const FlexItem = ({ children }: { children: React.ReactNode }) => (
  <Box as="span" className="bg-muted rounded-md p-0.5">
    {children}
  </Box>
);

export const Directions: Story = {
  render: () => (
    <Grid cols="1" gap="4">
      {FLEX_DIRECTION_OPTIONS.map((direction, i) => (
        <Flex key={i} direction={direction} gap="1" className="w-full">
          <FlexItem>{direction} 1</FlexItem>
          <FlexItem>{direction} 2</FlexItem>
          <FlexItem>{direction} 3</FlexItem>
        </Flex>
      ))}
    </Grid>
  ),
};

export const Alignments: Story = {
  render: () => (
    <>
      <Heading level="4" family="mono" className="mb-2">
        flex-row
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
            <FlexItem>{align} 1</FlexItem>
            <FlexItem>{align} 2</FlexItem>
          </Flex>
        ))}
      </Grid>
      <Heading level="4" family="mono" className="mt-4 mb-2">
        flex-col
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
            <FlexItem>{align} 1</FlexItem>
            <FlexItem>{align} 2</FlexItem>
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
      <Heading level="4" family="mono" className="mb-2">
        flex-row
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
            <FlexItem>{justify} 1</FlexItem>
            <FlexItem>{justify} 2</FlexItem>
          </Flex>
        ))}
      </Grid>
      <Heading level="4" family="mono" className="mt-4 mb-2">
        flex-col
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
            <FlexItem>{justify} 1</FlexItem>
            <FlexItem>{justify} 2</FlexItem>
          </Flex>
        ))}
      </Grid>
    </>
  ),
};

export const Gap: Story = {
  render: () => (
    <Flex direction="col" gap="2" className="w-full">
      {GAP_OPTIONS.map((gap, i) => (
        <Flex key={i} direction="row" gap={gap} className="w-full">
          <FlexItem>gap="{gap}"</FlexItem>
          <FlexItem>Two</FlexItem>
          <FlexItem>Three</FlexItem>
        </Flex>
      ))}
    </Flex>
  ),
};

export const Wrapping: Story = {
  render: () => (
    <Flex direction="col" gap="8" className="w-full max-w-lg">
      {FLEX_WRAP_OPTIONS.map((wrap, i) => (
        <Box key={i}>
          <Heading level="4" family="mono" className="mb-2">
            wrap = "{wrap}"
          </Heading>
          <Flex
            direction="row"
            wrap={wrap}
            gap="2"
            className="bg-background w-full overflow-x-auto rounded-md border p-2"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <Box
                key={i}
                className="bg-muted rounded-md p-4 whitespace-nowrap"
              >
                Item {i + 1}
              </Box>
            ))}
          </Flex>
        </Box>
      ))}
    </Flex>
  ),
};

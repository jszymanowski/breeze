import type { Meta, StoryObj } from "@storybook/react";
import { Box, Flex, Grid, Heading } from "@/main";
import { asOptionalValue, summarizeValues } from "@stories/utils";

import { BOX_SIZINGS, HEIGHTS, LAYOUT_ELEMENTS, SIZES, WIDTHS } from "@/types";
import type { Size as BoxSize } from "@/types";

const meta: Meta<typeof Box> = {
  title: "Layout/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "select",
      options: LAYOUT_ELEMENTS,
      description: "Specific HTML element to use",
      table: {
        type: { summary: summarizeValues(LAYOUT_ELEMENTS, true) },
      },
    },
    size: {
      control: "select",
      options: asOptionalValue(SIZES),
      description: "Controls the width and height of an element",
      table: {
        type: { summary: summarizeValues(SIZES, true) },
      },
    },
    width: {
      control: "select",
      options: asOptionalValue(WIDTHS),
      description: "Controls the width of an element",
      table: {
        type: { summary: summarizeValues(WIDTHS, true) },
      },
    },
    height: {
      control: "select",
      options: asOptionalValue(HEIGHTS),
      description: "Controls the height of an element",
      table: {
        type: { summary: summarizeValues(HEIGHTS, true) },
      },
    },
    sizing: {
      control: "select",
      options: asOptionalValue(BOX_SIZINGS),
      description:
        "Control how the browser should calculate an element's total size",
      table: {
        type: { summary: summarizeValues(BOX_SIZINGS, true) },
      },
    },
    className: {
      description: "Comma-separated CSS class names",
      table: {
        type: { summary: "string" },
      },
    },
    children: {
      control: { disable: true },
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    as: "div",
    className: "border-1 border-dashed border-gray-300",
    children: "This is a Box component",
  },
  decorators: [
    (Story) => (
      <Box className="h-[300px] w-[300px]">
        <Story />
      </Box>
    ),
  ],
};

export const Size: Story = {
  render: () => (
    <Grid cols="3" gap="4" className="m-4">
      {SIZES.map((size) => (
        <Box
          key={`box-size-${size}`}
          className="size-[128px] border-1 border-dashed border-gray-300 p-2"
        >
          <Box size={size} className="bg-muted border-1  border-gray-300">
            {size}
          </Box>
        </Box>
      ))}
    </Grid>
  ),
};
export const BoxSizing: Story = {
  render: () => (
    <Flex align="center" gap="4" className="m-4">
      {BOX_SIZINGS.map((sizing) => (
        <Box
          key={`box-sizing-${sizing}`}
          sizing={sizing}
          className="size-[128px] border-4 border-dashed border-gray-300 p-4"
        >
          <Flex
            align="center"
            justify="center"
            className="bg-muted w-full h-full"
          >
            {sizing}
          </Flex>
        </Box>
      ))}
    </Flex>
  ),
};

export const StyleExamples: Story = {
  render: () => (
    <Grid cols="2" gap="4" className="m-4">
      <Box className="text-foreground border-1 border-dashed border-gray-300 p-4">
        padding
      </Box>
      <Box className="text-foreground border-1 border-dashed border-gray-300 p-4">
        centered
      </Box>
      <Box className="bg-muted text-muted-foreground rounded-md p-4">
        rounded background
      </Box>
      <Box className="bg-card text-card-foreground rounded-md p-4 shadow-md">
        shadow
      </Box>
      <Box className="bg-card text-card-foreground rounded-md border-1 p-4 shadow">
        rounded border
      </Box>
      <Box className="bg-muted text-card-foreground rounded-md p-4 outline-2 outline-offset-2 outline-gray-300">
        outline, background
      </Box>
    </Grid>
  ),
};

export const BackgroundColors: Story = {
  render: () => (
    <Grid cols="2" gap="4">
      <Box className="bg-primary col-span-2 rounded p-1 text-center">
        <Heading level="3" variant="primary">
          Base
        </Heading>
      </Box>
      <Box className="text-foreground p-4 text-center">default</Box>
      <Box className="bg-muted text-muted-foreground p-4 text-center">
        muted
      </Box>
      <Box className="bg-accent text-accent-foreground p-4 text-center">
        accent
      </Box>
      <Box className="bg-primary col-span-2 rounded p-1 text-center">
        <Heading level="3" variant="primary">
          Actions
        </Heading>
      </Box>
      <Box className="bg-primary text-primary-foreground p-4 text-center">
        primary
      </Box>
      <Box className="bg-secondary text-secondary-foreground p-4 text-center">
        secondary
      </Box>
      <Box className="bg-primary col-span-2 mt-4 rounded p-1 text-center">
        <Heading level="3" variant="primary">
          Alerts
        </Heading>
      </Box>
      <Box className="bg-info text-info-foreground p-4 text-center">info</Box>
      <Box className="bg-success text-success-foreground p-4 text-center">
        success
      </Box>
      <Box className="bg-warning text-warning-foreground p-4 text-center">
        warning
      </Box>
      <Box className="bg-destructive text-destructive-foreground p-4 text-center">
        destructive
      </Box>
    </Grid>
  ),
};

export const TextForegroundColors: Story = {
  render: () => (
    <Grid cols="2" gap="4">
      <Box className="bg-primary text-primary-foreground col-span-2 rounded p-1 text-center">
        <Heading level="3" variant="primary">
          Base
        </Heading>
      </Box>
      <Box className="text-foreground p-4 text-center">default</Box>
      <Box className="text-muted-foreground p-4 text-center">muted</Box>
      <Box className="text-accent-foreground p-4 text-center">accent</Box>
      <Box className="bg-primary text-primary-foreground col-span-2 rounded p-1 text-center">
        <Heading level="3" variant="primary">
          Actions
        </Heading>
      </Box>
      <Box className="text-primary-foreground p-4 text-center">primary</Box>
      <Box className="text-secondary-foreground p-4 text-center">secondary</Box>
      <Box className="bg-primary text-primary-foreground col-span-2 mt-4 rounded p-1 text-center">
        <Heading level="3" variant="primary">
          Alerts
        </Heading>
      </Box>
      <Box className="text-info-foreground p-4 text-center">info</Box>
      <Box className="text-success-foreground p-4 text-center">success</Box>
      <Box className="text-warning-foreground p-4 text-center">warning</Box>
      <Box className="text-destructive-foreground p-4 text-center">
        destructive
      </Box>
    </Grid>
  ),
};

export const AlternateElements: Story = {
  render: () => (
    <Grid cols="2" gap="4">
      {LAYOUT_ELEMENTS.map((as, i) => (
        <Box
          key={i}
          as={as}
          className="text-foreground rounded-md border-1 border-gray-300 p-4 text-center"
        >
          {"<"}
          {as}
          {">"}
        </Box>
      ))}
    </Grid>
  ),
};

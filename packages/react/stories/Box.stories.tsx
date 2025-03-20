import type { Meta, StoryObj } from "@storybook/react";
import { Box, Flex, Grid, Heading, Text } from "@/main";
import { asOptionalValue, summarizeValues } from "@stories/utils";
import {
  sampleLongWord,
  sampleLongText,
  sampleSentences,
} from "@stories/support/sampleText";

import {
  BOX_SIZINGS,
  HEIGHTS,
  LAYOUT_ELEMENTS,
  OVERFLOWS,
  POSITIONS,
  ROUNDED_SIZES,
  SIZES,
  WIDTHS,
  DISPLAYS,
  LAYOUT_VARIANTS,
} from "@/types";
import type {
  Width as WidthType,
  Height as HeightType,
  Display as DisplayType,
} from "@/types";

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
    variant: {
      control: "select",
      options: asOptionalValue(LAYOUT_VARIANTS),
      description: "Controls background and text color, according to the theme",
      table: {
        type: { summary: summarizeValues(LAYOUT_VARIANTS, true) },
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
    display: {
      control: "select",
      options: asOptionalValue(DISPLAYS),
      description: "Control the display box type of an element",
      table: {
        type: { summary: summarizeValues(DISPLAYS, true) },
      },
    },
    position: {
      control: "select",
      options: asOptionalValue(POSITIONS),
      description: "Control how an element is positioned in the document",
      table: {
        type: { summary: summarizeValues(POSITIONS, true) },
      },
    },
    overflow: {
      control: "select",
      options: asOptionalValue(OVERFLOWS),
      description:
        "Control how an element handles content that is too large for the container (X & Y axis)",
      table: {
        type: { summary: summarizeValues(OVERFLOWS, true) },
      },
    },
    overflowX: {
      control: "select",
      options: asOptionalValue(OVERFLOWS),
      description:
        "Control how an element handles content that is too large for the container (X-axis only)",
      table: {
        type: { summary: summarizeValues(OVERFLOWS, true) },
      },
    },
    overflowY: {
      control: "select",
      options: asOptionalValue(OVERFLOWS),
      description:
        "Control how an element handles content that is too large for the container (Y-axis only)",
      table: {
        type: { summary: summarizeValues(OVERFLOWS, true) },
      },
    },
    rounded: {
      control: "select",
      options: asOptionalValue(ROUNDED_SIZES),
      description: "Controls the corner radius of the container",
      table: {
        type: { summary: summarizeValues(ROUNDED_SIZES, true) },
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
    className: "border-1 border-gray-300",
    children: "This is a Box component",
  },
  decorators: [
    (Story) => (
      <Box className="h-[400px] w-[600px] border-1 border-dashed border-gray-300 p-1">
        <Story />
      </Box>
    ),
  ],
};

const SIZE_EXAMPLES: WidthType[] = [
  "auto",
  "1",
  "6",
  "12",
  "20",
  "28",
  "px",
  "min",
  "max",
  "fit",
  "3xs",
  "2xs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "full",
];
export const Size: Story = {
  render: () => (
    <Grid cols="3" gap="4" className="m-4">
      {SIZE_EXAMPLES.map((size) => (
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

const WIDTH_EXAMPLES: WidthType[] = [
  "auto",
  "1",
  "6",
  "12",
  "24",
  "36",
  "48",
  "96",
  "px",
  "min",
  "max",
  "fit",
  "3xs",
  "2xs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "full",
];
export const Width: Story = {
  render: () => (
    <Grid cols="1" gap="2" className="m-4 w-[600px]">
      {WIDTH_EXAMPLES.map((width) => (
        <Box
          key={`box-width-${width}`}
          className="border-1 border-dashed border-gray-300 p-1"
        >
          <Box width={width} className="bg-muted border-1 border-gray-300">
            {width}
          </Box>
        </Box>
      ))}
    </Grid>
  ),
};

const HEIGHT_EXAMPLES: HeightType[] = [
  "1",
  "6",
  "12",
  "24",
  "36",
  "48",
  "auto",
  "full",
  "min",
  "max",
  "fit",
  "px",
];
export const Height: Story = {
  render: () => (
    <Grid cols="6" gap="2" className="m-4">
      {HEIGHT_EXAMPLES.map((height) => (
        <Box
          key={`box-height-${height}`}
          className="w-[48px] h-[300px] border-1 border-dashed border-gray-300 p-1"
        >
          <Box height={height} className="bg-muted border-1 border-gray-300">
            {height}
          </Box>
        </Box>
      ))}
    </Grid>
  ),
};

const DISPLAY_EXAMPLES: DisplayType[] = [
  "inline",
  "inline-block",
  "block",
  "hidden",
];

export const Display: Story = {
  render: () => (
    <Flex direction="col" gap="4" className="max-w-[600px]">
      {DISPLAY_EXAMPLES.map((display) => (
        <Box
          key={`box-display-${display}`}
          className="border-1 border-dashed border-gray-300 p-1"
        >
          <Text>
            {sampleSentences.slice(0, 2).join(".")}.{" "}
            <Box display={display} className="font-mono bg-foreground/10">
              This is display: {display}.
            </Box>{" "}
            {sampleSentences.slice(2).join(".")}
          </Text>
        </Box>
      ))}
    </Flex>
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

export const Position: Story = {
  render: () => (
    <Box>
      <Box
        position="relative"
        width="xl"
        height="full"
        className="bg-info/10 p-4 rounded"
      >
        <Text>Relative parent</Text>
        <Box position="static" className="bg-info/20 p-4 rounded ">
          <Text>Static parent</Text>
          <Box
            position="static"
            className="bg-info/20 p-4 rounded inline-block"
          >
            <Text>Static child 1</Text>
          </Box>
          <Box
            position="static"
            className="bg-info/20 p-4 rounded inline-block ml-2"
          >
            <Text>Static child 2</Text>
          </Box>
          <Box
            position="absolute"
            className="top-0 right-0 bg-info/60 p-4 rounded"
          >
            <Text>Absolute child</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  ),
};

export const Overflow: Story = {
  render: () => (
    <Grid cols="2" gap="4" className="m-4">
      {OVERFLOWS.map((overflow) => (
        <Box
          key={`box-overflow-${overflow}`}
          overflow={overflow}
          width="xs"
          className="h-[96px] border-1 border-dashed border-gray-300 p-2"
        >
          <Text size="sm">
            <span className="font-mono bg-muted">{overflow}</span>{" "}
            {sampleLongText}
          </Text>
        </Box>
      ))}
    </Grid>
  ),
};

export const OverflowX: Story = {
  render: () => (
    <Grid cols="2" gap="4" className="m-4">
      {OVERFLOWS.map((overflow) => (
        <Box
          key={`box-overflow-x-${overflow}`}
          overflowX={overflow}
          overflowY="clip"
          width="xs"
          className="h-[56px] border-1 border-dashed border-gray-300 p-2"
        >
          <Text size="sm" className="whitespace-nowrap">
            <span className="font-mono bg-muted">{overflow}</span>{" "}
            {sampleLongWord}
          </Text>
        </Box>
      ))}
    </Grid>
  ),
};

export const OverflowY: Story = {
  render: () => (
    <Grid cols="2" gap="4" className="m-4">
      {OVERFLOWS.map((overflow) => (
        <Box
          key={`box-overflow-y-${overflow}`}
          overflowY={overflow}
          width="xs"
          className="h-[96px] border-1 border-dashed border-gray-300 p-2"
        >
          <Text size="sm">
            <span className="font-mono bg-muted">{overflow}</span>{" "}
            {sampleLongText}
          </Text>
        </Box>
      ))}
    </Grid>
  ),
};

export const RoundedCorners: Story = {
  render: () => (
    <Grid cols="3" gap="4" className="m-4">
      {ROUNDED_SIZES.map((roundedSize) => (
        <Box
          key={`box-rounded-${roundedSize}`}
          rounded={roundedSize}
          size="24"
          className="bg-info p-2"
        >
          <Flex align="center" justify="center" className="w-full h-full">
            <Text
              family="mono"
              align="center"
              className="bg-background/20 px-2"
            >
              {roundedSize.toString()}
            </Text>
          </Flex>
        </Box>
      ))}
    </Grid>
  ),
};

export const Variants: Story = {
  render: () => (
    <Grid cols="3" gap="4" className="m-4">
      {LAYOUT_VARIANTS.map((variant) => (
        <Box
          key={`box-variant-${variant}`}
          variant={variant}
          size="36"
          className="p-2"
        >
          <Flex align="center" justify="center" className="w-full h-full">
            <Text
              family="mono"
              align="center"
              className="bg-background/10 px-2 text-inherit"
            >
              {variant}
            </Text>
          </Flex>
        </Box>
      ))}
    </Grid>
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

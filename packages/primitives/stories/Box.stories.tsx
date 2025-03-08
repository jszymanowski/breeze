import type { Meta, StoryObj } from "@storybook/react";
import { Box, Grid, Heading } from "@/main";

import { LAYOUT_ELEMENTS } from "@/types";

const meta: Meta<typeof Box> = {
  title: "Primitives/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    as: {
      control: "select",
      options: LAYOUT_ELEMENTS,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: "This is a Box component",
  },
};

export const StyleExamples: Story = {
  render: () => (
    <Grid cols="2" gap="4" className="m-4">
      <Box className="border-1 border-dashed border-gray-200 p-4">padding</Box>
      <Box className="border-1 border-dashed border-gray-200 p-4">centered</Box>
      <Box className="bg-muted rounded-md p-4">rounded background</Box>
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
      <Box className="bg-primary text-primary-foreground col-span-2 rounded p-1 text-center">
        <Heading level="3">Base</Heading>
      </Box>
      <Box className="p-4 text-center">default</Box>
      <Box className="bg-muted text-muted-foreground p-4 text-center">
        muted
      </Box>
      <Box className="bg-accent text-accent-foreground p-4 text-center">
        accent
      </Box>
      <Box className="bg-primary text-primary-foreground col-span-2 rounded p-1 text-center">
        <Heading level="3">Actions</Heading>
      </Box>
      <Box className="bg-primary text-primary-foreground p-4 text-center">
        primary
      </Box>
      <Box className="bg-secondary text-secondary-foreground p-4 text-center">
        secondary
      </Box>
      <Box className="bg-primary text-primary-foreground col-span-2 mt-4 rounded p-1 text-center">
        <Heading level="3">Alerts</Heading>
      </Box>
      <Box className="bg-info text-primary-foreground p-4 text-center">
        info
      </Box>
      <Box className="bg-success text-primary-foreground p-4 text-center">
        success
      </Box>
      <Box className="bg-warning text-primary-foreground p-4 text-center">
        warning
      </Box>
      <Box className="bg-destructive text-primary-foreground p-4 text-center">
        destructive
      </Box>
    </Grid>
  ),
};

export const TextForegroundColors: Story = {
  render: () => (
    <Grid cols="2" gap="4">
      <Box className="bg-primary text-primary-foreground col-span-2 rounded p-1 text-center">
        <Heading level="3">Base</Heading>
      </Box>
      <Box className="text-foreground p-4 text-center">default</Box>
      <Box className="text-muted-foreground p-4 text-center">muted</Box>
      <Box className="text-accent-foreground p-4 text-center">accent</Box>
      <Box className="bg-primary text-primary-foreground col-span-2 rounded p-1 text-center">
        <Heading level="3">Actions</Heading>
      </Box>
      <Box className="text-primary-foreground p-4 text-center">primary</Box>
      <Box className="text-secondary-foreground p-4 text-center">secondary</Box>
      <Box className="bg-primary text-primary-foreground col-span-2 mt-4 rounded p-1 text-center">
        <Heading level="3">Alerts</Heading>
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
          className="rounded-md border-1 border-gray-200 p-4"
        >
          {"<"}
          {as}
          {">"}
        </Box>
      ))}
    </Grid>
  ),
};

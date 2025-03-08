import type { Meta, StoryObj } from "@storybook/react";
import { Box, Grid } from "@/main";

import { CONTAINER_ELEMENTS } from "@/types";

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
      options: CONTAINER_ELEMENTS,
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
    <Grid cols="2" gap="4">
      <Box className="p-4">with padding</Box>
      <Box className="bg-purple-200 p-4">with background</Box>
      <Box className="bg-gray-800 p-4 text-gray-100">with dark background</Box>
      <Box className="rounded-md bg-gray-200 p-4">with rounded edges</Box>
      <Box className="bg-card text-card-foreground rounded-md p-4 shadow-md">
        with shadow
      </Box>
      <Box className="bg-card text-card-foreground rounded-md border-1 p-4 shadow">
        with rounded border
      </Box>
    </Grid>
  ),
};

export const BackgroundColors: Story = {
  render: () => (
    <Grid cols="2" gap="4">
      <Box className="p-4">default</Box>
      <Box className="bg-primary text-primary-foreground p-4">primary</Box>
      <Box className="bg-secondary text-secondary-foreground p-4">
        secondary
      </Box>
      <Box className="bg-muted text-muted-foreground p-4">muted</Box>
      <Box className="bg-accent text-accent-foreground p-4">accent</Box>
      <Box className="bg-highlight text-highlight-foreground p-4">
        highlight
      </Box>
      <Box className="bg-warning text-warning-foreground p-4">warning</Box>
      <Box className="bg-destructive text-destructive-foreground p-4">
        destructive
      </Box>
    </Grid>
  ),
};

export const TextColors: Story = {
  render: () => (
    <Grid cols="2" gap="4">
      <Box className="p-4">default</Box>
      <Box className="text-primary p-4">primary</Box>
      <Box className="text-secondary p-4">secondary</Box>
      <Box className="text-muted p-4">muted</Box>
      <Box className="text-accent p-4">accent</Box>
      <Box className="text-highlight p-4">highlight</Box>
      <Box className="text-warning p-4">warning</Box>
      <Box className="text-destructive p-4">destructive</Box>
    </Grid>
  ),
};

export const AlternateElements: Story = {
  render: () => (
    <Grid cols="2" gap="4">
      {CONTAINER_ELEMENTS.map((as, i) => (
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

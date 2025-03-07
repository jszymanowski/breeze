import type { Meta, StoryObj } from "@storybook/react";
import { Box, Heading, Text, Grid } from "@/main";

import { CONTAINER_OPTIONS } from "@stories/options";

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
      options: CONTAINER_OPTIONS,
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
      {CONTAINER_OPTIONS.map((as, i) => (
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

export const Composition: Story = {
  render: () => (
    <Box className="bg-card text-card-foreground rounded-lg p-6 shadow-md">
      <Box className="mb-4 border-b pb-4">
        <Heading level="2">Card Title</Heading>
        <Text className="text-muted-foreground">
          Card subtitle with additional information
        </Text>
      </Box>
      <Box className="space-y-2">
        <Text>
          This shows how{" "}
          <Box as="span" className="text-highlight">
            Box components
          </Box>{" "}
          can be nested to create more complex layouts.
        </Text>
        <Text>Each Box can have its own styling and purpose.</Text>
      </Box>
      <Box className="mt-4 flex justify-end border-t pt-4">
        <button className="bg-primary text-primary-foreground rounded-md px-4 py-2">
          Action
        </button>
      </Box>
    </Box>
  ),
};

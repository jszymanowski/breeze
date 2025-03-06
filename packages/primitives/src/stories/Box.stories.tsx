import type { Meta, StoryObj } from "@storybook/react";
import { Box, Heading, Text } from "@/components";

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
      options: ["div", "section", "article", "main", "aside"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

// Base example
export const Default: Story = {
  args: {
    className: "p-4 bg-muted rounded-md",
    children: "This is a Box component",
  },
};

// Styling variations
export const WithDifferentStyles: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Box className="bg-primary text-primary-foreground rounded-md p-4">
        Primary Background
      </Box>
      <Box className="bg-secondary text-secondary-foreground rounded-md p-4">
        Secondary Background
      </Box>
      <Box className="bg-accent text-accent-foreground rounded-md p-4">
        Accent Background
      </Box>
      <Box className="bg-destructive text-destructive-foreground rounded-md p-4">
        Destructive Background
      </Box>
      <Box className="bg-muted text-muted-foreground rounded-md p-4">
        Muted Background
      </Box>
      <Box className="bg-card text-card-foreground rounded-md p-4 shadow">
        Card Background with Shadow
      </Box>
    </div>
  ),
};

// Different HTML elements
export const PolymorphicBox: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Box className="bg-muted rounded-md p-4">Default (div)</Box>
      <Box as="section" className="bg-muted rounded-md p-4">
        As section
      </Box>
      <Box as="article" className="bg-muted rounded-md p-4">
        As article
      </Box>
      <Box
        as="button"
        className="bg-primary text-primary-foreground rounded-md p-4"
      >
        As button
      </Box>
    </div>
  ),
};

// Box with nested components
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
          This shows how Box components can be nested to create more complex
          layouts.
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

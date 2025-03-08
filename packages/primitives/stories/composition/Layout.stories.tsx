import type { Meta, StoryObj } from "@storybook/react";

import { Box, Heading, Text, Flex } from "@/main";

const meta: Meta = {
  title: "Composition/Layout",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

export const Card: Story = {
  render: () => (
    <Flex direction="col" align="center" justify="center" className="h-screen">
      <Box className="bg-card rounded-lg p-6 shadow-md">
        <Box className="mb-4 border-b pb-4">
          <Heading level="2">Card Title</Heading>
          <Text variant="muted">Card subtitle with additional information</Text>
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
    </Flex>
  ),
};

export const Contact: Story = {
  render: () => (
    <Flex direction="col" align="center" justify="center" className="h-screen">
      <Flex
        direction="col"
        gap="6"
        className="bg-card w-full max-w-lg rounded-lg p-6 shadow-md"
      >
        <Flex
          direction="row"
          align="center"
          justify="between"
          className="w-full"
        >
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
            <Box className="text-muted-foreground text-sm">
              Product Designer
            </Box>
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
    </Flex>
  ),
};

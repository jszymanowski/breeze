import type { Meta, StoryObj } from "@storybook/react";

import { Box, Grid, Heading, Text, Flex } from "@/main";

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
        <Box className="border-muted mb-4 border-b pb-4">
          <Heading level="2">Card Title</Heading>
          <Text variant="muted">Card subtitle with additional information</Text>
        </Box>
        <Box className="space-y-2">
          <Text>
            This shows how{" "}
            <Box as="span" className="text-info">
              Box components
            </Box>{" "}
            can be nested to create more complex layouts.
          </Text>
          <Text>Each Box can have its own styling and purpose.</Text>
        </Box>
        <Box className="border-muted mt-4 flex justify-end border-t pt-4">
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
          <Heading level="4">User Profile</Heading>
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
            <Heading family="sans">JD</Heading>
          </Box>

          <Flex direction="col" justify="center" gap="1">
            <Text weight="semibold">Jane Doe</Text>
            <Text variant="muted" size="sm">
              Product Designer
            </Text>
          </Flex>
        </Flex>

        <Flex direction="row" gap="4" wrap="wrap" className="w-full">
          <Flex direction="col" gap="1" className="min-w-[120px] flex-1">
            <Text variant="muted" size="sm">
              Email
            </Text>
            <Text weight="medium">jane@example.com</Text>
          </Flex>

          <Flex direction="col" gap="1" className="min-w-[120px] flex-1">
            <Text variant="muted" size="sm">
              Phone
            </Text>
            <Text weight="medium">+1 (555) 123-4567</Text>
          </Flex>
        </Flex>

        <Flex direction="row" gap="4" justify="end" className="w-full">
          <button className="bg-secondary text-secondary-foreground rounded-md px-4 py-2">
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

export const DashboardLayout: Story = {
  args: {
    gap: "4",
    className: "w-full max-w-5xl h-[600px] grid-cols-4 grid-rows-4",
  },
  render: (args) => (
    <Grid {...args}>
      <div className="col-span-4 flex items-center justify-between rounded-lg bg-slate-800 p-4 text-white">
        <div className="text-xl font-bold">Dashboard</div>
        <div className="flex space-x-2">
          <div className="h-8 w-8 rounded-full bg-slate-600"></div>
          <div className="h-8 w-8 rounded-full bg-slate-600"></div>
        </div>
      </div>

      <div className="col-span-3 row-span-2 rounded-lg bg-slate-100 p-4">
        <div className="mb-2 font-semibold">Main Content Area</div>
        <div className="h-full rounded-md bg-white p-2 shadow-sm"></div>
      </div>

      <div className="row-span-2 rounded-lg bg-slate-200 p-4">
        <div className="mb-2 font-semibold">Sidebar</div>
        <div className="flex flex-col space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded bg-white p-2 shadow-sm">
              Menu Item {i + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-blue-100 p-4">Widget 1</div>
      <div className="rounded-lg bg-green-100 p-4">Widget 2</div>
      <div className="rounded-lg bg-yellow-100 p-4">Widget 3</div>
      <div className="rounded-lg bg-purple-100 p-4">Widget 4</div>
    </Grid>
  ),
};

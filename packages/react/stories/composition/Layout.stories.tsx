import type { Meta, StoryObj } from "@storybook/react"

import { Box, Grid, Heading, Text, Flex } from "@/main"

const meta: Meta = {
  title: "Composition/Layout",
  parameters: {
    layout: "fullscreen",
  },
}

export default meta
type Story = StoryObj

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
          <button
            className="bg-primary text-primary-foreground rounded-md px-4 py-2"
            type="button"
          >
            Action
          </button>
        </Box>
      </Box>
    </Flex>
  ),
}

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
              <title>Some circle</title>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
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
          <button
            className="bg-secondary text-secondary-foreground rounded-md px-4 py-2"
            type="button"
          >
            Cancel
          </button>
          <button
            className="bg-primary text-primary-foreground rounded-md px-4 py-2"
            type="button"
          >
            Edit Profile
          </button>
        </Flex>
      </Flex>
    </Flex>
  ),
}

export const GridLayout: Story = {
  args: {
    cols: "4",
    rows: "4",
    gap: "4",
    className: "w-full max-w-5xl mb-12",
  },
  render: (args) => (
    <Grid {...args}>
      <Flex
        align="center"
        justify="between"
        className="bg-primary col-span-4 rounded-lg p-4"
      >
        <Heading level="2" variant="primary">
          Dashboard
        </Heading>
        <Flex className="space-x-2">
          <Box className="bg-info h-8 w-8 rounded-full" />
          <Box className="bg-success h-8 w-8 rounded-full" />
          <Box className="bg-warning h-8 w-8 rounded-full" />
          <Box className="bg-destructive h-8 w-8 rounded-full" />
        </Flex>
      </Flex>

      <Box className="bg-muted col-span-3 row-span-2 rounded-lg p-4">
        <Heading level="4" weight="semibold" className="mb-2">
          Main Content Area
        </Heading>
        <Box className="bg-background rounded-md p-2 shadow-sm">
          <Text className="mb-2">
            We can't bust heads like we used to. But we have our ways. One trick
            is to tell stories that don't go anywhere. Like the time I caught
            the ferry to Shelbyville. I needed a new heel for m'shoe. So I
            decided to go to Morganville, which is what they called Shelbyville
            in those days. So I tied an onion to my belt. Which was the style at
            the time.
          </Text>
          <Text>
            Now, to take the ferry cost a nickel, and in those days, nickels had
            pictures of bumblebees on 'em. Gimme five bees for a quarter, you'd
            say. Now where was I... oh yeah. The important thing was that I had
            an onion tied to my belt, which was the style at the time. You
            couldn't get white onions, because of the war. The only thing you
            could get was those big yellow ones.
          </Text>
        </Box>
      </Box>

      <Box className="bg-muted row-span-2 rounded-lg p-4">
        <Heading level="4" weight="semibold" className="mb-2">
          Sidebar
        </Heading>
        <Flex direction="col" gapY="2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Box key={i} className="bg-background rounded p-2 shadow-sm">
              <Text>Menu Item {i + 1}</Text>
            </Box>
          ))}
        </Flex>
      </Box>

      <Box className="bg-muted rounded-lg p-4">
        <Text>Widget 1</Text>
      </Box>
      <Box className="bg-muted rounded-lg p-4">
        <Text>Widget 2</Text>
      </Box>
      <Box className="bg-muted rounded-lg p-4">
        <Text>Widget 3</Text>
      </Box>
      <Box className="bg-muted rounded-lg p-4">
        <Text>Widget 4</Text>
      </Box>
    </Grid>
  ),
}

import type { Meta, StoryObj } from "@storybook/react";
import { Box, Flex } from "@/index";

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
      options: ["row", "column", "row-reverse", "column-reverse"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "stretch", "baseline"],
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "between", "around", "evenly"],
    },
    wrap: {
      control: "select",
      options: ["nowrap", "wrap", "wrap-reverse"],
    },
    gap: {
      control: "select",
      options: ["0", "1", "2", "3", "4", "5", "6", "8", "10", "12", "16"],
    },
    as: {
      control: "select",
      options: ["div", "section", "article", "main", "aside"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

const FlexItem = ({ children }: { children: React.ReactNode }) => (
  <Box className="bg-muted flex-1 rounded-md p-4 text-center font-medium">
    {children}
  </Box>
);

// Base example
export const Default: Story = {
  args: {
    direction: "row",
    gap: "4",
    className: "w-full max-w-lg",
    children: (
      <>
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
      </>
    ),
  },
};

// Direction variations
export const Directions: Story = {
  render: () => (
    <Flex direction="col" gap="4" className="w-full max-w-lg">
      <Flex direction="row" gap="4" className="w-full">
        <FlexItem>Row 1</FlexItem>
        <FlexItem>Row 2</FlexItem>
        <FlexItem>Row 3</FlexItem>
      </Flex>

      <Flex direction="col" gap="4" className="w-full">
        <FlexItem>Column 1</FlexItem>
        <FlexItem>Column 2</FlexItem>
        <FlexItem>Column 3</FlexItem>
      </Flex>

      <Flex direction="row-reverse" gap="4" className="w-full">
        <FlexItem>Row-Reverse 1</FlexItem>
        <FlexItem>Row-Reverse 2</FlexItem>
        <FlexItem>Row-Reverse 3</FlexItem>
      </Flex>

      <Flex direction="column-reverse" gap="4" className="w-full">
        <FlexItem>Col-Reverse 1</FlexItem>
        <FlexItem>Col-Reverse 2</FlexItem>
        <FlexItem>Col-Reverse 3</FlexItem>
      </Flex>
    </Flex>
  ),
};

// Alignment variations
export const Alignments: Story = {
  render: () => (
    <Flex direction="col" gap="8" className="w-full max-w-lg">
      <Flex
        direction="row"
        align="start"
        gap="4"
        className="bg-background h-24 w-full rounded-md border p-2"
      >
        <FlexItem>align="start"</FlexItem>
        <FlexItem>Two</FlexItem>
        <FlexItem>Three</FlexItem>
      </Flex>

      <Flex
        direction="row"
        align="center"
        gap="4"
        className="bg-background h-24 w-full rounded-md border p-2"
      >
        <FlexItem>align="center"</FlexItem>
        <FlexItem>Two</FlexItem>
        <FlexItem>Three</FlexItem>
      </Flex>

      <Flex
        direction="row"
        align="end"
        gap="4"
        className="bg-background h-24 w-full rounded-md border p-2"
      >
        <FlexItem>align="end"</FlexItem>
        <FlexItem>Two</FlexItem>
        <FlexItem>Three</FlexItem>
      </Flex>
    </Flex>
  ),
};

// Justify variations
export const Justifications: Story = {
  render: () => (
    <Flex direction="col" gap="8" className="w-full max-w-lg">
      <Flex
        direction="row"
        justify="start"
        gap="4"
        className="bg-background w-full rounded-md border p-2"
      >
        <FlexItem>1</FlexItem>
        <FlexItem>2</FlexItem>
        <FlexItem>3</FlexItem>
      </Flex>
      <Box className="text-muted-foreground text-sm">justify="start"</Box>

      <Flex
        direction="row"
        justify="center"
        gap="4"
        className="bg-background w-full rounded-md border p-2"
      >
        <FlexItem>1</FlexItem>
        <FlexItem>2</FlexItem>
        <FlexItem>3</FlexItem>
      </Flex>
      <Box className="text-muted-foreground text-sm">justify="center"</Box>

      <Flex
        direction="row"
        justify="end"
        gap="4"
        className="bg-background w-full rounded-md border p-2"
      >
        <FlexItem>1</FlexItem>
        <FlexItem>2</FlexItem>
        <FlexItem>3</FlexItem>
      </Flex>
      <Box className="text-muted-foreground text-sm">justify="end"</Box>

      <Flex
        direction="row"
        justify="between"
        gap="4"
        className="bg-background w-full rounded-md border p-2"
      >
        <FlexItem>1</FlexItem>
        <FlexItem>2</FlexItem>
        <FlexItem>3</FlexItem>
      </Flex>
      <Box className="text-muted-foreground text-sm">justify="between"</Box>

      <Flex
        direction="row"
        justify="around"
        gap="4"
        className="bg-background w-full rounded-md border p-2"
      >
        <FlexItem>1</FlexItem>
        <FlexItem>2</FlexItem>
        <FlexItem>3</FlexItem>
      </Flex>
      <Box className="text-muted-foreground text-sm">justify="around"</Box>
    </Flex>
  ),
};

// Gap variations
export const Gaps: Story = {
  render: () => (
    <Flex direction="col" gap="8" className="w-full max-w-lg">
      <Flex direction="row" gap="2" className="w-full">
        <FlexItem>gap="2"</FlexItem>
        <FlexItem>Two</FlexItem>
        <FlexItem>Three</FlexItem>
      </Flex>

      <Flex direction="row" gap="4" className="w-full">
        <FlexItem>gap="4"</FlexItem>
        <FlexItem>Two</FlexItem>
        <FlexItem>Three</FlexItem>
      </Flex>

      <Flex direction="row" gap="8" className="w-full">
        <FlexItem>gap="8"</FlexItem>
        <FlexItem>Two</FlexItem>
        <FlexItem>Three</FlexItem>
      </Flex>

      <Flex direction="row" gap="12" className="w-full">
        <FlexItem>gap="12"</FlexItem>
        <FlexItem>Two</FlexItem>
        <FlexItem>Three</FlexItem>
      </Flex>
    </Flex>
  ),
};

// Wrap variations
export const Wrapping: Story = {
  render: () => (
    <Flex direction="col" gap="8" className="w-full max-w-lg">
      <Box className="text-muted-foreground mb-2 text-sm">
        wrap="nowrap" (default)
      </Box>
      <Flex
        direction="row"
        wrap="nowrap"
        gap="4"
        className="bg-background w-full overflow-x-auto rounded-md border p-2"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <Box key={i} className="bg-muted rounded-md p-4 whitespace-nowrap">
            Item {i + 1}
          </Box>
        ))}
      </Flex>

      <Box className="text-muted-foreground mb-2 text-sm">wrap="wrap"</Box>
      <Flex
        direction="row"
        wrap="wrap"
        gap="4"
        className="bg-background w-full rounded-md border p-2"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <Box key={i} className="bg-muted rounded-md p-4 whitespace-nowrap">
            Item {i + 1}
          </Box>
        ))}
      </Flex>
    </Flex>
  ),
};

// Real-world example
export const RealWorldExample: Story = {
  render: () => (
    <Flex
      direction="col"
      gap="6"
      className="bg-card w-full max-w-lg rounded-lg p-6 shadow-md"
    >
      <Flex direction="row" align="center" justify="between" className="w-full">
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
          <Box className="text-muted-foreground text-sm">Product Designer</Box>
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
  ),
};

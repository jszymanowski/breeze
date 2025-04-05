import type { Meta, StoryObj } from "@storybook/react";

import { Box, Text } from "@jszymanowski/breeze-react";

const meta: Meta<typeof Text> = {
  title: "Typography/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "This is Storybook",
  },
  decorators: [
    (Story) => (
      <Box className="min-w-[400px]">
        <Story />
      </Box>
    ),
  ],
};
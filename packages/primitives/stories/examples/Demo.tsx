import type { Meta, StoryObj } from "@storybook/react";

import { Demo } from "@src/Demo";

const meta: Meta = {
  title: "Examples/Demo",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {
  render: () => <Demo />,
};

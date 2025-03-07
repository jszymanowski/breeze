import type { Meta, StoryObj } from "@storybook/react";

import DemoDashboard from "@src/Demo";

const meta: Meta = {
  title: "Examples/Demo",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {
  render: () => <DemoDashboard />,
};

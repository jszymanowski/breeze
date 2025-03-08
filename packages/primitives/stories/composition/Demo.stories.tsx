import type { Meta, StoryObj } from "@storybook/react";

import { Demo as DemoDashboard } from "@src/Demo";

const meta: Meta = {
  title: "Composition/Demo",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {
  render: () => <DemoDashboard />,
};

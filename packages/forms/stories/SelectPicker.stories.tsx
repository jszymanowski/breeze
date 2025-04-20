import type { Meta, StoryObj } from "@storybook/react";

import { SelectPicker } from "@/main";

const meta: Meta<typeof SelectPicker> = {
  title: "SelectPicker",
  component: SelectPicker,
  tags: ["autodocs"],
} satisfies Meta<typeof SelectPicker>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultProps = {
  name: "mockField",
};

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};

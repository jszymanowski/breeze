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
  options: [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ],
};

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { ButtonGroup } from "@/main";

const meta: Meta<typeof ButtonGroup> = {
  title: "Buttons/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <ButtonGroup.Button>Button 1</ButtonGroup.Button>
      <ButtonGroup.Button>Button 2</ButtonGroup.Button>
      <ButtonGroup.Button>Button 3</ButtonGroup.Button>
    </ButtonGroup>
  ),
};

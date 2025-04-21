import type { Meta, StoryObj } from "@storybook/react";
import ProperDate from "@jszymanowski/proper-date.js";

import { LineChart } from "@/main";

import { createRandomTimeSeries } from "@stories/support/mockTimeSeries";
import { mockExchangeRates } from "@stories/support/mockExchangeRates";

const meta: Meta<typeof LineChart> = {
  title: "Charts/LineChart",
  component: LineChart,
  tags: ["autodocs"],
} satisfies Meta<typeof LineChart>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockData = createRandomTimeSeries();

export const Default: Story = {
  args: { data: mockData, label: "Some Rad Data" },
  decorators: [
    (Story) => (
      <div style={{ width: "600px", height: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export const SmallContainer: Story = {
  args: { data: mockData, label: "Some Rad Data" },
  decorators: [
    (Story) => (
      <div style={{ width: "300px", height: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

export const LargeContainer: Story = {
  args: { data: mockData, label: "Some Rad Data" },
  decorators: [
    (Story) => (
      <div style={{ width: "1000px", height: "600px" }}>
        <Story />
      </div>
    ),
  ],
};

export const NoLabel: Story = {
  args: { data: mockData },
  decorators: [
    (Story) => (
      <div style={{ width: "600px", height: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export const NoData: Story = {
  args: { data: [] },
  decorators: [
    (Story) => (
      <div style={{ width: "600px", height: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export const WithExchangeRates: Story = {
  args: {
    data: mockExchangeRates.map((d) => ({
      date: new ProperDate(d.date),
      value: d.value,
    })),
    label: "SGD/USD",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "600px", height: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

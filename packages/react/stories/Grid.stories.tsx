import type { Meta, StoryObj } from "@storybook/react";
import { asOptionalValue, summarizeValues } from "@stories/utils";

import { Grid } from "@/Grid";

import {
  GRID_COLS,
  GRID_ROWS,
  GRID_FLOWS,
  GAPS,
  LAYOUT_ELEMENTS,
} from "@/types";

const meta = {
  title: "Components/Layout/Grid",
  component: Grid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    cols: {
      control: "select",
      options: asOptionalValue(GRID_COLS),
      description: "Controls number of columns in the grid",
      table: {
        type: { summary: summarizeValues(GRID_COLS, true) },
      },
    },
    rows: {
      control: "select",
      options: asOptionalValue(GRID_ROWS),
      description: "Controls number of rows in the grid",
      table: {
        type: { summary: summarizeValues(GRID_ROWS, true) },
      },
    },
    flow: {
      control: "select",
      options: asOptionalValue(GRID_FLOWS),
      description: "Controls how elements in the grid are auto-placed",
      table: {
        type: { summary: summarizeValues(GRID_FLOWS, true) },
      },
    },
    gap: {
      control: "select",
      options: asOptionalValue(GAPS),
      description: "Controls size of gutters between grid items (X+Y axes)",
      table: {
        type: { summary: summarizeValues(GAPS, true) },
      },
    },
    gapX: {
      control: "select",
      options: asOptionalValue(GAPS),
      description: "Controls size of gutters between grid items (X-axis only)",
      table: {
        type: { summary: summarizeValues(GAPS, true) },
      },
    },
    gapY: {
      control: "select",
      options: asOptionalValue(GAPS),
      description: "Controls size of gutters between grid items (Y-axis only)",
      table: {
        type: { summary: summarizeValues(GAPS, true) },
      },
    },
    as: {
      control: "select",
      options: asOptionalValue(LAYOUT_ELEMENTS),
      description:
        "Specific HTML element to use as the basis for the grid container",
      table: {
        type: { summary: summarizeValues(LAYOUT_ELEMENTS, true) },
      },
    },
    className: {
      description: "Comma-separated CSS class names",
      table: {
        type: { summary: "string" },
      },
    },
    children: {
      control: { disable: true },
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const GridItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-16 w-full items-center justify-center rounded-md bg-slate-200 p-4 font-medium">
    {children}
  </div>
);

export const Default: Story = {
  args: {
    cols: "3",
    gap: "4",
    as: "div",
    className: "w-full max-w-3xl",
  },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 9 }).map((_, i) => (
        <GridItem key={i}>Item {i + 1}</GridItem>
      ))}
    </Grid>
  ),
};

export const ColumnVariants: Story = {
  args: {
    gap: "4",
    className: "w-full max-w-4xl",
  },
  render: () => (
    <div className="flex flex-col space-y-8">
      <div>
        <h3 className="mb-2 font-medium">2 Columns</h3>
        <Grid cols="2" gap="4">
          {Array.from({ length: 4 }).map((_, i) => (
            <GridItem key={i}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
      <div>
        <h3 className="mb-2 font-medium">4 Columns</h3>
        <Grid cols="4" gap="4">
          {Array.from({ length: 8 }).map((_, i) => (
            <GridItem key={i}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
      <div>
        <h3 className="mb-2 font-medium">6 Columns</h3>
        <Grid cols="6" gap="4">
          {Array.from({ length: 12 }).map((_, i) => (
            <GridItem key={i}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
    </div>
  ),
};

export const GapVariants: Story = {
  args: {
    cols: "3",
    className: "w-full max-w-3xl",
  },
  render: () => (
    <div className="flex flex-col space-y-8">
      <div>
        <h3 className="mb-2 font-medium">Small Gap (2)</h3>
        <Grid cols="3" gap="2">
          {Array.from({ length: 6 }).map((_, i) => (
            <GridItem key={i}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
      <div>
        <h3 className="mb-2 font-medium">Medium Gap (4)</h3>
        <Grid cols="3" gap="4">
          {Array.from({ length: 6 }).map((_, i) => (
            <GridItem key={i}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
      <div>
        <h3 className="mb-2 font-medium">Large Gap (8)</h3>
        <Grid cols="3" gap="8">
          {Array.from({ length: 6 }).map((_, i) => (
            <GridItem key={i}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
    </div>
  ),
};

export const DirectionalGaps: Story = {
  args: {
    cols: "3",
    className: "w-full max-w-3xl",
  },
  render: () => (
    <div className="flex flex-col space-y-8">
      <div>
        <h3 className="mb-2 font-medium">Horizontal Gap Only (gapX="6")</h3>
        <Grid cols="3" gapX="6" gapY="0">
          {Array.from({ length: 6 }).map((_, i) => (
            <GridItem key={i}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
      <div>
        <h3 className="mb-2 font-medium">Vertical Gap Only (gapY="6")</h3>
        <Grid cols="3" gapY="6" gapX="0">
          {Array.from({ length: 6 }).map((_, i) => (
            <GridItem key={i}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
      <div>
        <h3 className="mb-2 font-medium">
          Different Gaps (gapX="2", gapY="8")
        </h3>
        <Grid cols="3" gapX="2" gapY="8">
          {Array.from({ length: 6 }).map((_, i) => (
            <GridItem key={i}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
    </div>
  ),
};

export const FlowVariants: Story = {
  args: {
    className: "w-full max-w-3xl h-96",
  },
  render: () => (
    <div className="flex flex-col space-y-12">
      <div>
        <h3 className="mb-2 font-medium">Row Flow (default)</h3>
        <Grid cols="3" rows="3" gap="4" flow="row">
          {Array.from({ length: 7 }).map((_, i) => (
            <GridItem key={i}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
      <div>
        <h3 className="mb-2 font-medium">Column Flow</h3>
        <Grid cols="3" rows="3" gap="4" flow="col">
          {Array.from({ length: 7 }).map((_, i) => (
            <GridItem key={i}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
      <div>
        <h3 className="mb-2 font-medium">Dense Flow</h3>
        <Grid cols="3" rows="3" gap="4" flow="dense">
          {Array.from({ length: 7 }).map((_, i) => (
            <GridItem key={i}>Item {i + 1}</GridItem>
          ))}
        </Grid>
      </div>
    </div>
  ),
};

export const CustomElement: Story = {
  args: {
    cols: "3",
    gap: "4",
    as: "section",
    className: "w-full max-w-3xl",
  },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 6 }).map((_, i) => (
        <GridItem key={i}>Item {i + 1}</GridItem>
      ))}
    </Grid>
  ),
};

export const ResponsiveGrid: Story = {
  args: {
    gap: "4",
    className:
      "w-full max-w-4xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 8 }).map((_, i) => (
        <GridItem key={i}>Item {i + 1}</GridItem>
      ))}
    </Grid>
  ),
};

export const DashboardLayout: Story = {
  args: {
    gap: "4",
    className: "w-full max-w-5xl h-[600px] grid-cols-4 grid-rows-4",
  },
  render: (args) => (
    <Grid {...args}>
      <div className="col-span-4 flex items-center justify-between rounded-lg bg-slate-800 p-4 text-white">
        <div className="text-xl font-bold">Dashboard</div>
        <div className="flex space-x-2">
          <div className="h-8 w-8 rounded-full bg-slate-600"></div>
          <div className="h-8 w-8 rounded-full bg-slate-600"></div>
        </div>
      </div>

      <div className="col-span-3 row-span-2 rounded-lg bg-slate-100 p-4">
        <div className="mb-2 font-semibold">Main Content Area</div>
        <div className="h-full rounded-md bg-white p-2 shadow-sm"></div>
      </div>

      <div className="row-span-2 rounded-lg bg-slate-200 p-4">
        <div className="mb-2 font-semibold">Sidebar</div>
        <div className="flex flex-col space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded bg-white p-2 shadow-sm">
              Menu Item {i + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-lg bg-blue-100 p-4">Widget 1</div>
      <div className="rounded-lg bg-green-100 p-4">Widget 2</div>
      <div className="rounded-lg bg-yellow-100 p-4">Widget 3</div>
      <div className="rounded-lg bg-purple-100 p-4">Widget 4</div>
    </Grid>
  ),
};

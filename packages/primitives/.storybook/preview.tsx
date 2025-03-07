import React from "react";
import type { Decorator, Preview } from "@storybook/react";

import "@src/index.css";

const withStage: Decorator = (Story) => (
  <div className="bg-white p-4 outline-2 outline-gray-200">
    <Story />
  </div>
);

const preview: Preview = {
  decorators: [withStage],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    backgrounds: {
      default: "custom",
      values: [{ name: "custom", value: "var(--color-gray-100)" }],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
};

export default preview;

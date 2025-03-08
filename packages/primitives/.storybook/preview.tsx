import React from "react";
import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";

import ThemeProvider from "../src/context/ThemeProvider";

import "@src/index.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light" storageKey="breeze-storybook-theme">
        <div className="bg-background p-1 outline-2 outline-gray-200">
          <Story />
        </div>
      </ThemeProvider>
    ),
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
      parentSelector: "html",
    }),
  ],
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

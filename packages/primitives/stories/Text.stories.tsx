import { Fragment } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Box, Flex, Grid, Text } from "@/components";
import type { FontFamily, FontWeight } from "@/types";

const familyOptions: FontFamily[] = ["display", "serif", "sans", "mono"];
const weightOptions: FontWeight[] = [
  "thin",
  "extralight",
  "light",
  "normal",
  "medium",
  "semibold",
  "bold",
];

const meta: Meta<typeof Text> = {
  title: "Primitives/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    family: {
      control: "select",
      options: familyOptions,
    },
    size: {
      control: "select",
      options: ["xs", "sm", "base", "lg", "xl"],
    },
    weight: {
      control: "select",
      options: weightOptions,
    },
    variant: {
      control: "select",
      options: [
        "default",
        "muted",
        "accent",
        "highlight",
        "destructive",
        "success",
      ],
    },
    align: {
      control: "select",
      options: ["left", "center", "right", "justify"],
    },
    leading: {
      control: "select",
      options: ["none", "tight", "snug", "normal", "relaxed", "loose"],
    },
    truncate: {
      control: "boolean",
    },
    as: {
      control: "select",
      options: ["p", "span", "div", "label"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

// Base example
export const Default: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
    className: "max-w-md",
  },
};

// Family variations
export const Families: Story = {
  render: () => (
    <Flex direction="col" gap="4" className="max-w-3xl">
      <Text>
        Default (display): Source Serif 4, Georgia, Cambria, Times New Roman,
        Times, serif
      </Text>
      <Text family="display">
        Display: Source Serif 4, Georgia, Cambria, "Times New Roman", Times,
        serif
      </Text>
      <Text family="sans">
        Sans: Apple Color Emoji", "Segoe UI Emoji, Segoe UI Symbol, Noto Color
        Emoji
      </Text>
      <Text family="serif">
        Serif: Source Serif 4, Georgia, Cambria, Times New Roman, Times, serif
      </Text>
      <Text family="mono">
        Mono: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier
        New, monospace
      </Text>
    </Flex>
  ),
};

// Size variations
export const Sizes: Story = {
  render: () => (
    <Flex direction="col" gap="4" className="max-w-3xl">
      <Text size="xs">Size: Extra Small (xs)</Text>
      <Text size="sm">Size: Small (sm)</Text>
      <Text size="base">Size: Base (base) - Default</Text>
      <Text size="lg">Size: Large (lg)</Text>
      <Text size="xl">Size: Extra Large (xl)</Text>
    </Flex>
  ),
};

// Weight variations
export const Weights: Story = {
  render: () => (
    <Grid cols="4" gap="8" className="w-full max-w-4xl" gapY="6">
      {familyOptions.map((family, f) => (
        <Fragment key={f}>
          <Text
            variant="highlight"
            family="mono"
            weight="semibold"
            align="center"
          >
            {family.charAt(0).toUpperCase() + family.slice(1)}
          </Text>
        </Fragment>
      ))}
      {weightOptions.map((weight, w) =>
        familyOptions.map((family, f) => (
          <Fragment key={f}>
            <Text key={w} family={family} weight={weight} align="center">
              {weight.charAt(0).toUpperCase() + weight.slice(1)}
              <br />
              1234567890
            </Text>
          </Fragment>
        )),
      )}
    </Grid>
  ),
};

// Variant (color) variations
export const Variants: Story = {
  render: () => (
    <Flex direction="col" gap="4" className="max-w-3xl">
      <Text variant="default">Variant: Default</Text>
      <Text variant="muted">Variant: Muted</Text>
      <Text variant="accent">Variant: Accent</Text>
      <Text variant="highlight">Variant: Highlight</Text>
      <Text variant="destructive">Variant: Destructive</Text>
      <Text variant="success">Variant: Success</Text>
    </Flex>
  ),
};

// Alignment variations
export const Alignments: Story = {
  render: () => (
    <Flex direction="col" gap="4" className="max-w-3xl">
      <Box className="rounded-md border p-2">
        <Text align="left">
          Align: Left (default). This text is aligned to the left side of its
          container.
        </Text>
      </Box>

      <Box className="rounded-md border p-2">
        <Text align="center">
          Align: Center. This text is aligned to the center of its container.
        </Text>
      </Box>

      <Box className="rounded-md border p-2">
        <Text align="right">
          Align: Right. This text is aligned to the right side of its container.
        </Text>
      </Box>

      <Box className="rounded-md border p-2">
        <Text align="justify">
          Align: Justify. This text is justified, which means it is aligned to
          both the left and right edges of its container. This typically creates
          straight edges on both sides of the text block, and spacing between
          words is adjusted to make the text fill the width of the container.
        </Text>
      </Box>
    </Flex>
  ),
};

// Line height variations
export const LineHeights: Story = {
  render: () => (
    <Flex direction="col" gap="6" className="max-w-3xl">
      <Box className="rounded-md border p-2">
        <Text className="mb-1 font-semibold">leading="none":</Text>
        <Text leading="none">
          This text has no line height specified, making it very tight. Multiple
          lines of text will have almost no spacing between them, which can make
          readability difficult but saves vertical space.
        </Text>
      </Box>

      <Box className="rounded-md border p-2">
        <Text className="mb-1 font-semibold">leading="tight":</Text>
        <Text leading="tight">
          This text has tight line height. It's more compact than normal while
          still maintaining reasonable readability for most content. Good for
          dense information displays where vertical space is at a premium.
        </Text>
      </Box>

      <Box className="rounded-md border p-2">
        <Text className="mb-1 font-semibold">leading="normal" (default):</Text>
        <Text leading="normal">
          This text has normal line height. It's the browser default and
          provides standard spacing between lines. This is suitable for most
          content and offers good readability for general text.
        </Text>
      </Box>

      <Box className="rounded-md border p-2">
        <Text className="mb-1 font-semibold">leading="relaxed":</Text>
        <Text leading="relaxed">
          This text has relaxed line height, which means there's more space
          between lines than the default. This improves readability, especially
          for longer text blocks, and can reduce eye strain.
        </Text>
      </Box>

      <Box className="rounded-md border p-2">
        <Text className="mb-1 font-semibold">leading="loose":</Text>
        <Text leading="loose">
          This text has loose line height, providing significant space between
          lines. This is very readable and allows the eyes to easily track from
          the end of one line to the beginning of the next, but uses more
          vertical space.
        </Text>
      </Box>
    </Flex>
  ),
};

// Truncate example
export const Truncation: Story = {
  render: () => (
    <Flex direction="col" gap="6" className="max-w-md">
      <Box className="rounded-md border p-2">
        <Text className="mb-1 font-semibold">Without truncation:</Text>
        <Text className="block w-full">
          This is a very long text that will wrap to multiple lines when it
          reaches the end of its container. It continues until all content is
          displayed.
        </Text>
      </Box>

      <Box className="rounded-md border p-2">
        <Text className="mb-1 font-semibold">With truncation:</Text>
        <Text truncate className="block w-full">
          This is a very long text that will be truncated with an ellipsis when
          it reaches the end of its container. The rest of this content won't be
          visible.
        </Text>
      </Box>
    </Flex>
  ),
};

// Polymorphic example
export const PolymorphicText: Story = {
  render: () => (
    <Flex direction="col" gap="4" className="max-w-3xl">
      <Text as="p">Default text as a paragraph (p) element</Text>

      <Text as="div" className="bg-muted rounded-md p-2">
        This text is actually a div element
      </Text>
    </Flex>
  ),
};

// Combined variations
export const CombinedExamples: Story = {
  render: () => (
    <Flex direction="col" gap="6" className="max-w-3xl">
      <Box className="bg-card rounded-lg p-6 shadow-sm">
        <Text size="lg" weight="semibold" variant="default" className="mb-2">
          Product Announcement
        </Text>

        <Text variant="muted" className="mb-4">
          Posted on March 1, 2025
        </Text>

        <Text leading="relaxed" className="mb-4">
          We're excited to announce our new product line that will revolutionize
          how you interact with our services. The new features include improved
          performance, better user experience, and more customization options.
        </Text>

        <Text size="sm" variant="accent" weight="medium">
          Read the full announcement →
        </Text>
      </Box>

      <Box className="bg-destructive/10 rounded-lg p-6">
        <Text weight="semibold" variant="destructive" className="mb-2">
          Important Notice
        </Text>

        <Text variant="destructive" size="sm">
          Your subscription will expire in 3 days. Please renew to avoid service
          interruption.
        </Text>
      </Box>

      <Box className="bg-muted rounded-lg p-6">
        <Text align="center" weight="bold" className="mb-4">
          Testimonials
        </Text>

        <Text align="center" size="sm" leading="relaxed" className="italic">
          "This product has completely transformed our workflow. The time saved
          has allowed our team to focus on what really matters — innovation."
        </Text>

        <Text align="center" size="xs" variant="muted" className="mt-2">
          — Jane Doe, CEO at Example Corp
        </Text>
      </Box>
    </Flex>
  ),
};

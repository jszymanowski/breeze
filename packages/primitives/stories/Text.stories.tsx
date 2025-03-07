import { Fragment } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Box, Flex, Grid, Text, Heading } from "@/main";
import {
  FONT_FAMILIES,
  FONT_WEIGHTS,
  FONT_SIZES,
  FONT_VARIANTS,
  TEXT_ALIGN,
  TEXT_LEADING,
  TYPOGRAPHY_ELEMENTS,
} from "@stories/options";

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
      options: FONT_FAMILIES,
    },
    size: {
      control: "select",
      options: FONT_SIZES,
    },
    weight: {
      control: "select",
      options: FONT_WEIGHTS,
    },
    variant: {
      control: "select",
      options: FONT_VARIANTS,
    },
    align: {
      control: "select",
      options: TEXT_ALIGN,
    },
    leading: {
      control: "select",
      options: TEXT_LEADING,
    },
    truncate: {
      control: "boolean",
    },
    as: {
      control: "select",
      options: TYPOGRAPHY_ELEMENTS,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Families: Story = {
  render: () => (
    <Grid cols="6" gap="4" className="w-full max-w-4xl" gapY="6">
      {FONT_FAMILIES.map((family, f) => (
        <Fragment key={f}>
          <div className="col-start-1">
            <Text family={family} weight="medium">
              {family.charAt(0).toUpperCase() + family.slice(1)}
            </Text>
          </div>
          <div className="col-start-2 -col-end-1">
            <Text family={family}>My cat's breath smells like cat food.</Text>
          </div>
        </Fragment>
      ))}
    </Grid>
  ),
};

// Size variations
export const Sizes: Story = {
  render: () => (
    <>
      <Flex direction="row" gap="4" className="max-w-3xl">
        {FONT_FAMILIES.map((family, f) => (
          <Flex direction="col" gap="4" key={f}>
            <Heading family={family}>
              {family.charAt(0).toUpperCase() + family.slice(1)}
            </Heading>
            {FONT_SIZES.slice(0, 6).map((size, s) => (
              <Text key={s} family={family} size={size}>
                {size.toUpperCase()}: My cat's breath smells like cat food.
              </Text>
            ))}
          </Flex>
        ))}
      </Flex>
      <Text variant="muted" className="mt-8">
        Note: Options for{" "}
        <Text as="span" variant="muted" family="mono">
          {FONT_SIZES.slice(6).join(", ")}
        </Text>{" "}
        are not displayed.
      </Text>
    </>
  ),
};

// Weight variations
export const Weights: Story = {
  render: () => (
    <Grid cols="4" gap="8" className="w-full max-w-4xl" gapY="6">
      {FONT_FAMILIES.map((family, f) => (
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
      {FONT_WEIGHTS.map((weight, w) =>
        FONT_FAMILIES.map((family, f) => (
          <Fragment key={f}>
            <Text key={w} family={family} weight={weight} align="center">
              {weight.charAt(0).toUpperCase() + weight.slice(1)}
              <br />
              1234567890
            </Text>
          </Fragment>
        ))
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

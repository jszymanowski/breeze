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

export const Weights: Story = {
  render: () => (
    <>
      <Grid cols="4" gap="8" className="w-full max-w-4xl" gapY="6">
        {FONT_FAMILIES.map((family, f) => (
          <Fragment key={f}>
            <Heading family={family} align="center">
              {family.charAt(0).toUpperCase() + family.slice(1)}
            </Heading>
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
      <Text variant="muted" className="mt-8">
        Note: Certain fonts may not support all weights.
      </Text>
    </>
  ),
};

export const Variants: Story = {
  render: () => (
    <Flex direction="row" gap="4" className="max-w-3xl">
      {FONT_FAMILIES.map((family, f) => (
        <Flex direction="col" gap="4" key={f}>
          <Heading family={family}>
            {family.charAt(0).toUpperCase() + family.slice(1)}
          </Heading>
          {FONT_VARIANTS.slice(0, 6).map((variant, v) => (
            <Text key={v} family={family} variant={variant}>
              {variant.toUpperCase()}: My cat's breath smells like cat food.
            </Text>
          ))}
        </Flex>
      ))}
    </Flex>
  ),
};

export const Alignments: Story = {
  render: () => (
    <Grid cols="12" gap="4" className="w-full max-w-4xl" gapY="6">
      {TEXT_ALIGN.map((align, a) => (
        <Fragment key={a}>
          <Box className="col-start-1">
            <Text weight="medium" align="right">
              {align.charAt(0).toUpperCase() + align.slice(1)}
            </Text>
          </Box>
          <Flex
            direction="col"
            gap="4"
            className="col-start-2 -col-end-1 rounded border-1 border-gray-300 p-1"
          >
            <Text align={align} size="sm">
              We can't bust heads like we used to. But we have our ways. One
              trick is to tell stories that don't go anywhere. Like the time I
              caught the ferry to Shelbyville. I needed a new heel for m'shoe.
              So I decided to go to Morganville, which is what they called
              Shelbyville in those days. So I tied an onion to my belt. Which
              was the style at the time.
            </Text>
            <Text align={align} size="sm">
              Now, to take the ferry cost a nickel, and in those days, nickels
              had pictures of bumblebees on 'em. Gimme five bees for a quarter,
              you'd say. Now where was I... oh yeah. The important thing was
              that I had an onion tied to my belt, which was the style at the
              time. You couldn't get white onions, because of the war. The only
              thing you could get was those big yellow ones.
            </Text>
          </Flex>
        </Fragment>
      ))}
    </Grid>
  ),
};

export const LineHeights: Story = {
  render: () => (
    <Grid cols="12" gap="4" className="w-full max-w-4xl" gapY="6">
      {TEXT_LEADING.map((leading, a) => (
        <Fragment key={a}>
          <Box className="col-start-1">
            <Text weight="medium" align="right">
              {leading.charAt(0).toUpperCase() + leading.slice(1)}
            </Text>
          </Box>
          <Flex
            direction="col"
            gap="4"
            className="col-start-2 -col-end-1 rounded border-1 border-gray-300 p-1"
          >
            <Text leading={leading} size="sm">
              Now, to take the ferry cost a nickel, and in those days, nickels
              had pictures of bumblebees on 'em. Gimme five bees for a quarter,
              you'd say. Now where was I... oh yeah. The important thing was
              that I had an onion tied to my belt, which was the style at the
              time. You couldn't get white onions, because of the war. The only
              thing you could get was those big yellow ones.
            </Text>
          </Flex>
        </Fragment>
      ))}
    </Grid>
  ),
};

// Truncate example
export const Truncation: Story = {
  render: () => (
    <Grid cols="12" gap="4" className="w-full max-w-4xl" gapY="6">
      {[false, true].map((truncate, a) => (
        <Fragment key={a}>
          <Box className="col-start-1 col-end-3">
            <Text weight="medium" align="right">
              {truncate ? "Truncated" : "Not truncated"}
            </Text>
          </Box>
          <Flex
            direction="col"
            gap="4"
            className="col-start-3 -col-end-1 rounded border-1 border-gray-300 p-1"
          >
            <Text truncate={truncate} size="sm">
              Now, to take the ferry cost a nickel, and in those days, nickels
              had pictures of bumblebees on 'em. Gimme five bees for a quarter,
              you'd say. Now where was I... oh yeah. The important thing was
              that I had an onion tied to my belt, which was the style at the
              time. You couldn't get white onions, because of the war. The only
              thing you could get was those big yellow ones.
            </Text>
          </Flex>
        </Fragment>
      ))}
    </Grid>
  ),
};

export const PolymorphicText: Story = {
  render: () => (
    <Grid cols="2" gap="2" className="w-full max-w-4xl">
      {TYPOGRAPHY_ELEMENTS.map((element, e) => (
        <Box
          key={e}
          className="bg-card rounded-lg border-1 border-gray-300 p-1"
        >
          <Text key={e} as={element}>
            This is actually a{" "}
            <Text as="span" family="mono">
              {element}
            </Text>{" "}
            element.
          </Text>
        </Box>
      ))}
    </Grid>
  ),
};

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

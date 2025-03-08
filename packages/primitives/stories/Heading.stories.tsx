import { Fragment } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Heading, Flex, Grid, Box, Text } from "@/main";
import {
  HEADING_LEVELS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  FONT_VARIANTS,
  TEXT_ALIGNS,
  TEXT_TRACKINGS,
  TextTracking,
  FontVariant,
  FontWeight,
  FontSize,
  FontFamily,
} from "@/types";
import { HeadingSize } from "@/types";

import FamilyGrid from "@stories/support/FamilyGrid";
import OptionsByFamilyGrid from "@stories/support/OptionsByFamilyGrid";

const meta: Meta<typeof Heading> = {
  title: "Primitives/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: HEADING_LEVELS,
    },
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
      options: TEXT_ALIGNS,
    },
    tracking: {
      control: "select",
      options: TEXT_TRACKINGS,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: "This is a Heading component",
  },
};

export const HeadingLevels: Story = {
  render: () => (
    <Flex direction="col" gap="4" className="max-w-2xl">
      {HEADING_LEVELS.map((level) => (
        <Heading key={level} level={level}>
          Heading Level {level} (h{level})
        </Heading>
      ))}
    </Flex>
  ),
};

export const Families: Story = {
  render: () => (
    <FamilyGrid
      renderOption={(family: FontFamily) => (
        <Heading level="4" family={family}>
          My cat's breath smells like cat food.
        </Heading>
      )}
    />
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      <OptionsByFamilyGrid<FontSize>
        options={FONT_SIZES.slice(0, 6) as unknown as FontSize[]}
        propKey="size"
      >
        Old Man Yells At Cloud
      </OptionsByFamilyGrid>
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
      <OptionsByFamilyGrid<FontWeight>
        options={FONT_WEIGHTS as unknown as FontWeight[]}
        propKey="weight"
      >
        Old Man Yells At Cloud
      </OptionsByFamilyGrid>
      <Text variant="muted" className="mt-8">
        Note: Certain fonts may not support all weights.
      </Text>
    </>
  ),
};

export const Variants: Story = {
  render: () => (
    <OptionsByFamilyGrid<FontVariant>
      options={FONT_VARIANTS as unknown as FontVariant[]}
      propKey="variant"
    >
      Old Man Yells At Cloud
    </OptionsByFamilyGrid>
  ),
};

export const Alignments: Story = {
  render: () => (
    <Grid cols="12" gap="4" className="w-full max-w-4xl" gapY="6">
      {TEXT_ALIGNS.map((align, a) => (
        <Fragment key={a}>
          <Box className="col-start-1">
            <Text weight="medium" align="right">
              {align.charAt(0).toUpperCase() + align.slice(1)}
            </Text>
          </Box>
          <Flex
            direction="col"
            gap="2"
            className="col-start-2 -col-end-1 rounded border-1 border-gray-300 p-1"
          >
            <Heading align={align}>Old Man Yells at Cloud</Heading>
            <Text variant="muted" align={align} size="sm">
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

export const Tracking: Story = {
  render: () => (
    <OptionsByFamilyGrid<TextTracking>
      options={TEXT_TRACKINGS as unknown as TextTracking[]}
      propKey="tracking"
    >
      Old Man Yells At Cloud
    </OptionsByFamilyGrid>
  ),
};

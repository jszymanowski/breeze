import { Fragment } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Box, Flex, Grid, Text, Heading } from "@/main";
import {
  FONT_FAMILIES,
  FONT_WEIGHTS,
  FONT_SIZES,
  FONT_VARIANTS,
  TEXT_ALIGNS,
  TEXT_LEADINGS,
  TYPOGRAPHY_ELEMENTS,
  TextTracking,
  FontVariant,
  FontWeight,
  FontSize,
  FontFamily,
} from "@/types";

import FamilyGrid from "@stories/support/FamilyGrid";
import OptionsByFamilyGrid from "@stories/support/OptionsByFamilyGrid";

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
      options: TEXT_ALIGNS,
    },
    leading: {
      control: "select",
      options: TEXT_LEADINGS,
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

const sampleText = "My cat's breath smells like cat food.";

export const Default: Story = {
  args: {
    children: "This is a Text component",
  },
};

export const Families: Story = {
  render: () => (
    <FamilyGrid
      renderOption={(family: FontFamily) => (
        <Text family={family}>{sampleText}</Text>
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
        renderOption={(family, option) => (
          <Text family={family} size={option}>
            {sampleText}
          </Text>
        )}
      />
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
        renderOption={(family, option) => (
          <Text family={family} weight={option}>
            {sampleText}
          </Text>
        )}
      />
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
      renderOption={(family, option) => (
        <Text family={family} variant={option}>
          {sampleText}
        </Text>
      )}
    />
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
      {TEXT_LEADINGS.map((leading, a) => (
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

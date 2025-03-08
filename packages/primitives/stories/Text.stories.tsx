import type { Meta, StoryObj } from "@storybook/react";

import { Box, Grid, Text } from "@/main";
import {
  FONT_FAMILIES,
  FONT_WEIGHTS,
  FONT_SIZES,
  TYPOGRAPHY_VARIANTS,
  TEXT_ALIGNS,
  TEXT_LEADINGS,
  TYPOGRAPHY_ELEMENTS,
  TypographyVariant,
  FontWeight,
  FontSize,
  FontFamily,
  TextLeading,
  TextAlign,
} from "@/types";

import OptionList from "@root/stories/templates/OptionList";
import OptionsByFamilyGrid from "@root/stories/templates/OptionsByFamilyGrid";

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
      options: TYPOGRAPHY_VARIANTS,
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
const sampleLongText = [
  "We can't bust heads like we used to. But we have our ways. One \
    trick is to tell stories that don't go anywhere. Like the time I \
    caught the ferry to Shelbyville. I needed a new heel for m'shoe. \
    So I decided to go to Morganville, which is what they called \
    Shelbyville in those days. So I tied an onion to my belt. Which \
    was the style at the time.",
  "Now, to take the ferry cost a nickel, and in those days, nickels \
    had pictures of bumblebees on 'em. Gimme five bees for a quarter, \
    you'd say. Now where was I... oh yeah. The important thing was \
    that I had an onion tied to my belt, which was the style at the \
    time. You couldn't get white onions, because of the war. The only \
    thing you could get was those big yellow ones.",
];

export const Default: Story = {
  args: {
    children: "This is a Text component",
  },
};

export const Families: Story = {
  render: () => (
    <OptionList<FontFamily>
      options={FONT_FAMILIES as unknown as FontFamily[]}
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
    <OptionsByFamilyGrid<TypographyVariant>
      options={TYPOGRAPHY_VARIANTS as unknown as TypographyVariant[]}
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
    <OptionList<TextAlign>
      options={TEXT_ALIGNS as unknown as TextAlign[]}
      renderOption={(align: TextAlign) => (
        <>
          {sampleLongText.map((text, t) => (
            <Text align={align} size="sm" key={t}>
              {text}
            </Text>
          ))}
        </>
      )}
    />
  ),
};

export const LineHeights: Story = {
  render: () => (
    <OptionList<TextLeading>
      options={TEXT_LEADINGS as unknown as TextLeading[]}
      renderOption={(leading: TextLeading) => (
        <Text leading={leading} size="sm">
          {sampleLongText[1]}
        </Text>
      )}
    />
  ),
};

export const Truncation: Story = {
  render: () => (
    <OptionList<boolean>
      options={[true, false]}
      renderRowTitle={(option) => (
        <Text>{option ? "Truncated" : "Not truncated"}</Text>
      )}
      renderOption={(truncated) => (
        <Text truncate={truncated} size="sm">
          {sampleLongText[1]}
        </Text>
      )}
    />
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

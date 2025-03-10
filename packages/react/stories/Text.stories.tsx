import type { Meta, StoryObj } from "@storybook/react";
import { asOptionalValue, summarizeValues } from "@stories/utils";

import { Box, Flex, Grid, Text } from "@/main";
import {
  FONT_FAMILIES,
  FONT_WEIGHTS,
  FONT_SIZES,
  TYPOGRAPHY_VARIANTS,
  TEXT_ALIGNS,
  TEXT_LEADINGS,
  TEXT_TRACKINGS,
  TYPOGRAPHY_ELEMENTS,
  TypographyVariant,
  FontWeight,
  FontSize,
  FontFamily,
  TextTracking,
  TextLeading,
  TextAlign,
} from "@/types";
import Code from "@stories/templates/Code";

import OptionList from "@root/stories/templates/OptionList";
import OptionsByFamilyGrid from "@root/stories/templates/OptionsByFamilyGrid";

const meta: Meta<typeof Text> = {
  title: "Typography/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: asOptionalValue(FONT_SIZES),
      description: "Controls font size",
      table: {
        type: { summary: summarizeValues(FONT_SIZES, true) },
      },
    },
    family: {
      control: "select",
      options: asOptionalValue(FONT_FAMILIES),
      description: "Controls the font family",
      table: {
        type: { summary: summarizeValues(FONT_FAMILIES, true) },
      },
    },
    weight: {
      control: "select",
      options: asOptionalValue(FONT_WEIGHTS),
      description: "Controls font weight",
      nullable: true,
      table: {
        type: { summary: summarizeValues(FONT_WEIGHTS, true) },
      },
    },
    variant: {
      control: "select",
      options: asOptionalValue(TYPOGRAPHY_VARIANTS),
      description: "Controls font color, according to the theme",
      table: {
        type: { summary: summarizeValues(TYPOGRAPHY_VARIANTS, true) },
      },
    },
    align: {
      control: "select",
      options: asOptionalValue(TEXT_ALIGNS),
      description: "Controls text alignment",
      table: {
        type: { summary: summarizeValues(TEXT_ALIGNS, true) },
      },
    },
    leading: {
      control: "select",
      options: asOptionalValue(TEXT_LEADINGS),
      description: "Controls the leading, or line height, of text",
      table: {
        type: { summary: summarizeValues(TEXT_LEADINGS, true) },
      },
    },
    tracking: {
      control: "select",
      options: asOptionalValue(TEXT_TRACKINGS),
      description: "Controls text tracking (a.k.a. letter spacing)",
      table: {
        type: { summary: summarizeValues(TEXT_TRACKINGS, true) },
      },
    },
    truncate: {
      description:
        "If true, prevents text from wrapping by truncating overflowing text with an ellipsis (…) if needed",
      control: "boolean",
    },
    numeric: {
      description: "If true, use tabular numbers for even spacing",
    },
    className: {
      control: "text",
      description: "Comma-separated CSS class names",
      table: {
        type: { summary: "string" },
      },
    },
    as: {
      control: "select",
      options: asOptionalValue(TYPOGRAPHY_ELEMENTS),
      description: "Specific HTML element to use",
      table: {
        type: { summary: summarizeValues(TYPOGRAPHY_ELEMENTS, true) },
      },
    },
    children: {
      description: "Content (text) to render",
      table: {
        type: { summary: "string | React.ReactNode" },
      },
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
  decorators: [
    (Story) => (
      <Box className="min-w-[400px]">
        <Story />
      </Box>
    ),
  ],
};
export const WithSampleProps: Story = {
  args: {
    size: "lg",
    family: "serif",
    weight: "normal",
    tracking: "tighter",
    variant: "muted",
    numeric: false,
    children: "This is a Text component",
  },
  decorators: [
    (Story) => (
      <Box className="min-w-[400px]">
        <Story />
      </Box>
    ),
  ],
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

export const Leading: Story = {
  render: () => (
    <OptionList<TextLeading>
      options={[undefined, ...TEXT_LEADINGS] as unknown as TextLeading[]}
      renderRowTitle={(option) => (
        <>
          {option === undefined && <Text>{"<no value"}</Text>}
          <Code>{option}</Code>
        </>
      )}
      renderOption={(leading: TextLeading) => (
        <Text leading={leading} size="sm">
          {sampleLongText[1]}
        </Text>
      )}
    />
  ),
};

export const Tracking: Story = {
  render: () => (
    <OptionsByFamilyGrid<TextTracking>
      options={TEXT_TRACKINGS as unknown as TextTracking[]}
      propKey="tracking"
      renderOption={(family, option) => (
        <Text align="center" family={family} tracking={option}>
          {sampleText}
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
        <Flex key={e} justify="center" className="w-16 p-1">
          <Text
            key={e}
            as={element}
            align="center"
            className="border-accent rounded border-1 border-dotted"
          >
            {"<"}
            {element}
            {">"}
          </Text>
        </Flex>
      ))}
    </Grid>
  ),
};

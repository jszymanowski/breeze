import type { Meta, StoryObj } from "@storybook/react";

import { Box, Heading, Flex, Text } from "@/main";
import {
  HEADING_LEVELS,
  FONT_FAMILIES,
  FONT_SIZES,
  FONT_WEIGHTS,
  TYPOGRAPHY_VARIANTS,
  TEXT_ALIGNS,
  TEXT_TRACKINGS,
  TextTracking,
  TypographyVariant,
  FontWeight,
  FontSize,
  FontFamily,
  TextAlign,
} from "@/types";

import OptionList from "@root/stories/templates/OptionList";
import OptionsByFamilyGrid from "@root/stories/templates/OptionsByFamilyGrid";

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
      options: [null, undefined, ...HEADING_LEVELS],
      description:
        "Controls heading level to use, translating to usage of an `<hX>` HTML element",
      table: {
        type: { summary: HEADING_LEVELS.join(" | ") },
      },
    },
    size: {
      control: "select",
      options: [null, undefined, ...FONT_SIZES],
      description:
        "Controls font size on a more granular basis (this will override `level`)",
      table: {
        type: { summary: FONT_SIZES.join(" | ") },
      },
    },
    family: {
      control: "select",
      options: [null, undefined, ...FONT_FAMILIES],
      description: "Controls the font family",
      table: {
        type: { summary: FONT_FAMILIES.join(" | ") },
      },
    },
    weight: {
      control: "select",
      options: [null, undefined, ...FONT_WEIGHTS],
      description: "Controls font weight",
      nullable: true,
      table: {
        type: { summary: FONT_WEIGHTS.join(" | ") },
      },
    },
    variant: {
      control: "select",
      options: [null, undefined, ...TYPOGRAPHY_VARIANTS],
      description: "Controls font color, according to the theme",
      table: {
        type: { summary: TYPOGRAPHY_VARIANTS.join(" | ") },
      },
    },
    align: {
      control: "select",
      options: [null, undefined, ...TEXT_ALIGNS],
      description: "Controls text alignment",
      table: {
        type: { summary: TEXT_ALIGNS.join(" | ") },
      },
    },
    tracking: {
      control: "select",
      options: [null, undefined, ...TEXT_TRACKINGS],
      description: "Controls text tracking (a.k.a. letter spacing)",
      table: {
        type: { summary: [null, undefined, ...TEXT_TRACKINGS].join(" | ") },
      },
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
    children: {
      description: "Content (text) to render",
      table: {
        type: { summary: "string | React.ReactNode" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

const sampleHeading = "Old Man Yells At Cloud";
const sampleLongText =
  " \
  Now, to take the ferry cost a nickel, and in those days, nickels \
  had pictures of bumblebees on 'em. Gimme five bees for a quarter, \
  you'd say. Now where was I... oh yeah. The important thing was \
  that I had an onion tied to my belt, which was the style at the \
  time. You couldn't get white onions, because of the war. The only \
  thing you could get was those big yellow ones.";

export const Default: Story = {
  args: {
    children: "This is a Heading component",
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
    level: "3",
    family: "serif",
    weight: "normal",
    tracking: "tighter",
    variant: "muted",
    numeric: false,
    children: "This is a Heading component",
  },
  decorators: [
    (Story) => (
      <Box className="min-w-[400px]">
        <Story />
      </Box>
    ),
  ],
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
    <OptionList<FontFamily>
      options={FONT_FAMILIES as unknown as FontFamily[]}
      renderOption={(family: FontFamily) => (
        <Heading level="4" family={family}>
          {sampleHeading}
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
        renderOption={(family, option) => (
          <Heading level="4" align="center" family={family} size={option}>
            {sampleHeading}
          </Heading>
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
          <Heading level="4" align="center" family={family} weight={option}>
            {sampleHeading}
          </Heading>
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
        <Heading level="4" align="center" family={family} variant={option}>
          {sampleHeading}
        </Heading>
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
        <Heading level="4" align="center" family={family} tracking={option}>
          {sampleHeading}
        </Heading>
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
          <Heading align={align}>{sampleHeading}</Heading>
          <Text variant="muted" align={align} size="sm">
            {sampleLongText}
          </Text>
        </>
      )}
    />
  ),
};

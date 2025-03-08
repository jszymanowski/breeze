import { Fragment } from "react";

import { Grid, Box, Text, HeadingProps, Flex } from "@/main";
import { FONT_FAMILIES, FontFamily } from "@/types";

import Code from "@stories/templates/Code";

type ValueOf<T> = T[keyof T];
type OptionTypes = ValueOf<HeadingProps>;

interface Props<T extends OptionTypes> {
  options: T[];
  propKey: keyof HeadingProps;
  renderOption: (family: FontFamily, option: T) => React.ReactNode;
  children?: React.ReactElement | string;
}

export default function OptionsByFamilyGrid<T extends OptionTypes>({
  options,
  renderOption,
  propKey,
}: Props<T>) {
  return (
    <>
      <Grid
        cols="5"
        gapX="4"
        className="w-full divide-y divide-dotted divide-gray-300"
      >
        <Box />
        {FONT_FAMILIES.map((family, f) => (
          <Fragment key={f}>
            <Text weight="medium" align="center" variant="accent">
              {family.charAt(0).toUpperCase() + family.slice(1)}
            </Text>
          </Fragment>
        ))}
        {options.map((option, w) => (
          <Fragment key={w}>
            <Flex align="center" justify="end">
              <Code>
                {propKey}="{option as string}"
              </Code>
            </Flex>
            {FONT_FAMILIES.map((family, f) => (
              <Flex key={f} align="center">
                {renderOption(family, option)}
              </Flex>
            ))}
          </Fragment>
        ))}
      </Grid>
    </>
  );
}

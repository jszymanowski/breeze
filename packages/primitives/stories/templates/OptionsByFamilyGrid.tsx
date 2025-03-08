import { Fragment } from "react";

import { Grid, Box, Text, HeadingProps } from "@/main";
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
      <Grid cols="5" gap="8" className="w-full" gapY="6">
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
            <Code>
              {propKey}="{option as string}"
            </Code>
            {FONT_FAMILIES.map((family, f) => (
              <Fragment key={f}>{renderOption(family, option)}</Fragment>
            ))}
          </Fragment>
        ))}
      </Grid>
    </>
  );
}

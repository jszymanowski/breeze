import { Fragment } from "react";
import { Heading, Grid, Box, Text } from "@/main";

import { FONT_FAMILIES, TextTracking, TextLeading } from "@/types";

interface Props<T extends TextTracking | TextLeading> {
  options: T[];
  propKey: "tracking" | "leading";
}

export default function OptionsByFamilyGrid<
  T extends TextTracking | TextLeading,
>({ options, propKey }: Props<T>) {
  return (
    <>
      <Grid cols="5" gap="8" className="w-full max-w-4xl" gapY="6">
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
            <Text
              weight="medium"
              align="right"
              className="col-start-1"
              variant="accent"
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </Text>
            {FONT_FAMILIES.map((family, f) => (
              <Fragment key={f}>
                <Heading
                  level="4"
                  key={w}
                  align="center"
                  family={family}
                  {...{ [propKey]: option }}
                >
                  Breeze
                </Heading>
              </Fragment>
            ))}
          </Fragment>
        ))}
      </Grid>
    </>
  );
}

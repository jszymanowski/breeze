import { Fragment } from "react";
import { Heading, Grid, Box, Text } from "@/main";

import { FONT_FAMILIES, TextTracking, FontVariant } from "@/types";

interface Props<T extends TextTracking | FontVariant> {
  options: T[];
  propKey: "tracking" | "variant";
  value?: string;
}

export default function OptionsByFamilyGrid<
  T extends TextTracking | FontVariant,
>({ options, propKey, value = "Breeze" }: Props<T>) {
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
            <Text
              weight="medium"
              align="right"
              className="col-start-1"
              variant="accent"
            >
              {option}
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
                  {value}
                </Heading>
              </Fragment>
            ))}
          </Fragment>
        ))}
      </Grid>
    </>
  );
}

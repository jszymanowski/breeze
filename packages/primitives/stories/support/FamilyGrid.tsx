import { Fragment } from "react";
import { Grid, Text } from "@/main";

import { FONT_FAMILIES, FontFamily } from "@/types";

interface Props {
  renderOption: (family: FontFamily) => React.ReactNode;
}

export default function FamilyGrid({ renderOption }: Props) {
  return (
    <Grid cols="6" gap="4" className="w-full max-w-4xl" gapY="6">
      {FONT_FAMILIES.map((family, f) => (
        <Fragment key={f}>
          <div className="col-start-1">
            <Text family={family} weight="medium">
              {family.charAt(0).toUpperCase() + family.slice(1)}
            </Text>
          </div>
          <div className="col-start-2 -col-end-1">{renderOption(family)}</div>
        </Fragment>
      ))}
    </Grid>
  );
}

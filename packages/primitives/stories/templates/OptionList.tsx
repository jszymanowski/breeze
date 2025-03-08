import { Fragment } from "react";
import { Grid, Text, HeadingProps } from "@/main";

type ValueOf<T> = T[keyof T];
type OptionTypes = ValueOf<HeadingProps>;

interface Props<T extends OptionTypes> {
  options: T[];
  renderOption: (option: T) => React.ReactNode;
}

export default function OptionList<T extends OptionTypes>({
  options,
  renderOption,
}: Props<T>) {
  return (
    <Grid cols="6" gap="4" className="w-full max-w-4xl" gapY="6">
      {options.map((option, f) => (
        <Fragment key={f}>
          <div className="col-start-1">
            <Text weight="medium">{option}</Text>
          </div>
          <div className="col-start-2 -col-end-1">{renderOption(option)}</div>
        </Fragment>
      ))}
    </Grid>
  );
}

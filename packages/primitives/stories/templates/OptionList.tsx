import { Fragment } from "react";
import { Flex, Grid, HeadingProps } from "@/main";

import Code from "@stories/templates/Code";

type ValueOf<T> = T[keyof T];
type OptionTypes = ValueOf<HeadingProps> & boolean;

interface Props<T extends OptionTypes> {
  options: T[];
  renderRowTitle?: (option: T) => React.ReactNode;
  renderOption: (option: T) => React.ReactNode;
}

export default function OptionList<T extends OptionTypes>({
  options,
  renderRowTitle = (option) => <Code>{option as string}</Code>,
  renderOption,
}: Props<T>) {
  return (
    <Grid cols="6" gap="4" className="w-full max-w-4xl" gapY="6">
      {options.map((option, f) => (
        <Fragment key={f}>
          <Flex justify="end" align="center" className="col-start-1">
            {renderRowTitle(option)}
          </Flex>
          <div className="col-start-2 -col-end-1 rounded border-1 border-gray-300 p-1">
            {renderOption(option)}
          </div>
        </Fragment>
      ))}
    </Grid>
  );
}

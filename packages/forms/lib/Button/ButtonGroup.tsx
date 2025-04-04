import { Flex } from "@jszymanowski/breeze-primitives";
import type React from "react";
import { Button, type ButtonProps } from "./Button";

export interface ButtonGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const ButtonGroup = ({ children, className = "" }: ButtonGroupProps) => (
  <Flex className={className}>{children}</Flex>
);

ButtonGroup.Button = ({ children, ...props }: ButtonProps) => {
  return (
    <Button className="not-first:-ml-1 not-last:rounded-r-none not-first:rounded-l-none" {...props}>
      {children}
    </Button>
  );
};

import { Flex } from "@jszymanowski/breeze-react";
import { Button, type ButtonProps } from "@/main";
import type React from "react";

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
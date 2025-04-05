import type React from "react";
import { Button as CnButton } from "@/components/ui/button";

import { Flex } from "@jszymanowski/breeze-react";

interface ButtonGroupProps {
  children: React.ReactNode[];
  className?: string;
}

const ButtonGroup = ({ children, className = "" }: ButtonGroupProps) => (
  <Flex className={className}>{children}</Flex>
);

ButtonGroup.Button = ({ children, ...props }: ButtonProps) => {
  return (
    <Button className="not-first:-ml-1 not-last:rounded-r-none not-first:rounded-l-none" {...props}>
      {children}
    </Button>
  );
};

export interface ButtonProps extends React.ComponentProps<"button"> {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link"
    // deprecated
    | "subtle";
  size?: "default" | "xs" | "sm" | "md" | "lg";
  icon?: React.ReactElement;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  asChild?: boolean;
}

export const Button = ({
  children,
  onClick,
  variant = "default",
  size = "default",
  icon,
  disabled = false,
  className = "",
  type = "button",
  asChild = false,
  ...rest
}: ButtonProps) => {
  const getCnVariant = () => {
    if (variant === "primary") {
      return "default";
    } else if (variant === "subtle") {
      return "secondary";
    } else {
      return variant;
    }
  };

  const getCnSize = () => {
    if (size === "md") {
      return "default";
    } else {
      return size;
    }
  };

  return (
    <CnButton
      variant={getCnVariant()}
      onClick={onClick}
      disabled={disabled}
      size={getCnSize()}
      className={className}
      type={type}
      asChild={asChild}
      {...rest}
    >
      {icon && children ? (
        <Flex align="center" gap="2">
          {icon}
          {children}
        </Flex>
      ) : (
        icon || children
      )}
    </CnButton>
  );
}

export { ButtonGroup };

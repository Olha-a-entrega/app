import { ReactNode } from "react";
import { Button as ButtonComponent, ButtonProps, styled } from "tamagui";

export const Button = styled(ButtonComponent, {
  h: "$4.5",

  variants: {
    background: {
      normal: {
        bg: "#0063F9",
      },
      outline: {
        bg: "#FFFFFF",
        borderWidth: "$0.75",
        borderColor: "#0063F9",
        color: "#0063F9",
      },
    },
  } as const,
  defaultVariants: {
    background: "normal",
  } as const,
});

import { ReactNode } from "react";
import { Button as ButtonComponent, ButtonProps, styled } from "tamagui";

export const Button = styled(ButtonComponent, {
  h: "$size.4.5",

  variants: {
    background: {
      normal: {
        borderColor: "#ffff",
        borderWidth: "$0",
        bg: "#0063F9",
        pressStyle: {
          bg: "#0258d8",
        },
      },
      outline: {
        bg: "#FFFFFF",
        borderWidth: "$0.75",
        borderColor: "#0063F9",
        color: "#0063F9",
        pressStyle: {
          borderColor: "#0063F9",
          borderWidth: "$0.75",
          bg: "#ffff",
        },
      },
    },
  } as const,
  defaultVariants: {
    background: "normal",
  } as const,
});

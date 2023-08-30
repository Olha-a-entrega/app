import { config } from "@gluestack-ui/themed";

export const defaultTheme = {
  ...config.theme,
  aliases: {
    ...config.theme.aliases,
    newbg: "backgroundColor",
  },
  tokens: {
    ...config.theme.tokens,
    colors: {
      ...config.theme.tokens.colors,
      weq: "red",
      secondary: "green",
    },
  },
  components: {
    Button: {
      // write same component name which is passed in styled
      theme: {
        bg: "$primary500",
        variants: {
          variant: {
            secondary: {
              bg: "$secondary500",
            },
          },
        },
      },
      componentConfig: {
        descendantStyle: ["_text"],
      },
    },
  },
} as const;

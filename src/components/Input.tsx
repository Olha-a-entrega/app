import {
  Text,
  YStack,
  Input as InputComponent,
  XStack,
  InputProps as InputComponentProps,
  Label,
} from "tamagui";

import { ReactNode, useState } from "react";

interface InputProps extends InputComponentProps {
  label: string;
  icon?: ReactNode;
}

export function Input({ label, icon, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <YStack space="$2">
      <Text color="$gray7" fontSize={16}>
        {label}
      </Text>
      <XStack
        boc={isFocused ? "#2e2e2e" : "#bebebe"}
        borderWidth="$0.5"
        ai="center"
        borderRadius="$3"
        pl="$1"
        pr="$3"
        space="$1.5"
      >
        <InputComponent
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          bg="#ffffff"
          boc="#ffff"
          h="$size.4.5"
          f={1}
          placeholderTextColor="#6d6d6d"
          focusStyle={{
            borderColor: "#ffffff",
          }}
          color="#6d6d6d"
          {...rest}
        />
        {icon}
      </XStack>
    </YStack>
  );
}

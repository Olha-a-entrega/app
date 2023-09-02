import { Spinner, YStack, Image } from "tamagui";
import LogoImage from "@assets/logo-image.png";

export function LoadingHomePage() {
  return (
    <YStack f={1} ai="center" jc="center">
      <Spinner size="large" color="$blue9" />
    </YStack>
  );
}

import { Spinner, YStack, Image } from "tamagui";
import LogoImage from "@assets/logo-image.png";

export function LoadingHomePage() {
  return (
    <YStack f={1} ai="center" jc="center" p="$15">
      <YStack fg={1} />
      <YStack jc="space-between" fg={1}>
        <Image source={LogoImage} />
        <Spinner size="large" color="$blue9" />
      </YStack>
    </YStack>
  );
}

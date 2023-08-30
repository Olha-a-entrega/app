import { YStack, Image, Stack } from "tamagui";
import BackgroundImage from "@assets/background-image.jpg";
import { Button } from "@components/Button";

export function HomeScreen() {
  return (
    <YStack px={16} py={24} f={1} ai="center" jc="flex-end">
      <Image source={BackgroundImage} position="absolute" resizeMode="cover" />

      <YStack space="$4" w="100%">
        <Button> Motorista</Button>
        <Button background="outline">Empresa</Button>
      </YStack>
    </YStack>
  );
}

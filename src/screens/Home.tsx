import { YStack, Image, Stack } from "tamagui";
import BackgroundImage from "@assets/background-image.jpg";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function HomeScreen() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  return (
    <YStack px={16} py={24} f={1} ai="center" jc="flex-end">
      <Image source={BackgroundImage} position="absolute" resizeMode="cover" />

      <YStack space="$4" w="100%">
        <Button onPress={() => navigation.navigate("signInDriver")}> Motorista</Button>
        <Button background="outline">Empresa</Button>
      </YStack>
    </YStack>
  );
}

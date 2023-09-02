import { Heading, Image, Stack, YStack, ButtonText, Text, ScrollView } from "tamagui";
import { AntDesign } from "@expo/vector-icons";
import LogoImage from "@assets/logo-image.png";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function SignInCompany() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} bg="#ffffff">
      <YStack f={1} p="$3">
        <YStack ai="center" jc="flex-end" fg={1}>
          <Image source={LogoImage} />
          <Heading color="$gray7">Acesse sua conta</Heading>
        </YStack>

        <YStack w="100%" mt="$size.1">
          <YStack space="$size.1.5">
            <Input
              label="E-mail"
              placeholder="Digite seu e-mail"
              icon={<AntDesign name="eyeo" size={24} color="#6d6d6d" />}
            />
            <Input label="Senha" placeholder="Digite sua senha" secureTextEntry />
          </YStack>

          <YStack space="$size.1.5">
            <ButtonText
              color="#6d6d6d"
              textDecorationLine="underline"
              pl="$size.0.5"
              mt="$size.0.75"
              fontSize="$4"
              pressStyle={{ color: "#2e2e2e" }}
            >
              Esqueceu a senha?
            </ButtonText>
            <Button>Acessar</Button>
          </YStack>

          <YStack space="$size.0.75" mt="$size.6">
            <Text color="#6d6d6d" textAlign="center" fontSize="$4">
              Ainda não tem acesso?
            </Text>
            <YStack space="$size.1">
              <Button background="outline">Criar conta</Button>
              <Button onPress={() => navigation.navigate("signInDriver")}>
                Sou um motorista
              </Button>
            </YStack>
          </YStack>
        </YStack>
      </YStack>
    </ScrollView>
  );
}

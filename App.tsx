import React, { Suspense } from "react";
import { useFonts } from "expo-font";
import { TamaguiProvider, YStack } from "tamagui";
import config from "./tamagui.config";

import { HomeScreen } from "@screens/Home";
import { LoadingHomePage } from "@components/Loading";
import { Routes } from "@routes/index";
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  return (
    <TamaguiProvider config={config}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Routes /> : <LoadingHomePage />}
    </TamaguiProvider>
  );
}

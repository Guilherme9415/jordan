import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import React from "react";

import { useFonts, Anton_400Regular } from "@expo-google-fonts/anton";

import Routes from "./src/router";
import { AppLoading } from "expo";

export default function App() {
  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="auto" backgroundColor="#fff" translucent={true} />
      <Routes />
    </>
  );
}

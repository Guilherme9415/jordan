import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Shoes from "../Shoes";

export default function Footer() {
  return (
    <View>
      <Text style={styles.title}>Você também pode gostar</Text>
      <View style={{ flexDirection: "row" }}></View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ marginHorizontal: 10 }}>
          <Shoes img={require("../../assets/nike12.jpg")} cost="R$540,00">
            Nike Air 15
          </Shoes>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Shoes img={require("../../assets/nike24.jpg")} cost="R$540,00">
            Nike Air 14
          </Shoes>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Shoes img={require("../../assets/jordan25.png")} cost="R$540,00">
            Nike Air 13
          </Shoes>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Shoes img={require("../../assets/nike13.jpg")} cost="R$540,00">
            Nike Air 13
          </Shoes>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Shoes img={require("../../assets/nike15.jpg")} cost="R$540,00">
            Nike Air 13
          </Shoes>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "Anton_400Regular",
    marginVertical: "2%",
    paddingHorizontal: "2%",
  },
});

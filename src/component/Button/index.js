import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Button(props) {
  return (
    <View
      style={[styles.container, { backgroundColor: props.bgColor || "#fff" }]}
    >
      <Text style={[styles.text, { color: props.color || "red" }]}>
        {props.children}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#e6e6e6",
    marginHorizontal: 10,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

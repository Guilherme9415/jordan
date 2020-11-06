import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function Shoes(props) {
  function filterDesc(desc) {
    if (desc.length < 9) {
      return desc;
    }
    return `${desc.substring(0, 9)}...`;
  }
  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image source={props.img} style={styles.ShoesImg} />
      <Text style={styles.ShoesText}>{filterDesc(props.children)}</Text>

      <View opacity={0.4}>
        <Text style={styles.ShoesText}>{props.cost}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: " 2%",
    alignItems: "center",
    justifyContent: "center",
  },
  ShoesImg: {
    width: 150,
    height: 150,
    marginVertical:"10%",
    borderRadius: 8,
  },
  ShoesText: {
    fontSize: 16,
  },
});

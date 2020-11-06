import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";

import Shoes from "../../component/Shoes";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/jordan19.png")}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.jordan}> Air Jordan 23</Text>
        <Image
          source={require("../../assets/icon.png")}
          style={styles.image2}
        />
      </View>
      <ScrollView>
        <Text style={styles.text}>Lançamentos</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes
            img={require("../../assets/nike23.jpg")}
            cost="R$350,00"
            onClick={() => navigation.navigate("Detail")}
          >
            Nike Air 1
          </Shoes>
          <Shoes
            img={require("../../assets/nike15.jpg")}
            cost="R$700,00"
            onClick={() => navigation.navigate("Detail")}
          >
            Nike Air 13
          </Shoes>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes img={require("../../assets/nike13.jpg")} cost="R$570,00">
            Nike Air 1
          </Shoes>
          <Shoes
            img={require("../../assets/nike7.png")}
            cost="R$660,00"
            onClick={() => navigation.navigate("Detail")}
          >
            Nike Air 13
          </Shoes>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes img={require("../../assets/Wel.jpg")} cost="R$400,00">
            Nike Air 1
          </Shoes>
          <Shoes img={require("../../assets/nike24.jpg")} cost="R$540,00">
            Nike Air 13
          </Shoes>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes img={require("../../assets/jordan4.png")} cost="R$460,00">
            Nike Air 1
          </Shoes>
          <Shoes img={require("../../assets/jor.png")} cost="R$580,00">
            Nike Air 13
          </Shoes>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Shoes img={require("../../assets/air3.png")} cost="R$705,00">
            Nike Air 1
          </Shoes>
          <Shoes img={require("../../assets/nike14.jpg")} cost="R$250,00">
            Nike Air 13
          </Shoes>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
  },
  image: {
    width: 358,
    height: 370,
  },
  image2: {
    width: 40,
    height: 40,
    marginHorizontal: "45%",
  },
  container2: {
    backgroundColor: "#fff",
    width: 360,
    height: 400,
    borderRadius: 0,
  },
  jordan: {
    alignItems: "center",
    fontFamily: "Anton_400Regular",
    fontSize: 22,
    marginHorizontal: "30%",
    marginTop: 10,
  },
  text: {
    fontFamily: "Anton_400Regular",
    fontSize: 23,
    marginHorizontal: "3%",
    marginTop: 15,
  },
});

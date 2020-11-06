import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Dot from "../../component/Dot";
import Button from "../../component/Button";
import Buttons from "../../component/Buttons";
import Footer from "../../component/Footer";

export default function Detail() {

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../assets/nike23.jpg")}
        style={styles.Image}
        resizeMode="cover"
      />
      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>R$350,00</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 24 }]}>Nike Air 1 </Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color="red" />
          <Dot color="white" />
          <Dot color="black" />
          <Dot color="yellow" />
        </View>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Button bgColor="#17181a" color="#FFF">
              40
            </Button>
            <Button>41</Button>
            <Button>42</Button>
            <Button>43</Button>
            <Button>44</Button>
          </ScrollView>
        </View>
        <View style={styles.textContent}>
          <Text style={styles.textTitle}>Nike Air 1</Text>

          <Text style={styles.textContent}>
            Desde seu lance vencedor do jogo que trouxe o campeonato nacional
            para a Carolina do Norte, Michael Jordan tem feito sucesso. Ele
            dominou a quadra em 1985 usando o mode original Air Jordan I,
            estabelecendo um novo padrão de desempenho e quebrando
            simultaneamente as regras da liga e a vontade de seus oponentes.
            Sempre evoluindo, a linha Air Jordan é o que existe de mais moderno
            em calçados para Basquete.
          </Text>

          <Text style={styles.textList}>* Estilo e Conforto</Text>
          <Text style={styles.textContent}>
            Apresentando couro Premium e uma unidade Air-Sole de amortecimento,
            o tênis masculino Air Jordan 1 Mid é inspirado no original Air
            Jordan 1, oferecendo conforto e estilo.
          </Text>
        </View>
        <Buttons/>
        <Footer/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
  },
  Image: {
    width: "100%",
    height: 330,
  },
  title: {
    fontFamily: "Anton_400Regular",
    paddingHorizontal: "3%",
  },
  dotContainer: {
    flexDirection: "row",
    marginVertical: "5%",
    marginHorizontal: "3%",
    margin: 10,
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: "2%",
    paddingHorizontal: "2%",
  },
  textTitle: {
    fontSize: 22,
    marginVertical: "2%",
  },
  textList: {
    fontSize: 22,
    marginVertical: "2%",
  },
});

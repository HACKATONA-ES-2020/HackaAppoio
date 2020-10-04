import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import colors from "../constants/colors";

import Header from "../components/HeaderComponent";
import ButtonQRCode from "../components/ButtonQRCode";
import CustomProgressBar from "../components/CustomProgressBar";
import CheckedItem from "../components/CheckedItem";
import { color } from "react-native-reanimated";

export default function DetailStoreScreen({ navigation }) {
  const alcool = false;
  const distanciamento = false;
  const mascara = false;
  const higienizado = false;

  const price = "20,00";
  const number = "7";
  const percentage = "90";

  return (
    <View style={styles.screen}>
      <Header imagePath={require("../assets/cassio.png")}>ModelScreen</Header>
      <View style={styles.content}>
        <View style={styles.title}>
          <View>
            <Text style={styles.listItem}>Centauro</Text>
            <Text style={styles.info}>Av. Bento Gonçalves, 4431</Text>
          </View>
          <View style={styles.discounts}>
            <Text style={styles.discountTitle}>Descontos de</Text>
            <Text style={styles.discountPrice}>R${" " + price}</Text>
          </View>
        </View>

        <Text style={styles.subtitle}>Imagens do local</Text>
        <ScrollView
          style={styles.images}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <Image
            style={styles.image}
            source={require("../../assets/centauro.png")}
          />
          <Image
            style={styles.image}
            source={require("../../assets/centauro.png")}
          />
          <Image
            style={styles.image}
            source={require("../../assets/centauro.png")}
          />
        </ScrollView>

        <Text style={styles.subtitle}>Status</Text>
        <CustomProgressBar
          title={"Lotação " + percentage + "%"}
          subTitle={number + " pessoas na fila"}
          progress={percentage / 100}
          status={
            (percentage < 30 && "bad") ||
            (percentage < 60 && "attention") ||
            (percentage < 100 && "good")
          }
          height={18}
          width={350}
        />

        <Text style={styles.subtitle}>Medidas preventivas</Text>

        <CheckedItem checked={alcool} text="Possui álcool em gel disponível" />
        <CheckedItem
          checked={distanciamento}
          text="É possível respeitar o distanciamento"
        />
        <CheckedItem checked={mascara} text="Público faz o uso de máscara" />
        <CheckedItem checked={higienizado} text="É um local higienizado" />
      </View>
      <View>
        <View style={styles.button}></View>
      </View>
      <ButtonQRCode
        imagePath={require("../../assets/logo.png")}
        onPress={(e) => navigation.navigate("EnterQueueScreen")}
      ></ButtonQRCode>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    margin: 20,
  },
  listItem: {
    fontSize: 35,
    color: colors.text,
    fontWeight: "bold",
  },
  info: {
    color: colors.complementary_primary,
    fontWeight: "bold",
    fontSize: 17,
  },
  subtitle: {
    color: colors.text,
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 15,
    marginBottom: 5,
  },
  images: {
    marginHorizontal: -20,
    paddingLeft: 20,
  },
  image: {
    width: 280,
    height: 120,
    borderRadius: 15,
    marginRight: 10,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  discountTitle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  discountPrice: {
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "right",
    color: colors.green,
  },
  status: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  number: {
    color: colors.complementary_primary,
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 50,
  },
  numberDescription: {
    textAlign: "right",
  },
});

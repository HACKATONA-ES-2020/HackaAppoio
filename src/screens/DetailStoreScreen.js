import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import colors from "../constants/colors";

import Header from "../components/HeaderComponent";
import ButtonQRCode from "../components/ButtonQRCode";
import CustomProgressBar from "../components/CustomProgressBar";

export default function DetailStoreScreen() {
  return (
    <View style={styles.screen}>
      <Header imagePath={require("../assets/cassio.png")}>ModelScreen</Header>
      <View style={styles.content}>
        <Text style={styles.listItem}>Centauro</Text>
        <View style={styles.button}></View>
        <ButtonQRCode
          imagePath={require("../../assets/logo.png")}
          onPress={() => onPress}
        ></ButtonQRCode>
        <Text style={styles.info}>
          <Text>Av. Bento Gonçalves </Text>
        </Text>
        <Text style={styles.imagetext}>Imagens do Local</Text>

        <Text style={styles.imagetext}>Status</Text>

        <CustomProgressBar
          title="Lotação 20%"
          status="good"
          progress={0.3}
          height={18}
          width={280}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listItem: {
    textAlign: "left",
    fontSize: 50,
    color: colors.text,
    fontWeight: "bold",
    fontSize: 25,
    color: colors.text,
    fontWeight: "bold",
    marginTop: 20,
  },
  content: {
    flex: 1,
    alignContent: "space-between",
    marginHorizontal: 20,
  },
  info: {
    color: colors.textPlaceHolder,
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 12,
  },
  imagetext: {
    textAlign: "left",
    color: colors.text,
    fontWeight: "bold",
    fontSize: 20,
    color: colors.text,
    fontWeight: "bold",
    marginTop: 10,
    paddingLeft: 2,
    paddingBottom: 2,
  },
});

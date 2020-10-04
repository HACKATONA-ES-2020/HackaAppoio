import React from "react";
import { StyleSheet, View, Text } from "react-native";
import BarcodeCamera from "../components/BarCodeCamera";
import HeaderComponent from "../components/HeaderComponent";
import colors from "../constants/colors";

export default function QRCodeReaderScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <HeaderComponent imagePath={require("../assets/cassio.png")} />
      <View style={styles.body}>
        <Text style={styles.text}>Aponte seu celular para o código QR</Text>
      </View>
      <View style={styles.camera}>
        <BarcodeCamera
          onChange={(data) => navigation.navigate("EnterQueueScreen", { data })}
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
  text: {
    alignItems: "center",
    justifyContent: "center",
    color: colors.text,
    fontSize: 30,
    fontWeight: "bold",
  },
  body: {
    flex: 3,
    margin: 20,
  },
  camera: {
    flex: 3,
  },
});

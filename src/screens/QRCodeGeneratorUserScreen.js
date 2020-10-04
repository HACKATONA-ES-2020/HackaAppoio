import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import HeaderComponent from "../components/HeaderComponent";
import { QRCode as CustomQRCode } from "react-native-custom-qr-codes-expo";
import colors from "../constants/colors";

export default function App({ navigation }) {
  const [scanned, setScanned] = useState(false);

  return (
    <View style={styles.screen}>
      <HeaderComponent imagePath={require("../assets/cassio.png")} />
      <View style={styles.body}>
        <Text style={styles.title}>
          Para <Text style={styles.name}>entrar </Text>
          no local
        </Text>
        <Text style={[styles.title, styles.subtitle]}>
          Apresente este código QR para algum funcionário:
        </Text>
      </View>
      <View style={styles.container}>
        {/* id : quantidade de pessoas*/}
        <CustomQRCode linearGradient={[colors.primary]} content="4:3" />
      </View>
      <TouchableOpacity
        style={styles.secretButton}
        onPress={() => navigation.navigate("ExitScreen")}
      >
        <Text style={styles.subtext}>
          Assim seus pontos serão validados! :)
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  body: {
    margin: 20,
  },
  title: {
    textAlign: "center",
    justifyContent: "center",
    color: colors.text,
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 30,
  },
  name: {
    color: colors.primary,
    fontWeight: "bold",
  },
  subtext: {
    paddingTop: 20,
    textAlign: "center",
    color: colors.textDisabled,
    fontSize: 20,
    fontWeight: "bold",
  },
  secretButton: {
    backgroundColor: colors.transparent,
  },
});
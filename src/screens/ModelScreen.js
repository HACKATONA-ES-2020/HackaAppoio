import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../constants/colors";
import Header from "../components/HeaderComponent";
import * as Notifications from "expo-notifications";

export default function ModelScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <Header imagePath={require("../assets/cassio.png")}>ModelScreen</Header>
      <TouchableOpacity
        style={styles.content}
        onPress={() => navigation.navigate("QRCodeReaderScreen")}
      >
        <Text style={styles.teste}>QR CODE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.content}
        onPress={() => navigation.navigate("DetailStoreScreen")}
      >
        <Text style={styles.teste}>DetailStoreScreen</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  sayPoints: {
    marginTop: -10,
    marginBottom: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    color: colors.textBlack,
    fontSize: 26,
    fontWeight: "bold",
  },
  points: {
    alignItems: "center",
    justifyContent: "center",
    color: colors.complementary_primary,
    fontSize: 36,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  teste: {
    backgroundColor: colors.primary,
    color: colors.textWhite,
    fontSize: 30,
    paddingVertical: 10,
    fontWeight: "bold",
    borderRadius: 10,
    textAlign: "center",
    elevation: 3,
  },
  nextRestaurants: {
    marginBottom: 10,
    color: colors.textBlack,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  nextqlqrpora: { width: 100 },
  content: { margin: 20 },
  nomeDoLocal: {
    marginBottom: 5,
  },
});

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../constants/colors";

import Header from "../components/HeaderComponent";

export default function ModelScreen() {
  function teste(text) {
    console.log(text);
  }
  return (
    <View style={styles.screen}>
      <Header imagePath={require("../assets/cassio.png")}>ModelScreen</Header>
      <View style={styles.content}>
        <Text style={styles.teste}>ModelScreen</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  teste: {
    alignItems: "center",
    justifyContent: "center",
    color: colors.primary,
    fontSize: 30,
    fontWeight: "bold",
  },
});

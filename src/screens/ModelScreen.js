import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../constants/colors";

export default function ModelScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.teste}>ModelScreen</Text>
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
  teste: {
    alignItems: "center",
    justifyContent: "center",
    color: colors.textWhite,
    fontSize: 30,
    fontWeight: "bold",
  },
});

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
        <Text style={styles.teste}>ModelScreen</Text>
      </TouchableOpacity>
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
    justifyContent: "center",
  },
  teste: {
    backgroundColor: colors.primary,
    color: colors.textWhite,
    fontSize: 30,
    paddingHorizontal: 70,
    paddingVertical: 10,
    fontWeight: "bold",
    borderRadius: 10,
    elevation: 3,
  },
});

import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../constants/colors";

import Header from "../components/HeaderComponent";
import Button from "../components/ButtonComponent";

export default function PositionScreen({ navigation }) {
  const storeName = "Loja";

  return (
    <View style={styles.screen}>
      <Header imagePath={require("../assets/cassio.png")}>ModelScreen</Header>
      <View style={styles.content}>
        <Text style={styles.title}>
          Você está dentro da <Text style={styles.name}>{storeName}</Text>
        </Text>

        <View>
          <Text style={styles.description}>
            Ao sair, pressione o botão abaixo para confirmar a sua visita
          </Text>

          <Text style={styles.validation}>
            Assim seus pontos serão validados :)
          </Text>
        </View>

        <Button
          text="Ja saí do local"
          onPress={() => navigation.navigate("FeedbackScreen")}
        />
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
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    color: colors.text,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  position: {
    alignItems: "center",
    justifyContent: "center",
    color: colors.text,
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
  },
  name: {
    color: colors.primary,
    fontWeight: "bold",
  },
  description: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 25,
    color: colors.textDisabled,
    fontWeight: "bold",
    paddingBottom: 20,
  },
  validation: {
    textAlign: "center",
    fontSize: 20,
    color: colors.text,
    paddingBottom: 60,
  },
});

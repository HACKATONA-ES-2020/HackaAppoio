import React, { useState } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import Header from "../components/HeaderComponent";

import Button from "../components/ButtonComponent";

import colors from "../constants/colors";

export default function ConfirmedFeedback() {
  return (
    <View style={styles.screen}>
      <Header imagePath={require("../assets/cassio.png")}>
        FeedbackScreen
      </Header>
      {/* TODO: pegar foto do firebase */}
      <View style={styles.content}>
        <View>
          <Image
            source={require("../assets/green-check.png")}
            style={styles.image}
          />
          <Text style={styles.title}>Obrigado pelo feedback!</Text>

          <Text style={styles.title}>
            E por estar usando máscara, você ganhou{" "}
            <Text style={styles.span}>100</Text> pontos!
          </Text>
        </View>
        <Button text="Voltar ao início" style={{ marginTop: 80 }} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    justifyContent: "space-between",
    flex: 1,
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    color: colors.text,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.darkGrey,
  },

  span: {
    color: colors.green,
  },
  image: {
    alignSelf: "center",
    width: 110,
    height: 110,
  },
});

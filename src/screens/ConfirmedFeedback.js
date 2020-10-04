import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, View, Text } from "react-native";
import Header from "../components/HeaderComponent";

import Button from "../components/ButtonComponent";

import colors from "../constants/colors";

export default function ConfirmedFeedback() {
  return (
    <View style={styles.screen}>
      <Header imagePath={require("../assets/cassio.png")}>FeedbackScreen</Header>
      {/* TODO: pegar foto do firebase */}
      <ScrollView style={styles.content}>
        <View style={styles.titleContainer}>
          <Image source={require("../assets/green-check.png")} style={{ alignSelf: 'center', width: 110, height: 110, marginTop: 10 }} />
          <Text style={styles.title}>
            Obrigado pelo feedback!
          </Text>

          <Text style={styles.title}>
            E por estar usando máscara, você ganhou <Text style={styles.span}>100</Text> pontos!
          </Text>
        </View>
        <Button text="Continuar" style={{ marginTop: 80 }} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    padding: 20,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    color: colors.text,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 50,
    color: colors.darkGrey
  },
  titleContainer: {
    marginBottom: 80
  },
  span: {
    color: colors.green
  }
});

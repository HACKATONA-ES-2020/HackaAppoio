import React, { useState } from "react";
import { Image, StyleSheet, View, Text, ScrollView } from "react-native";
import Header from "../components/HeaderComponent";

import Button from "../components/ButtonComponent";

import colors from "../constants/colors";
import { CommonActions } from "@react-navigation/native";

export default function ConfirmedFeedback({ navigation }) {
  function returnToHome() {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "HomeScreen" }],
      })
    );
  }

  return (
    <View style={styles.screen}>
      <Header imagePath={require("../assets/cassio.png")}>
        FeedbackScreen
      </Header>
      {/* TODO: pegar foto do firebase */}
      <ScrollView style={styles.content}>
        <View style={{ justifyContent: "space-between" }}>
          <View>
            <Text style={styles.title}>
              <Text style={styles.span}>Obrigado</Text> pelo feedback!
            </Text>
            <Image
              source={require("../assets/thank_you.png")}
              style={{
                alignSelf: "center",
                width: 280,
                height: 280,
                marginTop: 10,
                marginBottom: 10,
              }}
            />
            <Text style={styles.title}>
              E por estar usando máscara, você ganhou{" "}
              <Text style={styles.span}>100</Text> pontos!
            </Text>
          </View>
          <Button
            text="Voltar ao início"
            style={{ marginTop: 50 }}
            onPress={returnToHome}
          />
        </View>
      </ScrollView>
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
    marginTop: 20,
  },

  span: {
    color: colors.complementary_primary,
  },
  image: {
    alignSelf: "center",
    width: 110,
    height: 110,
  },
});

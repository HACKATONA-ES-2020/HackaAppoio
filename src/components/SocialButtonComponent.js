import React from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../constants/colors";

// valores para type:
// - google: botão do Google
// - facebook: botão do Facebook
export default function SocialButtonComponent({ type, onPress, style }) {
  let text = "";
  let imageSource;

  if (type === "google") {
    text = "Entrar com Google";
    imageSource = require("../assets/logo-google.png");
  } else if (type === "facebook") {
    text = "Entrar com Facebook";
    imageSource = require("../assets/logo-facebook.png");
  } else {
    console.error("Expected value on 'type' props.");
  }

  return (
    <TouchableOpacity style={[styles.touchable, style]} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={imageSource} />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 20,
    backgroundColor: colors.textWhite,
    elevation: 4,
    shadowColor: colors.text,
    shadowRadius: 4,
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 1 },
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 28,
    height: 28,
  },
  text: {
    fontSize: 18,
    fontWeight: Platform.OS === "android" ? "bold" : "600",
    color: colors.text,
    marginLeft: 16,
  },
});

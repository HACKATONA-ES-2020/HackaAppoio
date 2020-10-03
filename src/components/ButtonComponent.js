import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../constants/colors";

// valores para type:
// - primary (valor padrão): fundo laranja e texto branco
// - secondary: fundo branco e texto laranja
// - disabled: cinza
export default function ButtonComponent({ text, type = "primary", onPress, style }) {
  let touchableStyle = {};
  let textStyle = {};

  if (type === "secondary") {
    touchableStyle = styles.touchableSecondary;
    textStyle = styles.textSecondary;
  } else if (type === "disabled") {
    touchableStyle = styles.touchableDisabled;
    textStyle = styles.textDisabled;
  } else {
    touchableStyle = styles.touchablePrimary;
    textStyle = styles.textPrimary;
  }

  return (
    <TouchableOpacity style={[styles.touchable, touchableStyle, style]} onPress={onPress} disabled={type === "disabled"}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
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
    paddingHorizontal: 20
  },
  touchablePrimary: {
    backgroundColor: colors.primary
  },
  touchableSecondary: {
    backgroundColor: colors.textWhite,
    elevation: 4,
    shadowColor: colors.text,
    shadowRadius: 4,
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 1 },
  },
  touchableDisabled: {
    backgroundColor: colors.backgroundDisabled
  },
  text: {
    fontSize: 25,
    fontWeight: Platform.OS === "android" ? "bold" : "600"
  },
  textPrimary: {
    color: colors.textWhite,
  },
  textSecondary: {
    color: colors.primary,
  },
  textDisabled: {
    color: colors.textWhite,
  }
});

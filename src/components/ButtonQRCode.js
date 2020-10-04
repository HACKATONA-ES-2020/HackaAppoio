/**
 * Exemplo de chamada na Screen
 * 
 * export default function ModelScreen() {
  const [onPress] = React.useState(0);
  return (
    <View style={styles.screen}>
      <ButtonQRCode
        imagePath={require("../../assets/qr-code.png")}
        onPress={() => onPress}
      ></ButtonQRCode>
    </View>
  );
}
 * 
 */

import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import colors from "../constants/colors";

export default function ButtonQRCode({ background, imagePath, onPress }) {
  onPress = () => {};
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, background && styles.buttonBackground]}
      activeOpacity={0.6}
    >
      <Image style={styles.qrcode} source={imagePath} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 165,
    borderWidth: 35,
    borderColor: colors.primary,
    position: "absolute",
    right: 0,
    bottom: 20,
  },
});

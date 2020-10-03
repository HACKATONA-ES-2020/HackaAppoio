import React, { useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { setStatusBarStyle } from "expo-status-bar";
import colors from "../constants/colors";

import SocialButtonComponent from '../components/SocialButtonComponent';

export default function AuthenticateScreen({ navigation }) {
  useEffect(() => {
    setStatusBarStyle("light")
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require("../../assets/header-large.png")}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <SocialButtonComponent type="google" style={styles.google}/>
        <SocialButtonComponent type="facebook" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: 200,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  socialButton: {
    width: 200,
    height: 50,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  google: {
    marginBottom: 16
  },
});

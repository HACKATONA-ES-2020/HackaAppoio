import React, { useEffect } from "react";
import { StyleSheet, View, Image, Alert } from "react-native";
import { setStatusBarStyle } from "expo-status-bar";
import { CommonActions } from "@react-navigation/native";
import colors from "../constants/colors";

import SocialButtonComponent from "../components/SocialButtonComponent";
import { performGoogleSignIn } from "../api";

export default function AuthenticateScreen({ navigation }) {
  useEffect(() => {
    setStatusBarStyle("light");
  }, []);

  const authenticate = async (provider) => {
    let user;
    try {
      user = await performGoogleSignIn();
    } catch (error) {
      Alert.alert(error.message);
      return;
    }

    console.warn(user);

    // TODO: !!
    navigation.dispatch(
      CommonActions.reset({ index: 0, routes: [{ name: "ExtraInfo" }] })
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require("../assets/header-large.png")}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <SocialButtonComponent
          type="google"
          style={styles.google}
          onPress={() => authenticate("google")}
        />
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
    marginBottom: 16,
  },
});
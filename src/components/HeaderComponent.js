import React, { useState } from "react";
import { StyleSheet, TextInput, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import colors from "../constants/colors";

export default function HeaderComponent({ searchBar, textState, imagePath }) {
  return (
    <View style={styles.header}>
      {searchBar && (
        <View style={styles.searchBar}>
          <Icon style={[styles.icon]} name={"search"} size={25} />
          <TextInput
            style={styles.text}
            onChangeText={(text) => textState(text)}
          />
        </View>
      )}
      {!searchBar && (
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      )}
      <Image style={styles.profile} source={imagePath} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: colors.primary,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    alignItems: "center",
  },
  profile: {
    borderRadius: 100,
    width: 50,
    height: 50,
  },
  logo: {
    width: 225,
    height: 50,
    resizeMode: "contain",
  },
  icon: {
    color: colors.textWhite,
    fontSize: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 17,
    color: colors.textWhite,
    width: "100%",
  },
  searchBar: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.textWhite,
    borderRadius: 15,
    width: "80%",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

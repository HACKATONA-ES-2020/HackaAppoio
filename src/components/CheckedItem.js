import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function CheckedItem({ checked, text }) {
  return (
    <View style={styles.component}>
      {checked ? (
        <Icon name={"check-square"} color={colors.secondary} size={30} />
      ) : (
        <Icon name={"square"} color={colors.secondary} size={30} />
      )}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  text: {
    fontSize: 17,
    paddingLeft: 10,
  },
});

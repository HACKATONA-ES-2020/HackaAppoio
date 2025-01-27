import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../constants/colors";
import CustomProgressBar from "./CustomProgressBar";
export default function ModelComponent({
  text,
  address,
  queueSize,
  discount,
  title,
  progress,
  status,
  onPress,
}) {
  return (
    <TouchableOpacity style={styles.component} onPress={onPress}>
      <View style={styles.flex}>
        <Text style={styles.title}>{text}</Text>
        <Text style={styles.queue}>{queueSize}</Text>
      </View>

      <View style={styles.flex}>
        <Text style={styles.address}>{address}</Text>
        <Text style={styles.queueSize}>Pessoas na fila</Text>
      </View>

      <View style={styles.flex}>
        <View style={styles.flexx}>
          <Text style={styles.discount}>Descontos de até</Text>
          <Text style={styles.dindin}>R$ {discount}.00</Text>
        </View>
        <CustomProgressBar
          title={title + "% da lotação"}
          status={status}
          progress={progress}
          height={7}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flexx: {
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  component: {
    backgroundColor: "#ffffff",
    elevation: 4,
    borderRadius: 8,
    padding: 5,
    justifyContent: "center",
    marginBottom: 15,
  },
  title: {
    color: colors.textPlace,
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "left",
    fontWeight: "bold",
    marginLeft: 5,
    marginTop: -15,
  },
  address: {
    color: colors.textAdress,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 5,
  },
  discount: {
    color: colors.textPlace,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    marginLeft: 5,
  },

  dindin: {
    color: colors.complementary_primary,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    marginLeft: 5,
  },

  queue: {
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    color: colors.complementary_primary,
    fontSize: 36,
    fontWeight: "bold",
  },
  queueSize: {
    color: colors.textAdress,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    marginLeft: 5,
  },
});

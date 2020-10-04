import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../constants/colors";
import CustomProgressBar from "./CustomProgressBar";
export default function ModelComponent({
  text,
  adress,
  queueSize,
  discount,
  dindin,
  queue,
  title, progress, status
}) {
  return (
    <TouchableOpacity style={styles.component}>
      <View style={styles.flex}>
        <Text style={styles.title}>{text}</Text>
        <Text style={styles.queue}>{queue}</Text>
      </View>


      <View style={styles.flex}>
      <Text style={styles.adress}>{adress}</Text>
      <Text style={styles.queueSize}>{queueSize}</Text>
      </View>
     
      <View style={styles.flex}>
      <View style={styles.flexx}>
      <Text style={styles.discount}>{discount}</Text>
        <Text style={styles.dindin}>{dindin}</Text>
        </View>
        <CustomProgressBar title={title} status={status} progress={progress} height={7} />
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
  adress: {
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
    color: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    marginLeft: 5,
  },

  queue: {
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    color: colors.secondary,
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

import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import colors from "../constants/colors";

import Header from "../components/HeaderComponent";
import ButtonQRCode from "../components/ButtonQRCode";
import CustomProgressBar from "../components/CustomProgressBar";

export default function DetailStoreScreen({ prevent }) {
  return (
    <View style={styles.screen}>
      <Header imagePath={require("../assets/cassio.png")}>ModelScreen</Header>
      <View style={styles.content}>
        <Text style={styles.listItem}>Centauro</Text>
        <Text style={styles.info}>
          <Text>Av. Bento Gonçalves, 4431 </Text>
        </Text>
        <Text style={styles.imagetext}>Imagens do local</Text>
        <Image
          style={{
            width: 280,
            height: 120,
            borderRadius: 15,
          }}
          source={require("../../assets/centauro.png")}
        />

        <Text style={styles.imagetext}>Status</Text>

        <CustomProgressBar
          title="Lotação 20%"
          status="good"
          progress={0.3}
          height={18}
          width={280}
        />
        <Text style={styles.imagetext}>Medidas preventivas</Text>
        <Image
          style={{ paddingLeft: 2, paddingTop: 2 }}
          source={require("../../assets/check-square.png")}
        />
        <Image
          style={{ paddingLeft: 2, paddingTop: 2 }}
          source={require("../../assets/check-square.png")}
        />
        <Image
          style={{ paddingLeft: 2, paddingTop: 2 }}
          source={require("../../assets/square.png")}
        />
        <Image
          style={{ paddingLeft: 2, paddingTop: 2 }}
          source={require("../../assets/check-square.png")}
        />
      </View>
      <View>
        <View style={styles.button}></View>
        <ButtonQRCode
          imagePath={require("../../assets/logo.png")}
          onPress={() => onPress}
        ></ButtonQRCode>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    alignContent: "space-between",
  },
  listItem: {
    textAlign: "left",
    fontSize: 50,
    color: colors.text,
    fontWeight: "bold",
    fontSize: 25,
    color: colors.text,
    fontWeight: "bold",
    marginTop: 20,
  },
  content: {
    flex: 1,
    alignContent: "space-between",
    marginHorizontal: 20,
  },
  info: {
    color: colors.complementary_primary,
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 12,
  },
  imagetext: {
    textAlign: "left",
    color: colors.text,
    fontWeight: "bold",
    alignContent: "space-between",
    fontSize: 20,
    marginTop: 10,
    paddingLeft: 2,
    paddingBottom: 2,
  },
  input: {
    flexDirection: "row",
  },
});

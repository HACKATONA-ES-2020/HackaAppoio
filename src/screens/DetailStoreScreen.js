import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import colors from "../constants/colors";

import Header from "../components/HeaderComponent";
import ButtonQRCode from "../components/ButtonQRCode";
import CustomProgressBar from "../components/CustomProgressBar";
import CheckedItem from "../components/CheckedItem";

export default function DetailStoreScreen({ navigation, route }) {
  const { establishment } = route.params;

  const { preventiveMeasures } = establishment;
  const alcool = preventiveMeasures.includes(0);
  const distanciamento = preventiveMeasures.includes(1);
  const mascara = preventiveMeasures.includes(2);
  const higienizado = preventiveMeasures.includes(3);

  const price = `${establishment.maxDiscounts}`;
  const number = `${establishment.usedCapacity}`;
  const percentage = establishment.usedCapacity / establishment.capacity;

  return (
    <View style={styles.screen}>
      <Header imagePath={require("../assets/cassio.png")}>ModelScreen</Header>
      <View style={styles.content}>
        <View style={styles.title}>
          <View>
            <Text style={styles.listItem}>{establishment.name}</Text>
            <Text style={styles.info}>{establishment.address}</Text>
          </View>
          <View style={styles.discounts}>
            <Text style={styles.discountTitle}>Descontos de</Text>
            <Text style={styles.discountPrice}>R${" " + price}</Text>
          </View>
        </View>

        <Text style={styles.subtitle}>Imagens do local</Text>
        <ScrollView
          style={styles.images}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {(establishment.images ?? []).map((imageUrl, index) => {
            return <Image key={index + ""} style={styles.image} source={{ uri: imageUrl }} defaultSource={require("../assets/loading.png")} />;
          })}
        </ScrollView>

        <Text style={styles.subtitle}>Status</Text>
        <CustomProgressBar
          title={"Lotação " + (percentage * 100) + "%"}
          subTitle={number + " pessoas na fila"}
          progress={percentage}
          status={
            (percentage < 0.3 && "good") ||
            (percentage < 0.6 && "attention") ||
            (percentage < 1 && "bad")
          }
          height={18}
          width={350}
        />

        <Text style={styles.subtitle}>Medidas preventivas</Text>

        <CheckedItem checked={alcool} text="Possui álcool em gel disponível" />
        <CheckedItem
          checked={distanciamento}
          text="É possível respeitar o distanciamento"
        />
        <CheckedItem checked={mascara} text="Público faz o uso de máscara" />
        <CheckedItem checked={higienizado} text="É um local higienizado" />
      </View>
      <View>
        <View style={styles.button}></View>
      </View>
      <ButtonQRCode
        imagePath={require("../../assets/logo.png")}
        onPress={(e) => navigation.navigate("EnterQueueScreen")}
      ></ButtonQRCode>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    margin: 20,
  },
  listItem: {
    fontSize: 35,
    color: colors.text,
    fontWeight: "bold",
  },
  info: {
    color: colors.complementary_primary,
    fontWeight: "bold",
    fontSize: 17,
  },
  subtitle: {
    color: colors.text,
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 15,
    marginBottom: 5,
  },
  images: {
    marginHorizontal: -20,
    paddingLeft: 20,
  },
  image: {
    width: 280,
    height: 120,
    borderRadius: 15,
    marginRight: 10,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  discountTitle: {
    fontWeight: "bold",
    fontSize: 15,
  },
  discountPrice: {
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "right",
    color: colors.green,
  },
  status: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  number: {
    color: colors.complementary_primary,
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 50,
  },
  numberDescription: {
    textAlign: "right",
  },
});

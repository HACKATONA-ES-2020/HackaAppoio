import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import colors from "../constants/colors";
import Header from "../components/HeaderComponent";
import ButtonQRCode from "../components/ButtonQRCode";
import PlacesComponent from "../components/PlacesComponent";
import { getEstablishments } from "../api";

export default function HomeScreen({ navigation }) {
  const [establishments, setEstablishments] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getEstablishments();
      setEstablishments(data);
    })();
  }, []);

  return (
    <View style={styles.screen}>
      <Header imagePath={require("../assets/cassio.png")}>ModelScreen</Header>
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.sayPoints}>
            Você tem <Text style={styles.points}> 432 </Text> pontos
          </Text>
          <Text style={styles.nextStores}>{"Lojas próximas"}</Text>
          {establishments.map((item, index) => {
            return (
              <PlacesComponent
                key={index}
                text={item.name}
                onPress={(e) =>
                  navigation.navigate("DetailStoreScreen", {
                    establishment: item,
                  })
                }
                address={item.address}
                discount={item.maxDiscounts}
                queueSize={item.peopleInQueue}
                progress={item.usedCapacity / item.capacity}
                status={
                  (item.usedCapacity / item.capacity < 0.3 && "good") ||
                  (item.usedCapacity / item.capacity < 0.6 && "attention") ||
                  (item.usedCapacity / item.capacity < 1 && "bad")
                }
                title={(item.usedCapacity / item.capacity) * 100}
              />
            );
          })}
        </View>
      </ScrollView>
      <ButtonQRCode
        imagePath={require("../assets/qr-code.png")}
        onPress={(e) => navigation.navigate("QRCodeReaderScreen")}
      ></ButtonQRCode>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  sayPoints: {
    marginTop: -10,
    marginBottom: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    color: colors.textBlack,
    fontSize: 26,
    fontWeight: "bold",
  },
  points: {
    alignItems: "center",
    justifyContent: "center",
    color: colors.complementary_primary,
    fontSize: 36,
    fontWeight: "bold",
  },
  nextStores: {
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    color: colors.textBlack,
    fontSize: 24,
    fontWeight: "bold",
  },
  nextRestaurants: {
    marginBottom: 10,
    color: colors.textBlack,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  content: {
    margin: 20,
  },
  nomeDoLocal: {
    marginBottom: 5,
  },
});

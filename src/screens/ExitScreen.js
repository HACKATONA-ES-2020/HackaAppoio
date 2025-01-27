import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import colors from "../constants/colors";
import { leaveEstablishment } from "../api";

import Header from "../components/HeaderComponent";
import Button from "../components/ButtonComponent";

export default function PositionScreen({ navigation, route }) {
  const { establishment, people: numberOfPeople } = route.params;
  const storeName = establishment.name;

  async function leftEstablishmentPressed() {
    await leaveEstablishment(establishment.id, numberOfPeople);
    navigation.navigate("FeedbackScreen");
  }

  return (
    <View style={styles.screen}>
      <Header imagePath={require("../assets/cassio.png")}>ModelScreen</Header>
      <View style={styles.content}>
        <Text style={styles.title}>
          Você está dentro da <Text style={styles.name}>{storeName}</Text>
        </Text>

        <View>
          <Image
            source={require("../assets/exit.png")}
            style={{
              alignSelf: "center",
              width: 150,
              height: 112.5,
              marginTop: 30,
              marginBottom: 30,
            }}
          />
          <Text style={styles.description}>
            Ao sair, pressione o botão abaixo para confirmar a sua visita
          </Text>

          <Text style={styles.validation}>
            Assim seus pontos serão validados :)
          </Text>
        </View>

        <Button text="Ja saí do local" onPress={leftEstablishmentPressed} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    color: colors.text,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  position: {
    alignItems: "center",
    justifyContent: "center",
    color: colors.text,
    fontSize: 45,
    fontWeight: "bold",
    textAlign: "center",
  },
  name: {
    color: colors.complementary_primary,
    fontWeight: "bold",
  },
  description: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 25,
    color: colors.textDisabled,
    fontWeight: "bold",
    paddingBottom: 20,
  },
  validation: {
    textAlign: "center",
    fontSize: 20,
    color: colors.text,
    paddingBottom: 60,
  },
});

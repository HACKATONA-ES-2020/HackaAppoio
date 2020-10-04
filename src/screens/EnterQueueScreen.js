import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../constants/colors";

import Header from "../components/HeaderComponent";
import Button from "../components/ButtonComponent";

export default function EnterQueue({ navigation }) {
  const [preferencial, setPreferencial] = useState(false);
  const [guestNumber, setGuestNumber] = useState(1);
  const storeName = "Loja";
  return (
    <View style={styles.screen}>
      <Header imagePath={require("../assets/cassio.png")} />
      <View style={styles.content}>
        <Text style={styles.title}>
          Você está prestes a entrar na fila da{" "}
          <Text style={styles.name}>{storeName}</Text>
        </Text>

        <View style={styles.questions}>
          <Text style={styles.question}>
            Quantas pessoas estão no seu grupo?
          </Text>

          <View style={styles.buttons}>
            <Button
              text="-"
              type={guestNumber > 1 ? "secondary" : "disabled"}
              onPress={() => setGuestNumber(guestNumber - 1)}
              style={styles.incrementer}
            />

            <Text style={styles.guestNumber}>{guestNumber}</Text>
            <Button
              text="+"
              type="secondary"
              onPress={() => setGuestNumber(guestNumber + 1)}
              style={styles.incrementer}
            />
          </View>

          <Text style={styles.question}>
            Há alguém que precise de fila preferencial?
          </Text>
          <View style={styles.buttons}>
            <Button
              text="   Sim   "
              type={!preferencial && "secondary"}
              style={preferencial && styles.selected}
              onPress={() => setPreferencial(true)}
            />

            <Button
              text="   Não   "
              type={preferencial && "secondary"}
              style={!preferencial && styles.selected}
              onPress={() => setPreferencial(false)}
            />
          </View>
        </View>
        <Button
          text="Entrar na fila"
          onPress={() => navigation.navigate("PositionScreen")}
        />
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
  name: {
    color: colors.primary,
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  question: {
    textAlign: "center",
    fontSize: 25,
    color: colors.text,
    fontWeight: "bold",
  },
  questions: {
    justifyContent: "space-evenly",
    flex: 1,
  },
  incrementer: {
    borderRadius: 100,
  },
  guestNumber: {
    textAlign: "center",
    color: colors.textWhite,
    fontSize: 50,
    fontWeight: "bold",
    borderRadius: 100,
    padding: 10,
    paddingHorizontal: 30,
    backgroundColor: colors.complementary_primary,
  },
  selected: {
    backgroundColor: colors.complementary_primary,
  },
});

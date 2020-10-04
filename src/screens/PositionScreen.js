import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../constants/colors";
import * as Progress from "react-native-progress";

import Header from "../components/HeaderComponent";
import Button from "../components/ButtonComponent";

export default function PositionScreen({ navigation }) {
  const storeName = "Loja";
  const [position, setPosition] = useState(1);
  const [time, setTime] = useState(5);

  return (
    <View style={styles.screen}>
      <Header imagePath={require("../assets/cassio.png")}>ModelScreen</Header>

      {position > 1 ? (
        <View style={styles.content}>
          <Text style={styles.title}>
            Sua posição na fila da <Text style={styles.name}>{storeName}</Text>:
          </Text>

          <View style={styles.questions}>
            <Text style={styles.position}>
              Você é o <Text style={styles.name}>{position}°</Text> fila
            </Text>
            <Text style={styles.description}>
              Em torno de {time} minutos você será chamado
            </Text>
          </View>
          <Progress.Bar
            indeterminate
            color={colors.primary}
            width={350}
            height={20}
            borderRadius={50}
            animationConfig={{ bounciness: 50 }}
            animationType={"timing"}
          />
        </View>
      ) : (
        <View style={styles.content}>
          <Text style={styles.title}>
            Sua posição na fila da <Text style={styles.name}>{storeName}</Text>:
          </Text>

          <View style={styles.questions}>
            <Text style={styles.position}>Chegou a sua vez!</Text>
            <Text style={styles.description}>
              Vá até a <Text style={styles.name}>{storeName}</Text>:
            </Text>
          </View>
          <Button
            text="Entrar no local"
            onPress={() => navigation.navigate("QRCodeGeneratorUserScreen")}
          />
        </View>
      )}
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
    color: colors.primary,
    fontWeight: "bold",
  },
  description: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 25,
    color: colors.text,
    fontWeight: "bold",
    paddingBottom: 60,
  },
  guestNumber: {
    textAlign: "center",
    color: colors.textWhite,
    fontSize: 50,
    fontWeight: "bold",
    borderRadius: 100,
    padding: 10,
    paddingHorizontal: 30,
    backgroundColor: colors.primary,
  },
});

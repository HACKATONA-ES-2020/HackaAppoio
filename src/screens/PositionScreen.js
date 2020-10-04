import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
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
          <>
            <Text style={styles.position}>
              Você é o <Text style={styles.name}>{position}°</Text> fila
            </Text>
            <Image
              source={require("../assets/time.png")}
              style={{
                alignSelf: 'center',
                width: 400,
                height: 280,
                marginTop: 30,
                marginBottom: 30
              }}
            />
            <Text style={styles.description}>
              Em torno de <Text style={styles.name}>{time}</Text> minutos você será chamado
            </Text>
            <Button
              text="Sair da fila"
              // TODO onPress
            />
          </>
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
          <>
            <Text style={styles.position}>Chegou a sua vez!</Text>
            <Image
              source={require("../assets/celebration.png")}
              style={{
                alignSelf: 'center',
                width: 400,
                height: 300,
                marginTop: 30,
                marginBottom: 30
              }}
            />
            <Text style={styles.description}>
              Vá até a <Text style={styles.name}>{storeName}</Text>
            </Text>
          </>
          <View>
            <Button
              text="Entrar no local"
              onPress={() => navigation.navigate("QRCodeGeneratorUserScreen")}
            />
          </View>
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
    // alignItems: 'center',
    // justifyContent: "space-between",
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
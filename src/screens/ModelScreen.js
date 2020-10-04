import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import colors from "../constants/colors";
import Header from "../components/HeaderComponent";
import PlacesComponent from "../components/PlacesComponent";
export default function ModelScreen() {
  return (
    <ScrollView style={styles.screen}>
      <Header imagePath={require("../assets/cassio.png")}>ModelScreen</Header>
      <View style={styles.content}>
        <Text style={styles.sayPoints}>
          Você tem <Text style={styles.points}> 432 </Text> pontos
        </Text>
        <Text style={styles.nextStores}>{"Lojas próximas"}</Text>
        <PlacesComponent
          text="Centauro "
          adress="Av. Bento Gonçalves, 4431"
          discount="Desconto de até "
          dindin="R$20,00"
          queue="7"
          queueSize="Tamanho da fila"
          progress={0.7}
          status="bad"
          title = "Lotação: 70%"
        />

        <PlacesComponent
          text="Paquetá Esportes"
          adress="Av. Bento Gonçalves, 4431"
          discount="Desconto de até "
          dindin="R$15,00"
          queue="3"
          queueSize="Tamanho da fila"
          progress={0.2}
          status="good"
          title="Lotação: 20%"
        />
        <Text style={styles.nextRestaurants}> {"Restaurantes próximos"} </Text>
        <PlacesComponent
          text="Bar do 32"
          adress="Av. Ipiranga, 6681, P32"
          discount="Sem descontos"
          queue="32"
          queueSize="Tamanho da fila"
          progres={0.5}
          status = "attention"
          title= "Lotação: 50%"
        />
        <PlacesComponent
          text="Palatu's"
          adress="Av. Bento Gonçalves, 4431"
          discount="Desconto de até "
          dindin="R$50,00"
          queue="14"
          queueSize="Tamanho da fila"
          progress={0.2}
          status="good"
          title="Lotação: 20%"

        />
      </View>
    </ScrollView>
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
    color: colors.secondary,
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
  nextqlqrpora: { width: 100 },
  content: { margin: 20 },
  nomeDoLocal: {
    marginBottom: 5,
  },
});

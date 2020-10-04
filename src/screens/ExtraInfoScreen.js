import React, { useLayoutEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { CommonActions } from "@react-navigation/native";
import ButtonComponent from "../components/ButtonComponent";
import colors from "../constants/colors";

function SkipButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.skipButton}>Pular</Text>
    </TouchableOpacity>
  );
}

export default function ExtraInfoScreen({ navigation }) {
  const [cpf, setCpf] = useState("");

  const goToHome = () => {
    navigation.dispatch(
      CommonActions.reset({ index: 0, routes: [{ name: "HomeScreen" }] })
    );
  };

  const skipExtraInfo = () => {
    goToHome();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <SkipButton onPress={skipExtraInfo} />,
    });
  }, [navigation]);

  const saveCPF = () => {
    // TODO: salvar CPF no Firebase também
    goToHome();
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={[styles.text, styles.topText]}>
          Deseja ganhar descontos nos estabelecimentos?
        </Text>
        <Image style={styles.image} source={require("../assets/money.png")} />
        <Text style={styles.text}>Informe seu CPF abaixo:</Text>
        <TextInputMask
          type="cpf"
          value={cpf}
          onChangeText={(cpf) => setCpf(cpf)}
          style={styles.input}
          placeholder="CPF"
          placeholderTextColor={colors.textPlaceHolder}
        />
        <View style={styles.spacer} />
        <View style={styles.continueButtonContainer}>
          <ButtonComponent
            type={cpf.length === 14 ? "primary" : "disabled"}
            text="Continuar"
            onPress={saveCPF}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const FONT_WEIGHT_MEDIUM = Platform.OS === "android" ? "bold" : "600";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: FONT_WEIGHT_MEDIUM,
    color: colors.text,
    textAlign: "center",
  },
  image: {
    marginTop: 15,
    marginBottom: 50,
  },
  topText: {
    marginTop: 10,
  },
  input: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: FONT_WEIGHT_MEDIUM,
    color: colors.textDisabled,
    borderBottomWidth: 1,
    borderBottomColor: colors.text,
    minWidth: 275,
    textAlign: "center",
  },
  spacer: {
    flex: 1,
  },
  continueButtonContainer: {
    width: "100%",
  },
  skipButton: {
    color: colors.textWhite,
    fontSize: 17,
    fontWeight: FONT_WEIGHT_MEDIUM,
    paddingRight: 16,
  },
});

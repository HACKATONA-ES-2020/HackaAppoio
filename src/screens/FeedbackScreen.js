import React, { useState } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import Header from "../components/HeaderComponent";

import Button from "../components/ButtonComponent";
import CustomCheckBox from "../components/CustomCheckBox";

import colors from "../constants/colors";
import texts from "../constants/texts";

export default function FeedbackScreen({ navigation }) {
  const [checkboxes, setCheckboxes] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const onValueChange = (newValue, index) => {
    let newValues = checkboxes;
    newValues[index] = newValue;
    setCheckboxes([...newValues]);
  };

  return (
    <View style={styles.screen}>
      <Header imagePath={require("../assets/cassio.png")}>
        FeedbackScreen
      </Header>
      {/* TODO: pegar foto do firebase */}
      <View style={styles.content}>
        <Text style={styles.title}>Como foi a sua experiência?</Text>
        {texts &&
          texts.checkData.map((value, index) =>
            index !== 4 ? (
              <CustomCheckBox
                label={value}
                value={checkboxes[index]}
                onChange={(newValue) => onValueChange(newValue, index)}
              />
            ) : (
              <View style={styles.maskCheckContainer}>
                <CustomCheckBox
                  label={value}
                  value={checkboxes[index]}
                  onChange={(newValue) => onValueChange(newValue, index)}
                />
                <Image
                  source={require("../assets/QR-camera.png")}
                  style={{
                    width: 50,
                    height: 50,
                    marginTop: 50,
                    marginLeft: 50,
                  }}
                />
              </View>
            )
          )}
        <Button
          text="Enviar Feedback"
          style={{ marginTop: 80 }}
          onPress={() => navigation.navigate("ConfirmedFeedback")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    color: colors.text,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  maskCheckContainer: {
    flexDirection: "row",
  },
});

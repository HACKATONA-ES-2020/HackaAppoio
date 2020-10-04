import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Progress from "react-native-progress";
import colors from "../constants/colors";

/**
 * CustomProgressBar
 *
 * @param status options: attention, bad, good
 * @param progress between 0 and 1
 * @param title text
 * @param height not required
 *
 * @example <CustomProgressBar title="Lotação 20%" status="good" progress={0.3} height={18} />
 */
export default function CustomProgressBar({
  status = "good",
  progress = 0.2,
  title,
  height,
  subTitle,
  ...props
}) {
  const color = {
    attention: colors.yellow,
    bad: colors.error,
    good: colors.green,
  };
  return (
    <View style={styles.container}>
      <Progress.Bar
        progress={progress}
        borderColor="transparent"
        borderRadius={height ? 50 : 6}
        color={color[status]}
        unfilledColor={colors.gray}
        height={height}
        {...props}
      />
      <View style={styles.titles}>
        <Text
          style={{
            color: colors.textPlaceHolder,
            fontSize: 16,
            paddingLeft: 2,
            paddingTop: 5,
          }}
        >
          {subTitle}
        </Text>
        <Text
          style={{
            color: colors.textPlaceHolder,
            fontSize: 16,
            paddingLeft: 2,
            paddingTop: 5,
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
  },
  titles: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

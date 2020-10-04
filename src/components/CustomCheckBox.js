import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import colors from '../constants/colors';

/**
 * CustomCheckBox
 * 
 * @param label text
 * @param onChange callback
 * @param value true or false
 * 
 * @example <CustomCheckBox onChange={func} />
 */

export default function CustomCheckBox({ onChange = () => {}, label, value, key, ...props }) {

  return (
    <TouchableOpacity onPress={() => onChange(!value)} style={styles.container}>
     <CheckBox
        disabled={false}
        value={value}
        onValueChange={(newValue) => onChange(newValue)}
        tintColors={{ true: colors.green }}
        {...props}
      />
      <Text key={`${key}-text`} style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50
  },
  label: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 20,
  }
});

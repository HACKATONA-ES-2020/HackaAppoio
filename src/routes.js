import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import ModelScreen from "./screens/ModelScreen";

const Stack = createStackNavigator();

export function Screens() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ModelScreen" component={ModelScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import ModelScreen from "./screens/ModelScreen";
import PositionScreen from "./screens/PositionScreen";
import QRCodeReaderScreen from "./screens/QRCodeReaderScreen";
import EnterQueueScreen from "./screens/EnterQueueScreen";

const Stack = createStackNavigator();

export function Screens() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ModelScreen" component={ModelScreen} />
        <Stack.Screen name="EnterQueueScreen" component={EnterQueueScreen} />
        <Stack.Screen name="PositionScreen" component={PositionScreen} />
        <Stack.Screen
          name="QRCodeReaderScreen"
          component={QRCodeReaderScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

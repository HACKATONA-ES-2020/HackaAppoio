import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import ExitScreen from "./screens/ExitScreen";
import PositionScreen from "./screens/PositionScreen";
import QRCodeReaderScreen from "./screens/QRCodeReaderScreen";
import EnterQueueScreen from "./screens/EnterQueueScreen";

const Stack = createStackNavigator();

export function Screens() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="EnterQueueScreen" component={EnterQueueScreen} />
        <Stack.Screen name="PositionScreen" component={PositionScreen} />
        <Stack.Screen
          name="QRCodeReaderScreen"
          component={QRCodeReaderScreen}
        />
        <Stack.Screen name="ExitScreen" component={ExitScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

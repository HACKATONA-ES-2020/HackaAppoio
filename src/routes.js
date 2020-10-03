import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import QRCodeReaderScreen from "./screens/QRCodeReaderScreen";
import EnterQueueScreen from "./screens/EnterQueueScreen";

const Stack = createStackNavigator();

export function Screens() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="QRCodeReaderScreen"
          component={QRCodeReaderScreen}
        />
        <Stack.Screen name="EnterQueueScreen" component={EnterQueueScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

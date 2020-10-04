import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import ExitScreen from "./screens/ExitScreen";
import PositionScreen from "./screens/PositionScreen";
import QRCodeReaderScreen from "./screens/QRCodeReaderScreen";
import QRCodeGeneratorUserScreen from "./screens/QRCodeGeneratorUserScreen";
import EnterQueueScreen from "./screens/EnterQueueScreen";
import ModelScreen from "./screens/ModelScreen";
import FeedbackScreen from "./screens/FeedbackScreen";
import ConfirmedFeedback from "./screens/ConfirmedFeedback";

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
        <Stack.Screen name="PositionScreen" component={PositionScreen} />
        <Stack.Screen
          name="QRCodeGeneratorUserScreen"
          component={QRCodeGeneratorUserScreen}
        />
        <Stack.Screen name="ExitScreen" component={ExitScreen} />
        <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
        <Stack.Screen name="ConfirmedFeedback" component={ConfirmedFeedback} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

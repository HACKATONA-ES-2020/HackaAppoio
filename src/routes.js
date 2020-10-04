import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import ModelScreen from "./screens/ModelScreen";
import FeedbackScreen from "./screens/FeedbackScreen";
import ConfirmedFeedback from "./screens/ConfirmedFeedback";

const Stack = createStackNavigator();

export function Screens() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ModelScreen" component={ModelScreen} />
        <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
        <Stack.Screen name="ConfirmedFeedback" component={ConfirmedFeedback} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

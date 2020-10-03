import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import AuthenticateScreen from "./screens/AuthenticateScreen";
import ExtraInfoScreen from "./screens/ExtraInfoScreen";
import ModelScreen from "./screens/ModelScreen";
import colors from "./constants/colors";

const Stack = createStackNavigator();

function Authentication() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Authenticate" component={AuthenticateScreen} />
      <Stack.Screen
        name="ExtraInfo"
        component={ExtraInfoScreen}
        options={{
          headerShown: true,
          headerLeft: null,
          headerTitle: (
            <Image
              source={require("./assets/logo-text.png")}
              style={{ width: 119 }}
            />
          ),
          headerStyle: {
            backgroundColor: colors.primary,
            shadowOpacity: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export function Screens() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ModelScreen" component={ModelScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

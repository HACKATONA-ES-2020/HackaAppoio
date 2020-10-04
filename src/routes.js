import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import AuthenticateScreen from "./screens/AuthenticateScreen";
import ExtraInfoScreen from "./screens/ExtraInfoScreen";
import ModelScreen from "./screens/ModelScreen";
import colors from "./constants/colors";
import { isSignedIn as checkIsSignedIn } from "./api";

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

function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ModelScreen" component={ModelScreen} />
    </Stack.Navigator>
  );
}

export function Screens() {
  const [isSignedIn, setIsSignedIn] = useState(-1);

  useEffect(() => {
    (async () => {
      const signedIn = await checkIsSignedIn();
      setIsSignedIn(signedIn);
    })();
  }, []);

  console.warn("SERASSE", isSignedIn);

  return (
    <NavigationContainer>
      {isSignedIn === -1 && Loading()}
      {isSignedIn === false && Authentication()}
      {isSignedIn === true && App()}
    </NavigationContainer>
  );
}

function Loading() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ActivityIndicator color={colors.primary} size="large" />
    </View>
  );
}

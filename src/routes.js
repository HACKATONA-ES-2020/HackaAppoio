import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import colors from "./constants/colors";
import { isSignedIn as checkIsSignedIn } from "./api";

import ExitScreen from "./screens/ExitScreen";
import PositionScreen from "./screens/PositionScreen";
import QRCodeReaderScreen from "./screens/QRCodeReaderScreen";
import QRCodeGeneratorUserScreen from "./screens/QRCodeGeneratorUserScreen";
import EnterQueueScreen from "./screens/EnterQueueScreen";
import AuthenticateScreen from "./screens/AuthenticateScreen";
import ExtraInfoScreen from "./screens/ExtraInfoScreen";
import ModelScreen from "./screens/ModelScreen";
import FeedbackScreen from "./screens/FeedbackScreen";
import ConfirmedFeedback from "./screens/ConfirmedFeedback";
import FeedbackCameraScreen from "./screens/FeedbackCameraScreen";

const Stack = createStackNavigator();

function Authentication() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="FeedbackCameraScreen"
        component={FeedbackCameraScreen}
      />
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
      {App()}
    </Stack.Navigator>
  );
}

function App() {
  return (
    <>
      {/* TODO: adicionar entrada para telas do fluxo 2 quando prontas */}
      <Stack.Screen name="HomeScreen" component={ModelScreen} />
      <Stack.Screen name="QRCodeReaderScreen" component={QRCodeReaderScreen} />
      <Stack.Screen name="EnterQueueScreen" component={EnterQueueScreen} />
      <Stack.Screen name="PositionScreen" component={PositionScreen} />
      <Stack.Screen
        name="QRCodeGeneratorUserScreen"
        component={QRCodeGeneratorUserScreen}
      />
      <Stack.Screen name="ExitScreen" component={ExitScreen} />
      <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
      <Stack.Screen name="ConfirmedFeedback" component={ConfirmedFeedback} />
    </>
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

  return (
    <NavigationContainer>
      {isSignedIn === -1 && Loading()}
      {isSignedIn === false && Authentication()}
      {isSignedIn === true && (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {App()}
        </Stack.Navigator>
      )}
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

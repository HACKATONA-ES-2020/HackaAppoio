import { AsyncStorage } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import * as Google from "expo-google-app-auth";
import { firebaseConfig, googleSignInConfig } from "./configs";
import { acc } from "react-native-reanimated";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const dbh = firebase.firestore();

// TODO: use dbh to access firestore collections

const performGoogleSignIn = async () => {
  try {
    const data = await _getCachedGoogleSignIn();
    if (data) {
      return data;
    }

    const user = await _googleSignIn();
    await _cacheGoogleSignIn(user);
    return user;
  } catch (error) {
    return null;
  }
};

const _googleSignIn = async () => {
  try {
    const {
      type,
      user,
      accessToken,
      idToken,
      refreshToken,
    } = await Google.logInAsync(googleSignInConfig);

    if (type === "success") {
      const credential = firebase.auth.GoogleAuthProvider.credential(
        idToken,
        accessToken
      );
      await firebase.auth().signInWithCredential(credential);

      return {
        user,
        tokens: {
          accessToken,
          idToken,
          refreshToken,
        },
      };
    }
  } catch (error) {
    throw new Error("Erro na autenticação. Tente novamente.");
  }
};

const GOOGLE_SIGN_IN_STORAGE_KEY = "@virtualline:google-sign-in"

const _cacheGoogleSignIn = async (data) => {
  await AsyncStorage.setItem(GOOGLE_SIGN_IN_STORAGE_KEY, JSON.stringify(data));
}

const _getCachedGoogleSignIn = async () => {
  try {
    const data = await AsyncStorage.getItem(GOOGLE_SIGN_IN_STORAGE_KEY);
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
}

export { performGoogleSignIn };

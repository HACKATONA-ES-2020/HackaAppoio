import * as FileSystem from "expo-file-system";
import { AsyncStorage } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";
import * as Google from "expo-google-app-auth";
import { firebaseConfig, googleSignInConfig } from "./configs";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

/**
 * Persiste uma imagem no Firebase Storage.
 *
 * @param {string} basePath caminho base para a imagem no storage
 * @param {string} filename nome da imagem (com extensão)
 * @param {string} path caminho da imagem no sistema de arquivos
 * @returns {Promise} promise que completa quando o upload é finalizado
 */
export const uploadImage = (basePath, filename, path) => {
  return fetch(path)
    .then((d) => d.blob())
    .then((data) => {
      return firebase
        .storage()
        .ref()
        .child(`${basePath}/${filename}`)
        .put(data);
    });
};

const dbh = firebase.firestore();

// TODO: use dbh to access firestore collections

const isSignedIn = async () => {
  const userInfo = await _getCachedGoogleSignIn();
  return userInfo !== null && userInfo !== undefined;
};

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

const GOOGLE_SIGN_IN_STORAGE_KEY = "@virtualline:google-sign-in";

const _cacheGoogleSignIn = async (data) => {
  await AsyncStorage.setItem(GOOGLE_SIGN_IN_STORAGE_KEY, JSON.stringify(data));
};

const _getCachedGoogleSignIn = async () => {
  try {
    const data = await AsyncStorage.getItem(GOOGLE_SIGN_IN_STORAGE_KEY);
    return JSON.parse(data);
  } catch (error) {
    return null;
  }
};

export { isSignedIn, performGoogleSignIn };

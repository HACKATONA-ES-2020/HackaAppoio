import * as firebase from 'firebase';
import 'firebase/firestore'
import FIREBASE_CONFIG from './firebaseconfig';

if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
}

const dbh = firebase.firestore();

// TODO: use dbh to access firestore collections

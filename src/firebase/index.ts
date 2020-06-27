import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import 'firebase/functions';
import 'firebase/firestore';

// config rules copied from firbase console ---> Project Setting
const config = {
    apiKey: "PROJECT--API--KEY",
    authDomain: "AUTH--DOMAIN",
    databaseURL: "DATABASE--URL",
    projectId: "PROJECT--ID",
    storageBucket: "BUCKET---NAME",
    messagingSenderId: "MESSAGING--SENDER--ID",
    appId: "*:************:web:************",
    measurementId: "G-*********"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

firebase.firestore();

export const firebaseAuth = firebase.auth();
export const firebaseDatabase = firebase.database();
export const firebaseFunctions = firebase.functions();

export interface FirebaseUser extends firebase.User { };

export default firebase;

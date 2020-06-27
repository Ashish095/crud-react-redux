import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import 'firebase/functions';
import 'firebase/firestore';

// config rules copied from firbase console ---> Project Setting
const config = {
    apiKey: "AIzaSyBdc3hTS8VCfQPaDbS2w8MdXMvqFHdvmKs",
    authDomain: "crud-react-redux-4e910.firebaseapp.com",
    databaseURL: "https://crud-react-redux-4e910.firebaseio.com",
    projectId: "crud-react-redux-4e910",
    storageBucket: "crud-react-redux-4e910.appspot.com",
    messagingSenderId: "825075332639",
    appId: "1:825075332639:web:823b48ffd5b4b71988072a",
    measurementId: "G-PGF5ER1N9Z"
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

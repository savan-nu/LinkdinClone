// Import the functions you need from the SDKs you need

import { getAuth , GoogleAuthProvider} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";

import 'firebase/auth';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyDj25sCZxJewiRYUMo8rFORgnsH7PteX-0",
  authDomain: "linkedin-clone-f54a6.firebaseapp.com",
  projectId: "linkedin-clone-f54a6",
  storageBucket: "linkedin-clone-f54a6.appspot.com",
  messagingSenderId: "210295463205",
  appId: "1:210295463205:web:86af3973c7b96074478ecc"
};

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const db = app.firestore;
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage().ref();
// const authentication = app.auth(app);
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const authentication = getAuth(app);
const db = getFirestore(app);
export const store = getStorage();
// export {authentication,provider,storage};
export default db;
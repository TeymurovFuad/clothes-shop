import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDa9UbXGEVyN6xpnTvNfZ44jakflR24qng",
  authDomain: "clothes-shop-1f004.firebaseapp.com",
  databaseURL: "https://clothes-shop-1f004.firebaseio.com",
  projectId: "clothes-shop-1f004",
  storageBucket: "clothes-shop-1f004.appspot.com",
  messagingSenderId: "40515545471",
  appId: "1:40515545471:web:ef0240c52712d3578b924a",
  measurementId: "G-3BMQ34RDVQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

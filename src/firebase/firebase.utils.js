import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/database";
import "firebase/auth";
// import { Date } from "jquery";
// import { useParams, useHistory } from "react-router-dom";
// import RegisterLogin from "../page/register-login/register-login.component";

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

//ASYNC
export const createUSerProfileDcument = async (userAuth, ...additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  console.log("userRef: ", userRef);

  const snapShot = await userRef.get();

  // Console data
  console.group("User data: ");
  console.log(
    "Name: ",
    firestore.collection(`users/${userAuth.uid}/displayName`),
    "\n\nEmail: ",
    auth.currentUser.email,
    "\n\nCurrent User: ",
    auth.currentUser,
    "\n\nsnapShot: ",
    snapShot,
    "\n\nsnapShot.exists: ",
    snapShot.exists
  );
  console.groupEnd();
  // End console data

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    // const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        // createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("Firebase.utils -> Error while creating user", error);
      alert("Error: Could not create a user");
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedColelction = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedColelction.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

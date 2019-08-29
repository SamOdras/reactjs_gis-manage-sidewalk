import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyABJWaGqil_lbvTuUnhv3I9qKM7EVGQCOs",
  authDomain: "crwn-db-bea01.firebaseapp.com",
  databaseURL: "https://crwn-db-bea01.firebaseio.com",
  projectId: "crwn-db-bea01",
  storageBucket: "crwn-db-bea01.appspot.com",
  messagingSenderId: "813263512283",
  appId: "1:813263512283:web:aa3d54ba472ecb80"
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("We got an error : ", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

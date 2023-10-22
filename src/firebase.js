import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
// const apiKey = import.meta.env.VITE_REACT_APP_API;
// const authDomain = import.meta.env.VITE_REACT_APP_AUTH_DOMAIN;
// const projectId = import.meta.env.VITE_REACT_APP_PROJECT_ID;
// const storageBucket = import.meta.env.VITE_REACT_APP_STORAGE_BUCKET;
// const messagingSenderId = import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID;
// const appId = import.meta.env.VITE_REACT_APP_APP_ID;
// const measurementId = import.meta.env.VITE_REACT_APP_MEASUREMENT_ID;


const firebaseConfig = {
  apiKey: "AIzaSyBQ-xD_tGKmhzh1dlDbuZO_rHB7kxqsSF8",

  authDomain: "moviemasala-65898.firebaseapp.com",

  projectId: "moviemasala-65898",

  storageBucket: "moviemasala-65898.appspot.com",

  messagingSenderId: "883834690031",

  appId: "1:883834690031:web:d0aa0ab5ac43216591fe1a",

  measurementId: "G-6D9L069J9X"

};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
  signInWithEmailAndPassword
};

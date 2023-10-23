import React, { createContext, useContext } from 'react';
import { useState } from 'react';
import  app from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';


const Auth = createContext();
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

export default function AuthProvider({ children }) {

  const  [user] = useAuthState(auth)
   
    const [user_is_logged_in, setUser_is_logged_in] = useState("false");
    const [userName,setUserName] = useState("") 
    
    const logout = async () => {
      try{
      signOut(auth);
      setUser_is_logged_in(false)
    }
    catch(error)
    {
      console.log(error);
    }
  }


  

  return (
    <Auth.Provider value={{
     user_is_logged_in,setUser_is_logged_in,userName,setUserName,logout, signInWithGoogle,auth,
     logInWithEmailAndPassword,
     registerWithEmailAndPassword,
     sendPasswordReset,
     signInWithEmailAndPassword,
     useAuthState,user
    }}>
      {children}
    </Auth.Provider>
  );
}


export function useAuth() {
  const context = useContext(Auth);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}
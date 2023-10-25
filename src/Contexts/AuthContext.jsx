import React, { createContext, useContext } from 'react';
import { useState } from 'react';
import  app from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';

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
  updateDoc,
  FieldValue,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const collectionRef = collection(db,"users")

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
const getUserDocRef = (user) => {
  return doc(collection(db, "users"), user.uid);
};

export default function AuthProvider({ children }) {


  const  [user] = useAuthState(auth)
   
    const [user_is_logged_in, setUser_is_logged_in] = useState("false");
    const [userName,setUserName] = useState("") 
    const [emptyWatchlist, setEmptyWatchlist] = useState(true);
    
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
  const handleUpdate = async(id)=> {
    if (user) {
      try {
        const userDocRef = getUserDocRef(user);
       // Assuming 'uid' is the user's unique identifier
        console.log("User UID:", user.uid);
        console.log("User Document Path:", userDocRef.path);
        const userDocSnapshot = await getDoc(userDocRef);
  
        if (userDocSnapshot.exists()) {
          setEmptyWatchlist(false)
          // The user document already exists, update the 'ids' field
          const userData = userDocSnapshot.data();
          const currentIds = userData.ids || [];
          const updatedIds = [...currentIds, id];
  
          await updateDoc(userDocRef, {
            ids: updatedIds,
          }, { merge: true }); 
          alert(id);
        } else {
          // The user document does not exist, create it with 'ids' field
          await setDoc(userDocRef, {
            ids: [id],
          });
          alert(id);
        }
      } catch (err) {
        console.log(err);
      }
    }
    else
    {
      alert("Please sign in before adding movies")
      
    }
  }
  

  return (
    <Auth.Provider value={{
     user_is_logged_in,setUser_is_logged_in,userName,setUserName,logout, signInWithGoogle,auth,
     logInWithEmailAndPassword,
     registerWithEmailAndPassword,
     sendPasswordReset,
     signInWithEmailAndPassword,
     useAuthState,user,db,collectionRef,
     updateDoc,doc,FieldValue,getDoc,setDoc,getUserDocRef,handleUpdate,emptyWatchlist
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
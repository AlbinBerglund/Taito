// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword , onAuthStateChanged, } from "firebase/auth"
import { useEffect, useState } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBirtYxlONU9o_W-Ex_cvLFayh9LXJdWAI",
    authDomain: "login-page-7ef0c.firebaseapp.com",
    projectId: "login-page-7ef0c",
    storageBucket: "login-page-7ef0c.appspot.com",
    messagingSenderId: "908781664103",
    appId: "1:908781664103:web:70beaf97af0a2df837e1c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();



export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}



//custom hook
export function useAuth() {
    const[ currentUser, setCurrentUser ] = useState();

    useEffect(() => {
      const unsub =  onAuthStateChanged(auth, user => setCurrentUser(user));
      return unsub;
    }, [])

    return currentUser;

}


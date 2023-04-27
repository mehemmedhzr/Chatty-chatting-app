import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOWQ0Tk85MwglAsgd9avK24O89pUyQisk",
  authDomain: "chatty-dfeff.firebaseapp.com",
  projectId: "chatty-dfeff",
  storageBucket: "chatty-dfeff.appspot.com",
  messagingSenderId: "53153122013",
  appId: "1:53153122013:web:55eedbc87d40c2c9f4fd34"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
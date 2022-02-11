import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDb2pLA4rQ3o0ZmEUdACGak5A3fPA40Wc",
  authDomain: "clone-3cdad.firebaseapp.com",
  projectId: "clone-3cdad",
  storageBucket: "clone-3cdad.appspot.com",
  messagingSenderId: "984018453733",
  appId: "1:984018453733:web:8997b642ac645d3207400c",
};

const db = getFirestore(firebaseConfig);
const auth = getAuth(firebaseConfig);

export {
  auth,
  db,
  collection,
  createUserWithEmailAndPassword,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
  signInWithEmailAndPassword,
};

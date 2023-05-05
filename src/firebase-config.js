import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8B7qNN9mYCwQA6LxXBMNtt5XNqyf6_Gc",
  authDomain: "schedule-2cf9b.firebaseapp.com",
  databaseURL: "https://schedule-2cf9b-default-rtdb.firebaseio.com",
  projectId: "schedule-2cf9b",
  storageBucket: "schedule-2cf9b.appspot.com",
  messagingSenderId: "575429760892",
  appId: "1:575429760892:web:6c9c0be7394a4c230176f9",
  measurementId: "G-0GRL4BLPYY"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

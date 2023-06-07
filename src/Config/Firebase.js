import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2xUoNxRUeVgoD8ThGxpB0ZM_0ibOZYWU",
  authDomain: "khogachtinp.firebaseapp.com",
  projectId: "khogachtinp",
  storageBucket: "khogachtinp.appspot.com",
  messagingSenderId: "650388909463",
  appId: "1:650388909463:web:d6e493f1f5a0f6c60aa8d2",
  measurementId: "G-C8WD3DSJT8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

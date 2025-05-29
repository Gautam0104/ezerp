// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBh1ADLNICUE4zSt10UVuFp356qO0E-ZQ",
  authDomain: "ezerp-74771.firebaseapp.com",
  projectId: "ezerp-74771",
  storageBucket: "ezerp-74771.appspot.com",
  messagingSenderId: "879008436090",
  appId: "1:879008436090:web:0844728eeee356147050c3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

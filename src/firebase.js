import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyFQURj-rTX1tswPUMEqO1S_HATFkI4qE",
  authDomain: "duck-island.firebaseapp.com",
  projectId: "duck-island",
  storageBucket: "duck-island.appspot.com",
  messagingSenderId: "871984647200",
  appId: "1:871984647200:web:0af1ab523f19819658c045",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore;

export default db;

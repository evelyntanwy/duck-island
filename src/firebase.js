import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyFQURj-rTX1tswPUMEqO1S_HATFkI4qE",
  authDomain: "duck-island.firebaseapp.com",
  projectId: "duck-island",
  storageBucket: "duck-island.appspot.com",
  messagingSenderId: "871984647200",
  appId: "1:871984647200:web:0af1ab523f19819658c045",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

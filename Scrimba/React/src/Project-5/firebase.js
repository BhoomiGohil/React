// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { collection, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnSifBCtz7_oIfSNtcrNnViv3XYW7EJTA",
  authDomain: "react-notes-11d21.firebaseapp.com",
  projectId: "react-notes-11d21",
  storageBucket: "react-notes-11d21.appspot.com",
  messagingSenderId: "6394946939",
  appId: "1:6394946939:web:10ac6cd35f42b1add789de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const notesCollection = collection(bd, "notes");

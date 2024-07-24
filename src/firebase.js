// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCp7wXLzSwVmRUKK6d-sPvYzDh6tW4yQNs",
  authDomain: "app1-84ccc.firebaseapp.com",
  projectId: "app1-84ccc",
  storageBucket: "app1-84ccc.appspot.com",
  messagingSenderId: "281001260968",
  appId: "1:281001260968:web:6f70ceb25ee44fb88a0f9d",
  measurementId: "G-QYG4YE6MCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };

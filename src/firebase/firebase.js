// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD35W8oR5kmiEX6ZI3eXJzJbx4eF0QVacg",
  authDomain: "login-register-6e378.firebaseapp.com",
  projectId: "login-register-6e378",
  storageBucket: "login-register-6e378.firebasestorage.app",
  messagingSenderId: "310308219233",
  appId: "1:310308219233:web:74fc7214ca474c97647d20",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
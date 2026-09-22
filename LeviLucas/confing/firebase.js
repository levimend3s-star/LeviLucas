// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGxMsH5qXOrJztn3jcHGesUF_lRi47HF8",
  authDomain: "levilucas-fec76.firebaseapp.com",
  projectId: "levilucas-fec76",
  storageBucket: "levilucas-fec76.firebasestorage.app",
  messagingSenderId: "363744312476",
  appId: "1:363744312476:web:cb3fc849cc4b6dc4340159",
  measurementId: "G-DC1RWW5C5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
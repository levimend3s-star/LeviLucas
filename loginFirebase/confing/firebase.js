// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK6tViI5dJqfJsueha_zYUL2MEqx4tghc",
  authDomain: "loginfirebase-17349.firebaseapp.com",
  projectId: "loginfirebase-17349",
  storageBucket: "loginfirebase-17349.firebasestorage.app",
  messagingSenderId: "452980232690",
  appId: "1:452980232690:web:cf7ddb842eba5f62a95b6b",
  measurementId: "G-V1ZRCMDEM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
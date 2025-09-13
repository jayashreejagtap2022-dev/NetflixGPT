// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB43VI7OilKWG4z5rqryLLEJ9pnpbSWmYE",
  authDomain: "netflixgpt-web-be48b.firebaseapp.com",
  projectId: "netflixgpt-web-be48b",
  storageBucket: "netflixgpt-web-be48b.firebasestorage.app",
  messagingSenderId: "584133185609",
  appId: "1:584133185609:web:d920989d82bcf968dfaf98",
  measurementId: "G-B3TKWRT260"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

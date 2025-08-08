
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMf-Y0MFqqAbjMNqj0d9JfYg4o59iVPLw",
  authDomain: "clone-1159b.firebaseapp.com",
  projectId: "clone-1159b",
  storageBucket: "clone-1159b.firebasestorage.app",
  messagingSenderId: "796700600336",
  appId: "1:796700600336:web:eb705839f53afca5cac295",
  measurementId: "G-1ZQRBYZYD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth() //for authentication
export const db = getFirestore(app)
export const provider = new GoogleAuthProvider()

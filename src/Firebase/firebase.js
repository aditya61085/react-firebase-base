// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn2_sVCctPYhQwu2CqlyF5uvoQ7L-jhGY",
  authDomain: "fir-common-base.firebaseapp.com",
  projectId: "fir-common-base",
  storageBucket: "fir-common-base.appspot.com",
  messagingSenderId: "319120767965",
  appId: "1:319120767965:web:47bc152cb1ff397c059434",
  measurementId: "G-33YWKVNNNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getDatabase(app);
const store = getFirestore(app);
const googleAuthProvider = GoogleAuthProvider;

export {app, analytics, db, auth, store, googleAuthProvider};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGL-QWF68rqfICsB32Lv6G4x6F9lqqq8Q",
  authDomain: "my-news-e9a16.firebaseapp.com",
  projectId: "my-news-e9a16",
  storageBucket: "my-news-e9a16.appspot.com",
  messagingSenderId: "857072441606",
  appId: "1:857072441606:web:fc598c963a179469136687",
  measurementId: "G-9MJCP22LNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
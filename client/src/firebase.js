// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9da07.firebaseapp.com",
  projectId: "mern-estate-9da07",
  storageBucket: "mern-estate-9da07.appspot.com",
  messagingSenderId: "943089471124",
  appId: "1:943089471124:web:8fc44040ecc270376f2e81"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
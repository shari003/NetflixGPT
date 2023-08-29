/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcWbkcptumD81ADbblZAs7VoRW5R1Fu4E",
  authDomain: "netflixgpt-5a4f4.firebaseapp.com",
  projectId: "netflixgpt-5a4f4",
  storageBucket: "netflixgpt-5a4f4.appspot.com",
  messagingSenderId: "352250165409",
  appId: "1:352250165409:web:2d5e38e18558c8d55498e0",
  measurementId: "G-J5HT0DN0DN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
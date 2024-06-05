// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGRD4SVLBNYa0btxB9JK2aDAz-CcKBTOU",
  authDomain: "prefrank-4930f.firebaseapp.com",
  projectId: "prefrank-4930f",
  storageBucket: "prefrank-4930f.appspot.com",
  messagingSenderId: "313488156964",
  appId: "1:313488156964:web:df55d8da2b3a05405eabb1",
  measurementId: "G-984TN8C78K",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMyOEJaMbGUROizB5N6orLRr0iC7pGI-w",
  authDomain: "managematepro.firebaseapp.com",
  projectId: "managematepro",
  storageBucket: "managematepro.firebasestorage.app",
  messagingSenderId: "58697799247",
  appId: "1:58697799247:web:d950576ef8ccab80b0fc3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

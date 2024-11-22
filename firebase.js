// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChd7lxthGqJurUCA6MAri9Q9vlPcwQ6mE",
  authDomain: "folklore-347e1.firebaseapp.com",
  projectId: "folklore-347e1",
  storageBucket: "folklore-347e1.firebasestorage.app",
  messagingSenderId: "883029706000",
  appId: "1:883029706000:web:0abe97202cded9c6555195"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export the authentication instance
console.log("Firebase App Initialized:", app);

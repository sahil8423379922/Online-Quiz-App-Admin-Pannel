// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // If you are using Firebase Authentication
import { getFirestore } from 'firebase/firestore'; // If you are using Firestore

const firebaseConfig = {

    apiKey: "AIzaSyAGnY18oy4B5G8-lw2r5c6C8vMMDQ2WSdw",
  
    authDomain: "online-quiz-9a890.firebaseapp.com",
  
    projectId: "online-quiz-9a890",
  
    storageBucket: "online-quiz-9a890.appspot.com",
  
    messagingSenderId: "128673955384",
  
    appId: "1:128673955384:web:efa7b3720078b8489df0cd"
  
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services if needed
export const auth = getAuth(app); // For authentication
export const db = getFirestore(app); // For Firestore

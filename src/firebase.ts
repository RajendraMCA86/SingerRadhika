// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ✅ Replace with your Firebase project credentials
const firebaseConfig = {
 apiKey: "AIzaSyD0BSwy7KmROpW1W5OJj0fOKZ2GhbMjsYI",
  authDomain: "hpma-5d741.firebaseapp.com",
  projectId: "hpma-5d741",
  storageBucket: "hpma-5d741.firebasestorage.app",
  messagingSenderId: "157472799597",
  appId: "1:157472799597:web:57c0c11c7ee348f78db864",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

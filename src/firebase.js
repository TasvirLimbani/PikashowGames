// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "",
  authDomain: ".firebaseapp.com",
  projectId: "",
  storageBucket: "firebasestorage.app",
  messagingSenderId: "",
  appId: "1:web:8c8add22840a8041afe823",
  measurementId: "G"
};

// ✅ Initialize Firebase first
const app = initializeApp(firebaseConfig);

// ✅ Now it's safe to use app here
const db = getFirestore(app);

export { app, db };

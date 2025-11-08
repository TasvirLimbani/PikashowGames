// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAfjefH_NIbRlBj9Xpr4IyY5TIp_Gp23_g",
  authDomain: "crazygamesin1.firebaseapp.com",
  projectId: "crazygamesin1",
  storageBucket: "crazygamesin1.firebasestorage.app",
  messagingSenderId: "26057354138",
  appId: "1:26057354138:web:8c8add22840a8041afe823",
  measurementId: "G-25TJS8XJ3D"
};

// ✅ Initialize Firebase first
const app = initializeApp(firebaseConfig);

// ✅ Now it's safe to use app here
const db = getFirestore(app);

export { app, db };


import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCpbb_hXpuz-Z89bd3UlHfDdUi-RzhpgcU",
  authDomain: "bettystore-a1afb.firebaseapp.com",
  projectId: "bettystore-a1afb",
  storageBucket: "bettystore-a1afb.appspot.com",
  messagingSenderId: "52173491228",
  appId: "1:52173491228:web:8504aedae432d801f9a3d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
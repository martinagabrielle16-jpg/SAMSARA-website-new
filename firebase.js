
import { initializeApp } from
  "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";

import {
  getFirestore,
  doc,
  getDoc
} from
  "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from
  "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjxZKtp2RYJJYJtoon3nPGmvfcuuU5KIk",
  authDomain: "samsara-9fa68.firebaseapp.com",
  projectId: "samsara-9fa68",
  storageBucket: "samsara-9fa68.firebasestorage.app",
  messagingSenderId: "23507713401",
  appId: "1:23507713401:web:8826eac233e14c17c8c3a8",
  measurementId: "G-5NR9H6439N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  app,
  db,
  auth,
  doc,
  getDoc,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
};

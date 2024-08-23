import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWw5vhwXvXkQaAOpYigNQiEak7M4PF0Mg",
  authDomain: "app-carrete-cervecero.firebaseapp.com",
  projectId: "app-carrete-cervecero",
  storageBucket: "app-carrete-cervecero.appspot.com",
  messagingSenderId: "188099229307",
  appId: "1:188099229307:web:c847796c13ed865b8014de",
  measurementId: "G-SD79F4BTSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Check if Firebase Analytics is supported before initializing it
isSupported().then((yes) => {
  if (yes) {
    const analytics = getAnalytics(app);
  } else {
    console.log("Firebase Analytics is not supported in this environment.");
  }
}).catch((error) => {
  console.error("Error checking Firebase Analytics support:", error);
});

// Initialize Firebase Auth with AsyncStorage persistence
let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (error) {
  if (error.code === "auth/already-initialized") {
    auth = getAuth(app); // Use the already initialized auth instance
  } else {
    console.error("Error initializing Firebase Auth:", error);
  }
}

// Initialize Firestore
export const db = getFirestore(app);

// Firestore collections references
export const usersRef = collection(db, 'users');
export const roomRef = collection(db, 'rooms');

export { auth };

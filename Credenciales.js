import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvfwPR7z3P-5ApVP4u_bOsyn9404_NcUc",
  authDomain: "logintearsofmisery.firebaseapp.com",
  projectId: "logintearsofmisery",
  storageBucket: "logintearsofmisery.appspot.com",
  messagingSenderId: "787407230267",
  appId: "1:787407230267:web:ee01cf0db638c24167531e",
  measurementId: "G-573DF06N5S"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = initializeAuth(appFirebase, {
  persistence: getReactNativePersistence(AsyncStorage) // Utiliza AsyncStorage
});

export { appFirebase, auth };

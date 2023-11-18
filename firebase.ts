import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQjnkzcUcxkUb_83bM1VBiuupc0HOqQeM",
  authDomain: "saas-ai-translator-app.firebaseapp.com",
  projectId: "saas-ai-translator-app",
  storageBucket: "saas-ai-translator-app.appspot.com",
  messagingSenderId: "748668974613",
  appId: "1:748668974613:web:a2d4956a4bcb2f4bb8001c",
  measurementId: "G-D2T2BB3Y41"
};
const app =getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
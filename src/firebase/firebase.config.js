// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUWx89FXOBXHy1ZpZT2CdOtcH-uVg7ENY",
  authDomain: "alliance-hospital-management.firebaseapp.com",
  projectId: "alliance-hospital-management",
  storageBucket: "alliance-hospital-management.firebasestorage.app",
  messagingSenderId: "68885095750",
  appId: "1:68885095750:web:74b0d84b44f8866024f147"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
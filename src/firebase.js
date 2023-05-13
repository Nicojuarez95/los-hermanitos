// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ5aSnlkQxArK5ZfShCPKHlSSBFYe3WsQ",
  authDomain: "ecommerce-f3408.firebaseapp.com",
  projectId: "ecommerce-f3408",
  storageBucket: "ecommerce-f3408.appspot.com",
  messagingSenderId: "46302056050",
  appId: "1:46302056050:web:8422e077bcfd421e5afceb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
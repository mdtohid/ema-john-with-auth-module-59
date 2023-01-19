// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyhILfRCGNaZLFi_H2xUDb-4A9gK3mhpY",
  authDomain: "ema-john-59-eb5ea.firebaseapp.com",
  projectId: "ema-john-59-eb5ea",
  storageBucket: "ema-john-59-eb5ea.appspot.com",
  messagingSenderId: "370939554751",
  appId: "1:370939554751:web:a45e77c38da6eb5a844f0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


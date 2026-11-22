// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiXAB3NBu7aicVe3ePesEkq_ZWtsszkwI",
  authDomain: "reachedu-81a14.firebaseapp.com",
  projectId: "reachedu-81a14",
  storageBucket: "reachedu-81a14.firebasestorage.app",
  messagingSenderId: "559061276493",
  appId: "1:559061276493:web:c322d6720abd8a32870904"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth(app)
export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHMQ0mAVQb2Sd83M4FmQizXHc-XPyHqBA",
  authDomain: "auth-react-d5e69.firebaseapp.com",
  projectId: "auth-react-d5e69",
  storageBucket: "auth-react-d5e69.appspot.com",
  messagingSenderId: "708193668768",
  appId: "1:708193668768:web:f4e0bd54bb18f61c7e83c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default(auth)
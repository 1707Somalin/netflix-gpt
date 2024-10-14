// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXdDRHfXLGKMgtsjo5EAExWPUeymkfL7E",
  authDomain: "netflixgpt-1fdfa.firebaseapp.com",
  projectId: "netflixgpt-1fdfa",
  storageBucket: "netflixgpt-1fdfa.appspot.com",
  messagingSenderId: "1013117059645",
  appId: "1:1013117059645:web:b0417046db53d69c8be054",
  measurementId: "G-KG0KZC2K7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
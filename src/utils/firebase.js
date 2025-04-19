// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDThNuU86KKh7TNkZ286LhbbA3elNwYmpM",
  authDomain: "cp03-portfolio.firebaseapp.com",
  projectId: "cp03-portfolio",
  storageBucket: "cp03-portfolio.firebasestorage.app",
  messagingSenderId: "446302034137",
  appId: "1:446302034137:web:1e284250cf1872aa0906c8",
  measurementId: "G-E1KT84J51S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const auth = getAuth (app)
const analytics = getAnalytics(app);
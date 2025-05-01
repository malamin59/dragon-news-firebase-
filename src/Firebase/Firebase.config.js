
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVT43fsu1WhXp3iTA1j-77sQ61nwPj5lA",
  authDomain: "dragon-news-braking.firebaseapp.com",
  projectId: "dragon-news-braking",
  storageBucket: "dragon-news-braking.firebasestorage.app",
  messagingSenderId: "757686057402",
  appId: "1:757686057402:web:65d1a9772b78528b904583"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
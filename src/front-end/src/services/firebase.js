// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYL0bVlJ3m63ddVao8Zj7hyZoXv4sCfJo",
  authDomain: "fullstore-552d7.firebaseapp.com",
  projectId: "fullstore-552d7",
  storageBucket: "fullstore-552d7.appspot.com",
  messagingSenderId: "715674498244",
  appId: "1:715674498244:web:9d967f2ea3eecd7326c591",
  measurementId: "G-J8RWR3P60D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
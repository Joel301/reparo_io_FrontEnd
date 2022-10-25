// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWljMcxGRx5I53IV4xSk4pG67DAucUHOk",
    authDomain: "reparo-io.firebaseapp.com",
    projectId: "reparo-io",
    storageBucket: "reparo-io.appspot.com",
    messagingSenderId: "876540195441",
    appId: "1:876540195441:web:3f9351448c69a5f54fa1d0",
    measurementId: "G-B6880WCKTX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

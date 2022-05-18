// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBErmrDupGoB3hQ6aykG41jK4IsuXArRvs",
    authDomain: "simple-to-do-app-8085f.firebaseapp.com",
    projectId: "simple-to-do-app-8085f",
    storageBucket: "simple-to-do-app-8085f.appspot.com",
    messagingSenderId: "105445106733",
    appId: "1:105445106733:web:1afb104ca71943cc6604a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;

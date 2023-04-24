// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZGDM2yCCrqzL8Ez579I9LDOzQQHjR5CI",
    authDomain: "doingly-98cfe.firebaseapp.com",
    projectId: "doingly-98cfe",
    storageBucket: "doingly-98cfe.appspot.com",
    messagingSenderId: "536525089517",
    appId: "1:536525089517:web:f3ace9701723661e457ae4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)
export const auth = getAuth(app)
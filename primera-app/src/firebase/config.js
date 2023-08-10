// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlbEvazLJGLkpJWXeUTcwcbKuR-y42T9A",
    authDomain: "gbviajes-f1f1c.firebaseapp.com",
    projectId: "gbviajes-f1f1c",
    storageBucket: "gbviajes-f1f1c.appspot.com",
    messagingSenderId: "355019907807",
    appId: "1:355019907807:web:878d007451dbe096d5bf6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
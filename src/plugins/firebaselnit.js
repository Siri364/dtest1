// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
    apiKey: "AIzaSyC6afvZbHKuIKUxz-ZCZIHiW812K45rH9k",
    authDomain: "lab-database1.firebaseapp.com",
    projectId: "lab-database1",
    storageBucket: "lab-database1.appspot.com",
    messagingSenderId: "570656170420",
    appId: "1:570656170420:web:9364432893e32aa64952e1",
    measurementId: "G-3EHM790R0Y"
});

const db = getFirestore(firebaseApp);
export default db;
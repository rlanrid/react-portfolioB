import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDYs-9eqQuJp4PL2q-3x05WwWihtjxbReU",
    authDomain: "react-portfolio-ceaee.firebaseapp.com",
    projectId: "react-portfolio-ceaee",
    storageBucket: "react-portfolio-ceaee.appspot.com",
    messagingSenderId: "863227980226",
    appId: "1:863227980226:web:89f4c26d4d51eaa8d1ce5b"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
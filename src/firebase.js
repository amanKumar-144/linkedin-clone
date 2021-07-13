import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCF86OjdbobYaPIox5GyIYdkKWNpyL29w",
    authDomain: "linkedin-4b842.firebaseapp.com",
    projectId: "linkedin-4b842",
    storageBucket: "linkedin-4b842.appspot.com",
    messagingSenderId: "10100755359",
    appId: "1:10100755359:web:e7495086e91a3393830baa",
    measurementId: "G-29VLTSV8L0"
  };


const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};
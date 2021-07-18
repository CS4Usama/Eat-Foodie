import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCryEsrfTBmuT4CmkqBcP6fhn5MqNPDirU",
    authDomain: "eat-foodie-235ab.firebaseapp.com",
    projectId: "eat-foodie-235ab",
    storageBucket: "eat-foodie-235ab.appspot.com",
    messagingSenderId: "232972087823",
    appId: "1:232972087823:web:95e36139dc4bbc14d5a97a",
    measurementId: "G-QECQTM3Z2T"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
// export const storage = firebase.storage();
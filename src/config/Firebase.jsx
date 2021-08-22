import firebase from 'firebase';
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyCJdLTQ-htT13LQDc-CFUj8aFl_0vUNsWI",
  authDomain: "eat-foodie-5e685.firebaseapp.com",
  projectId: "eat-foodie-5e685",
  storageBucket: "eat-foodie-5e685.appspot.com",
  messagingSenderId: "888028122760",
  appId: "1:888028122760:web:ade4c8b863c007b5f6d93d",
  measurementId: "G-5Y1993SJ6Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
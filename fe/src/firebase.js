import firebase from 'firebase/compat/app';

import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/database'
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBVjSphe1yJv_2-rSPRJXOGNgbwzwrurrE",
    authDomain: "smooth-calling-369304.firebaseapp.com",
    projectId: "smooth-calling-369304",
    storageBucket: "smooth-calling-369304.appspot.com",
    messagingSenderId: "1040336973643",
    appId: "1:1040336973643:web:b6aaea4e174ff0d56b02ce",
    measurementId: "G-CVWE8QMQMR"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}
export default db

import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const config = {
    apiKey: "AIzaSyBhws5dwRF8uP4roqvqTD1addGtTZITJno",
    authDomain: "ecommerce-backend-2958f.firebaseapp.com",
    projectId: "ecommerce-backend-2958f",
    storageBucket: "ecommerce-backend-2958f.appspot.com",
    messagingSenderId: "104867015826",
    appId: "1:104867015826:web:8baaebe8029b7c8255ca4b",
    measurementId: "G-G45DZ54LSG"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

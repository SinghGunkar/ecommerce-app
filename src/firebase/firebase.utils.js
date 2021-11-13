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

export const createUserProfileDocument = async (
    userAuth,
    additionalData
) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapshot = await userRef.get()

    if (!snapshot._firestore.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log(
                "Error creating user in firebase.utils",
                error.message
            )
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"

import "./App.css"

import Header from "./components/header/Header"
import HomePage from "./pages/homepage/HomePage"
import ShopPage from "./pages/shop/ShopPage"
import SignInSignUpPage from "./pages/signin-signup/SignInSignUpPage"

import { auth } from "./firebase/firebase.utils"

function App() {
    const [currentUser, setCurrentUser] = useState(null)

    /* for later => extract code below into custom hook */
    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            user ? setCurrentUser(user) : setCurrentUser(null)
        })

        return () => {
            unsubscribeFromAuth()
        }
    }, [currentUser])
    /* for later => extract code above into custom hook */

    return (
        <div>
            <Header currentUser={currentUser} />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route
                    path="/signinsignup"
                    component={SignInSignUpPage}
                />
            </Switch>
        </div>
    )
}

export default App

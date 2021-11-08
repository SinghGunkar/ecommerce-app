import React from "react"
import { Switch, Route } from "react-router-dom"

import "./App.css"

import Header from "./components/header/HeaderComponent"
import HomePage from "./pages/homepage/HomepageComponent"
import ShopPage from "./pages/shop/ShoppageComponent"
import SignInSignUp from "./pages/signin-signup/SignInSignUpComponent"

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route
                    path="/signinsignup"
                    component={SignInSignUp}
                />
            </Switch>
        </div>
    )
}

export default App

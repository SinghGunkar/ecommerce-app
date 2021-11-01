import React from "react"
import { Switch, Route } from "react-router-dom"

import "./App.css"

import HomePage from "./pages/homepage/HomepageComponent"
import ShopPage from "./pages/shop/ShoppageComponent"

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
            </Switch>
        </div>
    )
}

export default App

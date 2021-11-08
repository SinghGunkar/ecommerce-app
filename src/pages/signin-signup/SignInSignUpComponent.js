import React from "react"

import SignIn from "../../components/sign-in/SignIn"

import "./signInSignUpStyles.scss"

const SignInSignUp = () => {
    return (
        <div className="sign-in-sign-up-container">
            <SignIn />
            <SignIn />
        </div>
    )
}

export default SignInSignUp

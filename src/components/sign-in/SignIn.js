import React, { useState } from "react"

import "./signInStyles.scss"
import Button from "../button/Button"

const SignIn = () => {
    const [state, setState] = useState({
        email: "",
        password: ""
    })

    return (
        <div className="sign-in-container">
            <span className="sign-in-title">
                Already have an account?
            </span>
            <span className="sign-in-sub-title">
                Sign in with your email and password
            </span>

            <form className="sign-in-form">
                <input
                    name="email"
                    type="email"
                    value={state.email}
                    required
                />
                <label>Email</label>

                <input
                    name="password"
                    type="password"
                    value={state.password}
                    required
                />
                <label>Password</label>

                <Button type="submit"> Sign in </Button>
            </form>
        </div>
    )
}

export default SignIn

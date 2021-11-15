import React, { useState } from "react"

import Button from "../button/Button"
import FormInput from "../form-input/FormInput"

import "./signUpStyles.scss"

const SignUp = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        conformPassword: ""
    })

    return (
        <div className="sign-up-container">
            <span className="sign-up-title">
                Don't have an account?
            </span>
            <span className="sign-up-sub-title">Sign up instead</span>

            <form
                className="sign-up-form"
                onSubmit={() => console.log("test")}
            >
                <FormInput
                    name="name"
                    type="name"
                    handleChange={() => console.log("test")}
                    value={state.name || ""}
                    label="name"
                    required
                />

                <FormInput
                    name="email"
                    type="email"
                    handleChange={() => console.log("test")}
                    value={state.email || ""}
                    label="email"
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    handleChange={() => console.log("test")}
                    value={state.password || ""}
                    label="password"
                    required
                />

                <FormInput
                    name="confirmPassword"
                    type="password"
                    handleChange={() => console.log("test")}
                    value={state.password || ""}
                    label="confirm password"
                    required
                />

                <Button type="submit"> Sign Up </Button>
            </form>
        </div>
    )
}

export default SignUp

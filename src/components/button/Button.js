import React from "react"

import "./buttonStyles.scss"

const Button = ({ children, isGoogleSignIn, ...otherProps }) => {
    return (
        <button
            className={`${
                isGoogleSignIn ? "google-sign-in" : ""
            } button`}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button

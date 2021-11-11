import React from "react"
import { Link } from "react-router-dom"

import "./headerStyles.scss"

const Header = () => {
    return (
        <div className="header">
            <Link className="logo-wrapper" to="/">
                HOME
            </Link>

            <div className="navigation-links-wrapper">
                <div>
                    <Link className="link" to="/shop">
                        SHOP
                    </Link>
                </div>

                <div>
                    <Link className="link" to="/contact">
                        CONTACT
                    </Link>
                </div>

                <div>
                    <Link className="link" to="/account">
                        ACCOUNT
                    </Link>
                </div>

                <div>
                    <Link className="link" to="/signinsignup">
                        SIGNIN/SIGNOUT
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
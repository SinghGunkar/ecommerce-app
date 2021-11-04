import React from "react"

import "./menuItemStyles.scss"

const MenuItem = ({ title, imageUrl, imageAlt }) => {
    return (
        <div className={`menu-item`}>
            <div className="background-image">
                <img src={imageUrl} alt={imageAlt} />
            </div>

            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
            </div>
        </div>
    )
}

export default MenuItem

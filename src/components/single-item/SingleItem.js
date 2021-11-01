import React from "react"

import "./singleItem.scss"

const SingleItem = ({ name, imageUrl, price }) => {
    return (
        <div className="single-item">
            <div
                className="single-item-image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />

            <div className="single-item-footer">
                <span className="name">{name}</span>
                <span className="price">{"$" + price}</span>
            </div>
        </div>
    )
}

export default SingleItem

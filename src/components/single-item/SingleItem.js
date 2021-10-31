import React from "react"

import "./singleItem.scss"

const SingleItem = () => {
    const data = {
        id: 1,
        name: "Brown Brim",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 25
    }

    return (
        <div className="single-item">
            <div className="single-item-image">
                <img src={data.imageUrl} alt={"test"} />
            </div>

            <div className="single-item-footer">
                <span>{data.name}</span>
                <span>{"$" + data.price}</span>
            </div>
        </div>
    )
}

export default SingleItem

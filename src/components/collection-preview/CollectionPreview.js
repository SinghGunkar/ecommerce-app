import React from "react"

import SingleItem from "../single-item/SingleItem"

import "./collectionPreviewStyles.scss"

const CollectionPreview = ({ title, items }) => {
    return (
        <div className="collection-preview-wrapper">
            <h1>{title}</h1>
            <div className="collection-preview-row">
                {items
                    .filter((_, index) => index < 4)
                    .map(({ id, name, imageUrl, price }) => {
                        return (
                            <div key={id}>
                                <SingleItem
                                    name={name}
                                    imageUrl={imageUrl}
                                    price={price}
                                />
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default CollectionPreview

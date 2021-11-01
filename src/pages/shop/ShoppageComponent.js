import React from "react"

import SHOP_DATA from "./SHOP_DATA"

import CollectionPreview from "../../components/collection-preview/CollectionPreviewComponent"

const ShopPage = () => {
    const shopCollections = SHOP_DATA

    return (
        <div className="shop-page">
            <h1>SHOP PAGE</h1>
            {shopCollections.map(
                ({ id, ...otherShopCategoryProps }) => {
                    return (
                        <CollectionPreview
                            key={id}
                            {...otherShopCategoryProps}
                        />
                    )
                }
            )}
        </div>
    )
}

export default ShopPage

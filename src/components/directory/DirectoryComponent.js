import React from "react"

import MenuItem from "../menu-item/MenuItem"

import "./directoryStyles.scss"

const DirectoryComponent = () => {
    const categories = [
        {
            title: "Womens",
            imageUrl: "https://i.ibb.co/Q9cb6cR/women.jpg",
            id: 4
        },
        {
            title: "Mens",
            imageUrl: "https://i.ibb.co/dgwjrsb/men.jpg",
            id: 5
        },
        {
            title: "Hats",
            imageUrl: "https://i.ibb.co/jgJCw9F/hats.jpg",
            imageAlt: "hats",
            id: 1
        },
        {
            title: "Jackets",
            imageUrl: "https://i.ibb.co/5nD7xjV/jackets.jpg",
            id: 2
        },
        {
            title: "Sneakers",
            imageUrl: "https://i.ibb.co/mBkVPVd/sneakers.jpg",
            id: 3
        }
    ]

    return (
        <div className="directory-comp">
            {categories.map(({ title, imageUrl, id, imageAlt }) => (
                <MenuItem
                    key={id}
                    title={title}
                    imageUrl={imageUrl}
                    imageAlt={imageAlt}
                />
            ))}
        </div>
    )
}

export default DirectoryComponent

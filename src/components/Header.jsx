import React from "react"
import avatar from "../assets/images/user.png"

export default function Header() {
    
    /**
     * Challenge:
     * Raise state up a level and pass it down to both the
     * Header and Body components through props.
     */
    
    const [userName, setUserName] = React.useState("Arun")

    return (
        <header>
            <img src={avatar} />
            <p>{userName}</p>
        </header>
    )
}
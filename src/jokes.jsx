import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)

    function toggle() {
        setIsShown(prev => !prev)
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}

            {isShown && <p>{props.Punchline}</p>}

            <button onClick={toggle}>
                {isShown ? "Hide Punchline" : "Show Punchline"}
            </button>
        </div>
    )
}

import React from "react";

function Message() {
    function handleClick() {
        alert("Button clicked!");
    }
    return (
        <>
            <button onClick={handleClick}>Click me!</button>
        </>
    )
}

export default Message;
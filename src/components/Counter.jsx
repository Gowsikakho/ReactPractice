import React,{use, useState} from "react";

const Counter = () => {
    const [cnt,setCnt] = useState(0);
    const [fac,setFac] = useState(1);
    function increaseCount() {
        setCnt(cnt + fac);
    }
    function decreaseCount() {
        setCnt(cnt - fac);
    }
    return (
        <>
        <h2>Counter = {cnt}</h2>
        <button onClick={increaseCount}>Increment</button>
        <button onClick={decreaseCount}>Decrement</button>
        <h1>Set my factor {fac}</h1>
        <input type="number" value={fac} onChange={(e) => setFac(Number(e.target.value))} />
        
        </>
    )
}
export default Counter;

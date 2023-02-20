'use client'
import { useState } from "react";

export default function Counter(){
    const [counter, setcounter] = useState(0)

    return (
        <>
            <h4>Counter {counter}</h4>
            <hr />
            <button onClick={ () => setcounter( count => count + 1)} >Increment</button>
        </>
    )

}
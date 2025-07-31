import { useState } from "react"

function Onchange(){
    const [text,setText]=useState('')
    function change(e){
        setText(e.target.value)
    }
    return (
        <>
        <h1>{text}</h1>
        <input placeholder="enter your name" onChange={change}></input>
        </>
    )
}
export default Onchange
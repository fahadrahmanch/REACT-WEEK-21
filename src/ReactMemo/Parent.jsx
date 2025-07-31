import { useState } from "react"
import Child1 from "./Child"
const Parent3=()=>{
    const [text,setText]=useState("")
    function change(e){
    setText(e.target.value)
    }
    return(
        <>
        <Child1 welcome={'welcome fahad'}/>
        <h1>{text}</h1>
        <input onChange={()=>change(event)} ></input>
        </>
    )
}
export default Parent3
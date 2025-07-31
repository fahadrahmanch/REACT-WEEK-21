import { useState } from "react"

const Child=({value,func})=>{
  
    return (
        <>
        <h2>{value}</h2>
        <button onClick={()=>func("Prop App")}>click</button>
        </>
    )
}
export default Child
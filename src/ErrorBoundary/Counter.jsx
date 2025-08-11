import React,{ useState } from "react"

function Counter(){
    const [count ,setCount]=useState(0)
    if(count==3){
        throw new Error("count is invalid")
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>setCount(prev=>prev+1)}>click</button>
        </>
    )
}
export default Counter
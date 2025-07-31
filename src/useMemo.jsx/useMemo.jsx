import { useMemo, useState } from "react"

function Parent2(){
    const [count,setCount]=useState(0)
    const count2=useMemo(()=>count+count,[count])
    return(
        <>
        <h1>{count}</h1>
        <h1>{count2}</h1>
        <button onClick={()=>setCount(prev=>prev+1)}>increment</button>
        <button onClick={()=>setCount(prev=>prev-1)}>decrement</button>
        </>
    )
}
export default Parent2
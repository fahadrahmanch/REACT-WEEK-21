import { useCallback, useState } from "react"

function Parent1(){
    const [count,setCount]=useState(0)
    const call=useCallback(()=>{
        console.log("click")
    },[])
    return(
        <>
        <button onClick={call}>click</button>
        <button onClick={() => setCount(count + 1)}>increase</button>
        </>
    )
}
export default Parent1
import { useEffect, useState } from "react"

const stopWatch=()=>{
    const [count,setCount]=useState(0)
    const [start,setStart]=useState(false)
    useEffect(()=>{
        let id
        if(start){
            id=setInterval(()=>{
            setCount(prev=>prev+1)
            },1000)
        }
        return ()=>clearInterval(id)
    },[start])

    function reset(){
        setCount(0)
        setStart(false)
    }
    return(
        <>
        <h1>stopWatch</h1>
        <h1>{count}</h1>
        <button onClick={()=>setStart(true)}>start</button>
        <button onClick={()=>setStart(false)}>stop</button>
        <button onClick={reset}>reset</button>
        </>
    )
}
export default stopWatch
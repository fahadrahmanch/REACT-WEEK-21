import { useRef, useState } from "react"

const Check=()=>{
    const ref=useRef(null)
    const [tick,setTick]=useState(false)
    function check(){
        setTick(!tick)
        ref.current.checked=tick
    }
    return(
        <>
         <input ref={ref} type="checkbox"></input>
         <button onClick={check}>click</button>
        </>
    )
}
export default Check
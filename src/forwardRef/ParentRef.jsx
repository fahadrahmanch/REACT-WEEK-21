import { useRef, useState } from "react"
import ChildRef from "./ChildRef"
function ParentRef(){
    const ref=useRef(null)
    const [bool,setBoll]=useState(false)
    function handle(){
        setBoll(!bool)
        ref.current.checked=!bool
    }
    return(
        <>
        <h1>ForwardRed</h1>
        <ChildRef ref={ref}/>
        <button onClick={handle}>click</button>
        </>
    )
}
export default ParentRef
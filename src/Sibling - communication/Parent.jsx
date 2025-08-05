import { useState } from "react"
import SiblingA from "./SiblingA"
import SiblingB from "./SiblingB"
function SiblingParent(){
    const [message,setMessage]=useState('')

    return(
    <>
    <SiblingA set={setMessage}/>
    <SiblingB mes={message}/>
    </>
    )
}
export default SiblingParent
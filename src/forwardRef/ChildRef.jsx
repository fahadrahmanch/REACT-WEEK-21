import { forwardRef } from "react"

const ChildRef=forwardRef((prop,ref)=>{
    return(

        <input type="checkbox" ref={ref}></input>
    )
})
export default ChildRef
import { useState } from "react"
import Child from "./child"
const Parent=()=>{
    const [state,setState]=useState('')
    const [data,setData]=useState('')
    function ChildToParent(value){
    setData(value)
    }
    return(
        <>
         <h1>{data}</h1>
         <Child value={'click the button'} func={ChildToParent}/>
        </>
    )
}
export default Parent
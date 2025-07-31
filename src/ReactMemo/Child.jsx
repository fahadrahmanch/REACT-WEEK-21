import React from "react"
const Child1=React.memo(({welcome})=>{
    function childFnc(){
        console.log("render")
    }
    childFnc()
    return(
        <>
        <h1>{welcome}</h1>
        </>
    )
})

export default Child1
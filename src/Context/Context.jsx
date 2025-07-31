import { createContext, useState } from "react";

export const context=createContext()
const ContextProvider=({children})=>{
    const [count,setCount]=useState(0)
    function increment(){
        setCount(prev=>prev+1)
    }
    function decrement(){
        setCount(prev=>prev-1)
    }
    function reset(){
        setCount(0)
    }
    return(
    <context.Provider value={{increment,decrement,reset,count}}>
        {children}
    </context.Provider>
    )
}   
export default ContextProvider
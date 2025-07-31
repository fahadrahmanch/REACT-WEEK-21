import React,{useState} from "react"

const Counter=()=>{
    const [count,setCount]=useState(0)
    function increment(){
        setCount(prev=>prev+1)
    }
    function decrement(){
        if(count!=0){
            setCount(prev=>prev-1)
        }
    }
    function reset(){
        setCount(0)
    }
    return (
        <>
        <div>
            <h1>Counter App</h1>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>increment</button>
            <button onClick={reset}>Reset</button>
        </div>
        </>
    )
}
export default Counter
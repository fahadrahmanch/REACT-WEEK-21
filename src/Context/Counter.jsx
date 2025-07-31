import { useContext } from "react"
import { context } from "./Context"
function Counter1(){
    const {increment,decrement,reset,count}=useContext(context)
    return(
    <>
    <h1>{count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    
    </>
    )
}
export default Counter1
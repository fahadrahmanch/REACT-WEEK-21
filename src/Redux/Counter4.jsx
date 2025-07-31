import { useDispatch, useSelector } from "react-redux"
import { increment,decrement,reset } from "./slices/counterSlice"
const Counter4=()=>{
    const dispatch=useDispatch()
    const count=useSelector((state)=>state?.counter?.value)
    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>increment</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
        </>
    )
}
export default Counter4
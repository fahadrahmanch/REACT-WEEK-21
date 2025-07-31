import { useReducer } from "react"

const Counter2=()=>{
    const [state,dispatch]=useReducer(reducer,{count:0})
    function reducer(state,action){
    if(action.type=='increment'){
       return {count:state.count+1}
    }else if(action.type==='decrement'){
        return {count:state.count-1}
    }else{
        return {count:0}
    }
    }
    return(
        <>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>reset</button>
        </>
    )
}
export default Counter2
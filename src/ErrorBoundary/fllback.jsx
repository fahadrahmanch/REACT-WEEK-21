function Fallback({error}){
    return(
        <div style={{color:'red'}}>
            <h1>something went wrong</h1>
            <h1>{error.message}</h1>
        </div>
    )
}
export default Fallback
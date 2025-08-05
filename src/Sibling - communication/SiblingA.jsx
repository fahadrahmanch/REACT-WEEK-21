function SiblingA({set}){
    function change(e){
        set(e.target.value)
    }
    return(
        <>
        <h1>SibilingA</h1>
        <input onChange={change}></input>
        </>
    )
}
export default SiblingA
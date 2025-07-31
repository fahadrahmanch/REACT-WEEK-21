import { useNavigate } from "react-router-dom"
const Home=()=>{
    const navigate=useNavigate()
    return(
        <>
        <button onClick={()=>navigate('/counter')}>countet App</button><br/><br></br>
        <button onClick={()=>navigate('/stopwatch')}>stopwatch App</button><br/><br></br>
        <button onClick={()=>navigate('/check')}>check App</button><br/><br></br>
        <button onClick={()=>navigate('/onchange')}>onchange App</button><br/><br></br>
        </>
    )
}
export default Home
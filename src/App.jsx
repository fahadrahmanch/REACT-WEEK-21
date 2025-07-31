import Counter from './Counter'
import StopWatch from './stopWatch'
import Check from './useRef'
import Home from './home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/stopwatch' element={<StopWatch/>}/>
      <Route path='/check' element={<Check/>}/>
    </Routes>
    </BrowserRouter>
     
    
    </>
  )
}

export default App

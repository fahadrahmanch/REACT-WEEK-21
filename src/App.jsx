import Counter from './Counter'
import StopWatch from './stopWatch'
import Check from './useRef'
import Home from './home'
import Onchange from './onChange'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Parent from './parent'
import Parent1 from './useCallback/useCallback'
import Parent2 from './useMemo.jsx/useMemo'
import Parent3 from './ReactMemo/Parent'
import './App.css'

function App() {
 

  return (
    <>
    {/* <Parent/> */}
    {/* <Parent1/> */}
    {/* <Parent2/> */}
    <Parent3/>
    {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/stopwatch' element={<StopWatch/>}/>
      <Route path='/check' element={<Check/>}/>
      <Route path='/onchange' element={<Onchange/>}/>
    </Routes>
    </BrowserRouter> */}
    </>
  )
}

export default App

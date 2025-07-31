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
import Counter1 from './Context/Counter'
import Counter2 from './useReducer/Counter2'
import './App.css'
import React,{ Suspense } from 'react'

const Lazy=React.lazy(()=>import('./ReactLazy.jsx/Counter'))
function App() {
  return (
    <>
    {/* <Parent/> */}
    {/* <Parent1/> */}
    {/* <Parent2/> */}
    {/* <Parent3/> */}
    {/* <Counter1/> */}
    {/* <Counter2/> */}
    <Suspense fallback={'loading'}>
    <Lazy/>
    </Suspense>
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

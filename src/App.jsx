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
import Counter4 from './Redux/Counter4'
import './App.css'
import React,{ Suspense } from 'react'
import SiblingParent from './Sibling - communication/Parent'
import ParentRef from './forwardRef/ParentRef';
const Lazy=React.lazy(()=>import('./ReactLazy.jsx/Counter'))
import Counter5 from './ErrorBoundary/Counter'
import { ErrorBoundary } from 'react-error-boundary'
import Fallback from './ErrorBoundary/fllback'
function App() {
  return (
    <>
    {/* <Parent/> */}
    {/* <Parent1/> */}
    {/* <Parent2/> */}
    {/* <Parent3/> */}
    {/* <Counter1/> */}
    {/* <Counter2/> */}
    {/* <Counter4/> */}
    {/* <SiblingParent/> */}
    {/* <ParentRef/> */}
    <ErrorBoundary FallbackComponent={Fallback}>
    <Counter5/>
    </ErrorBoundary>

    {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/stopwatch' element={<StopWatch/>}/>
      <Route path='/check' element={<Check/>}/>
      <Route path='/onchange' element={<Onchange/>}/>
    </Routes>
    </BrowserRouter> */}
      {/* <Suspense fallback={'loading'}>
    <Lazy/>
    </Suspense> */}
    </> 
  )
}

export default App

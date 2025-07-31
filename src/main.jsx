import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './Context/Context.jsx'
import Store from './Redux/Store/store.js'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ContextProvider> */}
    <Provider store={Store}>
    <App />
    </Provider>
    {/* </ContextProvider> */}
  </StrictMode>,
)

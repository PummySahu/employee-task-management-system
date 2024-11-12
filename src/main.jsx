import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './context/AuthContext.jsx'
import { setLocalStorage } from './utils/localstorage.jsx'




// setLocalStorage()      // Initialize localStorage on first render
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthContext>
      
          <App />

    </AuthContext>
   
  </StrictMode>,
)

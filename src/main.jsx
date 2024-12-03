import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FirebaseProvider from './context/FirebaseContext.jsx'
import FirebaseAuthProvider from './context/FirebaseAuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseAuthProvider>
      <FirebaseProvider >
           <App />
      </FirebaseProvider>
    </FirebaseAuthProvider>
  </StrictMode>,
)

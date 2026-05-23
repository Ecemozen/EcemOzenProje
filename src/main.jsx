import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // İşte bu sihirli satır eksikti, bunu ekledik!
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
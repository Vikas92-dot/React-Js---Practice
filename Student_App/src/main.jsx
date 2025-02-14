import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppFunction from './AppFunction.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppFunction />
  </StrictMode>,
)

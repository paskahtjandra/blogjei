/**
 * @copyright 2024 paskahtjandra
 * @license Apache-2.0
 */

// node modules
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//css
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

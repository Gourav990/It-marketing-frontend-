import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// AOS: Animate On Scroll
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS once before rendering
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

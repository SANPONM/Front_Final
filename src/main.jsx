// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header/Header.jsx'
import Footer from './footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Footer />
  </StrictMode>,
)

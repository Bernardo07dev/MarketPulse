import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Route, Routes, BrowserRouter} from "react-router-dom";
import Login from './Login.jsx'
import Home from './pages/home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

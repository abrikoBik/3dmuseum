import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import './index.css'
import Space from './Space.tsx'
import Spy from './Spy.tsx'
import Home from './Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router basename="3dmuseum">
      <Routes>
        <Route path="/spy" element={<Spy/>}/>
        <Route path="/space" element={<Space/>}/>
        <Route path="/3dmuseum" element={<Home/>}/>
      </Routes>
    </Router>
  </StrictMode>,
)

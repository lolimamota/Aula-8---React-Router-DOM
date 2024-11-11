import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import RotaA from './components/RotaA'
import RotaB from './components/RotaB'
import RotaC from './components/RotaC'
import RotaD from './components/RotaD'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/rota-a">Rota A</Link>
        <Link to="/rota-b">Rota B</Link>
        <Link to="/rota-c">Rota C</Link>
        <Link to="/rota-d">Rota D</Link>
        <Routes>
          <Route path="/rota-a" element={<RotaA />} />
          <Route path="/rota-b" element={<RotaB />} />
          <Route path="/rota-c" element={<RotaC />} />
          <Route path="/rota-d" element={<RotaD />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
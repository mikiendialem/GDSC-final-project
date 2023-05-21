import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Mount from './components/Mount'
import Beach from './components/Beach'
import Home from './components/Home'
import Birds from './components/Birds'
import Food from './components/Food'
import All from './components/All'

function App() {
  return (
    <Router>
      <div>
        <Home />
        <div>
          <Routes>
            <Route path="/" element={<All />} />
            <Route path="/mountain" element={<Mount />} />
            <Route path="/beaches" element={<Beach />} />
            <Route path="/birds" element={<Birds />} />
            <Route path="/food" element={<Food />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

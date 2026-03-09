import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Careers } from './pages/Careers'
import { About } from './pages/About'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

export const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}
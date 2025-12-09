import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import './app.css'
import Footer from './components/Footer/Footer.jsx'
import Portfolio from './Pages/Portfolio/Portfolio.jsx'
import Contact from './Pages/contact/contact.jsx'
import Process from './Pages/Process/Process.jsx'
import Privacy from './Pages/Privacy/privacy.jsx'
import Terms from './Pages/Terms/Terms.jsx'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />  
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/process' element={<Process/>} />  
        <Route path='/privacy' element={<Privacy/>} />
        <Route path='/terms' element={<Terms/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

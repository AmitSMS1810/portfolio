import React from 'react'
import Navbar from './Componets/Navbar'
import Home from './Componets/Home'
import Aboutus from './Componets/Aboutus'
import Portfolio from './Componets/Portfolio'
import Experience from './Componets/Experience'
import Footer from './Componets/Footer'
import Contact from './Componets/Contact'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <div>
      <Navbar/>
      <Home/>
      <Aboutus/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <Footer/>
      </div>
      <Toaster/>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Veeru from './first'
// import Slick from './slick/slick'
import Testing from './testing/testing'
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import Home from './testing/home'
import AboutPage from './about/Aboutus'


function App() {
  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Testing/>}/>
      <Route path='/home' element = {<Home/>}/>
    </Routes>
    </BrowserRouter> */}
    <AboutPage/>
    {/* <Slick/> */}
    {/* <Veeru/> */}
    </>
  )
}

export default App

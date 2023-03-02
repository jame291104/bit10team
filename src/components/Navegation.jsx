import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Home } from './Home'
import { AboutUs } from './AboutUs'



export const Navegation = () => {
  return (
    <BrowserRouter>

        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        </Routes>
        </BrowserRouter>
    
  )
}

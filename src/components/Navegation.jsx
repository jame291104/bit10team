import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Home } from './Home'
import { AboutUs } from './AboutUs'
import { Favorites } from "./Favorites";



export const Navegation = () => {
  return (
    <BrowserRouter>

        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/Favorites' element={<Favorites/>} />
        </Routes>
        </BrowserRouter>
    
  )
}

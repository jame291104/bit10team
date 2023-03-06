import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Home } from './Home'
import { AboutUs } from './AboutUs'
import { Favorite } from './Favorite'


export const Navegation = () => {
  return (
    <BrowserRouter>

        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/Favorite' element={<Favorite/>} />
        </Routes>
        </BrowserRouter>
    
  )
}

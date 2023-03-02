import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { Home } from './Home'
import { AboutUs } from './AboutUs'



export const Navegation = () => {
  return (
    <BrowserRouter>
        <nav className='text-left p-3 py-4'>
            <Link className="h3" to='/'>Home</Link>
            <Link className="h3" to='/AboutUs'>Nosotros</Link>
        </nav>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        </Routes>
        </BrowserRouter>
    
  )
}

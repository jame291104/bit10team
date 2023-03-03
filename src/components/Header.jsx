import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
    <div className='d-flex flex-row justify-content-around py-4 bg-dark text-white'>
      <figure>
        <img src="./public/img/logoLibraryGamer.png" alt="Logo Library Gamer"
            className='rounded-circle'
            width={120}
            height={120} 
             />
      </figure>
      <nav className='d-flex flex-row justify-content-end align-items-center'>
        <div className=''>
        <Link
          className="h4 p-3 text-decoration-none" 
          to='/'>Home
        </Link>
        <Link
          className="h4 p-3 text-decoration-none" 
          to='/AboutUs'>Nosotros
        </Link>
        </div>
      </nav>     
    </div>
  )
}
export default Header;

import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderAU = () => {
  return (
    <div className='d-flex d-lg-block flex-row justify-content-around py-1 bg-dark text-white'>
      <div id='contenedor' className='d-flex flex-column p-1'>
        <div id='navegacion' className='d-flex flex-row justify-content-around border border-info rounded'>
          <figure>
            <img src="/img/logoLibraryGamer.png" alt="Logo Library Gamer"
                className='rounded-circle responsiveLogo'
                width={120}
                height={120} 
                />
          </figure>
          <nav className='d-flex flex-row justify-content-end align-items-center'>
            <div className=''>
            <Link
              className="h4 p-3 text-decoration-none text-light" 
              to='/'>Home
            </Link>
            <Link
              className="h4 p-3 text-decoration-none text-light" 
              to='/Favorites'>Favorites
            </Link>
            <Link
              className="h4 p-3 text-decoration-none text-light" 
              to='/AboutUs'>Team
            </Link>
            </div>
          </nav>
        </div>
        </div>
    </div>
    );
}

export default HeaderAU;
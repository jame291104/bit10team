import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';


export const Header = () => {
  return (
    <div className='d-flex d-lg-block flex-row justify-content-around py-1 bg-dark text-white'>
      <div id='contenedor' className='d-flex flex-column p-1'>
        <div id='navegacion' className='d-flex flex-row justify-content-around border border-info rounded'>
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
              className="h4 p-3 text-decoration-none text-light" 
              to='/'>Home
            </Link>
            <Link
              className="h4 p-3 text-decoration-none text-light" 
              to='/AboutUs'>About Us
            </Link>
            </div>
          </nav>
        </div>
        <div id='carrusel'>
          <Carousel className='p-2'>
            <Carousel.Item>
            <img
              className="d-block w-100"
              width={1800}
              height={600}
              src="./public/img/Forza.jpeg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
              className="d-block w-100"
              width={1800}
              height={600}
              src="./public/img/fallguys.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
              className="d-block w-100"
              width={1800}
              height={600}
              src="./public/img/forniteDJ.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
            </Carousel.Item>
          </Carousel>  
        </div> 
      </div>  
    </div>
);
}

export default Header;

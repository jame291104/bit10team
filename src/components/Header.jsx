import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';


export const Header = () => {
  return (
    <div className='d-flex d-lg-block flex-row justify-content-around py-1 bg-dark text-white'>
      <div id='contenedor' className='d-flex flex-column p-1'>
        <div id='navegacion' className='d-flex flex-row justify-content-around border border-info rounded'>
          <figure>
            <img src="/img/logoLibraryGamer.png" alt="Logo Library Gamer"
                className='rounded-circle responsiveLogo'
                width={100}
                height={100} 
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
        <div id='carrusel'>
          <Carousel className='p-2 responsiveCarrusel'>
            <Carousel.Item className='border border-info responsiveCarrusel'>
            <img
              className="d-block w-100 p-1"
              width={1800}
              height={600}
              src="/img/Forza.jpeg"
              alt="Primera Imagen"
            />
            </Carousel.Item>

            <Carousel.Item className='border border-info responsiveCarrusel'>
            <img
              className="d-block w-100 p-1"
              width={1800}
              height={600}
              src="/img/fallguys.png"
              alt="Segunda Imagen"
            />
            </Carousel.Item>

            <Carousel.Item className='border border-info responsiveCarrusel'>
            <img
              className="d-block w-100 p-1"
              width={1800}
              height={600}
              src="/img/forniteDJ.jpg"
              alt="Tercera Imagen"
            />
            </Carousel.Item>

            <Carousel.Item className='border border-info responsiveCarrusel'>
            <img
              className="d-block w-100 p-1"
              width={1800}
              height={600}
              src="/img/valorant.webp"
              alt="Cuarta Imagen"
            />
            </Carousel.Item>

            <Carousel.Item className='border border-info responsiveCarrusel'>
            <img
              className="d-block w-100 p-1"
              width={1800}
              height={600}
              src="/img/TLOUP1.jpeg"
              alt="Quinta Imagen"
            />
            </Carousel.Item>

            <Carousel.Item className='border border-info responsiveCarrusel'>
            <img
              className="d-block w-100 p-1"
              width={1800}
              height={600}
              src="/img/RE2.jpeg"
              alt="Sexta Imagen"
            />
            </Carousel.Item>

            <Carousel.Item className='border border-info responsiveCarrusel'>
            <img
              className="d-block w-100 p-1"
              width={1800}
              height={600}
              src="/img/overwatch2.webp"
              alt="Septima Imagen"
            />
            </Carousel.Item>

            <Carousel.Item className='border border-info responsiveCarrusel'>
            <img
              className="d-block w-100 p-1"
              width={1800}
              height={600}
              src="/img/NIER.jpeg"
              alt="Octava Imagen"
            />
            </Carousel.Item>

            <Carousel.Item className='border border-info responsiveCarrusel'>
            <img
              className="d-block w-100 p-1"
              width={1800}
              height={600}
              src="/img/CODW.jpeg"
              alt="Novena Imagen"
            />
            </Carousel.Item>

            <Carousel.Item className='border border-info responsiveCarrusel'>
            <img
              className="d-block w-100 p-1"
              width={1800}
              height={600}
              src="/img/pubgimage.webp"
              alt="Third slide"
            />
            </Carousel.Item>

            <Carousel.Item className='border border-info responsiveCarrusel'>
            <img
              className="d-block w-100 p-1"
              width={1800}
              height={600}
              src="/img/apex.jpeg"
              alt="Third slide"
            />
            </Carousel.Item>

          </Carousel>  
        </div> 
      </div>  
    </div>
);
}

export default Header;

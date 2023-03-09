import React from 'react'
import { Link } from 'react-router-dom'




export const Footer = () => {
  return (
    <div className='d-flex d-block flex-row justify-content-around py-4 bg-dark text-white border border-info rounded'>
      <div>
        <img 
        src="/public/img/logoLibraryGamer.png" 
        alt="logo Library Gamer"
        className='rounded-circle'
        width={120}
        height={120} 
        />
      </div>
      <div>
        <h4>Teacher:<br /> Javier Garzón</h4>
        <p>BIT 2023<br/>
           Bogotá D.C - Colombia
        </p>
      </div>
      <div className='d-flex align-items-center '> 
        <h4>Send a Message</h4>
      </div>
      <div className='d-flex flex-column justify-content-around' >
        <ul className='list-unstyled'>
          <li>
            <a href="mailto:yessicacamargo15@gmail.com" 
               id="correoformulario"
               className='text-decoration-none text-white'
               >Yessica Camargo
               </a> 
          </li>
          <li>
            <a href="mailto:jame291104@gmail.com"
               id="correoformulario"
               className='text-decoration-none text-white'
               >Jesús Morán</a>
          </li>
          <li>
            <a href="mailto:ebastianlayos23@gmail.com"
               id="correoformulario"
               className='text-decoration-none text-white'
               >Sebastián Layos</a> 
          </li>
          <li>
            <a href="mailto:parradiego169@gmail.com"
               id="correoformulario"
               className='text-decoration-none text-white'
               >Diego Parra</a>
          </li>
        </ul>
      </div>
    </div>
    
  )
}



export default Footer
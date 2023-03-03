import React from 'react'
import { Link } from 'react-router-dom'



export const Footer = () => {
  return (
    <div className='d-flex d-block flex-row justify-context-around py-4 bg-dark text-white'>
      <h1>Envíanos un mensaje</h1>
      <div className='d-flex d-block flex-row justify-context-around'> 
      <h1> github linkedin  </h1>
      </div>
      <div>
      <h2>Docente: Javier García</h2>
      <p>BIT 2023
        Bogotá D.C - Colombia
      </p>
      </div>
      <div>
      <p>
        sebastianlayos23@gmail.com 
        jame291104@gmail.com 
        yessicacamargo15@gmail.com 
        parradiego169@gmail.com 
      </p>
      </div>
    </div>
    
  )
}



export default Footer
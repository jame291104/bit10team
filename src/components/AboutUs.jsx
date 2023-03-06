import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const AboutUs = () => {
  return (
    <>
    <Header/>
    <div className='bg-light'>
      <h1 className='text-info p-5 d-flex justify-content-center'>Nosotros</h1>
      <p className='text-info p-5'>¡Un gusto! Nosotros somos Tinto Frío un equipo de trabajo conformado por cuatro desarrolladores frontend que decidieron llevar a la realidad una idea mientras tomaban un café en medio de una reunión virtual,
         en el tiempo que pensá bamos como implementar el desarrollo de la idea, ese café se puso frío, desde ese momento nos hemos esforzado en nuestro proyecto tomando tinto frío mientras lo implementamos.</p>
      <div>
        <table className='d-flex flex-row justify-content-around'>
          <tr className='d-flex flex-row justify-content-around'>
            <td className='p-3'>
              <img src="" alt="" />
              <a href="">Yessica Camargo</a>
            </td>
            <td className='p-3'>
              <img src="" alt="" />
              <a href="">Jesús Morán</a>
            </td>
            <td className='p-3'>
              <img src="" alt="" />
              <a href="">Sebastian Layos</a>
            </td>
            <td className='p-3'>
              <img src="" alt="" />
              <a href="">Diego Parra</a>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <Footer/>
    </>
    
  )
}
export default AboutUs
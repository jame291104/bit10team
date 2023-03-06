import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const AboutUs = () => {
  return (
    <>
    <Header/>
    <div className='bg-light'>
      <h1 className='text-info p-5 d-flex justify-content-center'>About us?</h1>
      <p className='text-info p-5'>A pleasure! We are Tinto Frío, a work team made up of four frontend developers who decided to bring an idea to reality while having a coffee in the middle of a virtual meeting, while we were thinking about how to implement the development of the idea, 
       that coffee became cold, from that moment we have worked on our project drinking cold coffee while we implement it. <br/> Get to know us a little more:</p>
      <div>
        <table className='d-flex flex-row justify-content-around'>
          <tr className='d-flex flex-row justify-content-around'>
            <td className='p-3 d-flex flex-column justify-content-center'>
              <a href="https://yessicac98.github.io/bit07me/" className='text-decoration-none text-dark'>
              <img src="https://yessicac98.github.io/bit07me/docs/img/me.jpeg" alt="Desarrolladora Yessica" width={120}
                height={150}/>Yessica Camargo
               </a>
                
            </td>
            <td className='p-3 d-flex flex-column justify-content-center'>
              <img src="https://jame291104.github.io/bit07me/img/me.jpg" alt="Desarrollador Jesús" 
                
                width={120}
                height={150} />
              <a href="https://jame291104.github.io/bit07me/" className='text-decoration-none text-dark'>Jesús Morán</a>
            </td>
            <td className='p-3 d-flex flex-column justify-content-center'>
              <img src="https://sbslayos.github.io/bit07me/img/me.jpeg" alt="Desarrollador Sebastián" 
                
                width={120}
                height={150} />
              <a href="https://sbslayos.github.io/bit07me/" className='text-decoration-none text-dark'>Sebastian Layos</a>
            </td>
            <td className='p-3 d-flex flex-column justify-content-center'>
              <img src="https://diegoparrae.github.io/bit07me/img/me.jpeg" alt="Desarrollador Diego" 
                
                width={120}
                height={150} />
              <a href="https://diegoparrae.github.io/bit07me/" className='text-decoration-none text-dark' 
                >Diego Parra</a>
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
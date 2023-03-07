import React from 'react'
import { HeaderAU } from './HeaderAU'
import { Footer } from './Footer'

export const AboutUs = () => {
  return (
    <>
    
    <HeaderAU/>
    
    <div className='bg-light'>
      <img src="./public/img/TintoFrio.png" alt="logo de Tinto Frio"
           className='rounded mx-auto d-block'
           width={200}
           height={120} 
          />
      <h1 className='h1AU p-5 d-flex justify-content-center'>About us?</h1>
      <p className='p-5 parrafoAU'>A pleasure! We are Tinto Frío, a work team made up of four frontend developers who decided to bring an idea to reality while having a coffee in the middle of a virtual meeting, while we were thinking about how to implement the development of the idea, 
      that coffee became cold, from that moment we have worked on our project drinking cold coffee while we implement it. <br/> Get to know us a little more:</p>
    
      <div>
    
        <table className='d-flex flex-row justify-content-around'>
    
          <tr className='d-flex flex-row justify-content-around'>
            
            <td className='tdAU'>
              <a href="https://yessicac98.github.io/bit07me/" 
                 className='aAU'>
                <img src="https://yessicac98.github.io/bit07me/docs/img/me.jpeg" 
                     alt="Desarrolladora Yessica" 
                     class='imgAU'
                     width={120}
                     height={150}
                     />
                <p>
                  Yessica Camargo
                </p>
               </a>
            </td>
          </tr>  

          <tr>    
            <td className='tdAU'>
              <a href="https://jame291104.github.io/bit07me/" 
                 className='aAU'>
                <img src="https://jame291104.github.io/bit07me/img/me.jpg" 
                     alt="Desarrollador Jesús" 
                     class='imgAU'
                     width={120}
                     height={150} 
                     />
                <p>
                  Jesús Morán
                </p>
              </a>
            </td>
          </tr>

          <tr>
            <td className='tdAU'>
              <a href="https://sbslayos.github.io/bit07me/" 
                 className='aAU'>
                <img src="https://sbslayos.github.io/bit07me/img/me.jpeg" 
                     alt="Desarrollador Sebastián" 
                     class='imgAU'
                     width={120}
                     height={150} 
                     />
                <p>
                  Sebastian Layos
                </p>
              </a>
            </td>
          </tr>

          <tr>
            <td className='tdAU'>
              <a href="https://diegoparrae.github.io/bit07me/"
                 className='aAU'> 
                <img src="https://diegoparrae.github.io/bit07me/img/me.jpeg" 
                     alt="Desarrollador Diego" 
                     class='imgAU'
                     width={120}
                     height={150} 
                     />
                <p>
                  Diego Parra
                </p>
              </a>
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
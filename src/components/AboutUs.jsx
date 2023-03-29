import React from 'react'
import { HeaderAU } from './HeaderAU'
import { Footer } from './Footer'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const AboutUs = () => {
  return (
    <>
    
    <HeaderAU/>
    
    <div className='bg-light'>
      <img src="/img/TintoFrio.png" alt="logo de Tinto Frio"
           className='rounded mx-auto d-block'
           width={200}
           height={120} 
          />
      <h1 className='h1AU p-5 d-flex justify-content-center'>About us?</h1>
      <p className='p-5 parrafoAU'>A pleasure! We are Tinto Frío, a work team made up of four frontend developers who decided to bring an idea to reality while having a coffee in the middle of a virtual meeting, while we were thinking about how to implement the development of the idea, 
      that coffee became cold, from that moment we have worked on our project drinking cold coffee while we implement it. <br/> Get to know us a little more:</p>
    
      <div className='my-5 row justify-content-center  mx-0'>
      <Card className='m-4' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://yessicac98.github.io/bit07me/docs/img/me.jpeg"
        width={286}
        height={370}
        />
          <Card.Body>
            <Card.Title>Yessica Camargo</Card.Title>
              <Card.Text>
              Fullstack Web Developer
              <br />
              - In charge of project documentation and its process in Trello
              </Card.Text>
              <a href="https://yessicac98.github.io/bit07me/" target={'_blank'}><Button variant="primary">See more</Button></a>
              <a href="https://github.com/YessicaC98" target={'_blank'}><Button className='mx-2' variant="dark">GitHub <i className="bi bi-github"></i> </Button></a>
              
          </Card.Body>
      </Card>
      <Card className='m-4' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://jame291104.github.io/bit07me/img/me.jpg"
        width={286}
        height={370}
        />
          <Card.Body>
            <Card.Title>Jesús Morán Espinoza</Card.Title>
              <Card.Text>
              Front-End Web Developer React Js.
              <br />
              - Team leader, in charge of deployment and version control in Git and Github 
              </Card.Text>
              <a href="https://jame291104.github.io/bit07me/" target={'_blank'}><Button variant="primary">See more</Button></a>
              <a href="https://github.com/jame291104" target={'_blank'}><Button className='mx-2' variant="dark">GitHub <i className="bi bi-github"></i> </Button></a>
          </Card.Body>
      </Card>
      <Card className='m-4' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://sbslayos.github.io/bit07me/img/me.jpeg"
        width={286}
        height={370}
        />
          <Card.Body>
            <Card.Title>Sebastián Layos</Card.Title>
              <Card.Text>
              Fullstack Web Developer.
              <br />
              - Favorites section creating and rendering.
              </Card.Text>
              <a href="https://sbslayos.github.io/bit07me/" target={'_blank'}><Button variant="primary">See more</Button></a>
              <a href="" target={'_blank'}><Button className='mx-2' variant="dark">GitHub <i className="bi bi-github"></i> </Button></a>
          </Card.Body>
      </Card>
      <Card className='m-4' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://diegoparrae.github.io/bit07Me/img/me.jpeg"
        width={286}
        height={370}
        />
          <Card.Body>
            <Card.Title>Diego Parra</Card.Title>
              <Card.Text>
                Front-End Web Developer React Js.
                <br />
                - UX/UI Design and CSS's styles of Library Gamer.
              </Card.Text>
              <a href="https://diegoparrae.github.io/bit07Me/" target={'_blank'}><Button variant="primary">See more</Button></a>
              <a href="https://github.com/DiegoParraE" target={'_blank'}><Button className='mx-2' variant="dark">GitHub <i className="bi bi-github"></i> </Button></a>
          </Card.Body>
      </Card>
      </div>

    </div>

    <Footer/>

    </>
    
  )
}
export default AboutUs
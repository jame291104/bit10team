import React from 'react'
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export const Home = () => {

  const [game, setGame] = useState([])

  const getApi = async () => {
    try {
      const res = await fetch('https://www.freetogame.com/api/games?platform=pc');
      const data = await res.json();
  
      console.log(data);

      setGame(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getApi();
  }, []);
  
  return (
    <>
      <Header/>
      <div>
        <h1>Bienvenido a Library Gamer</h1>
        <h4>Tenemos más de 300 juegos para tí</h4>
        {
          game.map((game) => <Card className='m-4' key={game.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={game.thumbnail} />
          <Card.Body>
            <Card.Title>{game.title}</Card.Title>
            <Card.Text>{game.short_description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Desarrollado por: {game.developer}</ListGroup.Item>
            <ListGroup.Item>Lanzado en: {game.release_date}</ListGroup.Item>
            <ListGroup.Item>Genero: {game.genre}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href={game.game_url}>Instalar</Card.Link>
            <Card.Link href={game.freetogame_profile_url}>Ver más</Card.Link>
          </Card.Body>
        </Card>)
        }
      </div>
      <Footer/>
    </>

  )
}
export default Home
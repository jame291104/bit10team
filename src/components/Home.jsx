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
      <div className='m-5 row justify-content-center'>
        <h1 className='text-center'>Welcome to Library Gamer</h1>
        <h4 className='text-center'>We have more than 300 games for you</h4>
        {
          game.map((game) => <Card className='m-4' key={game.id} style={{ width: '18rem' }}>
          <Card.Img className='py-3' variant="top" src={game.thumbnail} />
          <Card.Body>
            <Card.Title>{game.title}</Card.Title>
            <Card.Text>{game.short_description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Developed by: {game.developer}</ListGroup.Item>
            <ListGroup.Item>Release date: {game.release_date}</ListGroup.Item>
            <ListGroup.Item>Genre: {game.genre}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href={game.game_url}>Download</Card.Link>
            <Card.Link href={game.freetogame_profile_url}>See more</Card.Link>
          </Card.Body>
        </Card>)
        }
      </div>
      <Footer/>
    </>

  )
}
export default Home
import React from 'react'
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export const Home = () => {

  const [games, setGames] = useState([])
  const [search, setSearch] = useState("")

  const getApi = async () => {
    try {
      const res = await fetch('https://www.freetogame.com/api/games?platform=pc');
      const data = await res.json();

      setGames(data)
    } catch (error) {
      console.log(error);
    }
  }

  const searcher = (e) => {
    setSearch(e.target.value)
  }

  //filtrado

  let results = []
  if(!search)
  {
     results = games
  }else{
    results = games.filter( (dato) => 
    dato.title.toLowerCase().includes(search.toLocaleLowerCase())
    )
  }

  useEffect(() => {
    getApi();
  }, []);
  
  return (
    <>
    <main className='fondo'>
      <Header/>
      <div className='m-5 row justify-content-center'>
        <h1 className='text-center text-light'>Welcome to Library Gamer</h1>
        <h4 className='text-center text-light'>We have more than 300 games for you</h4>
        <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control my-5'/>
        {
          results.map((game) => <Card className='m-4 bg-dark' key={game.id} style={{ width: '18rem' }}>
          <Card.Img className='py-3' variant="top" src={game.thumbnail} />
          <Card.Body>
            <Card.Title className='text-light'>{game.title}</Card.Title>
            <Card.Text className='text-light'>{game.short_description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush bg-dark">
            <ListGroup.Item className="bg-dark text-light">Developed by: {game.developer}</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-light">Release date: {game.release_date}</ListGroup.Item>
            <ListGroup.Item className="bg-dark text-light">Genre: {game.genre}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link target={'_blank'} className='text-info text-decoration-none' href={game.game_url}>Download</Card.Link>
            <Card.Link target={'_blank'} className='text-info text-decoration-none' href={game.freetogame_profile_url}>See more</Card.Link>
          </Card.Body>
        </Card>)
        }
      </div>
      <Footer/>
      </main>
    </>

  )
}
export default Home
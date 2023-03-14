import React from 'react'
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Swal from "sweetalert2";


export const Home = () => {

  const [games, setGames] = useState([])
  const [search, setSearch] = useState("")

  const getApi = async () => {
    try {
      const res = await fetch('https://www.freetogame.com/api/games?platform=pc');
      const data = await res.json();

      setGames(data)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! to better experience install CORS google extension or confirm your internet connection',
        footer: '<a href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf">install</a>'
      })
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
    <main className='fondo container-fluid px-0'>
      <Header/>
      <div className='my-5 row justify-content-center  mx-0'>
        <h1 className='text-center text-light responsiveHome'>Welcome to Library Gamer</h1>
        <h4 className='text-center text-light'>We have more than 300 games for you</h4>
          <div className='container'>  <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control'/></div>       
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
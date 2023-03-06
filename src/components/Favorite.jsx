import React, { useState } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { v4 as uuidv4 } from 'uuid';
import { ListFavorite } from './ListFavorite';

export const Favorite = ({}) => {
    const [game, setGame] = useState({id: null, name:''})
    const [games, setGames] = useState([])
  
const handleName = (e) =>{
    setGame({ ...game, id: uuidv4(), name: e.target.value})
    console.log(game);
}
 const handleButton = (e) => {
    e.preventDefault();
    setGames([...games, game])
    
 }
 
    console.log([games]);




  
    return (
    <>
    <Header/>
    <div>Please, Enter the name of your favorite VideoGame</div>
    <form>
        <input type='text' placeholder='Nombre de Juego' onInput={handleName} value={game.name} />
        <button onClick={handleButton}>Agregar</button>
    </form>
    <ListFavorite game={game} setGame={setGame} games={games} setGames={setGames}  />
    <Footer/>
    </>
  )
}
export default Favorite;

import React from 'react'

export const ListFavorite = ({games, setGames, game}) => {



const favorites=games.map( game => <li key={game.id}>
    {game.name} 
    <button >Bring Up To Date</button><button onClick={() =>deleteGame(game.id)}>Remove</button>
</li>)

const deleteGame = (id) => {

    const removes = games.filter((i) => i.id !== id);
    setGames(removes); 
};


// const updateGame = () => {
//     console.log(games)
//     onClick={updateGame}
// }





  return (
    <>
    <div>ListFavorite</div>
    <ol>{favorites}</ol>
    </>
  )
}

export default ListFavorite

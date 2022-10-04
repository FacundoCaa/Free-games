import { GameItem } from "../helpers/GameItem";
import { useState } from 'react'
import { useGetGames } from "../hooks/useGetGames";

export const Games = () => {
  
    const { games } = useGetGames()

    
    return (
        <div className="containerrepiolon">
        {games.map( (obj) => (
          <GameItem
          id={obj.id}
          title={obj.title}
          desc={obj.short_description}
          url={obj.game_url}
          img={obj.thumbnail}
          />
        ))}
      </div> 
  )
}

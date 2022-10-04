import { getGames } from "../gettings/getGames";
import {useEffect, useState} from 'react'
import { GameItem } from "../helpers/GameItem";

export const BrowserGames = () => {
  
    const [games, setGames] = useState([{}])

  const newGamesMap = async() => {
    const newGames = await getGames("browser")
    setGames(newGames)
}

  useEffect(() => {
    newGamesMap()
  }, [])
  

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

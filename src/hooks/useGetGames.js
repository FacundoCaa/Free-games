import { getGames } from "../gettings/getGames";
import {useEffect, useState} from 'react'

export const useGetGames = () => {
    const [games, setGames] = useState([{}])

    const newGamesMap = async() => {
      const newGames = await getGames("pc")
      setGames(newGames)
  }
  
  
    useEffect(() => {
      newGamesMap()
    }, [])
  
    return {
        games,
        setGames,
    }
}

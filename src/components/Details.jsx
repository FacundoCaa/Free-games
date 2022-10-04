import { DetailsItem } from "../helpers/DetailsItem"
import {  useParams  } from "react-router-dom";
import { useState, useEffect } from 'react'
import { getGamesById } from "../gettings/getGames"

export const Details = () => {
  

    const { id } = useParams()
  
    console.log(id)

    const [games, setGames] = useState([{}])

    const newGamesMap = async() => {
      console.log(id)
      const newGames = await getGamesById(id)
      setGames(newGames)
      }
  
  
      useEffect(() => {
          newGamesMap()
        }, [])



    return (
    <>

        <DetailsItem
        {...games}
        {...games.minimum_system_requirements}
        />

    </>
  )
}

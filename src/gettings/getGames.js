export const getGames = async( platform ) => {

    const url = `https://www.freetogame.com/api/games?platform=${platform}`
    const resp = await fetch(url)
    const games = resp.json()

    return games
}

export const getAllGames = async() => {

    const url = 'https://www.freetogame.com/api/games'
    const resp = await fetch(url)
    const games = resp.json()

    return games
}

export const getGamesById = async( id ) => {

    const url = `https://www.freetogame.com/api/game?id=${id}`
    const resp = await fetch(url)
    const games = resp.json()

    return games
}











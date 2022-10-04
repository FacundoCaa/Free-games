import "../assest/img/Home.css"

export const Home = () => {
  return (
    <div className="container">
        <h1>Hi, Are you ready to search for free games?</h1>
        <div className="button-container">
            <a href="/all-games" className="button">Free Games</a>
            <a href="/pc-games" className="button">Browser Games</a>
            <a href="/browser-games" className="button">PC Games</a>
        </div>
        
        <div className="d-flex p-2">
            <img src="https://www.freetogame.com/g/521/thumbnail.jpg" className="img-thumbnail" alt="..."/>
            <img src="https://www.freetogame.com/g/517/thumbnail.jpg" className="img-thumbnail" alt="..."/>
            <img src="https://www.freetogame.com/g/475/thumbnail.jpg" className="img-thumbnail" alt="..."/>
            <img src="https://www.freetogame.com/g/3/thumbnail.jpg" className="img-thumbnail" alt="..."/>
            <img src="https://www.freetogame.com/g/21/thumbnail.jpg" className="img-thumbnail" alt="..."/>
            <img src="https://www.freetogame.com/g/515/thumbnail.jpg" className="img-thumbnail" alt="..."/>
            <img src="https://www.freetogame.com/g/516/thumbnail.jpg" className="img-thumbnail" alt="..."/>
            <img src="https://www.freetogame.com/g/5/thumbnail.jpg" className="img-thumbnail" alt="..."/>
            <img src="https://www.freetogame.com/g/466/thumbnail.jpg" className="img-thumbnail" alt="..."/>
            <img src="https://www.freetogame.com/g/452/thumbnail.jpg" className="img-thumbnail" alt="..."/>
        </div>
    </div>
  )
}

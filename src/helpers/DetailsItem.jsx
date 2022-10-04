import "../assest/img/details.css"

export const DetailsItem = ({title,
     thumbnail,
      status, 
      description, 
      genre, 
      platform, 
      publisher, 
      developer, 
      release_date,
      os,
      processor,
      memory,
      game_url,
      graphics,
      storage
    }) => {
  
 
    return (
    
    <div className="d-container">
            <h1 className="d-title">{title}</h1>
            <div className="f-container">
                <div className="d-img-container">
                    <img className="d-img center" alt="game" src={thumbnail}></img>
                    <p className="d-f-p">Status: {status}</p>
                </div>
                <p className="d-f-desc"><p>Description</p> {description}</p>
            </div>
            <div className="s-container">
                <h2 className="d-title">Features</h2>
                <div className="features-container">
                        <p className="d-p"><p className="down-line">Genre:</p> {genre}</p>
                        <p className="d-p"><p className="down-line">Platform:</p> {platform}</p>
                        <p className="d-p"><p className="down-line">Publisher:</p> {publisher}</p>
                        <p className="d-p"><p className="down-line">Peveloper:</p> {developer}</p>
                        <p className="d-p"><p className="down-line">Release date:</p> {release_date}</p>
                </div>
            </div>
            <div className="s-container">          
                <h2 className="d-title">Requirements</h2>
                <div className="features-container">
                    <p className="d-p"><p className="down-line">Os:</p> {os}</p>
                    <p className="d-p"><p className="down-line">Processor:</p> {processor}</p>
                    <p className="d-p"><p className="down-line">Memory:</p> {memory}</p>
                    <p className="d-p"><p className="down-line">Graphics:</p> {graphics}</p>
                    <p className="d-p"><p className="down-line">Storage:</p> {storage}</p>
                </div>
            </div>
            <a className="download-button" target="__BLANK" href={game_url}>Download game</a>
    </div>
  )
}

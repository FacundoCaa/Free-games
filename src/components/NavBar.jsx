
import FNL from '../assest/img/FNL100px.png'

export const NavBar = () => {
  
  
  return (
    
    <nav className="navbar navbar-expand-lg navbar-pinky sticky-top">
    <div className="container-fluid">
      <a className='iconcontainer' href='/'><img className='icon' alt='icon' src={FNL} ></img></a>
      {/* <a className="navbar-brand" href="/">FreeToGame</a> */}
      <button className="navbar-toggler p-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link color" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link color" aria-current="page" href="/all-games">All FREE games</a>
          </li>
          <li className="nav-item">
            <a className="nav-link color" aria-current="page" href="/pc-games">PC games</a>
          </li>
          <li className="nav-item">
            <a className="nav-link color" href="/browser-games">Browser games</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  )
}

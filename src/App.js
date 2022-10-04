import { NavBar } from "./components/NavBar";
import './app.css'
import { Footer } from "./components/Footer";
import { Games } from "./components/Games";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { AllGames } from "./components/AllGames";
import { BrowserGames } from "./components/BrowserGames";
import { Details } from "./components/Details";
import { Home } from "./components/Home";

function App() {
  
  return (
      
      <Router>
            <NavBar />
        <Routes>
          
          <Route path="/pc-games" element={<Games />}/>
          <Route path="/browser-games" element={<BrowserGames />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/all-games" element={<AllGames />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
            

            <Footer /> 
      </Router>

  );
}

export default App;

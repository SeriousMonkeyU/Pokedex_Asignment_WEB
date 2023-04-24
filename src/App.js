import { Link, useLocation, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home.js"
import { About } from "./pages/About.js"
import "./css/Layout.css"

function App(){

  const location = useLocation(); // another try on update the home page only when on home page (home page should be refreshed)

  const handleClick = () => {
    if (location.pathname === '/') { 
      window.location.reload(); 
    }
  }

  return (
    <>
      <body>
        <h1 class="header">Pokedex - your personal pokemon library!</h1>
        <nav class="navBar">
          <Link to="/" class="navBarElement" onClick={handleClick}>Home</Link>
          <Link to="/About" class="navBarElement">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
        </Routes>
      </body>
    </>
  )
}

export default App;

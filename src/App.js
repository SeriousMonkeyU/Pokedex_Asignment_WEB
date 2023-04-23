import { Link, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home.js"
import { About } from "./pages/About.js"
import "./css/Layout.css"

function App(){
    return (
    <>
    <body>
        <h1 clas="header">Pokedex - your personal pokemon library!</h1>
    <nav class="navBar">
        <Link to="/" class="navBarElement">Home</Link>
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
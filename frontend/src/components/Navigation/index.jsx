import "./style.scss"
import { Outlet } from 'react-router-dom'
import Footer from "../Footer"
import Nav from "./Nav.jsx"

function Navigation() {
    return ( 
        <div>
          <header>
            <Nav/>
          </header>

          <div id="Outlet">
            <Outlet/>
          </div>

          <footer>
            <Footer />
          </footer>
        </div>
     );
}

export default Navigation;
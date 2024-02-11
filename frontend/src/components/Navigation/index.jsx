import "./style.scss"
import { Outlet } from 'react-router-dom'
import Nav from "./Nav.jsx"
import Footer from "../Footer"


function Navigation() {
    return ( 
        <>
           <header>
            <Nav/>
           </header>

           <div id='Outlet'>
               <Outlet/>
           </div>

           <footer id="Footer">
               <Footer/>
           </footer>
        </>
     );
}

export default Navigation;
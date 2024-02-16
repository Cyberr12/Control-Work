import "./style.scss"
import { Link } from 'react-router-dom'
import Shar from "../../Assets/Icons/shar.jpg"

function Nav() {
    return ( 
        
     <div className="very-big-project">
      <img src={Shar} width={50} height={50} id="shar" alt="shar"/>
        <div className="big-project">
    
          <div className="start-text">
           <h1>Путешествуй вместе с</h1>
           <h3>Pero Travel</h3>
          </div> 

        <div className="center-text">
              <Link to={"/ecs"}>Экскурсии</Link>
              <Link to={"/countries"}>Страны</Link>
              <Link to={"/about"}>О нас</Link>
        </div>

        <div className="finnish-text">
           <button>
           <Link to={"/countries"}>К Экскурсиям</Link>
           </button>
           <br />
           <button>
           <Link to={"/Place"}>Местоположение</Link>
           </button>
       </div>
    </div>
   </div>
     );
}

export default Nav;
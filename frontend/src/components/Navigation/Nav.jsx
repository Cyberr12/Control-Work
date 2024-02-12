import "./style.scss"
import { Link } from 'react-router-dom'
import Shar from "../../Assets/Images/shar.jpg"

function Nav() {
    return ( 
        
     <div className="very-big-project">
      <img src={Shar} width={50} height={50} id="shar"/>
        <div className="big-project">
    
          <div className="start-text">
           <h1>Путешествуй вместе с</h1>
           <h3>Pero Travel</h3>
          </div> 

        <div className="center-text">
              <Link to={"/ecs"}>Экскурсии</Link>
              <Link to={"/countries"}>Страны</Link>
              <Link to={"/about"}>О нас</Link>
              <Link to={"/kabinet"}>Кабинет</Link>
        </div>

        <div className="finnish-text">
           <button>
               К Экскурсиям !
           </button>
       </div>
    </div>
   </div>
     );
}

export default Nav;
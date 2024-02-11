import "./style.scss"
import { Link } from 'react-router-dom'

function Nav() {
    return ( 
      <div className="big-project">
          <div className="start-text">
              <h1>Экскурсии</h1>
          </div> 

          <div className="center-text">
                <Link to={"/ecs"}>Экскурсии</Link>
                <Link to={"/about"}>О нас</Link>
                <Link to={"/kabinet"}>Кабинет</Link>
                <Link to={"/countries"}>Страны</Link>
          </div>

          <div className="finnish-text">
              <button>
                Click me
              </button>
          </div>
      </div>
     );
}

export default Nav;
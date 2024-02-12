import "./style.scss"
import { Link } from 'react-router-dom'
import Syriya from "../../Assets/Images/syriya2.jpg"

function Iraq() {
    return ( 
       <div className="IraqDIV">
        <h1>Информация о КНДР</h1>
        <button id="Iraq-butto2"><Link to={"/countries"}>Назад</Link></button>
        <div className="Iraq1">
          <div className="Iraq-child">
          <img src={Syriya} alt="Syriya" />
          </div>
          <div className="Iraq-child2">
          <p>
           
          </p>
          <br />
          <br />
          <h1>Стоимость поездки</h1>
          <button id="Iraq-butto"><h2>1500$</h2></button> <button><h2>Купить Сейчас</h2></button>
          </div>
        </div>
       </div>
     );
}

export default Iraq;
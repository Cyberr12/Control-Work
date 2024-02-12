import "./style.scss"
import { Link } from 'react-router-dom'
import haiti2 from "../../Assets/Images/haiti2.jpg"

function Haiti() {
    return ( 
       <div className="HaitiDIV">
        <h1>Информация о Афганистане</h1>
        <button id="Haiti-butto2"><Link to={"/countries"}>Назад</Link></button>
        <div className="Haiti1">
          <div className="Haiti-child">
          <img src={haiti2} alt="haiti2" />
          </div>
          <div className="Haiti-child2">
          <p>
          Гаи́ти, полная официальная форма — Респу́блика Гаи́ти (гаит. креольск. Repiblik Ayiti [ajiti], фр. République d'Haïti [a.iti]) — государство в западной части одноимённого острова (восточную часть которого занимает Доминиканская Республика) и на ряде прибрежных островов. Столица Гаити — Порт-о-Пренс. Население страны — 10 033 000 человек (2009 г., из них около 1 млн чел. живут за границей — в основном, в США).
          </p>
          <br />
          <br />
          <h1>Стоимость поездки</h1>
          <button id="Haiti-butto"><h2>100$</h2></button> <button><h2>Купить Сейчас</h2></button>
          </div>
        </div>
       </div>
     );
}

export default Haiti;
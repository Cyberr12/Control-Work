import "./style.scss"
import { Link } from 'react-router-dom'
import haiti2 from "../../Assets/Images/haiti2.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SmileTyan from "../../Assets/Images/SmileTyan.jpg"
import React, { useState } from 'react';
import badTyan from "../../Assets/Images/badTyan.jpg"

function Haiti() {
  const [clicked, setClicked] = useState(false);

  const showToast = () => {
    if (!clicked) {
      toast.success(<div>
        <img src={SmileTyan} alt="SmileTyan" width={150} height={100}/>
        <p>Покупка прошла успешно!</p>
      </div>, { closeOnClick: true }
      );
      setClicked(true);
      setTimeout(() => setClicked(false), 10000); // Сбросить состояние через 10 секунд
    } else {
      toast.error(<div>
        <img src={badTyan} alt="badTyan" width={150} height={100}/>
        <p>Вы уже купили билет подождите 10 секунд</p>
      </div>, { closeOnClick: true }
      );
    }
  };
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
          <button id="Haiti-butto"><h2>100$</h2></button> <button onClick={showToast}><h2>Купить Сейчас</h2></button>
          <ToastContainer/>
          </div>
        </div>
       </div>
     );
}

export default Haiti;
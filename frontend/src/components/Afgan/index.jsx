import "./style.scss"
import { Link } from 'react-router-dom'
import Afgan2 from "../../Assets/Images/afgan2.jpg"
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SmileTyan from "../../Assets/Images/SmileTyan.jpg"
import badTyan from "../../Assets/Images/badTyan.jpg"

function Iraq() {
  const [clicked, setClicked] = useState(false);

  const showToast = () => {
    if (!clicked) {
      toast.success(<div>
        <img src={SmileTyan} alt="SmileTyan" width={150} height={100}/>
        <p>Покупка прошла успешно!</p>
      </div>);
      setClicked(true);
      setTimeout(() => setClicked(false), 10000); // Сбросить состояние через 10 секунд
    } else {
      toast.error(<div>
        <img src={badTyan} alt="badTyan" width={150} height={100}/>
        <p>Вы уже купили билет подождите 10 секунд</p>
      </div>);
    }
  };
    return ( 
       <div className="IraqDIV">
        <h1>Информация о Афганистане</h1>
        <button id="Iraq-butto2"><Link to={"/countries"}>Назад</Link></button>
        <div className="Iraq1">
          <div className="Iraq-child">
          <img src={Afgan2} alt="Afgan2" />
          </div>
          <div className="Iraq-child2">
          <p>
          Афганистан
Государство в Центральной Азии, также относящееся и к Южной Азии. Население на 2021 год - 40 218 234 человек; территория - 652 864 км². Занимает 37-е место в мире по численности населения и 40-е по территории.
          </p>
          <br />
          <br />
          <h1>Стоимость поездки</h1>
          <button id="Iraq-butto"><h2>78500$</h2></button> <button onClick={showToast}><h2>Купить Сейчас</h2></button>
          <ToastContainer/>
          </div>
        </div>
       </div>
     );
}

export default Iraq;
import "./style.scss"
import { Link } from 'react-router-dom'
import Syriya3 from "../../Assets/Images/syriya.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import SmileTyan from "../../Assets/Images/SmileTyan.jpg"
import badTyan from "../../Assets/Images/badTyan.jpg"

function Iraq() {
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
       <div className="IraqDIV">
        <h1>Информация о Сирии</h1>
        <button id="Iraq-butto2"><Link to={"/countries"}>Назад</Link></button>
        <div className="Iraq1">
          <div className="Iraq-child">
          <img src={Syriya3} alt="Syriya3" />
          </div>
          <div className="Iraq-child2">
          <p>
          Сирия, полное наименование — Сирийская Арабская Республика — государство на Ближнем Востоке, граничащее с Ливаном и Израилем на юго-западе, с Иорданией на юге, с Ираком на востоке и с Турцией на севере. Омывается Средиземным морем на западе.
Современная государственность Сирии насчитывает немногим более 70 лет, но цивилизация зародилась здесь ещё в IV тысячелетии до н. э. Столица — Дамаск, один из древнейших постоянно заселённых городов мира.
Население Сирии составляет 17,3 миллионов человек (2022). По данным The Global Religious Landscape, 92,8 % сирийцев — мусульмане, 5,2 % — христиане, нерелигиозные и атеисты — 2,0 % жителей страны. Государственный язык — арабский.
          </p>
          <br />
          <br />
          <h1>Стоимость поездки</h1>
          <button id="Iraq-butto"><h2>1500$</h2></button> <button onClick={showToast}><h2>Купить Сейчас</h2></button>
          <ToastContainer/>
          </div>
        </div>
       </div>
     );
}

export default Iraq;
import "./style.scss"
import { Link } from 'react-router-dom'
import Kndr2 from "../../Assets/Images/kndr2.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import SmileTyan from "../../Assets/Images/SmileTyan.jpg"
import badTyan from "../../Assets/Images/badTyan.jpg"

function Kndr() {
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
       <div className="kndrDIV">
        <h1>Информация о КНДР</h1>
        <button id="kndr-butto2"><Link to={"/countries"}>Назад</Link></button>
        <div className="kndr1">
          <div className="kndr-child">
          <img src={Kndr2} alt="Kndr2" />
          </div>
          <div className="kndr-child2">
          <p>
          Корейская Народно-Демократическая Республика (КНДР) — государство в Восточной Азии, широко известное под неофициальным названием Северная Корея. Расположено в северной части Корейского полуострова. Имеет сухопутную границу с Республикой Корея на юге (государства разделены демилитаризованной зоной), Китайской Народной Республикой на севере, Российской Федерацией на северо-востоке. С запада страна омывается Жёлтым морем, с востока — Японским морем.
          Площадь страны составляет 120 540 км², население, по оценке 2019 года, — более 25 миллионов человек. Занимает девяносто восьмое место в мире по территории и пятьдесят третье по населению.
          </p>
          <br />
          <br />
          <h1>Стоимость поездки</h1>
          <button id="kndr-butto"><h2>1000$</h2></button> <button onClick={showToast} id="kndr-buto2"><h2>Купить Сейчас</h2></button>
          <ToastContainer />
          </div>
          </div>
       </div>
     );
}

export default Kndr;
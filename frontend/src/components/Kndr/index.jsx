import "./style.scss"
import { Link } from 'react-router-dom'
import Kndr2 from "../../Assets/Images/kndr2.jpg"
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Kndr() {
  const showToast = () => {
    toast.success('Покупка билета совершена.!');
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
          <button id="kndr-butto"><h2>1000$</h2></button> <button onClick={showToast}><h2>Купить Сейчас</h2></button>
          <ToastContainer />
          </div>
          </div>
       </div>
     );
}

export default Kndr;
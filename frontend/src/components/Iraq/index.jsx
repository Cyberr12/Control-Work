import "./style.scss"
import { Link } from 'react-router-dom'
import Iraq3 from "../../Assets/Images/iraq3.jpg"
import { ToastContainer, toast } from 'react-toastify';
import React, { useState } from 'react';
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
        <h1>Информация о Ираке</h1>
        <button id="Iraq-butto2"><Link to={"/countries"}>Назад</Link></button>
        <div className="Iraq1">
          <div className="Iraq-child">
          <img src={Iraq3} alt="Iraq3" />
          </div>
          <div className="Iraq-child2">
          <p>
          Ирак (официальное название — Республика Ирак) — государство на Ближнем Востоке.
Население, по оценочным данным на 2020 год, составляет более 40,2 миллионов человек. Территория — 435 052 км². Занимает тридцать шестое место в мире по численности населения и пятьдесят восьмое по территории.
Столица — Багдад. Официальные языки — арабский и курдский. Этнический состав состоит в основном из арабов и курдов, а нацменьшинствами являются туркоманы, ассиро-халдеи, персы, армяне и черкесы. Федеративное государство, парламентская республика. Подразделяется на 19 провинций (мухафаз) и автономный Регион Курдистан в составе.
Расположен в Месопотамской низменности, в долине рек Тигр и Евфрат. Омывается водами Персидского залива на юго-востоке (береговая линия 58 км). Имеет сухопутную границу на юго-востоке с Кувейтом, на юге с Саудовской Аравией, на западе с Иорданией и Сирией, на севере с Турцией и на востоке с Ираном. Отличается значительным этнокультурным разнообразием. Около 95 % населения исповедует ислам, остальные 5 % принадлежат в основном к ассирийской церкви Востока.
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
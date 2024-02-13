import "./style.scss"
import { Link } from 'react-router-dom'
import Afgan2 from "../../Assets/Images/afgan2.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Iraq() {
  const showToast = () => {
    toast.success('Покупка билета совершена.!');
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
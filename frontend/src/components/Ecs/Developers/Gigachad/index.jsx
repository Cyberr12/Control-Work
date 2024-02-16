import "./style.scss"
import { Link } from 'react-router-dom'
import Gigachadb from "../../../../Assets/Images/Gigachad.jpg"

function Gigachad() {
    return ( 
       <div className="Elon-Musk">
            <div className="Elon-Musk-div-child1">
               <img src={Gigachadb} alt="Gigachadb" width={500} height={550}/>
            </div>
            <div className="Elon-Musk-div-child2">
               <h2>This is Гигачад</h2>
             <h3>Ну тут говорить нечего ! Чел просто БАЗА ! Настоящий Гигачад !</h3>
     <br />
                <button id="Elon-button"><Link to={"/ecs"}>Назад</Link></button>
            </div>
       </div>
     );
}

export default Gigachad;
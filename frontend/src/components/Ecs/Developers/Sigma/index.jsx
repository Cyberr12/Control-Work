import "./style.scss"
import { Link } from 'react-router-dom'
import sigma from "../../../../Assets/Images/sigma.jpg"

function Sigma() {
    return ( 
       <div className="Elon-Musk">
            <div className="Elon-Musk-div-child1">
               <img src={sigma} alt="sigma" width={500} height={550}/>
            </div>
            <div className="Elon-Musk-div-child2">
               <h2>This is Сигма</h2>
               Главный герой и рассказчик романа Брета Истона Эллиса «Американский психопат» и его экранизации. Он богатый, материалистичный яппи, инвестор и банкир с Уолл-стрит, который ведёт тайную жизнь серийного убийцы. Бэйтман также ненадолго появлялся в других романах Эллиса, их экранизациях и театральных представлениях. Или просто Сигма как вам удобнее !
     <br />
                <button id="Elon-button"><Link to={"/ecs"}>Назад</Link></button>
            </div>
       </div>
     );
}

export default Sigma;
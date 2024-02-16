import "./style.scss"
import { Link } from 'react-router-dom'
import IlonMask from "../../../../Assets/Images/IlonMask.jpg"

function ElonMusk() {
    return ( 
       <div className="Elon-Musk">
            <div className="Elon-Musk-div-child1">
               <img src={IlonMask} alt="IlonMask" width={500} height={550}/>
            </div>
            <div className="Elon-Musk-div-child2">
               <h2>This is Илья Максимов</h2>
            Илон Рив Маск (родился 28 июня 1971 года, Претория, ЮАР) — американский предприниматель, инженер и миллиардер.
Основатель, генеральный директор и главный инженер компании SpaceX; инвестор, генеральный директор и архитектор продукта компании Tesla; основатель The Boring Company; соучредитель Neuralink и OpenAI; владелец Twitter (X).
7 января 2021 года, с состоянием по оценочным данным в 185 млрд $, впервые стал богатейшим человеком планеты, сместив на второе место основателя Amazon Джеффа Безоса. Довольно хороший человек Его настоящея имя Илья Максимов Илон Маск это его псевдоним. Его национальность русский. Поэтому поддержим его малый бизнес 20$ . Если вы конечно не против. Ну а таки будет выгодно !А так он нормальный чел ! Отвечаю ! 

     <br />
                <button id="Elon-button"><Link to={"/ecs"}>Назад</Link></button>
            </div>
       </div>
     );
}

export default ElonMusk;
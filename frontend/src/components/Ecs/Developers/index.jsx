import "./style.scss"
import { Link } from 'react-router-dom'
import IlonMask from "../../../Assets/Images/IlonMask.jpg"
import Negr from "../../../Assets/Images/Negr.jpg"
import Sigma from "../../../Assets/Images/sigma.jpg"
import Gigachad from "../../../Assets/Images/Gigachad.jpg"

function developers() {
    return ( 
        <div className="developer">
         <h1 id="developer-h1-id">Наши разработчики!</h1>
         <div className="many-developers">
            <div className="developer-child1">
                <img src={IlonMask} alt="IlonMask" width="300" height="300" id="IlonImg" />
                <h3><Link to={"/ElonMusk"} id="Elon-Link">Илья Максимов</Link></h3>
            </div>
            <div className="developer-child2">
                <img src={Negr} alt="Negr" width="300" height="300" id="NegrImg" />
                <h3><Link to={"/Niger"} id="Niger-Link">Нигер</Link></h3>
            </div>
            <div className="developer-child3">
                <img src={Gigachad} alt="Gigachad" width="300" height="300" id="GigachadImg" />
                <h3><Link to={"/Gigachad"} id="Gigachad-Link">Гигачад</Link></h3>
            </div>
            <div className="developer-child4">
                <img src={Sigma} alt="Sigma" width="300" height="300" id="SigmaImg" />
                <h3><Link to={"/Sigma"} id="Sigma-Link">Сигма</Link></h3>
            </div>
         </div>
        </div>
     );
}

export default developers;
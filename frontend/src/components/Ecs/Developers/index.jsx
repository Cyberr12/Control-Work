import "./style.scss"
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
                <h3>Илья Максимов</h3>
            </div>
            <div className="developer-child2">
                <img src={Negr} alt="Negr" width="300" height="300" id="NegrImg" />
                <h3>Нигер</h3>
            </div>
            <div className="developer-child3">
                <img src={Gigachad} alt="Gigachad" width="300" height="300" id="GigachadImg" />
                <h3>Гигачад</h3>
            </div>
            <div className="developer-child4">
                <img src={Sigma} alt="Sigma" width="300" height="300" id="SigmaImg" />
                <h3>Сигма</h3>
            </div>
         </div>
        </div>
     );
}

export default developers;
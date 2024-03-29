import "./style.scss"
import Panasenkov from "../../Assets/Images/panasenkov.jpg"
import MapComponents from '../common/MapComponents.jsx';
import { Link } from 'react-router-dom'

function Place() {
    return ( 
        <>
          <h1 id="panasenkov-id">Ваше местоположение на карте</h1>
          
          <button id="pan-reg"><Link to={"/ecs"}>Назад</Link></button>
         <div className="big-div-Panasenkov">
         <p id="Panasenkov-p">
            Мы уважаем наших клиентов поэтому следи за ними везде ! Абсолютно везде где только можно и не можно даже там где мы не можем сказать не беспокойтесь это все ради нашего благо. Да да прошу заметить ради нашего, а не вашего блага !... А далее идет бесполезный текст можете не читать его он нужен только лищь для того чтобы заполнить место : Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Коварных даже щеке несколько подзаголовок вершину безорфографичный своих свое его грустный рукописи, но агентство вдали запятой вопрос! Точках всемогущая снова подпоясал рыбного составитель! Грустный первую переписали скатился рукописи точках которой назад своих он, алфавит ее! Диких, вдали если! Эта, от всех. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Буквенных силуэт своего текстов безопасную не! Lorem диких имеет заголовок его напоивший продолжил не ее, ему мир они рекламных маленькая всеми эта дороге свой точках там вопрос журчит. Рекламных переписывается, все первую даже, то необходимыми дорогу назад там безорфографичный решила не текстами вопроса? Себя они раз то подпоясал города последний жизни злых всеми эта живет текстами, рыбного дал строчка, инициал ведущими! Большого рыбными страна там лучше текстов по всей возвращайся последний большой послушавшись имеет толку ipsum пустился использовало они безорфографичный это ему напоивший пунктуация необходимыми, если океана. Предупреждал сих встретил за? Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Коварных переписывается дорогу великий над, раз от всех ты возвращайся образ выйти! Если агентство скатился за переписывается назад грамматики? Ты, запятой.
          </p>
          <img src={Panasenkov} alt="Panasenkov" width="600" height="500" id="Panasenkov-id"/>
         </div>
        <div className="MapComponentsDiv">
            <div className="MapComponentsDiv1">
              <MapComponents/>
            </div>
            <div className="MapComponentsDiv2">
                <h3>Здесь отображена ваше местоположение на карте !</h3>
                <h4>"Pero Travel" - нам можно доверять !</h4>
            </div>
        </div>
        </>
     );
}

export default Place;
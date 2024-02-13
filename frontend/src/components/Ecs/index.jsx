import "./style.scss"
import { Link } from 'react-router-dom'
import Gory from "../../Assets/Images/gory.jpg"
import Iraq from "../../Assets/Images/iraq2.jpg"
import Kndr from "../../Assets/Images/kndr.jpg"
import Syria from "../../Assets/Images/syriya.jpg"
import Afgan from "../../Assets/Images/afgan.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Developers from "./Developers"


function Esc() {
   const settings = {
      dots: true,
      infinite: true, 
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
       return (
         <>
         <h1>Популярные Экскурсии</h1>
         <Slider {...settings}>
              <div className="gory-div">
              <img src={Kndr} alt="Kndr" width={1000} height={700} />
                 <p id="p-base">
                  Одна из самых закрытых стран, но довольно интересная !
              </p>
              </div>
 
              <div className="gory-div">
                <img src={Syria} alt="Syria" width={1000} height={700} />
                 <p id="p-base">
                   Страна на ближнем Востоке. Ее столица самая древнея в мире среди городов
                 </p>
              </div>
 
               <div className="gory-div">
                  <img src={Iraq} alt="Iraq" width={1000} height={700} />
                  <p id="p-base">
                    Ирак двуречье, Багдад что может быть лучше ! Это страна может быть страшной , но зато она очень интересная и заманчивая.
                </p>
              </div>
 
               <div className="gory-div">
                  <img src={Afgan} alt="Afgan" width={1000} height={700} />
                  <p id="p-base">
                  Афганистан страна в центральной Азиии интересна своми горами и бесконечными гражданскими войнами !
                </p>
              </div>
         </Slider>
            
          <div className="gory-div2">
            <div className="gory-div2-child">
            <img src={Gory} alt="Gory"/>
            </div>
            <div className="gory-div2-child2">
            <p>
             Здраствуйте здесь мы будем говорить про экскурсии по этому присаживайтесь будет интересно. Отвечаю !Сухость и континентальность климата обусловливают преобладание в Тянь-Шане горных степей и полупустынь. Полупустыни занимают верхние части предгорий и участки в пределах межгорных впадин: на северных склонах они располагаются на высоте 1600—2100 метров, на южных поднимаются до 2200 метров. Почвы — тёмные серозёмы и серо-бурые полупустынные, по понижениям рельефа — солончаки и солонцы. Растительность покрывает 15—25 % поверхности; преобладают полынно-ковыльно-солянковые сообщества, во Внутреннем и Восточном Тянь-Шане — также поташник, караганаСубальпийские и альпийские луга располагаются главным образом на склонах северных экспозиций выше 3000—3200 метров; они обычно не образуют сплошного пояса, чередуясь с почти лишёнными растительности скалами и осыпями. На маломощных горно-луговых и лугово-болотных почвах — разнотравно-осоковые, часто заболоченные низкотравные луга; они используются как кратковременные летние пастбища.На высоко расположенных (от 3000—3200 до 3400—3700 метров) сыртовых равнинах Внутреннего и Центрального Тянь-Шаня распространены ландшафты так называемых «холодных пустынь», растительность которых представлена дерновинными злаками.Сухость и континентальность климата обусловливают преобладание в Тянь-Шане горных степей и полупустынь. Полупустыни занимают верхние части предгорий и участки в пределах 
           </p>
           <button><Link to={"/gory"}>Больше Информации</Link></button>
            </div>
          </div>
          <Developers/>          
         </>
     );
}

export default Esc;
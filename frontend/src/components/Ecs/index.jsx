import "./style.scss"
import Gory from "../../Assets/Images/gory.jpg"

function Esc() {
       return (
        <>
           <h1>Популярные Экскурсии</h1>
         <div className="gory-div">
         <img src={Gory} alt="Gory"/>
         <p id="p-base">
            Здраствуйте здесь мы будем говорить про экскурсии по этому присаживайтесь будет интересно. Отвечаю !Сухость и континентальность климата обусловливают преобладание в Тянь-Шане горных степей и полупустынь. Полупустыни занимают верхние части предгорий и участки в пределах межгорных впадин: на северных склонах они располагаются на высоте 1600—2100 метров, на южных поднимаются до 2200 метров. Почвы — тёмные серозёмы и серо-бурые полупустынные, по понижениям рельефа — солончаки и солонцы. Растительность покрывает 15—25 % поверхности; преобладают полынно-ковыльно-солянковые сообщества, во Внутреннем и Восточном Тянь-Шане — также поташник, караганаСубальпийские и альпийские луга располагаются главным образом на склонах северных экспозиций выше 3000—3200 метров; они обычно не образуют сплошного пояса, чередуясь с почти лишёнными растительности скалами и осыпями. На маломощных горно-луговых и лугово-болотных почвах — разнотравно-осоковые, часто заболоченные низкотравные луга; они используются как кратковременные летние пастбища.На высоко расположенных (от 3000—3200 до 3400—3700 метров) сыртовых равнинах Внутреннего и Центрального Тянь-Шаня распространены ландшафты так называемых «холодных пустынь», растительность которых представлена дерновинными злаками.
           </p>
         </div>
                    
        </>
     );
}

export default Esc;
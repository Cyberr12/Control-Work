import "./style.scss"
import Japan from "../../Assets/Images/Japan.jpg"

function Esc() {
       return ( 
        <>
           <h1>Экскурсии</h1>
           <img src={Japan} alt="Japan" />
           <p>
            Здраствуйте здесь мы будем говорить про экскурсии по этому присаживайтесь будет интересно. Отвечаю !
           </p>
        </>
     );
}

export default Esc;
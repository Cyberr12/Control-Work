import "./style.scss"
import { Link } from 'react-router-dom'

function Footer() {
    return ( 
      <div className="footer-big">
         <div className="footer1">
            <div className="child1">
               <h1>Наши номера</h1>
               <h2>+978 44 612 67 90</h2>
               <h2>+978 34 520 07 01</h2>
               <h2>+978 49 123 88 92</h2>
            </div>
            <div className="child2">
            <Link to={"/ecs"}>Экскурсии</Link> <br />
            <br />
              <Link to={"/countries"}>Страны</Link> <br />
              <br />
              <Link to={"/about"}>О нас</Link> <br />
              <br />
              <Link to={"/kabinet"}>Кабинет</Link> <br />
              <br />
              <Link to={"/ecs/developers"}>Наши разработчики</Link>
              <br />
            </div>
         </div>
         <div className="footer2">
           <div className="information">
              <h1>Information about us</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestias architecto ratione optio! A necessitatibus velit ab consectetur illo laudantium nulla sed earum. Placeat, modi earum. Magnam perspiciatis et a. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptas, quidem incidunt quis, repellat itaque magni eligendi nam sapiente repellendus dolorem aspernatur quam iusto excepturi amet optio deleniti iure placeat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam culpa ab aliquid voluptates fugit saepe nulla totam nisi maiores ex ipsam, quisquam, consequatur illo aspernatur aperiam libero fuga sapiente nostrum?</p>
            </div>
            <div className="information2">
               <h1> Зарегистрируйтесь </h1>
               <input placeholder="Name" type="text" /> <br />
               <br />
               <input placeholder="SurName" type="text" /> <br />
               <br />
               <input id="base" placeholder="phone Number" type="text" />
            </div>
            </div>
      </div>
       );
}

export default Footer;
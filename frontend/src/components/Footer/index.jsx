import "./style.scss"

function Footer() {
    return ( 
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
       );
}

export default Footer;
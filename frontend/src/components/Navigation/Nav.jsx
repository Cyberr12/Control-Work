import "./style.scss"

function Nav() {
    return ( 
        <div className="nav-wrapper">
            <div>
                <div>
                    <img/>   
                </div>
                <div>
                    <Link to={"/about"}>
                        Главная
                    </Link>
                    <Link to={"/ecs"}>
                        Экскурсии
                    </Link>
                    <Link to={"/kabinet"}>
                        Личный кабинет
                    </Link>
                </div>
            </div>
            <div>
                <h1>Путешествуй вместе
                    с Pero Travel
                </h1>
            </div>
            <div>
                <button>К экскурсиям</button>
            </div>
        </div>
     );
}

export default Nav;
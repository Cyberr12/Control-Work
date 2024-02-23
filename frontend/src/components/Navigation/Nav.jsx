import React, { useState } from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';
import Shar from "../../Assets/Icons/shar.jpg";

function Nav() {
  const [language, setLanguage] = useState('ru');

  const changeLanguage = () => {
    if (language === 'ru') {
      setLanguage('en');
    } else {
      setLanguage('ru');
    }
  };

  return ( 
    <div className="very-big-project">
      <div className="taki">
        <img src={Shar} width={50} height={50} id="shar" alt="shar"/>
        <button id="Eng" onClick={changeLanguage}>
          {language === 'ru' ? 'English' : 'Русский'}
        </button>
      </div>
      <div className="big-project">
        <div className="start-text">
          <h1>{language === 'ru' ? 'Путешествуй вместе с' : 'Travel with'}</h1>
          <h3>{language === 'ru' ? 'Pero Travel' : 'Pero Travel'}</h3>
        </div> 

        <div className="center-text">
          <Link to={"/ecs"}>{language === 'ru' ? 'Экскурсии' : 'Excursions'}</Link>
          <Link to={"/countries"}>{language === 'ru' ? 'Страны' : 'Countries'}</Link>
          <Link to={"/about"}>{language === 'ru' ? 'О нас' : 'About us'}</Link>
        </div>

        <div className="finnish-text">
          <button>
            <Link to={"/countries"}>{language === 'ru' ? 'К Экскурсиям' : 'To Excursions'}</Link>
          </button>
          <br />
          <button>
            <Link to={"/Place"}>{language === 'ru' ? 'Местоположение' : 'Location'}</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;

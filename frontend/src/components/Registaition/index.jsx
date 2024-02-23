import "./style.scss"
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SmileTyan from "../../Assets/Images/SmileTyan.jpg"
import badTyan from "../../Assets/Images/badTyan.jpg"


function RegistrationForm() {
  const [clicked, setClicked] = useState(false);

  const showToast = () => {
    if (!clicked) {
      toast.success(<div>
        <img src={SmileTyan} alt="SmileTyan" width={150} height={100}/>
        <p>Вы успешно зарегистрировались!</p>
      </div>, { closeOnClick: true }
      );
      setClicked(true);
      setTimeout(() => setClicked(false), 10000); // Сбросить состояние через 10 секунд
    } else {
      toast.error(<div>
        <img src={badTyan} alt="badTyan" width={150} height={100}/>
        <p>Регистрация неправильная</p>
      </div>, { closeOnClick: true }
      );
    }
  };
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Добавьте здесь логику для отправки данных на сервер или обработку формы
    console.log(formData);
  };

  return (
    
    <div className="reg-div">
       <button id="reg-but"><Link to={"/ecs"}>Назад</Link></button>
       <div className="reg-div2">
          <div className="reg-div3">
          <h2>Регистрационное поле</h2>
          <br />
          <p id="p-reg">Введите свои данные сюда чтобы зарегистрироваться.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          placeholder="Username"
          onChange={handleChange}
          id="reg-inp"
        />
<br />
<br />
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
          id="reg-inp"
        />
<br />
<br />
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Password"
          onChange={handleChange}
          id="reg-inp"
        />
<br />
<br />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Confirm Password"
          onChange={handleChange}
          id="reg-inp"
        />
        <br />
        <br />
        <button type="submit" onClick={showToast}>Register</button>
        <ToastContainer />
      </form>
          </div>
       </div>
       <br />
       <br />
    </div>
  );
}

export default RegistrationForm;

import React from "react";
import { useState } from "react";
import logo from "../../assets/icons/logo.png"
import burger from "../../assets/icons/burger.png"
import "./header.scss";
import Burger from "../Burger";



function Header() {
  const [open, setOpen] = useState(false)
  function isOpen() {
    setOpen(!open)
  }
  function Close() {
    setOpen(!open)
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__content flex space-between items-center">
          <button onClick={isOpen} className="header__burger-btn">
            <img className="header__burger" src={burger} alt="burger menu" />
          </button>
          <img src={logo} alt="logo" className="header__logo" />
          <ul className="header__list">
            <li className="header__list-item">О нас    <div className="header__model">
              <ul className="header__model-content">
                <li className="header__model-list">О нас</li>
                <li className="header__model-list">Техническая база</li>
                <li className="header__model-list">Реализованные проекты</li>
                <li className="header__model-list">Новости</li>
                <li className="header__model-list">Видео</li>
              </ul>
            </div></li>
            <li className="header__list-item">О нас Объекты</li>
            <li className="header__list-item">Бизнес центр</li>
            <li className="header__list-item">Фитнес клуб</li>
            <li className="header__list-item">Live</li>
            <li className="header__list-item">3D тур</li>
            <li className="header__list-item">СМИ</li>
            <li className="header__list-item">Контакты</li>
          </ul>
          <button className="header__btn">Связаться</button>
        </div>
      </div>
      {open && <Burger onClose={Close} />}
    </header>
  );
}

export default Header;

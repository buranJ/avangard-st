import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import burger from "../../assets/icons/burger.png";
import "./header.scss";
import Burger from "../Burger";

function Header() {
  const [open, setOpen] = useState(false);

  function isOpen() {
    setOpen(!open);
  }

  function Close() {
    setOpen(!open);
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__content flex space-between items-center">
          <button onClick={isOpen} className="header__burger-btn">
            <img className="header__burger" src={burger} alt="burger menu" />
          </button>

          <Link to="/">
            <img src={logo} alt="logo" className="header__logo" />
          </Link>

          <ul className="header__list">
            <li className="header__list-item">
              <span>О нас</span>
              <div className="header__model">
                <ul className="header__model-content">
                  <li className="header__model-list">
                    <Link to="/about">О нас</Link>
                  </li>
                  <li className="header__model-list">
                    <Link to="/technical">Техническая база</Link>
                  </li>
                  <li className="header__model-list">
                    <Link to="/realized">Реализованные проекты</Link>
                  </li>
                  <li className="header__model-list">
                    <Link to="/news">Новости</Link>
                  </li>
                  <li className="header__model-list">
                    <a
                      target="_blank"
                      href="https://www.youtube.com/c/AvangardStyleKGZ"
                    >
                      Видео
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="header__list-item">
              <Link to="/all-objects">Объекты</Link>
            </li>

            <li className="header__list-item">
              <Link to="/business-center">Бизнес центр</Link>
            </li>

            <li className="header__list-item">
              <Link to="/fitness">Фитнес клуб</Link>
            </li>

            <li className="header__list-item">
              <Link to="/construction">Live</Link>
            </li>

            <li className="header__list-item">
              <Link to="/3d-tour">3D тур</Link>
            </li>

            <li className="header__list-item">
              <Link to="/media">СМИ</Link>
            </li>

            <li className="header__list-item">
              <Link to="/contacts">Контакты</Link>
            </li>
          </ul>
          <button className="header__btn">Связаться</button>
        </div>
      </div>
      {open && <Burger onClose={Close} />}
    </header>
  );
}

export default Header;

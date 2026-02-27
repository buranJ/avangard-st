import "./burger.scss"
import x from "../../assets/icons/x.png"
import logo from "../../assets/icons/logo-blue.png"
import arrow from "../../assets/icons/arrow-black.png"
import { useState } from "react"

function Burger({onClose}) {

    return (
        <section className="burger">
            <div className="container">
                <div className="burger__content">
                    <div className="burger__top">
                        <button onClick={onClose} className="burger__btn"><img src={x} alt="x" className="burger__top-x" /></button>
                        <img src={logo} alt="logo" className="burger__top-logo" />
                    </div>
                    <ul className="burger__list">
                        <li className="burger__list-item">О нас <img src={arrow} alt="arrow" /></li>
                        <li className="burger__list-item">Объекты <img src={arrow} alt="arrow" /></li>
                        <li className="burger__list-item">Бизнес центр</li>
                        <li className="burger__list-item">Фитнес клуб</li>
                        <li className="burger__list-item">LIVE</li>
                        <li className="burger__list-item">3D Тур <img src={arrow} alt="arrow" /></li>
                        <li className="burger__list-item">СМИ</li>
                        <li className="burger__list-item">Контакты</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Burger
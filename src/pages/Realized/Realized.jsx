import React from 'react'
import real from "../../assets/imgs/real.png"
import arrow from "../../assets/icons/arrow-prev.png"
import "./real.scss"

function Realized() {
    return (
        <section className="real">
            <div className="container">
                <div className="real__content">
                    <div className="real__top">
                        <button className="real__top-btn"><img src={arrow} alt="arrow" /> </button>
                        <h2 className="real__title">Реализованные проекты</h2>
                    </div>
                    <div className="real__btns">
                        <button className="real__btn real__btn1">Жилые и коммерческие <span>здания</span></button>
                        <button className="real__btn real__btn2"><span>Мосты</span>, дороги и тоннели</button>
                    </div>
                    <div className="real__cards">
                        <div className="real__card">
                            <img src={real} alt="image" />
                            <h3 className="real__card-title">ЖК “Avangard City”</h3>
                            <button className="real__card-btn">О проекте</button>
                        </div>
                        <div className="real__card">
                            <img src={real} alt="image" />
                            <h3 className="real__card-title">ЖК “Avangard City”</h3>
                            <button className="real__card-btn">О проекте</button>
                        </div>
                        <div className="real__card">
                            <img src={real} alt="image" />
                            <h3 className="real__card-title">ЖК “Avangard City”</h3>
                            <button className="real__card-btn">О проекте</button>
                        </div>
                        <div className="real__card">
                            <img src={real} alt="image" />
                            <h3 className="real__card-title">ЖК “Avangard City”</h3>
                            <button className="real__card-btn">О проекте</button>
                        </div>
                        <div className="real__card">
                            <img src={real} alt="image" />
                            <h3 className="real__card-title">ЖК “Avangard City”</h3>
                            <button className="real__card-btn">О проекте</button>
                        </div>
                        <div className="real__card">
                            <img src={real} alt="image" />
                            <h3 className="real__card-title">ЖК “Avangard City”</h3>
                            <button className="real__card-btn">О проекте</button>
                        </div>
                        <div className="real__card">
                            <img src={real} alt="image" />
                            <h3 className="real__card-title">ЖК “Avangard City”</h3>
                            <button className="real__card-btn">О проекте</button>
                        </div>
                        <div className="real__card">
                            <img src={real} alt="image" />
                            <h3 className="real__card-title">ЖК “Avangard City”</h3>
                            <button className="real__card-btn">О проекте</button>
                        </div>
                        <div className="real__card">
                            <img src={real} alt="image" />
                            <h3 className="real__card-title">ЖК “Avangard City”</h3>
                            <button className="real__card-btn">О проекте</button>
                        </div>
                    </div>
                    <button className="real__btn-bot">Загрузить еще</button>
                </div>
            </div>
        </section>
    )
}

export default Realized
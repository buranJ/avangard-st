import "./footer.scss"
import style from "../../assets/imgs/style.png"
import sport from "../../assets/imgs/sport.png"
import buisness from "../../assets/imgs/business.png"

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__left">
                        <div className="footer__left-mb">
                            <div className="footer__left-content">
                                <img src={style} alt="style" />
                                <p className="footer__left-text">Строительная компания
                                    “Авангард Стиль”</p>
                            </div>
                            <div className="footer__left-content">
                                <img src={sport} alt="style" />
                                <p className="footer__left-text">Строительная компания
                                    “Авангард Стиль”</p>
                            </div>
                            <div className="footer__left-content">
                                <img src={buisness} alt="style" />
                                <p className="footer__left-text">Строительная компания
                                    “Авангард Стиль”</p>
                            </div>
                        </div>
                        <div className="footer__left-mb2">
                            <ul className="footer__right-list-mb">
                                <li className="footer__right-item-title">Меню</li>
                                <li className="footer__right-item">О нас</li>
                                <li className="footer__right-item">Продажа</li>
                                <li className="footer__right-item">Бизнес центр</li>
                                <li className="footer__right-item">Фитнес клуб</li>
                                <li className="footer__right-item">Live</li>
                            </ul>
                            <ul className="footer__right-list-mb">
                                <li className="footer__right-item-title">Полезное</li>
                                <li className="footer__right-item">Вакансии</li>
                                <li className="footer__right-item">Закупки</li>
                                <li className="footer__right-item">СМИ о нас</li>
                                <li className="footer__right-item">Контакты</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__right">
                        <div className="footer__right-top">
                            <ul className="footer__right-list-dp">
                                <li className="footer__right-item-title">Меню</li>
                                <li className="footer__right-item">О нас</li>
                                <li className="footer__right-item">Продажа</li>
                                <li className="footer__right-item">Бизнес центр</li>
                                <li className="footer__right-item">Фитнес клуб</li>
                                <li className="footer__right-item">Live</li>
                            </ul>
                            <ul className="footer__right-list-dp">
                                <li className="footer__right-item-title">Полезное</li>
                                <li className="footer__right-item">Вакансии</li>
                                <li className="footer__right-item">Закупки</li>
                                <li className="footer__right-item">СМИ о нас</li>
                                <li className="footer__right-item">Контакты</li>
                            </ul>
                            <ul className="footer__right-list">
                                <li className="footer__right-item-title">Адрес</li>
                                <li className="footer__right-item">Отдел продаж “Елисейские поля”:
                                    Токомбаева 15/2</li>
                                <li className="footer__right-item">Отдел продаж ГМ “Глобус”:
                                    Токомбаева 53/1</li>
                                <li className="footer__right-item">БЦ “Авангард”: Токтогула 125/1</li>
                            </ul>
                        </div>
                        <form action="" className="footer__right-form">
                            <input className="footer__right-input" type="email" name="" id="" placeholder="email" />
                            <button className="footer__right-btn">Подписаться на рассылку</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
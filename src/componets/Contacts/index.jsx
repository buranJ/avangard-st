import "./contacts.scss"

function Contacts() {
    return (
        <section className="contacts">
            <div className="container">
                <div className="contacts__content">
                    <form action="" className="contacts__form">
                        <h2 className="contacts__form-title">Получить Консультацию</h2>
                        <select name="" id="" className="contacts__form-input">
                            <option value="" className="contacts__form-option">Тема</option>
                            <option value="" className="contacts__form-option">Покупка недвижимости</option>
                            <option value="" className="contacts__form-option">Сотрудничество</option>
                            <option value="" className="contacts__form-option">Предложения</option>
                        </select>
                        <input className="contacts__form-input" type="text" placeholder="Ваше имя"  />
                        <input className="contacts__form-input" type="number" name="" id=""  />
                        <button className="contacts__form-btn">Отправить</button>
                    </form>
                    <div className="contacts__right">
                        <h2 className="contacts__right-title">Контакты</h2>
                        <a className="contacts__right-link" href="tel:+996 312 98 89 58">+996 312 98 89 58</a>
                        <a className="contacts__right-link" href="tel:+996 223 44 74 65">+996 223 44 74 65</a>
                        <a className="contacts__right-link" href="mailto:sales@avangardstyle.kg">sales@avangardstyle.kg</a>
                        <a className="contacts__right-link" href="mailto:info@avangardstyle.kg">info@avangardstyle.kg</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts
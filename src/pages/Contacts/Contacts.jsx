import "./contacts.scss"
import media from "../../assets/icons/sm.png"

function Contacts() {
    return (
        <section className="contacts">
            <div className="container">
                <div className="contacts__content">
                    <div className="contacts__top">
                        <div className="contacts__top-top">
                            <h2 className="contacts__top-title">Контакты</h2>
                            <p className="contacts__top-text">Позвоните или напишите нам, если у Вас есть вопросы или Вы хотите получить консультацию по покупке
                                недвижимости. Мы всегда будем рады ответить на все Ваши вопросы. Ниже перечислены все контакты, номера и
                                адреса строительной компании «Авангард Стиль»</p>
                        </div>
                        <div className="contacts__top-bot">
                            <h3 className="contacts__top-subtitle">Наши адреса</h3>
                            <p className="contacts__top-info"><span>Головной офис:</span>
                                ул. Токтогула 125/1, Бизнес Центр «Avangard», Tower A, 2-этаж</p>
                            <p className="contacts__top-info"><span>Офис продаж:</span>
                                1-этаж</p>
                            <p className="contacts__top-info"><span>Офис продаж «Globus»:</span>
                                ул. Токомбаева 53/1, гипермаркет «Globus»</p>
                            <p className="contacts__top-info"><span>Офис продаж в ЖК "Елисейские Поля":</span>
                                ул. Куттубаева 19</p>
                            <p className="contacts__top-info"><span>Юридический адрес:</span>
                                ул. Токтогула 125/1</p>
                        </div>
                    </div>
                    <div className="contacts__middle">
                        <div className="contacts__middle-top">
                            <div className="contacts__middle-left">
                                <div className="contacts__middle-info">
                                    <h3 className="contacts__middle-title">Контакты офисов продаж:</h3>
                                    <a href="tel:+996 312 98 89 58" className="contacts__middle-link">+996 312 98 89 58</a>
                                    <a href="tel:+996 223 44 74 65" className="contacts__middle-link">+996 223 44 74 65</a>
                                    <a href="mailto:sales@avangardstyle.kg" className="contacts__middle-link">sales@avangardstyle.kg</a>
                                    <a href="mailto:info@avangardstyle.kg" className="contacts__middle-link">info@avangardstyle.kg</a>
                                </div>
                                <div className="contacts__middle-info">
                                    <h3 className="contacts__middle-title">Центральный офис продаж БЦ
                                        “Авангард”:</h3>
                                    <p className="contacts__middle-link">Пн – Пт: с 8:30 до 18:00</p>
                                    <p className="contacts__middle-link">Суббота: с 9:00 до 13:00</p>
                                    <p className="contacts__middle-link">Воскресенье: выходной</p>
                                </div>
                            </div>

                            <form action="" className="contacts__middle-form">
                                <h3 className="contacts__middle-formtitle">Получить Консультацию</h3>
                                <input type="text" className="contacts__middle-input" placeholder="Ваше имя" />
                                <input type="email" className="contacts__middle-input" id="" placeholder="Ваше email" />
                                <input type="text" className="contacts__middle-input" placeholder="Комментарий" />
                                <input type="tel" className="contacts__middle-input" id="" placeholder="+996" />

                                <button className="contacts__middle-btn">Отправить</button>
                            </form>
                        </div>
                        <div className="contacts__middle-bot">
                            <div className="contacts__middle-top contacts__middle-top-ad">
                                <div className="contacts__middle-info">
                                    <h3 className="contacts__middle-title">Офис продаж «Globus»:</h3>
                                    <p className="contacts__middle-link">Пн – Пт: с 9:30 до 19:00</p>
                                    <p className="contacts__middle-link">Суббота: с 10:30 до 16:00</p>
                                    <p className="contacts__middle-link">Воскресенье: выходной</p>
                                </div>
                                <div className="contacts__middle-info">
                                    <h3 className="contacts__middle-title">Офис продаж «Елисейские Поля»:</h3>
                                    <p className="contacts__middle-link">Пн – Пт: с 9:00 до 18:00</p>
                                    <p className="contacts__middle-link">Суббота: с 10:30 до 16:00</p>
                                    <p className="contacts__middle-link">Воскресенье: выходной</p>
                                </div>
                            </div>
                            <div className="contacts__middle-media">
                                <a href="" className="contacts__middle-medialink"><img src={media} alt="media" />
                                </a>
                                <a href="" className="contacts__middle-medialink"><img src={media} alt="media" />
                                </a>
                                <a href="" className="contacts__middle-medialink"><img src={media} alt="media" />
                                </a>
                                <a href="" className="contacts__middle-medialink"><img src={media} alt="media" />
                                </a>
                                <a href="" className="contacts__middle-medialink"><img src={media} alt="media" />
                                </a>
                                <a href="" className="contacts__middle-medialink"><img src={media} alt="media" />
                                </a>
                                <a href="" className="contacts__middle-medialink"><img src={media} alt="media" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="contacts__bottom">
                        <div className="contacts__middle-info">
                            <h3 className="contacts__middle-title">Наши реквизиты:</h3>
                            <p className="contacts__middle-link">ОсОО «Строительная компания «Авангард стиль»</p>
                            <p className="contacts__middle-link"><span>ИНН:</span>00412199810063</p>
                            <p className="contacts__middle-link">999 УГКНС ККН</p>
                            <p className="contacts__middle-link"><span>ОКПО:</span>22116708</p>
                        </div>
                        <div className="contacts__bottom-info">
                            <h3 className="contacts__bottom-title">Реквизиты для входящих денежных переводов в кыргызский сомах</h3>
                            <div className="contacts__bottom-sides">
                                <div className="contacts__bottom-side">
                                    <p className="contacts__middle-link"><span>Получатель:</span></p>
                                    <p className="contacts__middle-link"><span>Счет получателя:</span></p>
                                    <p className="contacts__middle-link"><span >БИК Банка получателя:</span></p>
                                    <p className="contacts__middle-link"><span>Банк получателя:</span></p>
                                </div>
                                <div className="contacts__bottom-side">
                                    <p className="contacts__middle-link">Строительная компания Авангард Стиль ОСОО</p>
                                    <p className="contacts__middle-link">1180000031018685</p>
                                    <p className="contacts__middle-link">118006</p>
                                    <p className="contacts__middle-link">Филиал «ДКИБ – М.Горький» ЗАО «Демир Кыргыз Интернэшнл Банк»</p>
                                </div>
                            </div>
                        </div>
                        <div className="contacts__bottom-info">
                            <h3 className="contacts__bottom-title">Реквизиты для входящих денежных переводов в USD</h3>
                            <div className="contacts__bottom-sides">
                                <div className="contacts__bottom-side">
                                    <p className="contacts__middle-link"><span >Beneficiary / Получатель:</span></p>
                                    <p className="contacts__middle-link"><span >Beneficiary account / Счет получателя:</span></p>
                                    <p className="contacts__middle-link"><span >Beneficiary bank / Банк получателя:</span></p>
                                    <p className="contacts__middle-link contacts__bottom-text"><span >Beneficiary bank address / Адрес банка получателя:</span></p>
                                    <p className="contacts__middle-link contacts__bottom-text"><span >Beneficiary bank swift (BIC) / Swift банка получателя:</span></p>
                                    <p className="contacts__middle-link contacts__bottom-text"><span >Correspondent bank for USD transfers / Банк корреспондент для переводов в долларах</span></p>
                                </div>
                                <div className="contacts__bottom-side ">
                                    <p className="contacts__middle-link contacts__bottom-mt">SC AVANGARD STIL LLC</p>
                                    <p className="contacts__middle-link contacts__bottom-mt">1180000031018584 USD</p>
                                    <p className="contacts__middle-link contacts__bottom-mt">Demir Kyrgyz International Bank (Bishkek, Kyrgyzstan)</p>
                                    <p className="contacts__middle-link contacts__bottom-mt1">245, Chui Ave., Bishkek, Kyrgyzstan / Кыргызстан, г. Бишкек, пр. Чуй 245</p>
                                    <p className="contacts__middle-link contacts__bottom-mt">DEMIKG22</p>
                                    <p className="contacts__middle-link contacts__bottom-text1"><span>KOOKMIN BANK</span>(Seoul, South Korea)<br /> SWIFT BIC: CZNBKRSE Address: Kookmin Bank H.Q, Sewoo Building, 115 Yeouigongwon-ro, Yeongdeungpo-gu, Seoul (Zip : 07241)</p>
                                     <p className="contacts__middle-link">Correspondent account of DemirBank: 8D2-8-USD-01-8</p>
                                     <p className="contacts__middle-link"><span>INTERMEDIARY BANKS:</span></p>
                                     <p className="contacts__middle-link contacts__bottom-text2">1)<span>JPMORGAN CHASE BANK</span><br />SWIFT BIC: CHASUS33 Account#:001 1 544111</p>
                                     <p className="contacts__middle-link contacts__bottom-text2">2)<span>CITIBANK</span><br />SWIFT BIC: CITIUS33 Account#:36049172</p>
                                     <p className="contacts__middle-link contacts__bottom-text2">3)<span>BANK OF AMERICA YORK</span>SWIFT BIC: BOFAUS3N Account#:6550694497</p>
                                     <p className="contacts__middle-link contacts__bottom-text2">4)<span>THE BANK OF NEW MELLON</span>SWIFT BIC: IRVTUS3N Account#:8033256958</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contacts
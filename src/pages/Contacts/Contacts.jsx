import "./contacts.scss"
import media from "../../assets/icons/sm.png"
import { useGetContactQuery } from "../../api/contact/contact.api";

function Contacts() {
    const { data, isLoading, error } = useGetContactQuery();
    console.log(data);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error...</div>;
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
                            {data.address.map((item) => (
                                <a href={item.link} target="_blank" className="contacts__top-info">
                                   {item.title}
                                </a>
                            ))}

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
                                    <h3 className="contacts__middle-title">{data.sales_offices[0].name}</h3>
                                    <p className="contacts__middle-link"> <div dangerouslySetInnerHTML={{ __html: data.sales_offices[0].description }} /></p>
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
                                    <h3 className="contacts__middle-title">{data.sales_offices[1].name}</h3>
                                    <p className="contacts__middle-link"> <div dangerouslySetInnerHTML={{ __html: data.sales_offices[1].description }} /></p>
                                </div>
                                <div className="contacts__middle-info">
                                    <h3 className="contacts__middle-title">{data.sales_offices[2].name}</h3>
                                    <p className="contacts__middle-link"> <div dangerouslySetInnerHTML={{ __html: data.sales_offices[2].description }} /></p>
                                </div>
                            </div>
                            <div className="contacts__middle-media">
                                {data.socials.map((item)=>( <a href={item.link} target="_blank" className="contacts__middle-medialink"><img src={item.svg} alt="media" />
                                </a>))}
                            </div>
                        </div>
                    </div>
                    <div className="contacts__bottom">
                        <div className="contacts__middle-info">
                            <h3 className="contacts__middle-title">Наши реквизиты:</h3>
                            <p className="contacts__middle-link">ОсОО «Строительная компания «Авангард стиль»</p>
                            <p className="contacts__middle-link contacts__middle-link-br"><span>ИНН:</span>{data.inn}</p>
                            <p className="contacts__middle-link"><span>ОКПО:</span>{data.okpo}</p>
                        </div>
                        <div className="contacts__bottom-info">
                            <h3 className="contacts__bottom-title">Реквизиты для входящих денежных переводов в кыргызский сомах</h3>
                            <div className="contacts__bottom-sides ">
                                <div className="contacts__bottom-side">
                                    <p className="contacts__middle-link"><span>{ data.som_requisites[0].title}</span></p>
                                    <p className="contacts__middle-link"><span>{ data.som_requisites[1].title}</span></p>
                                    <p className="contacts__middle-link"><span >{ data.som_requisites[2].title}</span></p>
                                    <p className="contacts__middle-link"><span>{ data.som_requisites[3].title}</span></p>
                                </div>
                                <div className="contacts__bottom-side">
                                    <p className="contacts__middle-link">{data.title}</p>
                                    <p className="contacts__middle-link"><div dangerouslySetInnerHTML={{ __html: data.som_requisites[0].description}} /></p>
                                    <p className="contacts__middle-link"><div dangerouslySetInnerHTML={{ __html: data.som_requisites[1].description}} /></p>
                                    <p className="contacts__middle-link"><div dangerouslySetInnerHTML={{ __html: data.som_requisites[2].description}} /></p>
                                </div>
                            </div>
                        </div>
                        <div className="contacts__bottom-info">
                            <h3 className="contacts__bottom-title">Реквизиты для входящих денежных переводов в USD</h3>
                            <div className="contacts__bottom-sides">
                                <div className="contacts__bottom-side">
                                    <p className="contacts__middle-link"><span >{ data.dollar_requisites[0].title}</span></p>
                                    <p className="contacts__middle-link"><span >{ data.dollar_requisites[1].title}</span></p>
                                    <p className="contacts__middle-link"><span >{ data.dollar_requisites[2].title}</span></p>
                                    <p className="contacts__middle-link contacts__bottom-text"><span >{ data.dollar_requisites[3].title}</span></p>
                                    <p className="contacts__middle-link contacts__bottom-text"><span >{ data.dollar_requisites[4].title}</span></p>
                                    <p className="contacts__middle-link contacts__bottom-text"><span >{ data.dollar_requisites[5].title}</span></p>
                                </div>
                                <div className="contacts__bottom-side contacts__bottom-side-mb">
                                    <p className="contacts__middle-link "><div dangerouslySetInnerHTML={{ __html: data.dollar_requisites[0].description}} /></p>
                                    <p className="contacts__middle-link "><div dangerouslySetInnerHTML={{ __html: data.dollar_requisites[1].description}} /></p>
                                    <p className="contacts__middle-link "><div dangerouslySetInnerHTML={{ __html: data.dollar_requisites[2].description}} /></p>
                                    <p className="contacts__middle-link contacts__bottom-mt1"><div dangerouslySetInnerHTML={{ __html: data.dollar_requisites[3].description}}/></p>
                                    <p className="contacts__middle-link contacts__bottom-mt"><div dangerouslySetInnerHTML={{ __html: data.dollar_requisites[4].description}}/></p>
                                    <p className="contacts__middle-link contacts__bottom-text1"><div dangerouslySetInnerHTML={{ __html: data.dollar_requisites[5].description}}/></p>
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
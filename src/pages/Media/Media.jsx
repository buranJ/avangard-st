import "./media.scss"
import media from "../../assets/imgs/media.png"

function Media() {
    return (
        <section className="media">
            <div className="container">
                <div className="media__content">
                    <h2 className="media__title">СМИ об “Авангард Стиль”</h2>
                    <div className="media__cards">
                        <div className="media__card">
                            <img src={media} alt="image" />
                            <div className="media__card-info">
                                <p className="media__card-text">“Елисейские Поля” - это не просто дом. Это ваш
                                    новый образ жизни</p>
                                    <h3 className="media__card-date">29.11.2021</h3>
                            </div>
                        </div>
                        <div className="media__card">
                            <img src={media} alt="image" />
                            <div className="media__card-info">
                                <p className="media__card-text">“Елисейские Поля” - это не просто дом. Это ваш
                                    новый образ жизни</p>
                                    <h3 className="media__card-date">29.11.2021</h3>
                            </div>
                        </div>
                        <div className="media__card">
                            <img src={media} alt="image" />
                            <div className="media__card-info">
                                <p className="media__card-text">“Елисейские Поля” - это не просто дом. Это ваш
                                    новый образ жизни</p>
                                    <h3 className="media__card-date">29.11.2021</h3>
                            </div>
                        </div>
                        <div className="media__card">
                            <img src={media} alt="image" />
                            <div className="media__card-info">
                                <p className="media__card-text">“Елисейские Поля” - это не просто дом. Это ваш
                                    новый образ жизни</p>
                                    <h3 className="media__card-date">29.11.2021</h3>
                            </div>
                        </div>
                        <div className="media__card">
                            <img src={media} alt="image" />
                            <div className="media__card-info">
                                <p className="media__card-text">“Елисейские Поля” - это не просто дом. Это ваш
                                    новый образ жизни</p>
                                    <h3 className="media__card-date">29.11.2021</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Media
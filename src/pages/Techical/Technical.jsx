import tech from "../../assets/imgs/tech.png"
import "./technical.scss"

function Technical() {
    return (
        <section className="tech">
            <div className="container">
                <div className="tech__content">
                    <h2 className="tech__title">Техническая база</h2>
                    <div className="tech__top">
                    <p className="tech__text">«Авангард Стиль» по праву гордится своей технической базой, благодаря которой строительство объектов не
                        прекращается и объекты сдаются вовремя. Только у «Авангард Стиль» есть собственный автопарк:</p>
                    <ul>
                        <li> Более 105 единиц техники</li>
                        <li>Собственный парк грузового авто общей грузоподъемностью до 100 000 тонн</li>
                        <li> 11 высотных кранов</li>
                        <li> Собственный парк спецтехники: бетономешалки, экскаваторы, краны, катки, самосвалы и другие</li>
                    </ul>
                    </div>
                    <iframe width="98%" height="632" src="https://www.youtube.com/embed/p4uBc15CF4g?si=4_fxigM5m76ABmNq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="tech__video"></iframe>
                    <div className="tech__video-text">Видео 2019 года</div>
                    <div className="tech__img">
                        <div className="tech__img-left">
                            <img src={tech} alt="image" className="tech__img-1" />
                            <img  src={tech} alt="image" className="tech__img-2" />
                        </div>
                        <div className="tech__img-right">
                            <img  src={tech} alt="image" className="tech__img-3" />
                            <div className="tech__img-bot">
                                <img  src={tech} alt="image"  className="tech__img-4"/>
                                <img  src={tech} alt="image" className="tech__img-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Technical
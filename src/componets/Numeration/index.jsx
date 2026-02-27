import "./numeration.scss"
import image from "../../assets/imgs/numeration.png"
function Numeration() {
    return (
        <section className="numeration">
            <div className="container">
                <div className="numeration__content">
                    <h2 className="numeration__title">Нумерация и Расположение</h2>
                    <div className="numeration__img">
                        <img src={image} alt="image" />
                        <button className="numeration__btn">Скачать генплан</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Numeration
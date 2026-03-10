import "./numeration.scss"
function Numeration({numeration}) {
    return (
        <section className="numeration">
            <div className="container">
                <div className="numeration__content">
                    <h2 className="numeration__title">Нумерация и Расположение</h2>
                    <div className="numeration__img">
                        <img src={numeration.image} alt="image" />
                        <a href={numeration.gen_plan} className="numeration__btn">Скачать генплан</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Numeration
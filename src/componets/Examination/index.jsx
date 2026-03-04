import "./examination.scss"
import Lab from "../../assets/imgs/Lab.png"

function Examination() {
  return (
    <section className="examination">
        <div className="container">
            <div className="examination__content">
                <h2 className="examination__title">Лабораторная экспертиза</h2>
                <p className="examination__text">На всех этапах строительства проводится лабораторная экспертиза всех используемых строительных материалов на соответствие качеству. Анализ проходят материалы:</p>
                <img src={Lab} alt="" className="examination__img" />
            </div>
        </div>
    </section>
  )
}

export default Examination
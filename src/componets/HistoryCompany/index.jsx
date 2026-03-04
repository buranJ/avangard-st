import './history.scss'
import Medal from "../../assets/imgs/medal.png"

function History() {
  return (
    <section className='history'>
        <div className="container">
            <div className="history__content">
                <h2 className="history__title">История компании</h2>
                    <h3 className="history__subtitle">Основана в 1998 году, одна из старейших компаний Кыргызской Республики</h3>
                <p className="history__info">За многолетнюю успешную работу «Авангард Стиль» удостоен множества заслуженных наград:</p>
                <div className="history__wrap">
                <img src={Medal} alt="" className="history__img" />
                <ul className="history__list">
                    <li>«Заслуженный строитель Кыргызской Республики» 2000 год</li>
                    <li>Диплом почетного члена союза архитекторов Кыргызской Республики</li>
                    <li>Награда “Золотой Ягуар” за безупречную репутацию в бизнесе</li>
                    <li>Почетная грамота «Лучший предприниматель года 2007»</li>
                    <li>Почетный знак за признание особых услуг перед государством</li>
                    <li>Выбор года «Строительная компания № 1 в Кыргызской Республике» 2012 и 2016 года</li>
                </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default History
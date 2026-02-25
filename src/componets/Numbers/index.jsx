import "./numbers.scss"
import Park  from "../../assets/imgs/nambers-image.png"
// import Park2  from "../../assets/imgs/nambers2.png"
function Numbers() {
  return (
    <section className="numbers">
        <h2 className="numbers__title">“Panorama Park” в цифрах</h2>
        <div className="numbers__wrap">
        <div className="numbers__content">
        <div className="numbers__left">
            <div className="numbers__btn-info">
                <p className="numbers__btn-num"> 2,5 ГА </p>
                <p className="numbers__btn-text">Площадь участка</p>
            </div>
            <div className="numbers__btn-info">
                <p className="numbers__btn-num"> 2,5 ГА </p>
                <p className="numbers__btn-text">Площадь участка</p>
            </div>
            <div className="numbers__btn-info">
                <p className="numbers__btn-num"> 2,5 ГА </p>
                <p className="numbers__btn-text">Площадь участка</p>
            </div>
            <div className="numbers__btn-info">
                <p className="numbers__btn-num"> 2,5 ГА </p>
                <p className="numbers__btn-text">Площадь участка</p>
            </div>
        </div>
        <img className="numbers__img" src={Park} alt="" />
        </div>

        <div className="numbers__right">
            <div className="numbers__btn-info">
                <p className="numbers__btn-num"> 2,5 ГА </p>
                <p className="numbers__btn-text">Площадь участка</p>
            </div>
            <div className="numbers__btn-info">
                <p className="numbers__btn-num"> 2,5 ГА </p>
                <p className="numbers__btn-text">Площадь участка</p>
            </div>
            <div className="numbers__btn-info">
                <p className="numbers__btn-num"> 2,5 ГА </p>
                <p className="numbers__btn-text">Площадь участка</p>
            </div>
            <div className="numbers__btn-info">
                <p className="numbers__btn-num"> 2,5 ГА </p>
                <p className="numbers__btn-text">Площадь участка</p>
            </div>
        </div>
        {/* <img src={Park2} alt="park" className="numbers__mb" /> */}
        </div>
    </section>
  )
}

export default Numbers
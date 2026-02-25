import "./numbers.scss"
import Park  from"../../assets/imgs/nambers-image.png"
function Numbers() {
  return (
    <section className="numbers">
        <h2 className="numbers__title">“Panorama Park” в цифрах</h2>
        <div className="numbers__wrap">
        <div className="numbers__content">
        <div className="numbers__left">
            <div className="numbers__left-info">
                <p className="numbers__left-num"> 2,5 ГА </p>
                <p className="numbers__left-text">Площадь участка</p>
            </div>
            <div className="numbers__left-info">
                <p className="numbers__left-num"> 2,5 ГА </p>
                <p className="numbers__left-text">Площадь участка</p>
            </div>
            <div className="numbers__left-info">
                <p className="numbers__left-num"> 2,5 ГА </p>
                <p className="numbers__left-text">Площадь участка</p>
            </div>
            <div className="numbers__left-info">
                <p className="numbers__left-num"> 2,5 ГА </p>
                <p className="numbers__left-text">Площадь участка</p>
            </div>
        </div>
        <img className="numbers__img" src={Park} alt="" />
        </div>

        <div className="numbers__right">
            <div className="numbers__right-info">
                <p className="numbers__right-num"> 2,5 ГА </p>
                <p className="numbers__right-text">Площадь участка</p>
            </div>
            <div className="numbers__right-info">
                <p className="numbers__right-num"> 2,5 ГА </p>
                <p className="numbers__right-text">Площадь участка</p>
            </div>
            <div className="numbers__right-info">
                <p className="numbers__right-num"> 2,5 ГА </p>
                <p className="numbers__right-text">Площадь участка</p>
            </div>
            <div className="numbers__right-info">
                <p className="numbers__right-num"> 2,5 ГА </p>
                <p className="numbers__right-text">Площадь участка</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Numbers
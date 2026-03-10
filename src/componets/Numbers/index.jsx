import "./numbers.scss"

// import Park2  from "../../assets/imgs/nambers2.png"
function Numbers({number}) {
  return (
    <section className="numbers">
        <h2 className="numbers__title">“Panorama Park” в цифрах</h2>
        <div className="numbers__wrap">
        <div className="numbers__content">
        <div className="numbers__left">
            <div className="numbers__btn-info">
                <p className="numbers__btn-num"> {number.plot_area} ГА</p>
                <p className="numbers__btn-text">Площадь участка</p>
            </div>
            <div className="numbers__btn-info">
                <p className="numbers__btn-num"> {number.parking_spaces}</p>
                <p className="numbers__btn-text">Парковочных мест</p>
            </div>
            <div className="numbers__btn-info">
                <p className="numbers__btn-num"> {number.low_rise_blocks}</p>
                <p className="numbers__btn-text">Малоэтажных блоков</p>
            </div>
            <div className="numbers__btn-info">
                <p className="numbers__btn-num"> {number.construction_area}%</p>
                <p className="numbers__btn-text">Площадь застройки</p>
            </div>
        </div>
        <div className="numbers__wrap2">
        <img className="numbers__img" src={number.first_image} alt="" />
        </div>
        </div>

        <div className="numbers__right">
            <div className="numbers__btn-info">
                <p className="numbers__btn-num"> {number.appartament_quantity}</p>
                <p className="numbers__btn-text">Количество квартир</p>
            </div>
            <div className="numbers__btn-info">
                <p className="numbers__btn-num"> {number.yard_area}</p>
                <p className="numbers__btn-text">Площадь двора</p>
            </div>
            <div className="numbers__btn-info">
                <p className="numbers__btn-num"> {number.green_area}ГА</p>
                <p className="numbers__btn-text">Площадь озеленения</p>
            </div>
            <div className="numbers__btn-info">
                <p className="numbers__btn-num"> {number.childrens_playgrounds}</p>
                <p className="numbers__btn-text">Детских площадок</p>
            </div>
        </div>
        {/* <img src={number.second_image} alt="park" className="numbers__mb" /> */}
        </div>
    </section>
  )
}

export default Numbers
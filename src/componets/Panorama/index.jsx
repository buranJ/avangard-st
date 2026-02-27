import "./panorama.scss"


function Panorama(){
   
    return(
        <section className="panorama">
            <div className="container">
                <div className="panorama__content">
                    <p className="panorama__text">Клубные дома премиум класса</p>
                    <h2 className="panorama__title">Panorama Park</h2>
                    <div className="panorama__btns">
                        <button className="panorama__btn1">Выбрать квартиру</button>
                        <button className="panorama__btn1">Скачать буклет</button>                        
                        <button className="panorama__btn2">LIVE</button>                        
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Panorama
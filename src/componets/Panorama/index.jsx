import "./panorama.scss"


function Panorama({info}){
   const bg={backgroundImage: `url(${info.banner_img})`}
    return(
        <section className="panorama" style={bg}>
            <div className="container">
                <div className="panorama__content">
                    <p className="panorama__text">{info.mini_title}</p>
                    <h2 className="panorama__title">{info.title}</h2>
                    <div className="panorama__btns">
                        <button className="panorama__btn1">Выбрать квартиру</button>
                        <a href={info.buklet} target="_blank" className="panorama__btn1">Скачать буклет</a>                        
                        <button className="panorama__btn2">LIVE</button>                        
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Panorama
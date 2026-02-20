import Panorama from "../../assets/imgs/PanoramaParkDay.png"
import "./objectdetaill.scss"
function ObjectDetaill() {
  return (
    <section className='detail'>
        <div className="container">
                <h2 className='detail__title'>О жилом комплексе</h2>
            <div className="detail__content">
                <div className="detail__left">
                    <p className="detail__info">
                        Представьте идеальное утро в собственном уютном доме среди живописной природы. Вы просыпаетесь и первое, что видите из окна спальни - захватывающие виды на горы, озаренные первыми лучами солнца. <br /><br />
                        Насладившись потрясающим видом, Вы спускаетесь в просторную гостиную. Высокие потолки, светлые стены и панорамное остекление создают ощущение легкости                      и наполняют комнату воздухом и солнцем.
                    </p>
                    <div className="detail__btns">
                        <div className="detail__btn">1 комнатная - от 40м2</div>
                        <div className="detail__btn">3 комнатная - от 80м2</div>
                        <div className="detail__btn">2 комнатная - от 70м2</div>
                        <div className="detail__btn">4 комнатная - от 90м2</div>
                    </div>
                </div>
                <div className="detail__rigth">
                    <img src={Panorama} alt="" className="detail__img" />
                    <div className="detail__blog">
                        <p className="detail__strit">Нуркамал Жетикашкаева 10А</p>
                        <div className="detail__blog-btn">13 блоков</div>
                        <div className="detail__blog-btn">151 квартира</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ObjectDetaill
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./progress.scss"
import image from "../../assets/imgs/progress.png"
import calendar from "../../assets/icons/calendar.svg"
import arrow from "../../assets/icons/strelkawniz.svg"
import x from "../../assets/icons/x.png"

function Progress({ onClose }) {
    return (
        <section className="progress">
            <div className="container">
                <div className="progress__content">
                    <div className="progress__left-wrap">
                        <img src={image} alt="" className="progress__left" />
                        <button onClick={onClose} className="progress__btn-x-mb"><img src={x} alt="x" className="progress__x-mb" /></button>
                    </div>
                    <div className="progress__right">
                        <h2 className="progress__title">Ход строительства</h2>
                        <div className="progress__date">
                            <div className="progress__date-wrap">
                                <div className="progress__date-left">
                                    <img src={calendar} alt="" />
                                    <span id="" className="progress__date-text">Октябрь 2024</span>
                                </div>
                                <div className="progress__date-arrow-wrap">
                                    <img src={arrow} alt="" className='progress__date-arrow' />
                                </div>
                            </div>

                            <select id="" className='progress__date-select'>
                                <option value="Октябрь 2024">Октябрь 2024</option>
                                <option value="Ноябрь 2024">Ноябрь 2024</option>
                                <option value="Декабрь 2024">Декабрь 2024</option>
                            </select>

                        </div>

                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            className="progress__swiper"
                        >
                            <SwiperSlide><img src={image} alt="" className='progress__slide' /></SwiperSlide>
                            <SwiperSlide><img src={image} alt="" className='progress__slide' /></SwiperSlide>
                            <SwiperSlide><img src={image} alt="" className='progress__slide' /></SwiperSlide>
                            <SwiperSlide><img src={image} alt="" className='progress__slide' /></SwiperSlide>
                            <SwiperSlide><img src={image} alt="" className='progress__slide' /></SwiperSlide>
                        </Swiper>

                        <button className="progress__btn">Подробнее</button>
                    </div>
                    <button onClick={onClose} className="progress__btn-x"><img src={x} alt="x" className="progress__x" /></button>
                </div>
            </div>
        </section>
    )
}

export default Progress
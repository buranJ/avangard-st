import './licenses.scss'
import LicensesImg from "../../assets/imgs/licenses.png"


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Licenses() {
  return (
    <section className='licenses'>
        <div className="container">
            <div className="licenses__content">
                <h2 className="licenses__title">Лицензии</h2>
                <p className="licenses__info">Компания оказывает услуги на основании лицензий:</p>
                    <div className="licenses__slider">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            slidesPerView={3}
                            spaceBetween={30}
                            navigation
                            >
                            <SwiperSlide>
                                <div className="licenses__card">
                                    <img src={LicensesImg} alt="licenses" />
                                    <p>
                                        КРЦ-2 №02000 ОТ 05.02.2008 Г                                    
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="licenses__card">
                                    <img src={LicensesImg} alt="licenses" />
                                    <p>
                                        КРЦ-2 №02000 ОТ 05.02.2008 Г                                    
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="licenses__card">
                                    <img src={LicensesImg} alt="licenses" />
                                    <p>
                                        КРЦ-2 №02000 ОТ 05.02.2008 Г                                    
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="licenses__card">
                                    <img src={LicensesImg} alt="licenses" />
                                    <p>
                                        КРЦ-2 №02000 ОТ 05.02.2008 Г                                    
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="licenses__card">
                                    <img src={LicensesImg} alt="licenses" />
                                    <p>
                                        КРЦ-2 №02000 ОТ 05.02.2008 Г                                    
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="licenses__card">
                                    <img src={LicensesImg} alt="licenses" />
                                    <p>
                                        КРЦ-2 №02000 ОТ 05.02.2008 Г                                    
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="licenses__card">
                                    <img src={LicensesImg} alt="licenses" />
                                    <p>
                                        КРЦ-2 №02000 ОТ 05.02.2008 Г                                    
                                    </p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Licenses
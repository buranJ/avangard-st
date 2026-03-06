import "./certificates.scss"
import CertificatesImg from "../../assets/imgs/certificates.png"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";                                  

function Certificates() {
  return (
    <section className="certificates">
        <div className="container">
            <div className="certificates__content">       
                <h2 className="certificates__title">Сертификаты</h2>
                <p className="certificates__info">«Авангард Стиль» это команда сертифицированных профессионалов в области строительства:</p>
                <ul className="certificates__list">
                    <li>Специалисты строительства инжиниринговых сетей и систем;</li>
                    <li>Специалисты по инжиниринговым услугам;</li>
                    <li>Специалисты монтажных работ;</li>
                    <li>Специалисты по строительству дорог;</li>
                    <li>Специалисты строительства;</li>
                    <li>Специалисты строительства инжиниринговых сетей и систем; электроснабжения;</li>
                </ul> 
                    <div className="certificates__slider">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            slidesPerView={3}
                            spaceBetween={30}
                            navigation
                            >
                        <SwiperSlide>
                                <div className="certificates__card">
                                    <img src={CertificatesImg} alt="Сертификат" />
                                    <p>
                                        Почетная грамота заместителю генерального директора Абыкееву К.К.
                                    </p>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div className="certificates__card">
                                    <img src={CertificatesImg} alt="Сертификат" />
                                    <p>
                                        Почетная грамота заместителю генерального директора Абыкееву К.К.
                                    </p>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div className="certificates__card">
                                    <img src={CertificatesImg} alt="Сертификат" />
                                    <p>
                                        Почетная грамота заместителю генерального директора Абыкееву К.К.
                                    </p>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div className="certificates__card">
                                    <img src={CertificatesImg} alt="Сертификат" />
                                    <p>
                                        Почетная грамота заместителю генерального директора Абыкееву К.К.
                                    </p>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div className="certificates__card">
                                    <img src={CertificatesImg} alt="Сертификат" />
                                    <p>
                                        Почетная грамота заместителю генерального директора Абыкееву К.К.
                                    </p>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div className="certificates__card">
                                    <img src={CertificatesImg} alt="Сертификат" />
                                    <p>
                                        Почетная грамота заместителю генерального директора Абыкееву К.К.
                                    </p>
                                </div>
                        </SwiperSlide>
                        </Swiper>
                    </div> 
            </div>
        </div>
    </section>
  );
}

export default Certificates
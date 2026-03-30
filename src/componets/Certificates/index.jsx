import "./certificates.scss"
import CertificatesImg from "../../assets/imgs/certificates.png"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";                                  

function Certificates({certificates}) {
    console.log(certificates);
    
  return (
    <section className="certificates">
        <div className="container">
            <div className="certificates__content">       
                <h2 className="certificates__title">{certificates.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: certificates.description }} className="certificates__info"></p>
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
                                {
                                    certificates.sertificats.map((item) => (
                                        <SwiperSlide>
                                            <div className="certificates__card">
                                                <img src={item.image} alt="Сертификат" />
                                                <p>{item.title}</p>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                        </Swiper>
                    </div> 
            </div>
        </div>
    </section>
  );
}

export default Certificates
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./realCard.scss";
import arrow from "../../assets/icons/arrow-prev.png";
import image from "../../assets/imgs/news-card.png";

function RealizedCard() {
  return (
    <section className="realized">
      <div className="container">
        <div className="realized__content">
          <div className="realized__top">
            <button className="realized__top-btn">
              <img src={arrow} alt="arrow" />
            </button>
            <h2 className="realized__top-title">
              Жилой комплекс "Avangard City"
            </h2>
          </div>
           </div>

          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={image} alt="image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image} alt="image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image} alt="image" />
            </SwiperSlide>
          </Swiper>
          <div className="realized__content">
            <p className="realized__text">
              Добро пожаловать в «Avangard CITY»! Это новый проект бизнес-класса
              с исключительно привлекательным местоположением в любимой столице:
              неподалеку от Южных Ворот.«Avangard CITY» – городок с уникальной и
              выразительной архитектурой. Комплекс представляет собой ансамбль
              из 10 домов единого архитектурного стиля этажностью от 10 до 14
              уровней. При взгляде сверху дома образуют букву «А», что
              символично перекликается с названием комплекса.Широкий выбор
              квартир позволит Вам подобрать жилье под самые разные запросы:
              небольшие студии, комфортабельные и функциональные 1, 2, 3 и 4‑х
              комнатные квартиры. Для тех, кто хочет приобрести просторные
              апартаменты, есть возможность увеличить площадь на стадии
              строительства. Продуманные планировки позволяют использовать
              площадь максимально эффективно и создать идеальное пространство
              для жизни.
            </p>
          </div>
      </div>
    </section>
  );
}

export default RealizedCard;

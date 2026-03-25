import React from "react";
import near from "../../assets/imgs/near.png";
import "./near.scss";
import line from '../../assets/imgs/line.png'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";


function Near({ near }) {
  return (
    <section className="near">
      <div className="container">
        <div className="near__content">
          <h2 className="near__title">Что интересного рядом</h2>
          <div className="near__mb">
            {near.interest_nearby.map((item) =>(
              <div className="near__card">
                <h3 className="near__card-title">{item.building.title}</h3>
                <div className="near__card-wrap">
                  <img src={item.building.image} alt="" className="near__card-img" />
                  <div className="near__card-time">{item.time} мин</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        className="near__swiper"
      >
        {near.interest_nearby.map((item) => (
          <SwiperSlide>
            <div className="near__card-line">
              <img src={line} alt="" />
              <div className="near__card">
                <h3 className="near__card-title">{item.building.title}</h3>
                <div className="near__card-wrap">
                  <img src={item.building.image} alt="" className="near__card-img" />
                  <div className="near__card-time">{item.time} мин</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}




      </Swiper>


    </section>
  );
}

export default Near;
